// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ContentType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const { Content, TimelineItem, User, Comment } = initSchema(schema);

export {
  Content,
  TimelineItem,
  User,
  Comment,
  ContentType
};