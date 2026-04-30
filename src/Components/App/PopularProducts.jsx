import { getproducts } from "@/data/Products";
import { Flame } from "lucide-react";
import ProductsCard from "../Shared/ProductsCard";

const PopularProducts = async () => {
  const products = await getproducts();
  console.log(products);

  return (
    <section className="container mx-auto px-4 py-16">
      <header className="flex items-center justify-center gap-2 mb-10">
        <Flame className="text-orange-500" fill="currentColor" size={28} />
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Popular Products
        </h2>
      </header>

      <div>
        <ProductsCard key={products.id} products={products} />
      </div>
    </section>
  );
};

export default PopularProducts;
