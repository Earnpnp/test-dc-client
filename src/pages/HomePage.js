import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-16 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-20">
          <ProductCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
