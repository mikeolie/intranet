import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Error404 from "./components/404";

import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import CreatePost from "./pages/CreatePost";

const IntranetRoutes: FunctionComponent = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<CreatePost />} />
        <Route element={<Error404 />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default IntranetRoutes;
