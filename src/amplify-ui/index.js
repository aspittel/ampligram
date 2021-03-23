// Auto-generated via `amplify pull`

import {
  AddIcon,
  Avatar,
  Box,
  ChatIcon,
  Collection,
  Container,
  EmailIcon,
  Flex,
  Input,
  IconButton,
  Media,
  Spacer,
  Text,
} from '@aws-amplify/studio'

// ❓ Will `amplify pull` duplicate `src/models` for easier reference here?
// Otherwise, we would have to path OUTSIDE of `amplify-ui` to `src/models` ("contract boundary")
import { Comment, TimelineItem } from '../models'
import * as workflows from './workflows'

export function TimelineScreen() {
  return (
    <Container>
      <TimelineItemCollection />
    </Container>
  )
}

/**
 * 1. Customer in Studio chooses a "Collection"
 * 2. Bind it to the `TimelineItem` model
 * 3. Customer chooses an existing component for children or "Create a new component"
 */
export function TimelineItemCollection() {
  return (
    <Collection model={TimelineItem}>
      {(item) => <TimelineItemCard item={item} key={item.id} />}
    </Collection>
  )
}

export function TimelineItemCard({ item }) {
  return (
    <Box maxW="lg" borderWidth="1px" borderRadius="md" overflow="hidden" m={5}>
      <Box p={2}>
        <Flex>
          <Box d="flex" alignItems="baseline">
            <Avatar name={item.author.alias} />
            <Box ml={2}>
              <Text fontWeight="bold" fontSize="sm">
                {item.author.alias}
              </Text>
            </Box>
          </Box>
          <Spacer />
          <Box p={2}>&hellip;</Box>
        </Flex>
      </Box>

      <Box>
        <Media media={item.content} />
      </Box>

      <Box ml={3}>
        <Box>
          <IconButton icon={<AddIcon />} variant="ghost" />
          <IconButton icon={<ChatIcon />} variant="ghost" />
          <IconButton icon={<EmailIcon />} variant="ghost" />
        </Box>
        <Box mt={3}>
          <Text>
            <Text as="b">{item.author.alias}</Text>
            &nbsp;
            {item.description}
          </Text>
        </Box>
        <Collection
          model={Comment}
          predicate={(comment) => comment.timelineitemID === item.id}
        >
          {(comment) => (
            <Text key={comment.id}>
              <Text as="b">{comment.author.alias} </Text>
              {comment.body}
            </Text>
          )}
        </Collection>
        <Box mt={1} mb={2}>
          <Text fontSize="xs" color="gray.500">
            2 HOURS AGO
          </Text>
        </Box>
      </Box>

      <form onSubmit={workflows.createCommentWorkflow({ item })}>
        <Input name="body" placeholder="Add a comment..." />
      </form>
    </Box>
  )
}
