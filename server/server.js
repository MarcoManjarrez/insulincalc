require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const user = process.env.USER_ID;
const password = process.env.USER_PASS;

const mongoUrl = `mongodb+srv://${user}:${password}@demian.zfaifux.mongodb.net/calculator_user?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    user: String,
    password: String,
    range: {
        low: Number,
        high: Number,
    },
    calculator: [{
        current_glucose_level: Number,
        HC_ratio: Number,
        HC_to_consume: Number,
        date: Date,
    }],
});
userSchema.set("strictQuery", true);

const User = mongoose.model("User", userSchema);

var curr_date = new Date();

let firstUsers = [{
    user: "1234@gmail.com",
    password: "1234",
    range: {
        low: 70,
        high: 120,
    },
    calculator: [{
        current_glucose_level: 0,
        HC_ratio: 0,
        HC_to_consume: 0,
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
        date: curr_date,
    }],
};

let users = [];

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req,res) => 

 	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.use("/", async (req, res, next) => {
    if (users.length === 0) {
        var userCount = await User.countDocuments({});

        if (userCount === 0) {
            await User.insertMany(firstUsers).then(() => {
                console.log("Succes!");
            }
            ).catch((error) => {
                console.error(error);
            });
        } else {
            await User.find({}).then((err, docs) => {
                if (err) {
                    console.error(err);
                }
                else {
                    console.log("Users loaded");
                    users=docs;
                }
                }).catch((error) => {
                    console.error(error);
                });
        }
    }
    next();
});

app.get("/", (req, res) => {
    res.send('<h1> Not a rederable API </h1>');
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

app.post("/upload", async(req, res, next) => {
    var match = await User.findOne({user: {$eq: req.body.form3Example3}}).exec();

    if (match && users.includes(match)) {
        
    }
});

app.listen(5000, () => {
    console.log("Listening to port 5000!");
});