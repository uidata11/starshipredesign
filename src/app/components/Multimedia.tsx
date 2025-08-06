"use client";

import Image from "next/image";
import Link from "next/link";

const mvData = [
  {
    id: 1,
    href: "/board/mv/795",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/05/20/22/31/waifu-8776442_1280.jpg",
    title: "Kep1er - Dare to Crave",
  },
  {
    id: 2,
    href: "/board/mv/796",
    thumbnail:
      "https://cdn.pixabay.com/photo/2023/08/06/13/36/ai-generated-8172974_1280.png",
    title: "WAVY - Digital Dream",
  },
  {
    id: 3,
    href: "/board/mv/797",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/22/13/58/ai-generated-8649730_640.jpg",
    title: "LUMINA - Cyber Love",
  },
  {
    id: 4,
    href: "/board/mv/798",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/07/25/10/23/ai-creation-8920704_640.jpg",
    title: "ARIN - Lonely Frequency",
  },
];

const releases = [
  {
    id: 1,
    href: "/board/newrelease/794",
    img: "https://cdn.pixabay.com/photo/2024/05/27/16/59/ai-generated-8791790_640.jpg",
    title: "NEON - Night Pulse",
    date: "2025.07.05",
  },
  {
    id: 2,
    href: "/board/newrelease/795",
    img: "https://cdn.pixabay.com/photo/2024/05/11/06/07/ai-generated-8754035_640.jpg",
    title: "MIRA - Dream Layers",
    date: "2025.06.27",
  },
  {
    id: 3,
    href: "/board/newrelease/796",
    img: "https://cdn.pixabay.com/photo/2024/01/31/12/08/dj-8543993_640.png",
    title: "DJ SYNC - Beat Reactor",
    date: "2025.06.01",
  },
  {
    id: 4,
    href: "/board/newrelease/797",
    img: "https://cdn.pixabay.com/photo/2018/01/30/13/29/record-3118786_640.png",
    title: "VINYL - Retro Echo",
    date: "2025.05.16",
  },
  {
    id: 5,
    href: "/board/newrelease/798",
    img: "https://cdn.pixabay.com/photo/2019/09/08/20/54/elephant-4461911_640.jpg",
    title: "TAMARA - Desert Waltz",
    date: "2025.04.23",
  },
  {
    id: 6,
    href: "/board/newrelease/799",
    img: "https://cdn.pixabay.com/photo/2022/06/26/16/15/tuna-7285848_640.jpg",
    title: "OCEANA - Blue Drift",
    date: "2025.04.07",
  },
];
export default function Multimedia() {
  return (
    <div className="sm:px-10 px-0">
      <div className="flex items-center mt-20 mb-10">
        <p className="text-xl px-4 sm:px-0 sm:text-4xl text-zinc-700 font-semibold">
          MULTIMEDIA
        </p>
        <span className="border border-zinc-700 w-full sm:mx-10" />
      </div>

      {/* MULTIMEDIA */}
      <section
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2025/05/29/07/41/pastel-9628891_1280.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-10 max-w-7xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mvData.map((mv) => (
            <Link
              key={mv.id}
              href={mv.href}
              className="group block relative aspect-square overflow-hidden"
            >
              <Image
                src={mv.thumbnail}
                alt={`${mv.title} 썸네일`}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-95"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-95" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-white text-2xl font-extrabold text-center px-2">
                  {mv.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="flex items-center mt-20 mb-10">
        <p className="text-lg px-4 sm:px-0 sm:text-4xl text-zinc-700 font-semibold">
          NEW RELEASE
        </p>
        <span className="border border-zinc-700 w-full sm:mx-10" />
      </div>

      <section className="py-10 max-w-7xl mx-auto px-4">
        <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide">
          {releases.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex-shrink-0 w-48 sm:w-56 md:w-60 lg:w-64"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-md">
                <Image
                  src={item.img}
                  alt="앨범 커버"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-sm font-medium truncate">{item.title}</p>
              <span className="text-xs text-gray-500">{item.date}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
