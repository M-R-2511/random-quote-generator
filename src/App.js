import React, { useState, useCallback, useEffect } from "react";
const App = () => {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");
  const getAdvice = useCallback(() => {
    setAdvice("");
    fetch(url)
      .then((res) => res.json())
      .then(({ slip }) => setAdvice(slip.advice))
      .catch((err) => err);
  }, [url]);

  useEffect(() => {
    getAdvice();
  }, [getAdvice]);

  return (
    <div className="container">
      <div className="box">
        <h2 className="box__title">{advice || "Loading..."}</h2>
        <button className="box__btn" onClick={getAdvice}>
          Get New Advice
        </button>
      </div>
    </div>
  );
};

export default App;
