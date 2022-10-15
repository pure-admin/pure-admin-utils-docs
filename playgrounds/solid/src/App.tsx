import type { Component } from "solid-js";

import styles from "./App.module.css";
import { buildUUID, getCurrentWeek } from "@pureadmin/utils";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <p>
        {getCurrentWeek()} {buildUUID()}
      </p>
    </div>
  );
};

export default App;
