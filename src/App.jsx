import React from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="container mx-auto ">
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
        </div>
      </main>
    </div>
  );
}

export default App;
