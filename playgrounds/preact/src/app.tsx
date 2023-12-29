import './app.css'
import { dateFormat, getCurrentWeek, uuid } from '@pureadmin/utils'

export function App() {
  return (
    <>
      <p>{ `${dateFormat("YYYY/MM/DD HH:mm")} ${getCurrentWeek()} ${uuid()}` }</p>
    </>
  );
}
