import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import PageContent from "./components/PageContent/PageContent";
import SideBar from "./components/SideBar/SideBar";
import CartContext from "./context/CartContext";
import DataContext from "./context/DataContext";
import SideBarContext from "./context/SideBarContext";
import WishlistContext from "./context/WishlistContext";
import GlobalStyle from "./GlobalStyle";
import Auth from "./pages/auth/Auth";
import Cart from "./pages/cart/Cart";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import ProductPage from "./pages/productPage/ProductPage";
import Wishlist from "./pages/wishlist/Wishlist";

const App: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [cartValue, setCartValue] = useState([]);
  const [wishlistValue, setWishlistValue] = useState([]);
  const [categories, setCategories] = useState([]);
  return (
    <>
      <GlobalStyle />
      <CartContext.Provider value={{ cartValue, setCartValue }}>
        <WishlistContext.Provider value={{ wishlistValue, setWishlistValue }}>
          <DataContext.Provider value={{ categories, setCategories }}>
            <BrowserRouter>
              <SideBarContext.Provider
                value={{ isSideBarOpen, setIsSideBarOpen }}
              >
                <Nav />
                {isSideBarOpen && <SideBar />}
              </SideBarContext.Provider>
              <PageContent>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="category/:categoryName" element={<Category />} />
                  <Route path="/product/:productId" element={<ProductPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageContent>
              <Footer />
            </BrowserRouter>
          </DataContext.Provider>
        </WishlistContext.Provider>
      </CartContext.Provider>
    </>
  );
};

export default App;
