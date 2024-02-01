import { useEffect, useRef, useState } from "react";
import Header from "./header/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import LayoutSidebar from "../layouts/sidebar/LayoutSidebar";
import Signup from "../../pages/signup";
import Profile from "../../pages/profile";
import Dashboard from "../../pages/dashboard";
import Extras from "../../pages/extras/extras";
import Supporters from "../../pages/extras/supporters";
import MyExtras from "../../pages/extras/myextras";
import Posts from "../../pages/dashboard/posts";
import DExtras from "../../pages/dashboard/extras";
import Home from "../../pages/dashboard/home";
import Overview from "../../pages/overview";

const Layout = ({ children }) => {
  const parentRef = useRef();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <div id="navLength"></div>
      <div id="mergedSS">
        <div className="inner">
          <img src="" alt="" id="mergedgrid" />
          <img src="" alt="" id="mergedchart" />
          <div id="watermark">{/* Your watermark content here */}</div>
        </div>
      </div>
      <main className={`Layout`}>
        <Header />
        <div className="mainLayout">
          <LayoutSidebar onChange={handleInputChange} />
          <div className="mainLayout-inner" ref={parentRef}>
            <div className="mainLayout-inner_body">
              {children}
              <Routes>
                <Route path="/" element={<Dashboard />}>
                  <Route index  element={<Home />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="/extras" element={<DExtras />} />
                </Route>
                <Route path="/overview" element={<Overview />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/extras" element={<Extras />}>
                  <Route path="/extras/myextras" element={<MyExtras />}></Route>
                  <Route
                    path="/extras/supporters"
                    element={<Supporters />}
                  ></Route>
                </Route>
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Layout;
