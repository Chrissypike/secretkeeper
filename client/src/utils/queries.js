import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
      notes {
        _id
        noteText
      }
    }
  }
`;

export const QUERY_NOTES = gql`
  query getNotes {
    notes {
      _id
      noteText
      noteCreator
    }
  }
`;

export const QUERY_SINGLE_NOTE = gql`
  query getSingleNote($noteId: ID!) {
    note(noteId: $noteId) {
      _id
      noteText
      noteCreator
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
      notes {
        _id
        noteText
        noteCreator
      }
    }
  }
`;