import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import banner from "../assets/banner.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className="pt-20">
          <img src={banner} alt="Banner" className="w-full" />
        </div>
        <div className="mx-14">
          <h1 className="mt-20 ml-2 text-[36px] font-semibold font-vidaloka">
            NEW !
          </h1>
          <div className="mt-8 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            <ProductCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
