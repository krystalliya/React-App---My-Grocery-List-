import React, { useState } from "react";

function Input({ addItem }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setText(value);
  }

  function handleClick() {
    if (text === "") {
      return;
    }
    addItem(text);
    setText("");
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        value={text}
        type="text"
        placeholder="type here..."
      />
      <button onClick={handleClick}>
        <span>ADD</span>
      </button>
    </div>
  );
}

export default Input;
