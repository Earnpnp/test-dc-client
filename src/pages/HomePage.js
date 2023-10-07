import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-20">
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default Home;
