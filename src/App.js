import { gql } from "@apollo/client";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import SignInSide from "./signInSide.js";
import { AppContextProvider, useAuth } from "./utils/contex";
import { useDoMutation, useDoQuery } from "./hooks/gqlHooks";

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
      email
    }
  }
`;

function App() {
  const auth = useAuth();
  // const [getUser] = useDoQuery(GET_USERS);

  useEffect(() => {
    const token = auth.intializeToken();
    if (token) {
      // getUser();
    }
  }, []);

  return (
    <div className="App">
      <AppContextProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<SignInSide />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
