import React, { useEffect, useState } from "react";
import axios from "../config/axios";
import ProductItem from "./ProductItem";

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/product");
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
            name={el?.name}
            description={el?.description}
            price={el?.price}
            file={el?.file}
          />
        );
      })}
    </>
  );
}

export default ProductCard;
