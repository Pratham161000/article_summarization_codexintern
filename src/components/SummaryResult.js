import React from "react";

const SummaryResult = ({ summary }) => {
  return (
    <div>
      <h2>Article Summary:</h2>
      <p>{summary || "No summary available."}</p>
    </div>
  );
};

export default SummaryResult;
