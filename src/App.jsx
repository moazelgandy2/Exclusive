import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Product from "./components/Product/Product";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WIshList/WishList";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import TokenContextProvider from "./components/Contexts/Token.jsx";
import { Toaster } from "@/components/ui/sonner";
import WishListContextProvider from "./components/Contexts/WishList";
import CartContextProvider from "./components/Contexts/CartContext";

function App() {
  return (
    <>
      <Router>
        <TokenContextProvider>
          <WishListContextProvider>
            <CartContextProvider>
              <NavBar />
              <Toaster position="bottom-center" />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </CartContextProvider>
          </WishListContextProvider>
        </TokenContextProvider>
      </Router>
    </>
  );
}

export default App;
