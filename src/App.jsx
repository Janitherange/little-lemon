import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import TableBooking from "./pages/TableBooking/TableBooking.jsx";
import Reservations from "./pages/Reservations/Reservations.jsx";
import Menu from "./pages/Menu/Menu.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/book" element={<TableBooking />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
