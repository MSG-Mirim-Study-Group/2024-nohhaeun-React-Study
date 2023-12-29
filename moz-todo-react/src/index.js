import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

const BTN = [
  { id: "btn-0", name: "All" },
  { id: "btn-1", name: "Active" },
  { id: "btn-2", name: "Completed" }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="노하은" tasks={DATA} buttons={BTN}/>
  </React.StrictMode>
);

