import { createContext, useContext } from "react";

const GoalsContext = createContext();

export const GoalsProvider = ({ children, booksQuantity }) => (
  <GoalsContext.Provider value={booksQuantity}>
    {children}
  </GoalsContext.Provider>
);

export const useGoals = () => useContext(GoalsContext);
