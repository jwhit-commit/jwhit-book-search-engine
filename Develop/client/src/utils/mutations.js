import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(name: $username, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
      _id
      username
      savedBooks
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: String!) {
    saveBook(bookId: $bookId) {
      _id
      username
      savedBooks
    }
  }
`;