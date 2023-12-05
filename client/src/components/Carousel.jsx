import React from "react";
import dogimage from "../img/servdogs.jpg";
import diabimage from "../img/diabetest1.jpg";
import selfcontimage from "../img/my-goals.jpg";
import NewsApi from "./NewsApi.jsx";

function Carousel() {
  return (
    <div
      id="carousel"
      className="carousel slide"
      style={{
        height: "500px",
        width: "700px",
        margin: "auto",
        marginTop: "10px",
      }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={diabimage} className="d-block w-100" alt="diabetes1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Diabetes type 1</h5>
            <p>
              There are many types of diabetes, and each one has a different
              effect on the body{" "}
            </p>
            <a href="https://diatribe.org/type-1-diabetes">Learn more</a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={dogimage} className="d-block w-100" alt="servicedogs" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Service dogs for the diabetic</h5>
            <p>
              Many people dont know that service dogs can help for more than
              blindness and company
            </p>
            <a href="https://diatribe.org/diabetes-ruff-diving-world-diabetes-service-dogs">
              Learn more
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={selfcontimage} className="d-block w-100" alt="DSMES" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Diabetes education</h5>
            <p>
              We offer a service to help those with diabetes, but learning more
              of the self-management is imperative
            </p>
            <a href="https://www.cdc.gov/diabetes/managing/education.html">
              Learn about DSMES
            </a>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <NewsApi />
    </div>
  );
}

export default Carousel;
