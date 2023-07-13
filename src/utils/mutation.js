// add mutations here

// 
// 
// TURN QUERIES INTO MUTATIONS
// 
import { gql } from '@apollo/client';

export const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      _id
      name
      description
    }
  }
`;

export const GET_RESTAURANT = gql`
  query GetRestaurant($id: ID!) {
    restaurant(_id: $id) {
      _id
      name
      description
    }
  }
`;

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      _id
      title
      description
    }
  }
`;

export const GET_EVENT = gql`
  query GetEvent($id: ID!) {
    event(_id: $id) {
      _id
      title
      description
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      firstName
      lastName
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(_id: $id) {
      _id
      firstName
      lastName
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
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
        email
      }
    }
  }
`;

