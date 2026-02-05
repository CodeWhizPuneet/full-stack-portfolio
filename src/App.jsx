import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import LibraryPage from "./pages/LibraryPage";
import PersonPage from "./pages/PersonPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/person" element={<PersonPage />} />
      </Routes>
    </>
  );
}

export default App;