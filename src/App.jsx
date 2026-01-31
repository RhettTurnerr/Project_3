import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import {Route, Routes} from "react-router-dom"

function App() {

  

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path = "/home" element = {<Home/>}></Route>
          <Route path = "/todo" element = {<Todo/>}></Route>
          <Route path = "/contact" element = {<Contact/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
