import { getproducts } from "@/data/Products";
import { Flame } from "lucide-react";
import ProductsCard from "../Shared/ProductsCard";

const PopularProducts = async () => {
  const products = await getproducts();
  const topProducts = products.slice(6, 9);

  return (
    <section className="container mx-auto px-4 py-16">
      <header className="flex flex-col items-center justify-center text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
          Popular Products
        </h2>
        <p className="text-zinc-500 max-w-lg text-lg">
          Find the best deals on our entire catalog of high-quality essentials.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {topProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
