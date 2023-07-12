import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Replace with your server's URL
  cache: new InMemoryCache(),
});

const GET_EVENTS = gql`
  query GetEvents {
    events {
      _id
      title
      description
    }
  }
`;

const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      _id
      name
      description
    }
  }
`;

const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      firstName
      lastName
    }
  }
`;

function App() {
  const { loading: loadingEvents, error: errorEvents, data: dataEvents } = useQuery(GET_EVENTS);
  const { loading: loadingRestaurants, error: errorRestaurants, data: dataRestaurants } = useQuery(GET_RESTAURANTS);
  const { loading: loadingUsers, error: errorUsers, data: dataUsers } = useQuery(GET_USERS);

  if (loadingEvents || loadingRestaurants || loadingUsers) return <p>Loading...</p>;
  if (errorEvents || errorRestaurants || errorUsers) return <p>Error: {errorEvents?.message || errorRestaurants?.message || errorUsers?.message}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Events</h1>
        {dataEvents.events.map((event) => (
          <div key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}

        <h1>Restaurants</h1>
        {dataRestaurants.restaurants.map((restaurant) => (
          <div key={restaurant._id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
          </div>
        ))}

        <h1>Users</h1>
        {dataUsers.users.map((user) => (
          <div key={user._id}>
            <h3>{user.firstName} {user.lastName}</h3>
          </div>
        ))}
      </header>
    </div>
  );
}

function AppWrapper() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

export default AppWrapper;

