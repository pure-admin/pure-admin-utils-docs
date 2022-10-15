import "./App.css";
import { buildUUID, getCurrentWeek } from "@pureadmin/utils";

function App() {
  return (
    <div className="App">
      <p>
        {getCurrentWeek()} {buildUUID()}
      </p>
    </div>
  );
}

export default App;
