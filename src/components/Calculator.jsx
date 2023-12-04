import React, { useState } from "react";
import axios from "axios";
import "./Calculator.css";

function Calculator() {
  const [errorStyle, setErrorStyle] = useState({ color: "" });
  const [message, setMesage] = useState("");
  const [result, setResult] = useState(0);
  const [current_glucose_level, setCurrentGlucoseLevel] = useState();
  const [HC_ratio, setHCRatio] = useState();
  const [HC_to_consume, setHCToConsume] = useState();
  const [min_glucose_range, setMinGlucoseRange] = useState();
  const [max_glucose_range, setMaxGlucoseRange] = useState();
  const ideal_glucose_level = 100;
  const [correction_index, setCorrectionIndex] = useState();

  function currentGlucoseLevelListener(event) {
    setCurrentGlucoseLevel(event.target.value);
  }

  function HCRatioListener(event) {
    setHCRatio(event.target.value);
  }

  function HCToConsumeListener(event) {
    setHCToConsume(event.target.value);
  }

  function minGlucoseLevelListener(event) {
    setMinGlucoseRange(event.target.value);
  }

  function maxGlucoseLevelListener(event) {
    setMaxGlucoseRange(event.target.value);
  }

  function correctionIndexListener(event) {
    setCorrectionIndex(event.target.value);
  }

  function calculateForm() {
    if (!current_glucose_level || !HC_ratio || !HC_to_consume) {
      setErrorStyle({ color: "red" });
      setMesage("Data not fulfilled");
    } else {
      var correction = 0;

      if (current_glucose_level >= max_glucose_range) correction = (parseInt(current_glucose_level) - ideal_glucose_level)/parseInt(correction_index);

      setResult(((parseInt(HC_to_consume) / parseInt(HC_ratio)) + correction).toFixed(1));
      setMesage("");
    }
  }

  function uploadData(event) {
    var apiPath = "";
    if (process.env.NODE_ENV === "production") {
      apiPath = "/api";
    }

    axios
      .post(apiPath + "/upload", {
        current_glucose_level: parseInt(current_glucose_level),
        HC_ratio: parseInt(HC_ratio),
        HC_to_consume: parseInt(HC_to_consume),
        min_glucose_range: parseInt(min_glucose_range),
        max_glucose_range: parseInt(max_glucose_range),
        correction_index: parseInt(correction_index),
        units: result,
      })
      .then((res) => {
        console.log("Response from server 2");
        setCurrentGlucoseLevel("");
        setHCRatio("");
        setHCToConsume("");
        setMinGlucoseRange("");
        setMaxGlucoseRange("");
        setCorrectionIndex("");
        setResult(0);
      })
      .catch((err) => {
        console.error(err.error);
      });

    event.preventDefault();
  }

  return (
    <div id="Calculator" className="card text-center mx-auto">
      <div className="card-header">Insuline Calculator</div>
      <div id="card_body" className="card-body">
        <div className="note_calc">
          <h5>
            Note: This calculator is able to calculate the units of<br/>insuline
            necessary for people with Diabetes type 1.<br/>The calculator has a base 
            data input for the range of glucose in<br/>minimum and maximum 
            level of glucose which the user has.<br/>The user must insert the current level of glucose, ratio of HC
            (hydrocarbons)<br/>per unit of insuline and the amount to consume in
            grams.
          </h5>
        </div>
        <div className="calculator">
          <form onSubmit={uploadData}>
            <h5>Food inputs</h5>
            <div className="calculator_food_inputs">
              <input
                className="input_current_glucose_level"
                type="text"
                name="current_glucose_level"
                size="25"
                placeholder="Current glucose level"
                onChange={currentGlucoseLevelListener}
                value={current_glucose_level}
                required
              />
              <br />
              <input
                className="input_HC_ratio"
                type="text"
                name="HC_ratio"
                size="25"
                placeholder="HC Ratio"
                onChange={HCRatioListener}
                value={HC_ratio}
                required
              />
              <br />
              <input
                className="input_HC_to_consume"
                type="text"
                name="HC_to_consume"
                size="25"
                placeholder="HC to consume (gr)"
                onChange={HCToConsumeListener}
                value={HC_to_consume}
                required
              />
              <br />
            </div>
            <div className="calculator_correction_inputs">
              <h5>Correction inputs</h5>
              <input
                className="input_min_glucose_range"
                type="text"
                name="min_glucose_range"
                size="25"
                placeholder="Minimum glucose level range"
                onChange={minGlucoseLevelListener}
                value={min_glucose_range}
                required
              />
              <input
                className="input_max_glucose_range"
                type="text"
                name="max_glucose_range"
                size="25"
                placeholder="Maximum glucose level range"
                onChange={maxGlucoseLevelListener}
                value={max_glucose_range}
                required
              />
              <br />
              <input
                className="input_correction_index"
                type="text"
                name="correction_index"
                size="25"
                placeholder="Correction index"
                onChange={correctionIndexListener}
                value={correction_index}
                required
              />
              <br />
            </div>
            <div>
              <input
                id="btn_calculate"
                className="btn btn-primary"
                onClick={calculateForm}
                type="button"
                name="btn_calculate"
                value="Calculate"
              />
              <input
                id="btn_upload"
                className="btn btn-primary"
                type="submit"
                name="btn_upload"
                value="Upload"
              />
              <div id="error_input" style={errorStyle}>
                {message}
              </div>
              <div
                id="card_result"
                className="card d-flex align-items-center justify-content-center"
              >
                <div className="card-body">
                  <label id="result" for="btn_calculate">
                    R: <span>{result}</span>
                  </label>
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
