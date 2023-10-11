import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "../config/axios";

function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState({});

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);

      await axios.post("/api/product", formData);

      setName("");
      setDescription("");
      setPrice("");
      setFile({});
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <p>Delete</p>
        </Space>
      ),
    },
  ];

  const data = products.map((product, index) => ({
    key: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
  }));

  return (
    <>
      <Navbar />
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 justify-center items-center mx-20">
        <div className="flex">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-20">
              <label className="mb-2 block">Image</label>
              <input
                type="file"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block">Name</label>
              <input
                type="text"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block">Description</label>
              <input
                type="text"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block">Price</label>
              <input
                type="text"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>

            <div className="text-center mt-6 mb-20">
              <button className="py-3 w-96 text-xl text-white bg-black rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
      <Footer />
    </>
  );
}

export default AddProductPage;
