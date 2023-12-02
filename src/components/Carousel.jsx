import React from "react";
import { Card, Button } from "antd";
import "./Cards.css";

function Carousel() {
  return (
    <div id="Cards" style={{ display: "flex" }}>
      <Card
        title="Type 1 diabetes"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <img
          id="card_image"
          alt="img1"
          src={
            "https://diatribe.org/sites/default/files/images/Drawing-1_sketchpad-2-min.png"
          }
        />
        <p>
          Type 1 diabetes (referred to in the past as juvenile diabetes) is a
          chronic health condition in which the body's immune system destroys
          the cells in the pancreas that produce insulin. Insulin is needed to
          convert sugar (also called glucose) from food into energy for most of
          the body’s cells.
        </p>
        <Button type="primary" href="https://diatribe.org/type-1-diabetes">
          Learn more
        </Button>
      </Card>
      <Card
        title="Diabetes is Ruff: Diving into the World of Diabetes Service Dogs"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <img
          id="card_image"
          alt="img2"
          src={
            "https://diatribe.org/sites/default/files/images/Drawing_sketchpad-2-min.png"
          }
        />
        <p>
          When you think of tools to help you manage diabetes, you likely think
          of therapies and devices – but what about dogs? We spoke with Mark
          Ruefenacht, who trained the first diabetes service dog in the world,
          to learn how these special animals can support people with diabetes.
        </p>
        <Button type="primary" href="https://diatribe.org/type-1-diabetes">
          Learn more
        </Button>
      </Card>
      <Card
        title="Type 2 diabetes"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <img
          id="card_image"
          alt="img3"
          src={
            "https://media.npr.org/assets/img/2020/01/22/diabetes-alert-dogs-3_custom-5712eaa3c754e1f6a243f43c400a6343f46839fe.jpg"
          }
        />
        <p>
          Type 2 diabetes is a chronic health condition in which the body has
          trouble processing glucose (or sugar) from the bloodstream to use for
          energy. It means your body isn’t using insulin effectively, and it’s
          characterized by high blood sugar levels.
        </p>
        <Button type="primary" href="https://diatribe.org/type-1-diabetes">
          Learn more
        </Button>
      </Card>
    </div>
  );
}

export default Carousel;
