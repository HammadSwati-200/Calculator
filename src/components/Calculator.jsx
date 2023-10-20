// Calculator.js

import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttonValues = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {buttonValues.map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

// const [preState, setPreState] = useState("");
// const [curState, setCurState] = useState("");
// const [input, setInput] = useState("0");
// const [operator, setOperator] = useState(null);
// const [total, setTotal] = useState(false);

// const inputNum = (e) => {
//   if (curState.includes(".") && e.target.innerText === ".") return;

//   if (total) {
//     setPreState("");
//   }

//   curState
//     ? setCurState((pre) => pre + e.target.innerText)
//     : setCurState(e.target.innerText);
//   setTotal(false);
// };

// useEffect(() => {
//   setInput(curState);
// }, [curState]);

// useEffect(() => {
//   setInput("0");
// }, []);

// const operatorType = (e) => {
//   setTotal(false);
//   setOperator(e.target.innerText);
//   if (curState === "") return;
//   if (preState !== "") {
//     equals();
//   }
//   setPreState(curState);
//   setCurState("");
// };

// const equals = (e) => {
//   if ((e.target.innerText = "=")) setTotal(true);
// };

// let cal;
// switch (operator) {
//   case "/":
//     cal = String(parseFloat(preState) / parseFloat(curState));
//     break;
//   case "+":
//     cal = String(parseFloat(preState) + parseFloat(curState));
//     break;
//   case "x":
//     cal = String(parseFloat(preState) * parseFloat(curState));
//     break;
//   case "-":
//     cal = String(parseFloat(preState) - parseFloat(curState));
//     break;
//   default:
//     return;
// }
// setInput("");
// setPreState(cal);
// setCurState("");

// const minusPlus = (e) => {};

// const percent = (e) => {};

// const reset = (e) => {
//   setPreState("");
//   setCurState("");
//   setInput("0");
// };
