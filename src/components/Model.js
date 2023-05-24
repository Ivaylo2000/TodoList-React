import "./Model.css";
import React, { useState } from "react";

const Model = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      setDisplayValue([...displayValue, inputValue]);
    }
    setInputValue("");
  };

  const handleDelete = (index) => {
    setDisplayValue((prevTaskList) =>
      prevTaskList.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="model">
      <div className="inputContainer">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add Task"
        />
        <button className="AddBtn" onClick={handleButtonClick}>
          Add
        </button>
      </div>
      <div className="ulContainer">
        {displayValue.length > 0 ? (
          <ul>
            {displayValue.map((value, index) => {
              if (value.trim() === "") {
                return null;
              }
              return (
                <li key={index}>
                  {value}
                  <button onClick={() => handleDelete(index)}>-</button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No tasks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Model;
