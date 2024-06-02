import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Pricing from "./pages/Pricing/Pricing";
import Solution from "./pages/Solution/Solution";
import AppLayout from "./components/AppLayout"


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
