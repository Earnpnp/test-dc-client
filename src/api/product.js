import axios from "../config/axios";

export const getProduct = async () => {
  const res = await axios.get("/product/all");
  return res.data;
};
