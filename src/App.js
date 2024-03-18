import { useState } from "react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const todayDate = new Date().toDateString();

  // Function to calculate the updated date based on the count
  function calculateUpdatedDate() {
    const currentDate = new Date();
    const updatedDate = new Date(
      currentDate.setDate(currentDate.getDate() + count)
    );
    return updatedDate.toDateString();
  }

  function plusCount() {
    setCount((currentCount) => currentCount + step);
  }

  function minusCount() {
    setCount((currentCount) => currentCount - step);
  }

  const handleSliderChange = (event) => {
    setStep(parseInt(event.target.value));
  };

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div className="slider">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={handleSliderChange}
        />
        <span>Step: {step}</span>
      </div>

      <div className="counter-container">
        <button onClick={minusCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={plusCount}>+</button>
      </div>
      <p className="todayDate">
        {count === 0
          ? `Today is ${todayDate}`
          : count > 0
          ? `${count} days from today is ${calculateUpdatedDate()}`
          : `${Math.abs(count)} days ago was ${calculateUpdatedDate()}`}
      </p>
      {count !== 0 || step !== 1 ? (
        <div className="resetBtn">
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
      <Analytics />
    </div>
  );
}

export default App;
