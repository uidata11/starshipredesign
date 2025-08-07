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
    subItems: ["CAREER"],
  },
  {
    label: "STARSHIP SQUARE",
    subItems: ["STARSHIP SQUARE"],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative z-50"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 h-20">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="STARSHIP 로고"
              width={120}
              height={20}
              priority
            />
          </Link>

          <nav className="hidden lg:flex gap-8 text-sm font-bold text-gray-900">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={`/${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-2 py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button onClick={() => setOpen(true)} className="lg:hidden p-2">
            <HiOutlineMenu size={24} />
          </button>
        </div>

        {/* 항상 렌더링하되 visibility만 토글 */}
        <div className="absolute left-0 top-20 w-full z-40">
          <div
            className={`bg-white shadow w-full px-6 py-6 transition-all duration-300 ease-in-out pointer-events-auto ${
              hovered
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-3 invisible"
            }`}
          >
            <div className="flex justify-between">
              <div className="w-[120px]" />
              <div className="flex gap-11">
                {NAV_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-center px-1 py-1"
                  >
                    {item.subItems.length > 0 && (
                      <ul className="space-y-2 text-sm text-gray-800">
                        {item.subItems.map((sub, idx) => (
                          <li key={idx}>
                            <Link
                              href={`/${item.label
                                .toLowerCase()
                                .replace(/\s+/g, "-")}/${sub
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="hover:underline"
                            >
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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
                      <Link
                        href={`/${item.label
                          .toLowerCase()
                          .replace(/\s+/g, "-")}/${sub
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {sub}
                      </Link>
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
