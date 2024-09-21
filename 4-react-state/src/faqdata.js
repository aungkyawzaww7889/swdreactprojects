import { useState } from "react";

const faqdatas= [{
  
          id: "1",
          question: "What is JSX?",
          answer: "JSX stands for JavaScript XML. It allows you to write HTML inside JavaScript, making it easier to create React components with a more readable syntax.",
          isOpen:true
          
        },
        {
          id: "2",
          question: "What is React?",
          answer: "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data without reloading the page.",
          isOpen:false
        },
        {
          id: "3",
          question: "What is a component in React?",
          answer: "A component in React is a reusable piece of code that represents part of the user interface. Components can be either class-based or function-based.",
          isOpen:false

        },
        {
          id: "4",
          question: "What are props in React?",
          answer: "Props (short for properties) are arguments passed into React components. They allow data to be passed from one component to another.",
          isOpen:false

        },
        {
          id: "5",
          question: "What is state in React?",
          answer: "State is a built-in object in React that is used to contain data or information about the component. State can change over time, and when it does, the component re-renders.",
          isOpen:false

        }];

  
export default faqdatas;