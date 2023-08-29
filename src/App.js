import React, { useState } from 'react';
import {Float16Array} from "@petamoriken/float16";

import './App.css';

function Calculator() {
  const [numbers, setNumbers] = useState([2.7182, 3.1416, 1.6180, 1.4142, 1.7320]);
  
  const handleOperation = (operation) => {
    const newArray = new Float16Array(numbers);
    
    switch (operation) {
      case 'add':
        for (let i = 0; i < newArray.length; i++) {
          newArray[i] += 0.1234;
        }
        break;
      case 'subtract':
        for (let i = 0; i < newArray.length; i++) {
          newArray[i] -= 0.0987;
        }
        break;
      case 'multiply':
        for (let i = 0; i < newArray.length; i++) {
          newArray[i] *= 1.5;
        }
        break;
      case 'divide':
        for (let i = 0; i < newArray.length; i++) {
          newArray[i] /= 2;
        }
        break;
      default:
        break;
    }
    
    setNumbers(Array.from(newArray));
  };
  
  return (
    <div className="calculator">
      <h1 className="title">Half-Precision Calculator</h1>
      <div className="number-list">
        <h2>Numbers:</h2>
        <ul>
          {numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
      <div className="operations">
        <button onClick={() => handleOperation('add')}>Add 0.1234</button>
        <button onClick={() => handleOperation('subtract')}>Subtract 0.0987</button>
        <button onClick={() => handleOperation('multiply')}>Multiply by 1.5</button>
        <button onClick={() => handleOperation('divide')}>Divide by 2</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      
      <Calculator />
      
      <div>
        <p><strong>Прізвище, ім'я:</strong> Кулік Ігор</p>
        <p><strong>Напрямок, за яким планує розвиватись:</strong> Front-end розробка</p>
  
        <h2>Сертифікація</h2>
        <p><strong>Microsoft Front-End Developer</strong></p>
        <p>Сертифікація Microsoft Front-End Developer є вагомим свідченням експертності у
          розробці веб-інтерфейсів на платформі Microsoft. Вона чітко вказує на знання та вміння
          використовувати технології, такі як ASP.NET, Blazor та TypeScript, для створення динамічних
          та естетично привабливих інтерфейсів.</p>
      </div>
    </div>
  );
}

export default App;
