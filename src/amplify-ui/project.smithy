namespace my-studio-project

use amplify.primitives#Amplify

resource TimelineScreen {
  children: TimelineScreenChildren
}

list TimelineScreenChildren {
  member: TimelineItemCard
}

[
  {
    __typename: 'Component',
    as: 'div',
    props: {...},
    children: [
      {
        __type: 'Component,
        as: 'p'
      }
    ]
  }
]

resource TimelineItemCard {
  item: 'TODO'
  children: TimelineItemCardChildren
}

list TimelineItemCardChildren {
  member: Box
  props: BoxProps
}

structure TimelineItemCard {
  item: TimelineItemResource

  children: BoxList
}

list BoxList {
  member: Box
}


