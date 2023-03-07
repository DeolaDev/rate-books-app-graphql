/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      author
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        author
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getS3Book = /* GraphQL */ `
  query GetS3Book($id: ID!) {
    getS3Book(id: $id) {
      id
      title
      author
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listS3Books = /* GraphQL */ `
  query ListS3Books(
    $filter: ModelS3BookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listS3Books(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        author
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
