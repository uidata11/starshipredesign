// MainVisual.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const dummyImages = [
  {
    src: "https://images.unsplash.com/photo-1566477712363-3c75dd39b416?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "샘플1",
  },
  {
    src: "https://images.unsplash.com/photo-1575286919942-01e070c7bd87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "샘플2",
  },
  {
    src: "https://images.unsplash.com/photo-1684679106461-dae134df8da6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "샘플3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1664303098912-a7f2ee19153f?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <>
      <section className="relative w-full h-[400px] overflow-hidden">
        {dummyImages.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-400 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
        ))}
      </section>
    </>
  );
}
