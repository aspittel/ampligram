import { useState, useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { Container } from '@chakra-ui/react'

import { TimelineItem } from './models'

export function Timeline ({ children }) {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    const getTimeline = async () => {
    }
    getTimeline()
  }, [])

  return (
    <Container>
      {timeline.map(post => children({ post }))}
    </Container>
  )
}
