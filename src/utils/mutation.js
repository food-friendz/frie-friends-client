// add mutations here
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
