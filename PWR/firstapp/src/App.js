import Footer from "./footer";
import Home from "./home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";




function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
