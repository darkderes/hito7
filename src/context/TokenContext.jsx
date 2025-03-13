import { createContext, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, SetToken] = useState(true);
  return (
    <TokenContext.Provider
      value={{
        token,
        SetToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
