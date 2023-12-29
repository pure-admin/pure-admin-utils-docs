import { dateFormat, getCurrentWeek, uuid } from '@pureadmin/utils'
// https://pure-admin-utils.netlify.app/

export default function Home() {
  return (
    <div >
      <p>{ `${dateFormat("YYYY/MM/DD HH:mm")} ${getCurrentWeek()} ${uuid()}` }</p>
    </div>
  )
}
