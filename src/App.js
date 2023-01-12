import { useState } from "react";
import "./App.css";

function App() {
  const [userSens, setUserSens] = useState("");
  const [input, setInput] = useState("val");
  const [output, setOutput] = useState("apex");
  const [newSens, setNewSens] = useState("");

  function sensFilter(e) {
    let sens = e.target.value;
    setUserSens(sens);
    if (input === "val") {
      if (output === "apex") {
        setNewSens(sens * 3.18181818);
      } else if (output === "ow") {
        setNewSens(sens / 10.6);
      } else {
        setNewSens(sens);
      }
    } else if (input === "apex") {
      if (output === "val") {
        setNewSens(sens / 3.18181818);
      } else if (output === "ow") {
        setNewSens(sens / 3.333);
      } else {
        setNewSens(sens);
      }
    } else if (input === "ow") {
      if (output === "val") {
        setNewSens(sens * 10.6);
      } else if (output === "apex") {
        setNewSens(sens * 3.333);
      } else {
        setNewSens(sens);
      }
    }
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
            <option value="ow">Overwatch</option>
          </select>
        </label>
        <label>
          output:
          <select value={output} onChange={handleOutputChange}>
            <option value="val">Valorant</option>
            <option value="apex">Apex Legends</option>
            <option value="ow">Overwatch</option>
          </select>
        </label>
      </div>
      <div className="sens">
        <label>
          sensitivity:
          <input type="number" value={userSens} onChange={sensFilter} />
        </label>
      </div>
      <p className="converted">converted sens: {newSens}</p>
    </div>
  );
}

export default App;
