import React, { useState } from "react";
import InputForm from "./components/InputForm";
import SummaryResult from "./components/SummaryResult";
import { fetchSummary } from "./api"; // Ensure the path is correct for where api.js is located
import "./App.css";

const App = () => {
  const [summary, setSummary] = useState(""); // To hold the summary result

  // Function to fetch summary when the user submits a URL
  const handleFetchSummary = async (url) => {
    // Calling the fetchSummary function from api.js
    const result = await fetchSummary(url);
    setSummary(result || "Failed to fetch summary."); // Set the fetched summary or error message
  };

  return (
    <div>
      <h1>Article Summarizer</h1>
      <InputForm onFetchSummary={handleFetchSummary} />{" "}
      {/* Passing the function as a prop */}
      <SummaryResult summary={summary} /> {/* Displaying the result or error */}
    </div>
  );
};

export default App;
