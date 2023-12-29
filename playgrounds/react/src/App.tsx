import './App.css'
import { dateFormat, getCurrentWeek, uuid } from '@pureadmin/utils'

function App() {
  return (
    <div className="App">
      <p>{ `${dateFormat("YYYY/MM/DD HH:mm")} ${getCurrentWeek()} ${uuid()}` }</p>
    </div>
  );
}

export default App;
