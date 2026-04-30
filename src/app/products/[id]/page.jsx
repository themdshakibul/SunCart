import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { getproducts } from "@/data/Products";


const ProductsDetails = async ({ params }) => {
  const { id } = await params;
  const products = await getproducts();
  const product = products.find((product) => product.id == id);

  return (
    <section className="container mx-auto px-4 py-6 sm:py-10">
      <Card className="flex flex-col lg:grid lg:grid-cols-2 gap-0 rounded-2xl sm:rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full min-h-75">
          <div className="absolute glass rounded-full top-4 left-4 z-10">
            <Chip color="primary" variant="flat" size="lg">
              {product.category}
            </Chip>
          </div>
          <Image
            src={product.image}
            alt={product.products_name}
            fill
            priority
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="flex flex-col justify-center gap-5 p-5 sm:p-7 lg:p-9">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white leading-tight">
              {product.products_name}
            </h1>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
              {product.description ||
                "Premium quality product with modern design and comfort."}
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600">
              ${product.price}
            </h2>
            <div className="flex items-center gap-1 text-amber-500 font-semibold text-sm sm:text-base">
              <Star size={17} fill="currentColor" />
              <span>{product.rating}</span>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-zinc-800">
              Product Details
            </h3>

            {product.details &&
              Object.entries(product.details).map(([key, value], ind) => (
                <div
                  key={ind}
                  className="flex items-center justify-between border-b border-zinc-100 py-2 gap-4"
                >
                  <span className="capitalize text-sm text-zinc-500  shrink-0">
                    {key}
                  </span>
                  <span className="text-sm font-medium text-zinc-800 text-right">
                    {value}
                  </span>
                </div>
              ))}
          </div>

          {/* Add to Cart Button */}
          <Button
            size="lg"
            className="w-full py-6 font-bold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl shadow-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default ProductsDetails;
