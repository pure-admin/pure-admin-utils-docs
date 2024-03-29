import type { Component } from 'solid-js';

import styles from './App.module.css';
import { dateFormat, getCurrentWeek, uuid } from '@pureadmin/utils'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <p>{ `${dateFormat("YYYY/MM/DD HH:mm")} ${getCurrentWeek()} ${uuid()}` }</p>
    </div>
  );
};

export default App;
