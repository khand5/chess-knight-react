import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <body className="App-body">
        <p>This is the body area.</p>
        <div className="App-body-content">
          <p>This is the app content area.</p>
        </div>
      </body>

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
