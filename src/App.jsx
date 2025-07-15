import React from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Footer from './Components/Footer';
import MovieList from "./movieBox/MovieList";

function App() {
  return (
    <div className="container mx-auto ">
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
        </div>
      </main>
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
