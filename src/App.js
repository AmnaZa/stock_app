
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Stock from "./components/Stock";
import "./styles.css";

export default function App() {

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
      </Routes>
    </Router>
  );
};


