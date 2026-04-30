import HeroSlider from "@/Components/App/HeroSlider";
import PopularProducts from "@/Components/App/PopularProducts";
import SummerCareTips from "@/Components/App/SummerCareTips";
import TopBrands from "@/Components/App/TopBrands";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSlider />
        <PopularProducts />
        <SummerCareTips />
        <TopBrands />
      </main>
    </div>
  );
}
