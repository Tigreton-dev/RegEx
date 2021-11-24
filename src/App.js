import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [result1, setResult1] = useState(null);
  const text1 = 'A regular expression (shortened as regex or regexp also referred to as rational expression) is a sequence of characters that specifies a search pattern. Usually such patterns are used by string-searching algorithms for "find" or "find and replace" operations on strings, or for input validation. It is a technique developed in theoretical computer science and formal language theory.';


  useEffect(() => {
    console.log(text1.replace(/[^a-zA-Z]+/g, " ").split(" ").filter(word => word.match(/on\b/g)))
    setResult1(text1.replace(/[^a-zA-Z]+/g, " ").split(" ").filter(word => word.match(/on\b/g)));
  }, []);
  return (
    <div className="App">
      <div className="box">
        <p>match all words that ends with "on"</p>
        <p>text1.replace(/[^a-zA-Z]+/g, " ").split(" ").filter(word => word.match(/on\b/g))</p>
        <h3>Text</h3>
        <p>{text1}</p>

        <h3>Result</h3>
        <p>{result1}</p>
      </div>
    </div>
  );
}

export default App;
