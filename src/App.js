import React from 'react';
import { 
  ApolloProvider,
  ApolloClient, 
  InMemoryCache, 
  // gql, 
  // useQuery 
} from '@apollo/client';
import Header from './components/Header/Header';
import loginForm from './components/pages/loginForm';
import signUpForm from './components/pages/signUpForm';

const client = new ApolloClient({
  uri: 'https://foodie-friends-server-b0943e90cb47.herokuapp.com/', // Replace with your server's URL
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="App">
      <h1>Food Friendz</h1>
      {/* Add your components and routes here */}
    </div>
    </ApolloProvider>
  );
}

export default App; 