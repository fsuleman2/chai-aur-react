import { useState,useEffect } from "react";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

export default function App() {
  //auto link with line 12
  const [thememode, setThememode] = useState("light");
  //adding functionality
  const lightTheme = () => {
    setThememode("light");
  };
  const darkTheme = () => {
    setThememode("dark");
  };
  //actual change in theme like we are manipulating with html tag there in index.html
  useEffect(() => {
    const documentObj = document.querySelector("html");
    //removing exisitng theme
    documentObj.classList.remove("light", "dark");
    //adding theme dynamically based on toggle
    documentObj.classList.add(thememode);
  }, [thememode]);

  return (
    //step2: wraping up the Provider to that children can have access to context, we can also wrap in main.jsx also
    //Step3: accessign the default value present in context via 'value' attribute
    //destructuring it to get it directly
    <ThemeProvider value={{ thememode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* ThemeBtn */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card/>  
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
