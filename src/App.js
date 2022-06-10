import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header.jsx";

import Home from "./pages/Home/Home";
import ContactMe from "./pages/ContactMe/ContactMe";
import Error from "./pages/Error/Error";

function App() {
  return (
    <div className="bg-gradient p-lg-4">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
