import Marquee from "react-fast-marquee";
import {
  SiNike,
  SiAdidas,
  SiPuma,
  SiZara,
  SiNewbalance,
  SiReebok,
  SiFila,
  SiUnderarmour,
} from "react-icons/si";

const TopBrands = () => {
  const brands = [
    { icon: <SiNike />, name: "Nike" },
    { icon: <SiAdidas />, name: "Adidas" },
    { icon: <SiPuma />, name: "Puma" },
    { icon: <SiZara />, name: "Zara" },
    { icon: <SiNewbalance />, name: "New Balance" },
    { icon: <SiReebok />, name: "Reebok" },
    { icon: <SiFila />, name: "Fila" },
    { icon: <SiUnderarmour />, name: "Under Armour" },
  ];

  return (
    <section>
      <div className="space-y-4 flex flex-col text-center items-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Top Brands
        </h2>
        <p className="text-zinc-500 max-w-lg text-lg">
          Elevate your lifestyle with our exclusive catalog of world-class
          brands and high-quality essentials designed for you.
        </p>
      </div>
      <div className="py-10 bg-gray-50 dark:bg-zinc-950 my-10">
        <Marquee speed={60} gradient={false} pauseOnHover={true}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-2 mx-10 text-4xl text-gray-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {brand.icon}
              <span className="text-lg font-semibold uppercase tracking-widest">
                {brand.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TopBrands;
