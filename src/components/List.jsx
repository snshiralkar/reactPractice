import React, { useState } from "react";

const List = () => {
  const [list, setList] = useState("");
  const [data, setData] = useState([]);

  const addList = () => {
    setData([...data, list]);
  };

  const deleteBtn = (index) => {
    const copyOfArray = [...data];
    copyOfArray.splice(index, 1);
    setData(copyOfArray);
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
          backgroundColor: "white",
          height: "60vh",
          width: "70vh",
          padding: 10,
        }}
      >
        <input
          style={{
            width: 250,
            padding: 10,
            borderRadius: 8,
          }}
          type="text"
          onChange={(e) => {
            setList(e.target.value);
          }}
        />
        <button
          style={{
            width: 50,
            padding: 10,
            borderRadius: 4,
            margin: 5,
          }}
          onClick={addList}
        >
          Add
        </button>
        <div>
          {data.map((item, index) => {
            return (
              <>
                <li key={index}>
                  {item}
                  <button onClick={() => deleteBtn(index)}>Delete</button>
                </li>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
