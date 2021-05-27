// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ContentType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const { Comment, User, Content, TimelineItem } = initSchema(schema);

export {
  Comment,
  User,
  Content,
  TimelineItem,
  ContentType
};