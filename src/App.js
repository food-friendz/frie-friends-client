
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import SignInSide from './signInSide.js'; 


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
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/sign" element={<signUpForm />} />
          <Route path="/login" element={<loginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppWrapper() {
  return (
    <ApolloProvider client={client}>
      <SignInSide /> {/* Render SignInSide here */}
      <App />
    </ApolloProvider>
  );
}


export default AppWrapper;

