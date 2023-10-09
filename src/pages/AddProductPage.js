import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "../config/axios";

function AddProductPage() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [file, setFile] = useState({});
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    e.preventDefault();

    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleClickAdd = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("img", file); // Use 'file' instead of 'addImage'
      formData.append("name", name);
      formData.append("description", description);
      formData.append("type", type);
      formData.append("price", price);
      formData.append("quantity", quantity);
      const res = await axios.post("/product/addProduct", formData);
      console.log(res);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-96">
          <h1 className="text-3xl font-semibold text-center mb-10">
            Add Product
          </h1>

          <form>
            {imagePreviewUrl && (
              <div className="mb-4">
                <img
                  src={imagePreviewUrl}
                  alt="Preview"
                  className="block rounded-lg w-[300px]"
                />
              </div>
            )}
            <div className="mb-4">
              <label className="mb-2 block">Product Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block py-2 px-4 w-full border rounded-lg"
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
              <label className="mb-2 block">Type</label>
              <input
                type="text"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setType(e.target.value)}
                value={type}
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

            <div className="mb-4">
              <label className="mb-2 block">Quantity</label>
              <input
                type="text"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
              />
            </div>

            <div className="text-center mt-6 mb-20">
              <button
                className="py-3 w-96 text-xl text-white bg-black rounded-lg"
                onClick={handleClickAdd}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddProductPage;
