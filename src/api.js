// api.js

const API_URL =
  "https://article-extractor-and-summarizer.p.rapidapi.com/summarize";
const API_KEY = "badb8a0809msh095160e078fa098p1d0a8fjsnf098f3a9b8b4";

// Function to fetch the article summary
export const fetchSummary = async (articleUrl) => {
  try {
    const response = await fetch(
      `${API_URL}?url=${encodeURIComponent(articleUrl)}&lang=en&engine=2`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
          "x-rapidapi-key": API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    if (data && data.summary) {
      return data.summary;
    } else {
      throw new Error("Summary not available");
    }
  } catch (error) {
    console.error("Error fetching summary:", error.message);
    console.error(error); // Log the full error for debugging
    alert(`Failed to fetch summary: ${error.message}`);
    return null;
  }
};
