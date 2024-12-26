import React from "react";

// SummaryResult component displays the fetched summary or an error message
const SummaryResult = ({ summary }) => {
  return (
    <div>
      <h2>Article Summary:</h2>
      <p>{summary || "No summary available."}</p>
    </div>
  );
};

export default SummaryResult;
