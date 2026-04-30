import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const ProductsCard = ({ products }) => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.slice(0, 6).map((product) => (
          <Card
            key={product.id}
            className="p-5 border-none bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md rounded-[32px] shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative w-full aspect-4/3 overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={product.image}
                alt={product.products_name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <Chip
                size="lg"
                variant="flat"
                className="absolute top-3 right-3 glass backdrop-blur-md text-black border-none"
              >
                {product.category}
              </Chip>
            </div>

            <div className="mt-5 space-y-3 px-1">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 line-clamp-1">
                  {product.products_name}
                </h2>
                <span className="text-lg font-black text-blue-600">
                  ${product.price}
                </span>
              </div>

              {/* Rating & Info */}
              <div className="flex items-center gap-4 text-zinc-500 text-sm font-medium">
                <div className="flex items-center gap-1">
                  <Star size={16} fill="#FFC107" className="text-amber-400" />
                  <span>{product.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>{product.details?.gender || "Unisex"}</span>
                </div>
              </div>

              <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed">
                {product.description ||
                  "Premium quality sunglasses with UV protection and stylish frame."}
              </p>

              <Link href={`/products/${product.id}`} className="block pt-2">
                <Button
                  size="lg"
                  className="w-full font-bold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl shadow-lg hover:opacity-90 transition-opacity"
                >
                  View Details
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductsCard;
