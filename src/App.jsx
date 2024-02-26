import { useState } from "react";
import { Logos } from "./components/Logos";
import { StaticComponent } from "./components/StaticComponent";
import { PropComponent } from "./components/PropComponent";
import { Component } from "./components/ComponentWithCss/Component";
import { PropComponentPropTypes } from "./components/PropComponentPropTypes";
export const App = () => {
  // Example of Reactive Data using react Hook useState
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Diego Zito");

  // Function expression to showcase reactiveData in action
  const addOne = () => setCount((count) => count + 1);

  // Function expression to handle the input change and update the 'name' state to showcase how reactive data works in React through the use of hooks
  const handleNameUpdate = () => {
    const newName = prompt("Enter a new name:"); // Show an alert to receive a value from the user
    if (newName) {
      setName(newName); // Update the name state with the new name if a value is provided
    }
  };

  // Staticc Data Inyected through {} reference
  const appContent = {
    heading: "Vite + React Technigo Boilerplate",
    reactivedataExampleOne:
      "Here is an example on how a simple reactHook works using a counter",
    reactivedataExampleTwo:
      "Here is an example on how a simple reactHook works using a button to change the name on screen",
    reactivedataExampleThree:
      "Before you decide to delete all components and start from scratch, we suggest examining them closely to grasp their structure. They can act as a blueprint for your future work.",
    componentInfo: " Here is some component examples:",
  };
  return (
    <>
    Hello
</>
  );
};
