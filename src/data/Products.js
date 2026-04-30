export const getproducts = async () => {
  // const res = await fetch("http://localhost:3000/product.json");
  const res = await fetch("https://sun-cart-seven.vercel.app/product.json", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};
