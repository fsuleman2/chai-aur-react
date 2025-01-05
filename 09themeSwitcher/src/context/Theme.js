import { createContext, useContext } from "react";
//step:1 setting up the context
export const ThemeContext = createContext({
  // jab context phele bar bana us mai already kya kya ho :  default items
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

//we can write provider in same class instead of writing it into separate file, in 08miniCpntext
export const ThemeProvider = ThemeContext.Provider;

//for custom hooks -  by this we can use just useTheme() hook instead of importing useContext and UserContext the way we did it in  08miniCpntext
//now whenever we want to store or retrieve data to store we could just use the below hook
export default function useTheme() {
  return useContext(ThemeContext);
}
