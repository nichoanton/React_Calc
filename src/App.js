import { useState } from "react";
import "./components/styles.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "-", "+", "."];

  const updateCalc = (value) => {
    if(
      operators.includes(value) && calc === '' ||     //if the last value is an operator and no values after
      operators.includes(value) && operators.includes(calc.slice(-1)) //if the last value is an operator and another operator after
    ){ return; }

    setCalc(calc + value);

    if (!operators.includes(value)) {                //if the last value is not an operator
      setResult(eval(calc + value).toString());
    }
  };

  const deleteHandler = () => {
    setCalc(calc.slice(0, -1)); 
  };

  const clearHandler = () => {
    setCalc("");
    setResult("");
  };

  const equalsOperator = () => {

  };

  return (
    <div className="grid">
      <div className="output">
        <div className="result"> {result || "0" } </div>
        <div className="display-typed"> {calc || "0"} </div>
      </div>
      <button className="span" onClick={clearHandler}>C</button>
      <button onClick={deleteHandler}>Del</button>
      <button onClick={() => updateCalc("/")}>/</button>
      <button onClick={() => updateCalc("1")}>1</button>
      <button onClick={() => updateCalc("2")}>2</button>
      <button onClick={() => updateCalc("3")}>3</button>
      <button onClick={() => updateCalc("*")}>*</button>
      <button onClick={() => updateCalc("4")}>4</button>
      <button onClick={() => updateCalc("5")}>5</button>
      <button onClick={() => updateCalc("6")}>6</button>
      <button onClick={() => updateCalc("+")}>+</button>
      <button onClick={() => updateCalc("7")}>7</button>
      <button onClick={() => updateCalc("8")}>8</button>
      <button onClick={() => updateCalc("9")}>9</button>
      <button onClick={() => updateCalc("-")}>-</button>
      <button onClick={() => updateCalc(".")}>.</button>
      <button onClick={() => updateCalc("0")}>0</button>
      <button className="span">=</button>
    </div>
  );
}

export default App;
