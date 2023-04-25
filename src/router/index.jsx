import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "../components/loader";
import HomePage from "../pages/home";
import Footer from "../components/footer";
import Button from "../components/button";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-259513289-1";
ReactGA.initialize(TRACKING_ID);

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
