import React from "react";
import Header from "./Header";
import "./styles/App.css";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      {/** SwipeButtons */}
    </div>
  );
}

export default App;
