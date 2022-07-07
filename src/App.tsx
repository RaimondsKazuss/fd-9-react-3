import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import PageContent from "./components/PageContent/PageContent";
import SideBar from "./components/SideBar/SideBar";
import SideBarContext from "./context/SideBarContext";
import GlobalStyle from "./GlobalStyle";
import Cart from "./pages/cart/Cart";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";
import ProductPage from "./pages/productPage/ProductPage";

const App: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <SideBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
          <Nav />
          {isSideBarOpen && <SideBar />}
        </SideBarContext.Provider>
        <PageContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<div>wishlist</div>} />
            <Route path="category/:categoryName" element={<Category />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="*" element={<div>404 page</div>} />
          </Routes>
        </PageContent>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
