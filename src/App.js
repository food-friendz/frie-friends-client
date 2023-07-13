import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import { 
  ApolloProvider,
  ApolloClient, 
  InMemoryCache, 
  // gql, 
  // useQuery 
} from '@apollo/client';
import Header from './components/Header/Header';
import signUpForm from './pages/signUpForm';
import loginForm from './pages/loginForm';

const client = new ApolloClient({
  uri: 'https://foodie-friends-server-b0943e90cb47.herokuapp.com/', // Replace with your server's URL
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="App">
      <h1>Foodie Friends</h1>
      <signUpForm />

      {/* TRIED TO ADD ROUTES BUT GOT ERRORED OUT */}
      
      {/* <Routes>
      <Route path='/signUpForm' element={<signUpForm />} />
      </Routes> */}
      {/* Add your components and routes here */}
    </div>
    </ApolloProvider>
  );
}

export default App; 