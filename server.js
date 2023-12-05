require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 2000;

const user = process.env.USER_ID;
const password = process.env.USER_PASS;

const mongoUrl = `mongodb+srv://${user}:${password}@demian.zfaifux.mongodb.net/calculator_user?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    user: String,
    password: String,
    calculator: [{
        current_glucose_level: Number,
        HC_ratio: Number,
        HC_to_consume: Number,
        low_range: Number,
        high_range: Number,
        correction_index: Number,
        units: Number,
        date: Date,
    }],
});
userSchema.set("strictQuery", true);

const User = mongoose.model("User", userSchema);

var curr_date = new Date();

let firstUsers = [{
    user: "1234@gmail.com",
    password: "1234",
    calculator: [{
        current_glucose_level: 0,
        HC_ratio: 0,
        HC_to_consume: 0,
        low_range: 0,
        high_range: 0,
        correction_index: 0,
        units: 0,
        date: curr_date,
    }],
}];

let logged_user = {
    user: "",
    password: "",
    calculator: [{
        current_glucose_level: 0,
        HC_ratio: 0,
        HC_to_consume: 0,
        low_range: 0,
        high_range: 0,
        correction_index: 0,
        date: curr_date,
    }],
};

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.use("/", async (req, res, next) => {
    var userCount = await User.countDocuments({});

    if (userCount === 0) {
        await User.insertMany(firstUsers).then(() => {
            console.log("Success!");
        }
        ).catch((error) => {
            console.error(error);
        });
    }
    next();
});

app.get("/", (req, res) => {
    res.send('<h1> Not a readable API </h1>');
});

app.post("/login", async(req, res, next) => {
    var match = await User.findOne({user: {$eq: req.body.user}});
    var user = req.body.user;
    var password = req.body.password;
    var response = {user: user, password: password, access: "Denied", authorization: -1};

    if (user === match.user && password === match.password) {
        response.access = "Granted";
        response.authorization = 1;
        logged_user = match;
    }
    res.json(response);
});

app.post("/register", async(req, res, next) => {
    var match = await User.findOne({user: {$eq: req.body.user}});
    var new_date = new Date();

    var user = req.body.user;
    var password = req.body.password;
    var response = {user: user, password: password, access: "Denied", user_coincidence: 1};

    if (!match) {
        response.access = "Granted";
        response.user_coincidence = -1;
        logged_user = {
            user: user,
            password: password,
            calculator: [{
                current_glucose_level: 0,
                HC_ratio: 0,
                HC_to_consume: 0,
                low_range: 0,
                high_range: 0,
                correction_index: 0,
                date: new_date,
            }]
        };

        await User.insertMany(logged_user).then(() => {
            console.log("New user!");
        }
        ).catch((error) => {
            console.error(error);
        });
    }
    res.json(response);
});

app.post("/upload", async(req, res, next) => {
    var new_date = new Date();
    var current_glucose_level = req.body.current_glucose_level;
    var HC_ratio = req.body.HC_ratio;
    var HC_to_consume = req.body.HC_to_consume;
    var min_glucose_range = req.body.min_glucose_range;
    var max_glucose_range = req.body.max_glucose_range;
    var correction_index = req.body.correction_index;
    var units = req.body.units;
    
    logged_user.calculator.push({
        current_glucose_level, 
        HC_ratio, HC_to_consume, 
        low_range: min_glucose_range, 
        high_range: max_glucose_range, 
        correction_index,
        units,
        date: new_date
    });

    await User.updateOne({user: {$eq: logged_user.user}}, {$set: {calculator: logged_user.calculator}});

    res.send("/calculator");
});

app.get("/user", async(req, res, next) => {
    var match = await User.findOne({user: {$eq: logged_user.user}});
    res.json(match);
});

app.listen(PORT, () => {
    console.log("Listening to port " + PORT);
});