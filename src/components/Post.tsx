import { format, formatDistanceToNow } from 'date-fns'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { ChangeEvent, InvalidEvent, useState } from 'react'

interface IAuthor {
  avatarUrl: string,
  name: string,
  role: string
}

interface IContent {
  type: 'paragraph' | 'link'
  content: string
}

export interface IPost {
  id: number,
  author: IAuthor,
  publishedAt: Date,
  content: IContent[]
}

interface IPostProps {
  post: IPost
}

export function Post({ post }: IPostProps) {

  const [comments, setComments] = useState([
    'Very good!',
    'I liked it!',
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(post.publishedAt, "LLLL d, y 'at' h b")

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    addSuffix: true
  })

  function handleCreateNewComment() {
    event?.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText((event?.target as HTMLTextAreaElement).value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Please, leave a comment before publishing')
  }

  function deleteComment(comment: string) {
    const commentsWithoutDeletedOne = comments.filter(c => c !== comment)
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div> 

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === 'paragraph') {
            return (
              <p key={line.content}>{line.content}</p>
            )
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href={line.content} target="_blank">{line.content}</a>
              </p>
            )
          }
        })}
        
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea
          name="comment"
          placeholder="Leave a comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}>
            Publish
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
