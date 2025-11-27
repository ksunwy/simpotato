'use client';

import { useEffect, useRef, useState } from 'react';
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

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MOBILE_BREAKPOINT = 768; 

export default function Home() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  const aboutSectionsRef = useRef(null);
  const productsRef = useRef(null);
  const footerRef = useRef(null);
  const wherebuyRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (window.scrollSmoother && ref.current) {
      window.scrollSmoother.scrollTo(ref.current, true, "top");
    } else if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const initScrollSmoother = () => {
    if (typeof window === 'undefined' || isMobile) return;

    if (window.scrollSmoother) {
      window.scrollSmoother.kill();
    }

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.5,
      effects: true,
    });

    window.scrollSmoother = smoother;

  };

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      initScrollSmoother();
    } else {
      if (window.scrollSmoother) {
        window.scrollSmoother.kill();
        delete window.scrollSmoother;
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ScrollTrigger.clearMatchMedia();
    }
  }, [isMobile]);

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