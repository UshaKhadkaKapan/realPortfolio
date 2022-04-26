import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/project" exact component={Projects} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/contact" exact component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
