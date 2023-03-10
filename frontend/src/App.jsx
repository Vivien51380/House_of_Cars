import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyPage from "./pages/CompanyPage";
import Home from "./pages/Home";
import CarReservationForm from "./pages/CarReservationForm";
import SeeMore from "./pages/SeeMore";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Credits from "./pages/Credits";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:id" element={<SeeMore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CompanyPage" element={<CompanyPage />} />
        <Route path="/booking/:id" element={<CarReservationForm />} />
        <Route path="/Credits" element={<Credits />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
