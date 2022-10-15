import "./app.css";
import { buildUUID, getCurrentWeek } from "@pureadmin/utils";

export function App() {
  return (
    <>
      <p>
        {getCurrentWeek()} {buildUUID()}
      </p>
    </>
  );
}
