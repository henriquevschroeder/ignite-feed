import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" />

      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/105258159?v=4" className={styles.avatar} />
        <strong>Henrique Schroeder</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit your profile
        </a>
      </footer>
    </aside>
  )
}