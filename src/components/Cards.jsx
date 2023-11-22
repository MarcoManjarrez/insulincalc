import React from "react";
import { Card, Button } from "antd";
import d1 from "../img/dummy_600x400_ffffff_00cccc.png";

function Cards() {
  return (
    <div style={{ display: "flex" }}>
      <Card
        title="Type 1 diabetes"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <img alt="img1" src={d1} />
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
          alt="img2"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIEnUkwQUdbyVfkutEwc9ZQDGz_f8IXu1R024nhc-&s"
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
          alt="img3"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIEnUkwQUdbyVfkutEwc9ZQDGz_f8IXu1R024nhc-&s"
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

export default Cards;
