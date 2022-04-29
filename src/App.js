import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import "./styles/Home.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={Home} />
          <Route path="/projects" element={Projects} />
          <Route path="/courses" element={Courses} />
          <Route path="/contact" element={Contact} />
        </Routes> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
