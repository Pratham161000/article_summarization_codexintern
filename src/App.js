import React, { useState } from "react";
import InputForm from "./components/InputForm";
import SummaryResult from "./components/SummaryResult";
import { fetchSummary } from "./api";
import "./App.css";

const App = () => {
  const [summary, setSummary] = useState("");

  const handleFetchSummary = async (url) => {
    const result = await fetchSummary(url);
    setSummary(result || "Failed to fetch summary.");
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
