import React, { useState } from "react";
import { useDoMutation } from "../hooks/gqlHooks";
import { gql } from "@apollo/client";
const { useNavigate } = require("react-router-dom");

const loginQuery = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

function Login(props) {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [login, { error, loading, data }] = useDoMutation(loginQuery, creds);
  const navigate = useNavigate();

  const onField = (/** @type {keyof typeof creds}*/ field, /** @type {import("react").ChangeEvent} */ event) => {
    const value = event.target.value;

    setCreds((oldCreds) => ({ ...oldCreds, [field]: value }));
  };

  const doLogin = (/** @type {SubmitEvent} */ event) => {
    event.preventDefault(); // stop the form from refreshing the page

    //take credentials

    //make the login request
    login(creds)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.login.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });

    //if success full, send to home page

    //else show error msg
  };

  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 flex-col pt-6 pb-8 mb-4" onSubmit={doLogin}>
        <h2 className="text-center text-lg font-semibold mb-4">Log in</h2>
        <input
          type="email"
          className="w-full mb-4"
          placeholder="Email address"
          name="email"
          value={creds.email}
          onChange={(e) => onField("email", e)}
          required
        />
        <input
          type="password"
          className="w-full mb-4"
          placeholder="Password"
          name="password"
          value={creds.password}
          onChange={(e) => onField("password", e)}
          required
        />
        <button type="submit" className="w-full btn btn-primary">
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
