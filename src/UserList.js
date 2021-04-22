import { useEffect, useState } from 'react'
import { DataStore, Storage } from 'aws-amplify'
import { Container, Heading, Avatar, Flex } from '@chakra-ui/react'
import { User } from './models'

export default function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const pullData = async () => {
      const users = await DataStore.query(User)
      const getImageLinks = async () => {
        const usersWithPics = []

        for (let user of users) {
          const userPics = await Storage.get(user.profilepic)
          usersWithPics.push({
            username: user.username,
            profilepic: userPics,
            id: user.id
          })
        }
          return usersWithPics
      }
      const completedUsers = await getImageLinks()
      setUsers(completedUsers)
    }
    pullData()
  }, [])
  return (
    <Container>
      {users.map(user => (
        <Flex mt={2}>
          <Avatar src={user.profilepic} mr={2}/>
          <Heading key={user.id}>{user.username}</Heading>
        </Flex>
      ))}
    </Container>
  )
}
