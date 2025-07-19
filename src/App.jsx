import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";
import MovieList from "./movieBox/MovieList";
import { MovieContext, ThemeContext } from "./Context";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <MovieContext.Provider value={{ cartData, setCartData }}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className="container mx-auto h-full w-full">
          <Header />
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <SideBar />
            </div>
          </main>
          <MovieList />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </MovieContext.Provider>
  );
}

export default App;
