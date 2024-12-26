import React, { useState } from "react";

const InputForm = ({ onFetchSummary }) => {
  const [url, setUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) onFetchSummary(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter article URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Get Summary</button>
    </form>
  );
};

export default InputForm;
