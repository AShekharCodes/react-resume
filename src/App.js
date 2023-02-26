import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Details from "./pages/Details";
import Preview from "./pages/Preview";
import Myresumes from "./pages/Myresumes";
import Aboutus from "./pages/Aboutus";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/preview" element={<Preview />} />
          <Route exact path="/my_resumes" element={<Myresumes />} />
          <Route exact path="/about_us" element={<Aboutus />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
