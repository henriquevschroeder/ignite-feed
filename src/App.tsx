import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Post, type IPost } from './components/Post'
import { Sidebar } from './components/Sidebar'

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/henriquevschroeder.png',
      name: 'Henrique Schroeder',
      role: 'Full Stack Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: "What's up people! 👋",
      },
      {
        type: 'paragraph',
        content: "I just uploaded another project to my portfolio. It's a project I built during a Rocketseat course. The name of the project is Gympass API🚀",
      },
      {
        type: 'link',
        content: 'https://github.com/henriquevschroeder/gympass-api'
      }
    ],
    publishedAt: new Date('2024-06-16 21:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        content: "Hey devs! 👋",
      },
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate molestias eligendi laudantium atque facere nostrum dolorem quos, error, quaerat autem suscipit ipsum? Rerum ratione odit enim iure, a vitae.',
      },
      {
        type: 'link',
        content: 'https://github.com/diego3g'
      } 
    ],
    publishedAt: new Date('2024-06-16 19:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post} 
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

