"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const dummyImages = [
  {
    src: "https://images.unsplash.com/photo-1566477712363-3c75dd39b416?q=80&w=1374&auto=format&fit=crop",
    alt: "샘플1",
  },
  {
    src: "https://images.unsplash.com/photo-1575286919942-01e070c7bd87?q=80&w=1170&auto=format&fit=crop",
    alt: "샘플2",
  },
  {
    src: "https://images.unsplash.com/photo-1684679106461-dae134df8da6?q=80&w=1170&auto=format&fit=crop",
    alt: "샘플3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1664303098912-a7f2ee19153f?q=80&w=1373&auto=format&fit=crop",
    alt: "샘플4",
  },
];

export default function MainVisual() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dummyImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {dummyImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
    </section>
  );
}
