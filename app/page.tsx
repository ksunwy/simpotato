'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Mission from "@/components/Mission";
import Banner from "@/components/Banner";
import Important from "@/components/Important";
import Gallery from "@/components/Gallery";
import WhereBuy from "@/components/WhereBuy";
import Footer from '@/components/Footer';
// import useWidth from '@/hooks/useWidth';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


export default function Home() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const aboutRef = useRef(null);
  // const {isMobile} = useWidth()

  const aboutSectionsRef = useRef(null);
  const productsRef = useRef(null);
  const footerRef = useRef(null);
  const wherebuyRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (window.scrollSmoother && ref.current) {
      window.scrollSmoother.scrollTo(ref.current, true, "top");
    }
  };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5,
        effects: true,
      });
      window.scrollSmoother = smoother;
      gsap.to(aboutRef.current, {
        y: -250,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }
  }, []);

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <Header
        aboutSectionsRef={aboutSectionsRef}
        productsRef={productsRef}
        footerRef={footerRef}
        wherebuyRef={wherebuyRef}
        scrollToSection={scrollToSection}
      />
      <div ref={contentRef} id="smooth-content">
        <main className="flex flex-col min-h-screen">
          <Hero />
          <About aboutSectionsRef={aboutSectionsRef} />
          <Products productsRef={productsRef} />
          <Mission />
          <Banner />
          <Important />
          <Gallery />
          <WhereBuy wherebuyRef={wherebuyRef} />
          <Footer footerRef={footerRef} />
        </main>
      </div>
    </div>
  );
}
