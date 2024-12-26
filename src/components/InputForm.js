import React, { useState } from "react";

// InputForm takes onFetchSummary as a prop
const InputForm = ({ onFetchSummary }) => {
  const [url, setUrl] = useState(""); // To hold the input URL

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) onFetchSummary(url); // If URL is provided, trigger the summary fetch
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter article URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)} // Update URL state on input change
      />
      <button type="submit">Get Summary</button>
    </form>
  );
};

export default InputForm;
