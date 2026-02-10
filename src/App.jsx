import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import Todo from "./pages/Todo/Todo";
import {Route, Routes} from "react-router-dom"

function App() {

  

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path = "/" element = {<Todo/>}></Route>
          <Route path = "/contact" element = {<Contact/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
