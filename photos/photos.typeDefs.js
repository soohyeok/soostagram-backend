import { gql } from "apollo-server-core";

export default gql`
  type Photo {
    id: Int!
    user: User!
    file: String!
    caption: String
    likes: Int!
    comments: Int!
    hashtags: [Hashtag]
    createdAt: String!
    updatedAt: String!
    isMine: Boolean!
  }
  type Hashtag {
    id: Int!
    hashtag: String
    photos(page: Int!): [Photo]
    createdAt: String!
    updatedAt: String!
    totalPhotos: Int!
  }
  type Like { #un-necessary
    id: Int!
    photo: Photo!
    createdAt: String!
    updatedAt: String!
  }
`;
