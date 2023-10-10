import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "../config/axios";

function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState({});

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

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
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
        <table>
          <thead>
            <tr>
              <th scope="row">#</th>
              <th scope="row">name</th>
              <th scope="row">description</th>
              <th scope="row">price</th>
              <th scope="row">action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>name</td>
              <td>description</td>
              <td>price</td>
              <td>delete</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default AddProductPage;
