import { Navigate, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

import AboutUs from "./components/main/AboutUs/AboutUs";
import BlogList from "./components/main/grid/BlogList";
import BlogPost from "./components/main/grid/BlogPost";
import CartContextProvider from "./components/context/CartContextProvider";
import CartPage from "./components/main/shop/CartPage";
import Checkout from "./components/main/shop/Checkout";
import GridBlog from "./components/main/grid/GridBlog";
import GridGallery from "./components/main/gallery/GridGallery";
import GridShop from "./components/main/shop/gridShop/GridShop";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import Offer from "./components/main/offer/Offer";
import OurTeam from "./components/main/OurTeam";
import PricingList from "./components/main/PricingList";
import ScrollToTop from "./components/shared/ScrollToTop";
import SearchList from "./components/SearchList";
import SearchedBlogs from "./components/shared/SearchedBlogs";
import Shop from "./components/main/shop/Shop";
import SingleProduct from "./components/main/shop/SingleProduct";
import Testimonals from "./components/main/testimonals/Testimonals";

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState("all");

  return (
    <Layout>
      <ScrollToTop />
      <CartContextProvider>
        <CategoryContext.Provider value={{ category, setCategory }}>
          <Routes>
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/testimonals" element={<Testimonals />} />
            <Route path="/pricinglist" element={<PricingList />} />
            <Route path="/gridblog" element={<GridBlog />} />
            <Route path="/bloglist" element={<BlogList />} />
            <Route path="/blogpost/:slug" element={<BlogPost />} />
            <Route path="/gridgallery" element={<GridGallery />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/gridshop" element={<GridShop />} />
            <Route path="/singleproduct/:slug" element={<SingleProduct />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/searchlist" element={<SearchList />} />
            <Route path="searchedblog" element={<SearchedBlogs />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
        </CategoryContext.Provider>
      </CartContextProvider>
    </Layout>
  );
}

export default App;
