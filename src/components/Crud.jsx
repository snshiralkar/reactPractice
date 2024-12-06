import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const Crud = () => {
  const [right, setRight] = useState(-450);

  const handleClick = () => {
    setRight(0);
  };

  return (
    <div
      style={{
        backgroundColor: "#ddd",
        minHeight: "100vh",
        padding: "1px",
      }}
    >
      <div
        style={{
          width: "70%",
          backgroundColor: "white",
          margin: "0 auto",
          padding: 20,
        }}
      >
        <h1 style={{ textAlign: "center" }}>Code Fusion </h1>

        <button
          onClick={handleClick}
          style={{
            border: "none",
            backgroundColor: "#8407ba",
            color: "white",
            padding: "14px 24px",
            borderRadius: 4,
            fontSize: 16,
          }}
        >
          <i className="ri-user-add-line" style={{ marginRight: 8 }}></i>
          New Student
        </button>
      </div>

      {/* Drawer */}

      <aside
        style={{
          position: "absolute",
          top: 0,
          right: right,
          width: 450,
          height: "100%",
          backgroundColor: "white",
          boxShadow: "0 0 40px rgba(0,0,0,0.2)",
          padding: 32,
          boxSizing: "border-box",
          transition: "0.3s",
        }}
      >
        <button
          onClick={() => {
            setRight(-450);
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: 24,
            color: "#8407ba",
            position: "absolute",
            top: 20,
            right: 20,
          }}
        >
          <i className="ri-close-circle-line"></i>
        </button>
        <h1>My Drawer</h1>
      </aside>
    </div>
  );
};

export default Crud;
