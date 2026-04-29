"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const banners = [
  {
    id: 1,
    tag: "Hot Deals 🔥",
    title: "The Trending Summer Knits Trends",
    desc: "Don't miss out! Get your hands on the most wanted cardigan styles of the season before they're gone.",
    price: "Starting at $39",
    image:
      "https://i.ibb.co.com/Wvngkxyk/philipp-arlt-8-Ey-B-Rva-Wt-Y-unsplash-Photoroom.png",
  },
  {
    id: 2,
    tag: "Summer Sale ",
    title: "Summer's Hottest Cardigan Trends",
    desc: "Stay breezy and stylish. Grab our premium lightweight summer knits at unbeatable prices.",
    price: "Starting at $39",
    image:
      "https://i.ibb.co.com/Wvngkxyk/philipp-arlt-8-Ey-B-Rva-Wt-Y-unsplash-Photoroom.png",
  },
];

export default function HeroSlider() {
  return (
    <section className="container mx-auto px-4 py-4 md:py-8">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{
          clickable: true,
        }}
        className="heroSwiper rounded-2xl md:rounded-3xl overflow-hidden"
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-linear-to-r from-[#f8f8f8] to-[#eef4ff]">
              <div className="grid lg:grid-cols-2 items-center min-h-125 lg:min-h-150">
                {/* Left Content - Text & Buttons */}
                <div className="px-6 py-12 md:px-16 lg:px-20 space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
                  <span className="inline-block bg-black text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                    {item.tag}
                  </span>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                    {item.title}
                  </h1>

                  <p className="text-sm md:text-lg text-gray-600 leading-relaxed md:leading-9 max-w-xl mx-auto lg:mx-0">
                    {item.desc}
                  </p>

                  <div className="text-xl md:text-2xl font-semibold">
                    {item.price}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="group bg-black text-white px-7 py-3.5 md:px-8 md:py-4 rounded-full flex items-center justify-center gap-3 hover:scale-105 duration-300">
                      Shop Now
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 duration-300"
                      />
                    </button>

                    <button className="border-2 border-black px-7 py-3.5 md:px-8 md:py-4 rounded-full hover:bg-black hover:text-white duration-300">
                      Explore More
                    </button>
                  </div>
                </div>

                {/* Right Content - Image */}
                <div className="relative flex justify-center items-end h-full pt-10 lg:pt-0 order-1 lg:order-2">
                  {/* decorative circle */}
                  <div className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full bg-white/50 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                  <div className="relative w-70 sm:w-100 md:w-125 lg:w-full max-w-150 aspect-square">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority
                      className="object-contain z-10 hover:scale-105 duration-500"
                    />
                  </div>

                  {/* floating sale badge - hidden on very small screens, smaller on mobile */}
                  <div className="hidden sm:flex absolute top-10 right-10 md:top-20 md:right-20 bg-white shadow-xl rounded-full w-20 h-20 md:w-28 md:h-28 items-center justify-center z-20">
                    <div className="text-center">
                      <h4 className="font-bold text-lg md:text-xl">50%</h4>
                      <p className="text-[10px] md:text-sm">OFF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* custom arrows - hidden on mobile for better touch experience */}
        <button className="custom-prev hidden md:flex absolute left-5 top-1/2 cursor-pointer -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm shadow-lg p-3 rounded-full hover:scale-110 duration-300">
          <ChevronLeft />
        </button>

        <button className="custom-next hidden md:flex absolute right-5 top-1/2 cursor-pointer -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm shadow-lg p-3 rounded-full hover:scale-110 duration-300">
          <ChevronRight />
        </button>
      </Swiper>

      <style jsx global>{`
        .heroSwiper .swiper-pagination {
          bottom: 15px !important;
        }

        @media (min-width: 768px) {
          .heroSwiper .swiper-pagination {
            bottom: 30px !important;
          }
        }

        .heroSwiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #bbb;
          opacity: 1;
        }

        @media (min-width: 768px) {
          .heroSwiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
          }
        }

        .heroSwiper .swiper-pagination-bullet-active {
          background: #000;
          width: 24px;
          border-radius: 30px;
        }

        @media (min-width: 768px) {
          .heroSwiper .swiper-pagination-bullet-active {
            width: 34px;
          }
        }
      `}</style>
    </section>
  );
}
