import React, { memo, useMemo } from 'react'

export default memo(({ comments }) => {
  const renderedComments = useMemo(() =>
    comments.map((comment) => {
      let content

      switch (comment.status) {
        default:
        case 'approved':
          content = comment.content
          break
        case 'pending':
          content = 'This comment is awaiting moderation'
          break
        case 'rejected':
          content = 'This comment has been rejected'
          break
      }

      return <li key={comment.id}>{content}</li>
  }), [comments])

  return <ul>{renderedComments}</ul>
})
