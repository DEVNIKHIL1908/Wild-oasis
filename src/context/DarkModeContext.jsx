import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkToggleContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(window.matchMedia("(prefers-color-scheme: dark)").matches, "isDarkMode");

  useEffect(function(){
    if(isDarkMode){
        document.documentElement.classList.add("dark-mode")
    }else{
        document.documentElement.classList.remove("dark-mode")
        document.documentElement.classList.add("light-mode")

    }
  },[isDarkMode])
  function toggleMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <DarkToggleContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </DarkToggleContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkToggleContext);
  if (context == undefined)
    throw new Error("Dark mode context was used outside the provider");
  return context;
}

export  { DarkModeProvider, useDarkMode };
