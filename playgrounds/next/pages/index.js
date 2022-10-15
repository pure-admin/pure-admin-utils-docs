import styles from '../styles/Home.module.css'
import { getCurrentWeek } from "@pureadmin/utils"

export default function Home() {
  return (
    <div className={styles.container}>
      <p>{getCurrentWeek()} </p>
    </div>
  )
}
