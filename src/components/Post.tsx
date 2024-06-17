import { format, formatDistanceToNow } from 'date-fns'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'



interface IPostProps {
  author: {
    avatarUrl: string,
    name: string,
    role: string
  },
  publishedAt: Date,
  content: { type: string, content: string }[]
}

export function Post({ author, content, publishedAt }: IPostProps) {

  const [comments, setComments] = useState([
    'Very good!',
    'I liked it!',
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "LLLL d, y 'at' h b")

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true
  })

  function handleCreateNewComment() {
    event?.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText((event?.target as HTMLTextAreaElement).value)
  }

  function deleteComment(comment: string) {
    const commentsWithoutDeletedOne = comments.filter(c => c !== comment)
    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div> 

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
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
        />

        <footer>
          <button type="submit">Publish</button>
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
