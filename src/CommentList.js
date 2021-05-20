import { useEffect, useState } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { Box, Text } from '@chakra-ui/react'

import { Comment } from './models'

export function CommentList ({ postId }) {
  const [comments, setComments] = useState([])
  useEffect(() => {
    const getComments = async () => {

    }
    getComments()
  }, [postId])

  return (
    <Box> 
      {comments.map(comment => (
        <Text key={comment.id}>
          <Text as='b'>{comment.author.username} </Text>
          {comment.body}
        </Text>))}
    </Box>
  )
}
