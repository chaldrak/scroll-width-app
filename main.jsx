import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./src/pages/home";
import Footer from "./src/components/footer";
import Loader from "./src/components/loader";
import Button from "./src/components/button";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Loader />
    <HomePage />
    <Footer />
    <Button />
  </React.StrictMode>
);
