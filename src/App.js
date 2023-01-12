import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [sens, setSens] = useState("");
  const [input, setInput] = useState("val");
  const [output, setOutput] = useState("cm");
  useEffect(() => {
    console.log("input:", input);
    console.log("output:", output);
  });

  function sensFilter(event) {
    setSens(event.target.value);
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleOutputChange(e) {
    setOutput(e.target.value);
  }

  return (
    <div className="container">
      <div className="io">
        <label>
          input:
          <select value={input} onChange={handleInputChange}>
            <option value="val">Valorant</option>
            <option value="apex">Apex Legends</option>
            <option value="cm">cm/360</option>
          </select>
        </label>
        <label>
          output:
          <select value={output} onChange={handleOutputChange}>
            <option value="val">Valorant</option>
            <option value="apex">Apex Legends</option>
            <option value="cm">cm/360</option>
          </select>
        </label>
      </div>
      <div className="sens">
        <label>
          sensitivity:
          <input type="number" value={sens} onChange={sensFilter} />
        </label>
        <label>
          dpi:
          <input type="number" />
        </label>
      </div>
      <p className="converted">converted sens: {sens}</p>
    </div>
  );
}

export default App;
