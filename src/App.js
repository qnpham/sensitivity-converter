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
        <div className="io">
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
      </form>
      <p className="converted">converted sens: {sens}</p>
    </div>
  );
}

export default App;
