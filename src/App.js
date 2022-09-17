import { useState } from "react";
import "./styles.css";

export default function App() {
  const arrs = ["rupa", "mina", "raj", "ravi", "ram"];
  return (
    <div className="App">
      {arrs.map((it) => {
        return (
          <ul>
            <li>{it}</li>
          </ul>
        );
      })}
    </div>
  );
}
