// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ContentType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const { Content, Comment, User, TimelineItem } = initSchema(schema);

export {
  Content,
  Comment,
  User,
  TimelineItem,
  ContentType
};