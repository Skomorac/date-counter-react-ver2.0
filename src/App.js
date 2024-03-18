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

  function plusStep() {
    setStep((currentStep) => currentStep + 1);
  }

  function minusStep() {
    setStep((currentStep) => currentStep - 1);
  }

  return (
    <div>
      <div className="counter-container">
        <button onClick={minusStep}>-</button>
        <p>Step: {step}</p>
        <button onClick={plusStep}>+</button>
      </div>

      <div className="counter-container">
        <button onClick={minusCount}>-</button>
        <p>Count: {count}</p>
        <button onClick={plusCount}>+</button>
      </div>
      <p>
        {count === 0
          ? `Today is ${todayDate}`
          : count > 0
          ? `${count} days from today is ${calculateUpdatedDate()}`
          : `${Math.abs(count)} days ago was ${calculateUpdatedDate()}`}
      </p>
      <Analytics />
    </div>
  );
}

export default App;
