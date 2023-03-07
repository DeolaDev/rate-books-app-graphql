/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
      id
      title
      author
      rating
      createdAt
      updatedAt
    }
  }
`;
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
      id
      title
      author
      rating
      createdAt
      updatedAt
    }
  }
`;
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
      id
      title
      author
      rating
      createdAt
      updatedAt
    }
  }
`;
export const createS3Book = /* GraphQL */ `
  mutation CreateS3Book(
    $input: CreateS3BookInput!
    $condition: ModelS3BookConditionInput
  ) {
    createS3Book(input: $input, condition: $condition) {
      id
      title
      author
      rating
      createdAt
      updatedAt
    }
  }
`;
export const updateS3Book = /* GraphQL */ `
  mutation UpdateS3Book(
    $input: UpdateS3BookInput!
    $condition: ModelS3BookConditionInput
  ) {
    updateS3Book(input: $input, condition: $condition) {
      id
      title
      author
      rating
      createdAt
      updatedAt
    }
  }
`;
export const deleteS3Book = /* GraphQL */ `
  mutation DeleteS3Book(
    $input: DeleteS3BookInput!
    $condition: ModelS3BookConditionInput
  ) {
    deleteS3Book(input: $input, condition: $condition) {
      id
      title
      author
      rating
      createdAt
      updatedAt
    }
  }
`;
