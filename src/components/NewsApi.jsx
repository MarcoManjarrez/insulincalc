import React, { useState } from "react";
function Api() {
  const [data, setData] = useState(null);
  function handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=7bcd4de660e04e60b8d4a157f856fb16"
    );
    xhr.onload = function () {
      if (xhr.status === 200) {
        const responseData = JSON.parse(xhr.responseText);
        const headlines = responseData.articles.map((article) => article.title);
        console.log("Headlines:", headlines);
        setData(headlines);
      }
    };
    xhr.send();
  }
  return (
    <div>
      <btn onClick={handleClick} style={{ marginTop: "100px" }}>
        Click for more health articles
      </btn>
      {data ? (
        <ul>
          {data.map((dat, index) => (
            <li key={index}>{dat}</li>
          ))}{" "}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
export default Api;
