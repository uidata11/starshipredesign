"use client";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  {
    label: "COMPANY",
    subItems: ["회사소개", "대표인사말", "연혁", "공고"],
  },
  {
    label: "ARTISTS",
    subItems: ["가수", "엔터테이너"],
  },
  {
    label: "ACTORS",
    subItems: ["배우"],
  },
  {
    label: "PR CENTER",
    subItems: ["NOTICE", "M/V", "BEHIND", "NEW RELEASE"],
  },
  {
    label: "AUDITION",
    subItems: ["지원안내", "지원하기"],
  },
  {
    label: "CAREER",
    subItems: [],
  },
  {
    label: "STARSHIP SQUARE",
    subItems: [],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 h-20 relative z-50">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="STARSHIP 로고"
            width={120}
            height={20}
            priority
          />
        </Link>

        <nav
          className="hidden lg:flex gap-8 text-sm font-bold text-gray-900"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href="#" className="px-2 py-1">
              {item.label}
            </a>
          ))}
        </nav>

        <button onClick={() => setOpen(true)} className="lg:hidden p-2">
          <HiOutlineMenu size={24} />
        </button>
      </div>

      {hovered && (
        <div
          className="absolute left-0 top-20 w-screen bg-white z-40"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="max-w-7xl mx-auto px-6 py-6 flex gap-16">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="min-w-[120px]">
                {item.subItems.length > 0 && (
                  <>
                    <p className="font-bold text-sm text-gray-900 mb-2">
                      {item.label}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-800">
                      {item.subItems.map((sub, idx) => (
                        <li key={idx}>
                          <a href="#" className="hover:underline">
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {open && <div className="fixed inset-0 bg-gray-800/40 z-400" />}

      <div
        ref={sidebarRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white z-500 p-6 overflow-y-auto shadow-md transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center mb-6">
          <button onClick={() => setOpen(false)}>
            <HiOutlineX size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <p className="font-bold text-gray-900 mb-2">{item.label}</p>
              {item.subItems.length > 0 && (
                <ul className="ml-2 space-y-1 text-sm text-gray-700">
                  {item.subItems.map((sub, idx) => (
                    <li key={idx}>
                      <a href="#">{sub}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
