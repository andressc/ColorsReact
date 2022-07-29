import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

export const colorPallete = [
  "green",
  "blue",
  "brown",
  "Crimson",
  "DeepPink",
  "Tomato",
  "DarkOrange",
  "Gold",
  "Yellow",
  "Thistle",
  "MediumOrchid",
  "DarkMagenta",
  "Indigo",
  "DarkSlateBlue",
  "GreenYellow",
  "LimeGreen",
  "MediumSpringGreen",
  "ForestGreen",
  "OliveDrab",
  "LightSeaGreen",
  "Aqua",
  "DarkTurquoise",
  "SteelBlue",
  "DodgerBlue",
  "MediumSlateBlue",
  "DarkBlue",
  "Gray",
  "white",
  "black"
];

export const StarRating = () => {
  const [color, setColor] = useState("white");
  const [pallete, setPallete] = useState(new Array(756).fill(color));

  useEffect(() => {
    console.log(pallete);
  }, [pallete]);

  const submit = (e) => {
    const newPallete = pallete.map((p, i) => {
      if (i === +e.target.id) {
        return color;
      } else {
        return p;
      }
    });

    //const newPallete = [...pallete[e.target.id]];
    setPallete(newPallete);
    //console.log(e.target.id);
  };

  return (
    <>
      <div>Выберите цвет</div>
      <div style={{ float: "left", width: "100%" }}>
        {colorPallete.map((pallete, id) => (
          <div
            key={id}
            id={id}
            onClick={() => setColor(pallete)}
            style={{
              margin: 2,
              width: 30,
              height: 30,
              backgroundColor: pallete,
              border: "1px solid #000",
              float: "left"
            }}
          ></div>
        ))}
      </div>
      <div style={{ float: "left", width: "100%" }}>
        <div
          style={{
            marginBottom: 7,
            width: 50,
            height: 50,
            backgroundColor: color,
            border: "1px solid #000",
            marginTop: 7
          }}
        ></div>
      </div>
      <div style={{ float: "left", width: "100%" }}>
        <div
          style={{
            width: 308,
            height: 297,
            borderLeft: "1px solid #000",
            borderTop: "1px solid #000"
          }}
        >
          {pallete.map((pallete, id) => (
            <div
              key={id}
              id={id}
              onMouseUp={submit}
              style={{
                borderRight: "1px solid #000",
                borderBottom: "1px solid #000",
                float: "left",
                width: 10,
                height: 10,
                backgroundColor: pallete
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<StarRating />);
