import React, { useState, useEffect } from "react";

import Routes from "./routes";
import "./styles/App.scss";

import SplashScreen from "./components/SplashScreen";

type Props = {
  store: any
}

const App: React.FC<Props> = (props) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return <Routes />;
};

export default App;
