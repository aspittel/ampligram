import { Auth, DataStore } from 'aws-amplify'

import { Comment, User } from '../models'

// ❓ How will Studio know the UI represents a valid model? What about relationships? Where the `user` is defined?
export function createCommentWorkflow(scope) {
  return async function generatedCommentWorkflow(event) {
    // ‼️ EC recommends using the "Select a model...Select an operation" sample code from Amplify Admin UI
    // ...
    // ...
    // throw new Error("Customer! Remove this error if this works")

    // ‼️ This is what a customer would write by hand
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.entries(formData)
    const user = await Auth.currentAuthenticatedUser()

    const comment = new Comment(data)

    comment.author = new User({
      alias: user.username,
      email: user.attributes.email,
    })

    // ❗️ How is this relationship going to be known & assigned?
    comment.timelineitemID = scope.item.id

    // ❓ Does this work?
    // item.comments.push(comment)

    // ❓ Does this work?
    // comment.timelineItem = item

    await DataStore.save(comment)
  }
}
