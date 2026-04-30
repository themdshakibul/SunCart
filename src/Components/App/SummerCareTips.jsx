"use client";
import React from "react";
import { Card, Button } from "@heroui/react";
import {
  Droplets,
  Sun,
  Wind,
  Apple,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const SummerCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "Hydration First",
      desc: "Drink 8-10 glasses of water. Coconut water helps balance electrolytes.",
      icon: <Droplets className="text-blue-600" size={28} />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-100",
      tag: "Vital",
    },
    {
      id: 2,
      title: "Sun Protection",
      desc: "Apply SPF 30+ every 2 hours and use UV-protected sunglasses.",
      icon: <Sun className="text-orange-600" size={28} />,
      gradient: "from-orange-500/20 to-yellow-500/20",
      iconBg: "bg-orange-100",
      tag: "Skin",
    },
    {
      id: 3,
      title: "Light Clothing",
      desc: "Wear loose, light-colored cotton fabrics to stay cool and breathe.",
      icon: <Wind className="text-teal-600" size={28} />,
      gradient: "from-teal-500/20 to-emerald-500/20",
      iconBg: "bg-teal-100",
      tag: "Outfit",
    },
    {
      id: 4,
      title: "Seasonal Diet",
      desc: "Eat water-rich fruits like watermelon and cucumber to stay fresh.",
      icon: <Apple className="text-rose-600" size={28} />,
      gradient: "from-rose-500/20 to-pink-500/20",
      iconBg: "bg-rose-100",
      tag: "Food",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-20 ">
      <div className="space-y-4 flex flex-col text-center items-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Summer Care Guide
        </h2>
        <p className="text-zinc-500 max-w-lg text-lg">
          Beat the heat with our expert-approved hydration, skin, and lifestyle
          tips.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tips.map((tip) => (
          <Card
            key={tip.id}
            className="group relative border-none overflow-hidden p-8 rounded-[32px] transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg"
          >
            <div
              className={`w-16 h-16 ${tip.iconBg} rounded-[22px] flex items-center justify-center mb-6 shadow-sm group-hover:rotate-6 transition-all duration-300`}
            >
              {tip.icon}
            </div>

            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-600 transition-colors">
                  {tip.tag}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-zinc-800 leading-tight">
                {tip.title}
              </h3>
              <p className="text-zinc-500  text-sm leading-relaxed">
                {tip.desc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-50 flex justify-between items-center relative z-10">
              <div className="flex items-center gap-2 group/btn cursor-pointer">
                <span className="text-xs font-bold text-zinc-900">EXPLORE</span>
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover/btn:translate-x-1"
                />
              </div>
              <Button
                radius="full"
                size="sm"
                variant="flat"
                className="bg-zinc-100"
              >
                <ShieldCheck size={18} className="text-zinc-500" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SummerCareTips;
