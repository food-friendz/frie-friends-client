import React from "react";
import { useAuth } from "../utils/contex";

export function WithAuth({ children }) {
  const auth = useAuth();

  if (!auth.isLoggedIn()) {
    return <></>;
  }

  return <>{children}</>;
}

export function WithoutAuth({ children }) {
  const auth = useAuth();
  if (auth.isLoggedIn()) {
    return <></>;
  }
  return <>{children}</>;
}
