import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import TableBooking from "./pages/TableBooking/TableBooking.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/book" element={<TableBooking />} />
    </Routes>
  );
}

export default App;
