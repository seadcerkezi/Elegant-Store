import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./CartContext";
import Navbar from "./Components/Navbar/Navbar";
import Bag from "./Pages/Bag/Bag";
import Home from "./Pages/Home/Home";
import Kids from "./Pages/Kids/Kids";
import Men from "./Pages/Men/Men";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Women from "./Pages/Women/Woman";
import Favourite from "./Pages/Favourite/Favourite";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
