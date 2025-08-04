import { createContext, use, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeCard() {
  const { theme, toggleTheme } = use(ThemeContext);
  console.log(theme);
  return (
    <div className="mt-10 ">
      <div className="flex justify-center">
        <div
          className={
            theme === "light"
              ? "w-1/2 mb-5 border-1 p-5"
              : "w-1/2 mb-5 border-1 p-5 bg-black text-white"
          }
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
          consequatur temporibus quia in ratione ipsa repellendus debitis optio
          praesentium eligendi, ex iusto maiores nesciunt harum, deserunt
          adipisci nulla nostrum nisi aliquid quam vero rerum deleniti natus
          eius! Rem nobis modi explicabo, voluptate quam cumque autem
          laboriosam, repudiandae temporibus, officiis facere.
        </div>
      </div>
      <button
        onClick={toggleTheme}
        className="text-white bg-blue-800 px-5 py-2 rounded-md"
      >
        Change Theme
      </button>
    </div>
  );
}

export default function Theme() {
  return (
    <ThemeProvider>
      <ThemeCard />
    </ThemeProvider>
  );
}
