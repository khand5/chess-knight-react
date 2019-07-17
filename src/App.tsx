import React from "react";
import "./App.css";
import Clock from "./components/Clock/Clock";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Chessboard from "./components/Chessboard/Chessboard";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <body className="App-body">
        <div className="App-body-content">
          <Clock />
          <p>Empty Space</p>
          <Chessboard />
        </div>
      </body>

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
