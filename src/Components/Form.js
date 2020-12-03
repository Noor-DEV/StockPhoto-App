import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "./Context";
const Form = () => {
  const inputRef = useRef(null);
  const [val, setVal] = useState("");
  const { setQuery } = useGlobalContext();
  const handleChange = (e) => {
    const { value } = e.target;
    setVal(value);
    // setQuery(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(val);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        value={val}
        onChange={handleChange}
        ref={inputRef}
      />
      <button type="submit" className="search-btn">
        <FaSearch onClick={() => inputRef.current.focus()} />
      </button>
    </form>
  );
};

export default Form;
