import React from "react";
import dogimage from "../img/servdogs.jpg";
import diabimage from "../img/diabetest1.jpg";
import selfcontimage from "../img/my-goals.jpg";

function Carousel() {
  return (
    <div
      id="carousel"
      class="carousel slide"
      style={{
        height: "500px",
        width: "700px",
        margin: "auto",
        marginTop: "10px",
      }}
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="0"
          class="active"
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
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={diabimage} class="d-block w-100" alt="diabetes1" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Diabetes type 1</h5>
            <p>
              There are many types of diabetes, and each one has a different
              effect on the body{" "}
            </p>
            <a href="https://diatribe.org/type-1-diabetes">Learn more</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src={dogimage} class="d-block w-100" alt="servicedogs" />
          <div class="carousel-caption d-none d-md-block">
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
        <div class="carousel-item">
          <img src={selfcontimage} class="d-block w-100" alt="DSMES" />
          <div class="carousel-caption d-none d-md-block">
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
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
