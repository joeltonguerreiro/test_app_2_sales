import React, { useState, useEffect } from "react";
import "./styles/App.scss";

import SplashScreen from "./components/SplashScreen";

import Login from "./components/Login";
import Home from "./components/Home";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [logged, setLogged] = useState(true);

  useEffect(() => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {showSplash ? <SplashScreen /> : logged ? <Home /> : <Login />}
    </div>
  );
};

export default App;
