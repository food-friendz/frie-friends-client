import { createContext, useContext, useReducer } from "react";

/** @type {{user:{email: string|undefined,name:string|undefined},token:string|undefined}} */
const baseContext = {
  user: { email: undefined, name: undefined },
  token: undefined,
};

/**
 * @template {keyof baseContext} TKey
 */
function dispatch(/** @type {{type:TKey,payload: baseContext[TKey]}} */ action) {
  return;
}

const initialContext = {
  ...baseContext,
  dispatch,
};

const AppContext = createContext(initialContext);

const reducer = (state, /** @type {Parameters< typeof dispatch>} */ action) => {
  console.log("AppContextProvider.reducer fired", action);
  switch (action.type) {
    case "token":
      return { ...state, user: action.payload };
    case "user":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialContext);
  return <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>;
}

export function useAuth() {
  const { token, user, dispatch } = useContext(AppContext);

  const setToken = (token) => dispatch({ type: "token", payload: token });
  const setUser = (user) => dispatch({ type: "user", payload: user });

  const setAuth = ({ user, token }) => {
    console.log({ user, token });
    localStorage.setItem("token", token);
    setToken(token);
    setUser(user);
  };

  const logout = (afterLogoutFn = () => {}) => {
    localStorage.removeItem("token");
    setToken(undefined);
    setUser(undefined);
    afterLogoutFn();
  };

  const intializeToken = () => {
    const token = localStorage.getItem("token");
    const tokenFound = token !== null;
    console.log("intializeToken:", { token, tokenFound });
    if (tokenFound) {
      console.log("setting token on initialize", { token });
      setToken(token);
    }
    return token;
  };

  const loggedIn = token !== undefined;

  const isLoggedIn = () => {
    console.log("isloggedin: updated", { loggedin: loggedIn, token });
    return loggedIn;
  };

  return { user, token, setToken, setUser, setAuth, logout, isLoggedIn, intializeToken };
}
