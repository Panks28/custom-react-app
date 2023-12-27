import React from "react";
import "./App.css";
import { Image } from "../public/Images/pexels-cottonbro-studio-6153354.jpg";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Products from "./Components/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div style={{height:"250px"}}>
      <a href="/products">Products</a>
      <a href="/login">Login</a>
    
      <Router>
        <Routes>
          <Route path="/" element=<Home />> </Route>
          <Route path="/login" element=<Login />></Route>
          <Route path="/products" element=<Products />></Route>
        </Routes>
      </Router>
      </div>
  );
};

export default App;
