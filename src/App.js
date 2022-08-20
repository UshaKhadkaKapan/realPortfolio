import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import Contact from "./pages/Contact";
import "./styles/Home.css";
import "./styles/header-footer.css";
import "./styles/casorel.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
