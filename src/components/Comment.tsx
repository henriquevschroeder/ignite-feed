import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Henrique Schroeder</strong>
              <time title="June 6, 2024 at 9pm" dateTime="2024-06-16 21:00:00">Around 1h ago</time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>        
          </header>
          
          <p>Really cool! 😄</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Cheer <span>21</span>
          </button>
        </footer>
      </div>
    </div>
  )
}