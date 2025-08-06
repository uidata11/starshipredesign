"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import MainVisual from "./MainVisual";
import Multimedia from "./Multimedia";
import NoticeSection from "./NoticeSection";
import Footer from "./Footer";

export default function Body() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <main>
      <section data-aos="fade-up">
        <MainVisual />
      </section>
      <section data-aos="fade-up">
        <Multimedia />
      </section>
      <section data-aos="fade-up">
        <NoticeSection />
      </section>
      <section data-aos="">
        <Footer />
      </section>
    </main>
  );
}
