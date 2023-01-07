import { useState } from "react";
import "./App.css";

function App() {
  const [sens, setSens] = useState("");
  function sensFilter(event) {
    setSens(event.target.value);
  }
  return (
    <div className="container">
      <form>
        <label>
          input:
          <select>
            <option value="val">Valorant</option>
            <option value="apex">Apex Legends</option>
            <option value="cm">cm/360</option>
          </select>
        </label>
        <label>
          output:
          <select>
            <option value="val">Valorant</option>
            <option value="apex">Apex Legends</option>
            <option value="cm">cm/360</option>
          </select>
        </label>
        <label>
          sensitivity:
          <input type="number" value={sens} onChange={sensFilter} />
        </label>
        <label>
          dpi:
          <input type="number" />
        </label>
      </form>
      <span>converted sens: {sens}</span>
    </div>
  );
}

export default App;
