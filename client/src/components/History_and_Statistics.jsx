import React, { useEffect, useState } from "react";
import axios from "axios";
import "./History_and_Statistics.css";

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
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [years, setYears] = useState([]);
    const [average_first_month_glucose, setAverageFirstMonthGlucose] = useState();
    const [average_first_month_units, setAverageFirstMonthUnits] = useState();
    const [average_last_three_months_glucose, setAverageLastThreeMonthsGlucose] = useState();
    const [average_last_three_months_units, setAverageLastThreeMonthsUnits] = useState();

    useEffect(() => {
        obtainData();
    },[]);

    function obtainData() {
        var apiPath = "";
        if (process.env.NODE_ENV === "production") apiPath = "/api";

        axios
            .get(apiPath+"/user")
            .then((res) => {
                console.log("Response of server 3", res.data);
                setLoggedUser(res.data);
                updateAvailableYears(res.data.calculator);
            })
            .catch((err) => {
                console.error(err.response.data);
            });
    }

    function padWithZero(number) {
        return String(number).padStart(2,'0');
    }

    function updateAvailableYears(calculator) {
        const years = new Set(
            calculator.map((element) => new Date(element.date).getFullYear())
        );
        setYears(Array.from(years));
    }

    function changeCurrentYear(event) {
        setCurrentYear(parseInt(event.target.value));
    }

    useEffect(() => {
        var filteredData = loggedUser.calculator.slice(1).filter((element) => new Date(element.date).getFullYear() === currentYear);
        setUserData(filteredData.map((element, index) => (
            <tr key={index}>
                <td>{new Date(element.date).getDate() + "/" + new Date(element.date).getMonth() + "/" 
                + new Date(element.date).getFullYear() + " - " 
                + padWithZero(new Date(element.date).getHours()) + ":" + padWithZero(new Date(element.date).getMinutes())}</td>
                <td>
                    <div id="data">Glucose level: {element.current_glucose_level}</div>
                    <div id="data">Units of insulin: {element.units}</div>
                </td>
            </tr>
        )));
    }, [currentYear, loggedUser.calculator]);

    useEffect(() => {
        const currentMonth = new Date().getMonth();
    
        const filteredData = loggedUser.calculator.slice(1).filter(element => {
          const elementMonth = new Date(element.date).getMonth();
          const elementYear = new Date(element.date).getFullYear();
          return elementMonth === currentMonth && elementYear === currentYear;
        });
    
        const sum = filteredData.reduce((acc, element) => acc + element.current_glucose_level, 0);
    
        setAverageFirstMonthGlucose((sum/filteredData.length).toFixed(0));
    }, [currentYear, loggedUser.calculator]);

    useEffect(() => {
        const currentMonth = new Date().getMonth();

        const filteredData = loggedUser.calculator.slice(1).filter(element => {
            const elementMonth = new Date(element.date).getMonth();
            const elementYear = new Date(element.date).getFullYear();
            return elementMonth === currentMonth && elementYear === currentYear;
        });

        const sum = filteredData.reduce((acc, element) => acc + element.units, 0);

        setAverageFirstMonthUnits((sum/filteredData.length).toFixed(1));
    }, [currentYear, loggedUser.calculator]);

    useEffect(() => {
        const currentMonth = new Date().getMonth();
        const secondMonth = currentMonth-1;
        const thirdMonth = currentMonth-2;
    
        const filteredData1 = loggedUser.calculator.slice(1).filter(element => {
          const elementMonth = new Date(element.date).getMonth();
          const elementYear = new Date(element.date).getFullYear();
          return elementMonth === currentMonth && elementYear === currentYear;
        });

        const filteredData2 = loggedUser.calculator.slice(1).filter(element => {
            const elementSecondMonth = new Date(element.date).getMonth() - 1;
            const elementYear = new Date(element.date).getFullYear();
            return elementSecondMonth === secondMonth && elementYear === currentYear;
        });

        const filteredData3 = loggedUser.calculator.slice(1).filter(element => {
            const elementThirdMonth = new Date(element.date).getMonth() - 2;
            const elementYear = new Date(element.date).getFullYear();
            return elementThirdMonth === thirdMonth && elementYear === currentYear;
        });
    
        const sum1 = filteredData1.reduce((acc, element) => acc + element.current_glucose_level, 0);
        const sum2 = filteredData2.reduce((acc, element) => acc + element.current_glucose_level, 0);
        const sum3 = filteredData3.reduce((acc, element) => acc + element.current_glucose_level, 0);

        const total = (sum1 + sum2 + sum3)/(filteredData1.length + filteredData2.length + filteredData3.length);
    
        setAverageLastThreeMonthsGlucose(total.toFixed(0));
    }, [currentYear, loggedUser.calculator]);

    useEffect(() => {
        const currentMonth = new Date().getMonth();
        const secondMonth = currentMonth-1;
        const thirdMonth = currentMonth-2;
    
        const filteredData1 = loggedUser.calculator.slice(1).filter(element => {
          const elementMonth = new Date(element.date).getMonth();
          const elementYear = new Date(element.date).getFullYear();
          return elementMonth === currentMonth && elementYear === currentYear;
        });

        const filteredData2 = loggedUser.calculator.slice(1).filter(element => {
            const elementSecondMonth = new Date(element.date).getMonth() - 1;
            const elementYear = new Date(element.date).getFullYear();
            return elementSecondMonth === secondMonth && elementYear === currentYear;
        });

        const filteredData3 = loggedUser.calculator.slice(1).filter(element => {
            const elementThirdMonth = new Date(element.date).getMonth() - 2;
            const elementYear = new Date(element.date).getFullYear();
            return elementThirdMonth === thirdMonth && elementYear === currentYear;
        });
    
        const sum1 = filteredData1.reduce((acc, element) => acc + element.units, 0);
        const sum2 = filteredData2.reduce((acc, element) => acc + element.units, 0);
        const sum3 = filteredData3.reduce((acc, element) => acc + element.units, 0);

        const total = (sum1 + sum2 + sum3)/(filteredData1.length + filteredData2.length + filteredData3.length);
    
        setAverageLastThreeMonthsUnits(total.toFixed(1));
    }, [currentYear, loggedUser.calculator]);
    
    return(
        <div id="History" className="card text-center mx-auto">
            <select onChange={changeCurrentYear} class="form-select" aria-label="Default select example">
                {years.map((year) => (
                    <option key={year} value={year}>
                    {year}
                    </option>
                ))}
            </select>
            <div className="card-header">History</div>
            <div id="card_body" className="card-body">
                <div className="History_user">
                    <table id="history_table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData}
                        </tbody>
                    </table>
                </div>
                <div className="Average_First_Month">
                    <table id="history_table">
                        <thead>
                            <tr>
                                <th>Average of the current month</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div id="data">Glucose level: {average_first_month_glucose}</div>
                                    <div id="data">Units of insulin: {average_first_month_units}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="Average_First_Three_Months">
                    <table id="history_table">
                        <thead>
                            <tr>
                                <th>Average of the last three months</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div id="data">Glucose level: {average_last_three_months_glucose}</div>
                                    <div id="data">Units of insulin: {average_last_three_months_units}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default History_and_Stadistics;