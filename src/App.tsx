import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Henrique Schroeder"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
          <Post
            author="Henrique Schroeder"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        </main>
      </div>
    </div>
  )
}

