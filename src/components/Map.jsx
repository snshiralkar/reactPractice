import React, { useState } from "react";

const Map = () => {
  const [show, setShow] = useState(true);
  const [bgDiv, setBgDiv] = useState("red");
  const [input, setInput] = useState("");
  const testing = () => {
    setShow(!show);
  };
  return (
    <div>
      <div>
        <h1
          style={{
            color: show ? "blue" : "red",
          }}
        >
          welcome
        </h1>
        {show && <p>ram krishna ahri</p>}
        <button onClick={testing}>{show ? "Hide" : "Show"}</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: bgDiv,
            borderRadius: "10px",
          }}
        ></div>
        <button
          style={{
            backgroundColor: bgDiv === "red" ? "blue" : "red",
            color: "white",
          }}
          onClick={() => {
            setBgDiv(bgDiv === "red" ? "blue" : "red");
          }}
        >
          {bgDiv === "red" ? "blue" : "red"}
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: input,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Map;
