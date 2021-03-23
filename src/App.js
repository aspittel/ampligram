import { StudioProvider } from '@aws-amplify/studio'
import { TimelineScreen } from './amplify-ui'

export default function App() {
  return (
    // Step 1. Wrap your app in <StudioProvider>
    <StudioProvider>
      {/*  Step 2. Import and add your custom Studio components by screen or by individual components */}
      <TimelineScreen />
      {/* or */}
      {/* <TimelineItemCollection */}
    </StudioProvider>
  )
}
