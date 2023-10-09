import React, { useEffect, useState } from "react";
import axios from "../config/axios";
import ProductItem from "./ProductItem";

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/product/all");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      {products?.map((el) => {
        return (
          <ProductItem
            key={el?.id}
            src={el?.img}
            nameProduct={el?.name}
            description={el?.description}
          />
        );
      })}
    </>
  );
}

export default ProductCard;
