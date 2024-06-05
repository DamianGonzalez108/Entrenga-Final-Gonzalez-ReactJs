import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "./components/itemdetailcontainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css'
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer theme="dark"/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
