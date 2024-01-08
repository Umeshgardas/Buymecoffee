<<<<<<< Updated upstream
import Signup from "./pages/signup";
import Extras from "./common/components/extras/Extras";
=======
import { Route, Routes, Link } from "react-router-dom";
>>>>>>> Stashed changes
import "pure-react-carousel/dist/react-carousel.es.css";
import Profile from "./pages/profile";
import Signup from "./pages/signup";
import Layout from "./common/layouts";

function App() {
  let activeStyle = {
    textDecoration: "underline"
  };
  let isNotActive = {
    textDecoration: "none"
  };

  return (
    <div className="App">
     <Layout></Layout>
    </div>
  );
}

export default App;
