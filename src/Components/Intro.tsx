import React from "react";
import "./style.css";
function Intro() {
  return (
    <div id="introFormat">
      <div className="rotate">
        <div className="side">
          <h5 style={{ fontSize: "2rem", color: "aliceblue" }}>
            Mobile-Capability.{" "}
          </h5>
          <h6
            style={{
              fontSize: "2rem",
              color: "aquamarine",
              fontFamily: "'Mingzat', sans-serif",
            }}
          >
            DEV
          </h6>
        </div>
      </div>
      <div className="intro">
        <div>
          <h1 id="hi">Hi, my name is</h1>
          <h2 id="name">Vincent</h2>
        </div>
      </div>
    </div>
  );
}
export default Intro;
