import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/henriquevschroeder.png" />
          <div className={styles.authorInfo}>
            <strong>Henrique Schroeder</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <time title="June 6, 2024 at 9pm" dateTime="2024-06-16 21:00:00">Published 1h ago</time>
      </header>

      <div className={styles.content}>
        <p>What's up people! 👋</p>
        <p>I just uploaded another project to my portfolio. It's a project I built during a Rocketseat course. The name of the project is Gympass API🚀</p>
        <p>
          <a href="https://github.com/henriquevschroeder/gympass-api">  https://github.com/henriquevschroeder/gympass-api</a>
        </p>
        <p>
          <a href="#">#newproject</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea placeholder="Leave a oomment" />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
