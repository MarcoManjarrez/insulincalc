import React, {useState} from "react";
import axios from "axios";
import "./Calculator.css";

function Calculator() {
    const [errorStyle, setErrorStyle] = useState({color: ""});
    const [message, setMesage] = useState("");
    const [result, setResult] = useState(0);
    const [current_glucose_level, setCurrentGlucoseLevel] = useState();
    const [HC_ratio, setHCRatio] = useState();
    const [HC_to_consume, setHCToConsume] = useState();

    function currentGlucoseLevelListener(event) {
        setCurrentGlucoseLevel(event.target.value);
    }

    function HCRatioListener(event) {
        setHCRatio(event.target.value);
    }

    function HCToConsumeListener(event) {
        setHCToConsume(event.target.value);
    }
    
    function calculateForm() {
        if (!current_glucose_level || !HC_ratio || !HC_to_consume) {
            setErrorStyle({color: "red"});
            setMesage("Data not fulfilled");
        } else if (parseInt(current_glucose_level) > 120) {
            setErrorStyle({color: "orange"});
            setMesage("Warning! Glucose level higher than range set");
        } else if (parseInt(current_glucose_level) < 70) {
            setErrorStyle({color: "orange"});
            setMesage("Warning! Glucose level lower than range set");
        } else {
            setResult((parseInt(HC_to_consume) / parseInt(HC_ratio)).toFixed(2));
            setMesage("");
        }
    }

    function uploadData(event) {
        var apiPath = "";
        if (process.env.NODE_ENV === "production") {
            apiPath = "/api";
        }

        axios
            .post(apiPath+"/upload", {
                current_glucose_level: current_glucose_level,
                HC_ratio: HC_ratio,
                HC_to_consume: HC_to_consume,
            })
            .then((res) => {
                console.log("Response from server 2");
            })
            .catch((err) => {
                console.error(err.error);
            });

        event.preventDefault();
    }
    
    return (
        <div id="Calculator" className="card text-center mx-auto">
            <div class="card-header">
                Insuline Calculator
            </div>
            <div className="card-body">
                <div className="note_calc">
                    <h5>Note: This calculator is able to calculate the units of insuline necessary<br/>for people with Diabetes type 1.
                        The calculator has a base data<br/>for the range of glucose in minimum 70 and maximum 120, the user<br/>must insert
                        the current level of glucose, ratio of HC (hydrocarbons)<br/>per unit of insuline and the amount to consume in grams.
                    </h5>
                </div>
        
                <div className="calculator">
                    <form onSubmit={uploadData}>
                        <div className="calculator_inputs">
                            <input className="input_current_glucose_level" type="text" name="current_glucose_level" 
                            size="25" placeholder="Current glucose level" 
                            onChange={currentGlucoseLevelListener} value={current_glucose_level} required/><br/>
                            <input className="input_HC_ratio" type="text" name="HC_ratio" size="25" 
                            placeholder="HC Ratio" onChange={HCRatioListener} value={HC_ratio} required/><br/>
                            <input className="input_HC_to_consume" type="text" name="HC_to_consume" size="25" 
                            placeholder="HC to consume (gr)" onChange={HCToConsumeListener} value={HC_to_consume} required/><br/>
                        </div>
                        <div>
                            <input id="btn_calculate" className="btn btn-primary" onClick={calculateForm} type="button" name="btn_calculate" value="Calculate"/>
                            <input id="btn_upload" className="btn btn-primary" type="submit" name="btn_upload" value="Upload"/>
                            <div id="error_input" style={errorStyle}>{message}</div>
                            <div id="card_result" className="card d-flex align-items-center justify-content-center">
                                <div className="card-body">
                                    <label id="result" for="btn_calculate">R: <span>{result}</span></label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Calculator;