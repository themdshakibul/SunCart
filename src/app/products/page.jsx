import ProductsCard from "@/Components/Shared/ProductsCard";
import { getproducts } from "@/data/Products";

const AllproductssPage = async () => {
  const products = await getproducts();
  return (
    <section>
      <div className="container mx-auto px-2">
        <header className="py-5">
          <h2 className="text-5xl font-semibold text-center">All Products</h2>
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
