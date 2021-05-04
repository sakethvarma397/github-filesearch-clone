import React, { useState, useRef, useEffect } from "react";

const SearchView = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const onInputChange = (event) => {
    const input = event.target.value;
    setInput(input);
    onSearch(input);
  };

  return (
    <div className="search-box">
      My Repository <span className="slash">/</span>
      <input
        type="text"
        name="input"
        value={input}
        ref={ref}
        autoComplete="off"
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchView;
