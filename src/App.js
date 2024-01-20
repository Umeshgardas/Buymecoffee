import { Route, Routes, Link } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import Profile from "./pages/profile";
import Signup from "./pages/signup";
import Layout from "./common/layouts";
import { useSearch } from "rsuite/esm/Picker";
import { useState } from "react";
import Dashboard from "./pages/dashboard";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className="App">{isAuth ? <Layout></Layout> : <Signup />}</div>
  );
}

export default App;
