import React from "react";
// 1. Import BrowserRouter and other necessary components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ActivitiesSection from "./components/ActivitiesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonals";
import CtaSection from "./components/ctaSection";
import Footer from "./components/Footer";
import ActivitiesPage from "./pages/ActivitiesPage";
import AboutUs from "./pages/AboutusPage";
import ContactUs from "./pages/ContactusPage";
import Shop from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import FeaturedCollections from "./components/FeaturedCollection";
import WomenCollectionPage from "./pages/WomenCollectionPage";
import MensPage from "./pages/MensCollectionPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import ProductsPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailedPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    // 2. Wrap everything in the Router
    <Router>
      <Navbar />
      
      {/* 3. Define your Routes */}
      <Routes>
        {/* This is your Main Landing Page */}
        <Route path="/" element={
          <>
            <HeroSection/>
            <FeaturedCollections/>
            <ActivitiesSection/>
            <WhyChooseUs/>
            {/* <ShopByCollection/> */}
            <Testimonials/>
            <CtaSection/>
          </>
        } />

                <Route path="/shop" element={<Shop/>} />
                <Route path="/cart" element={<CartPage/>} />
                <Route path="/register" element={<RegisterPage/>} />

        <Route path="/activitypage" element={<ActivitiesPage/>} />
                <Route path="/products/:category" element={<ProductsPage/>} />
  <Route path="/product/:id" element={<ProductDetailsPage />} />

                <Route path="/womencollectoionpage" element={<WomenCollectionPage/>} />
                <Route path="/menscollectoionpage" element={<MensPage/>} />
                <Route path="/Accesssoriespage" element={<AccessoriesPage/>} />

        <Route path="/about" element={<AboutUs/>} />
                <Route path="/contact" element={<ContactUs/>} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;