import { createContext, useState } from "react";

export const TokenContext = createContext();

export default function TokenContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("userToken") || null);

  return <TokenContext.Provider value={{ token, setToken }}>{children}</TokenContext.Provider>;
}
