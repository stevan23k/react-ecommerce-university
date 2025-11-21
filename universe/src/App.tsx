import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import DetallesPage from "./pages/detalles";
import { Routes, Route } from "react-router";

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detalles/:id" element={<DetallesPage />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
