import React, { useState } from "react";

const UseState = () => {
  const [list, setList] = useState("");
  const [data, setData] = useState([]);

  const addingList = () => {
    setData([...data, list]);
  };
  return (
    <div
      style={{
        backgroundColor: "#dadada",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "500px",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <input
          onChange={(e) => {
            setList(e.target.value);
          }}
          type="text"
          style={{
            padding: 12,
            width: 350,
          }}
        />
        <button
          onClick={addingList}
          style={{
            padding: 13,
            width: 110,
          }}
        >
          Add
        </button>

        <ul>
          {data.map((item, index) => {
            return <li key={index}>{item} </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default UseState;
