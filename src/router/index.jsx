import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "../components/loader";
import HomePage from "../pages/home";
import Footer from "../components/footer";
import Button from "../components/button";

const Routage = () => {
  return (
    <Router>
      <Loader />
      <HomePage />
      <Footer />
      <Button />
    </Router>
  );
};

export default Routage;
