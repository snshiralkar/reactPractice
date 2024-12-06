import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const addingSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email);
  };
  return (
    <div
      style={{
        display: "flex",
        padding: 24,
        gap: 10,
      }}
    >
      <img
        style={{
          width: "50%",
        }}
        src="./contact.png"
      />
      <div
        style={{
          width: "50%",
          //   height: "100vh",
        }}
      >
        <form
          onSubmit={addingSubmit}
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              style={{
                fontSize: "20px",
              }}
            >
              Fullname
            </label>
            <input
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              style={{
                padding: 10,
                borderRadius: 8,
                fontSize: 15,
              }}
              type="text"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              style={{
                fontSize: "20px",
              }}
            >
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{
                padding: 10,
                borderRadius: 8,
                fontSize: 15,
              }}
              type="text"
            />
          </div>
          <textarea
            style={{
              padding: 10,
              borderRadius: 8,
              fontSize: 15,
              row: 80,
            }}
            type="text"
          />
          <button
            style={{
              backgroundColor: "#6c63fe",
              width: "fit-content",
              padding: "14px 32px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              color: "white",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
