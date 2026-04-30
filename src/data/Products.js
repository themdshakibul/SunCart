export const getproducts = async () => {
  const res = await fetch("http://localhost:3000/product.json");
  const data = await res.json();
  return data;
};
