import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "../components/loader";
import HomePage from "../pages/home";
import Footer from "../components/footer";
import Button from "../components/button";
import { analytics } from "../../firebase/config";
import { logEvent } from "firebase/analytics";

const Routage = () => {
  useEffect(() => {
    logEvent(analytics, "notification_received");
  }, []);
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
