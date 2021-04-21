import { ChakraProvider, Box, Stack } from '@chakra-ui/react'
import { Route, Link } from 'react-router-dom'

import { Timeline } from './Timeline'
import { Card } from './Card'
import { CommentList } from './CommentList'
import { CommentForm } from './CommentForm'
import CreateUser from './CreateUser'
import UserList from './UserList'

export default function App () {
  return (
    <ChakraProvider>
      <Box w="100%" bg="teal" color="white" p={5}>
        <Stack spacing={4} direction="row" align="center">
          <Link to="/">Home</Link>
          <Link to="/create-user">Create User</Link>
          <Link to="/users">Users</Link>
        </Stack>
      </Box>
      <Route path='/users'>
        <UserList/>
      </Route>
      <Route path='/create-user'>
        <CreateUser/>
      </Route>
      <Route path='/' exact>
        <Timeline>
          {({ post }) => (
            <Card post={post} key={post.id}>
              <Card.Header author={post.author} />
              <Card.Main content={post.content} />
              <Card.Footer
                author={post.author}
                description={post.description}
              >
                <CommentList postId={post.id} />
              </Card.Footer>
              <CommentForm />
            </Card>
          )}
        </Timeline>
      </Route>
    </ChakraProvider>
  )
}
