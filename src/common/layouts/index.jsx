import { useEffect, useRef, useState } from "react";
import Header from "./header/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import LayoutSidebar from "../layouts/sidebar/LayoutSidebar";
import Signup from "../../pages/signup";
import Profile from "../../pages/profile";
import Dashboard from "../../pages/dashboard";

const Layout = ({ children }) => {
  const parentRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

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
          <LayoutSidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <div className="mainLayout-inner" ref={parentRef}>
            <div className="mainLayout-inner_body">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Layout;
