import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";
import Coins from "./components/Home";
import Exchanges from "./components/Exchanges";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        {/* <Route path="/coins/:id" element={<CoinDetails />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
