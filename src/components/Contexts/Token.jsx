import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";

export const TokenContext = createContext();

export default function TokenContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("userToken") || null);
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  return (
    <TokenContext.Provider value={{ token, setToken, user }}>{children}</TokenContext.Provider>
  );
}
