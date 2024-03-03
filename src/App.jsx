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
import Category from "./components/Category/Category";
import Brands from "./components/Brands/Brands";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import Account from "./components/Account/Account";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import CheckOut from "./components/Checkout/CheckOut";

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
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route path="/product/:id" element={<Product />} />
                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoutes>
                      <CheckOut />
                    </ProtectedRoutes>
                  }
                />

                <Route
                  path="/cart"
                  element={
                    <ProtectedRoutes>
                      <Cart />
                    </ProtectedRoutes>
                  }
                />
                <Route
                  path="/wishlist"
                  element={
                    <ProtectedRoutes>
                      <WishList />
                    </ProtectedRoutes>
                  }
                />
                <Route
                  path="/account"
                  element={
                    <ProtectedRoutes>
                      <Account />
                    </ProtectedRoutes>
                  }
                />
                <Route path="/category/:categ" element={<Category />} />
                <Route path="/brands" element={<Brands />} />
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
