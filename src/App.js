import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Solution from "./pages/Solution";
import AppLayout from "./components/AppLayout"
import Home from "./pages/Home";


function App() {
  return (
    <div>

      <Router>
        {/* <Header /> */}
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/solution" element={<Solution />} />
          </Routes>
        </AppLayout>
        {/* <Footer /> */}
      </Router>





    </div>
  );
}

export default App;
