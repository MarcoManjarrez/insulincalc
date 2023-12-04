import React, { useEffect, useState } from "react";
import axios from "axios";

function History_and_Stadistics() {
    const [loggedUser, setLoggedUser] = useState({
        user: "",
        password: "",
        calculator: [{
            current_glucose_level: 0,
            HC_ratio: 0,
            HC_to_consume: 0,
            low_range: 0,
            high_range: 0,
            correction_index: 0,
            date: new Date(),
        }],
    });
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        obtainData();
    },[]);

    function obtainData() {
        var apiPath = "";
        if (process.env.NODE_ENV === "production") {
            apiPath = "/api";
        }

        axios
            .get(apiPath+"/user")
            .then((res) => {
                setLoggedUser((prevLoggedUser) => ({
                    ...prevLoggedUser,
                    ...res.data,
                }));
            })
            .catch((err) => {
                console.error(err.error);
            });
    }

    useEffect(() => {
        setUserData(loggedUser.calculator.map((element, index) => (
            <li key={index}>
                {new Date(element.date).getDate() + "/" + new Date(element.date).getMonth() + "/" 
                + new Date(element.date).getFullYear() + " - " 
                + new Date(element.date).getHours() + ":" + new Date(element.date).getMinutes()}
            </li>
        )));
    }, [loggedUser.calculator]);
    
    return(
        <div>
            History:
            <ul>
                {userData}
            </ul>
            
        </div>
    );
}

export default History_and_Stadistics;