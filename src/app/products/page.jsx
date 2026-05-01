import ProductsCard from "@/Components/Shared/ProductsCard";
import { getproducts } from "@/data/Products";

const AllproductssPage = async () => {
  const products = await getproducts();
  return (
    <section>
      <div className="container mx-auto px-2">
        <header className="flex flex-col items-center justify-center text-center space-y-4 mt-5">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
            All Products
          </h2>
          <p className="text-zinc-500 max-w-lg text-lg">
            Discover trendy summer essentials for your perfect sunny days.
          </p>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllproductssPage;
