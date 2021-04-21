import { useState } from 'react'
import { FormControl, FormLabel, Input, Container, Heading, Button } from '@chakra-ui/react'
import { Storage, DataStore } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { User } from './models'

function CreateUser() {
  const [username, setUsername] = useState('')
  const [profilePic, setProfilePic] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const file = await Storage.put(profilePic.name, profilePic)
    
    const newUser = await DataStore.save(new User({
      username,
      profilepic: profilePic.name
    }))

    console.log(newUser)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Heading>Create a New User</Heading>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input type="text" onChange={ e => setUsername(e.target.value) }/>
        </FormControl>
        <FormControl id="profile-pic">
          <FormLabel>Profile Picture</FormLabel>
          <Input type="file" onChange={ e => setProfilePic(e.target.files[0]) }/>
        </FormControl>
        <Button type="submit">
          Create
        </Button>
      </form>
    </Container>
  )
}

export default withAuthenticator(CreateUser)