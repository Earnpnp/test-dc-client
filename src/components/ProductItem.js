import React from "react";
import { Card } from "antd";
const { Meta } = Card;

function ProductItem({ name, description, price, file }) {
  console.log(file);
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img alt="example" src={`http://localhost:8000/assets/${file}`} />
        }
      >
        <Meta title={name} description={description} />
        <p className="mt-2 flex justify-end">฿ {price}</p>
      </Card>
    </>
  );
}

export default ProductItem;
