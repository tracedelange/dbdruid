import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Header";
import BlogRecordPage from "./BlogRecordPage";
import BlogIndexPage from "./BlogIndexPage";
import Landing from "./Landing";
import ErrorPage from "./ErrorPage";
import Footer from "./Footer";
import Reubeen from "./Reubeen";
import About from "./About";
import ReubeenPP from "./ReubeenPP";
import Support from "./Support";

const BlogRouteContainer = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/blogs" element={<BlogIndexPage />} />
        <Route path="/blog/:id" element={<BlogRecordPage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/reubeen" element={<Reubeen />} /> */}
        <Route path="/reubeen/privacy_policy" element={<ReubeenPP />} />
        <Route path="/reubeen/support" element={<Support />} />
        <Route errorElement={<ErrorPage/>} path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </>
  );
};

export default BlogRouteContainer;
