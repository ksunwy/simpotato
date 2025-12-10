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
import useWidth from '@/hooks/useWidth';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  const aboutSectionsRef = useRef(null);
  const productsRef = useRef(null);
  const footerRef = useRef(null);
  const wherebuyRef = useRef(null);

  const { isMobile, isClientReady } = useWidth();

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

  useEffect(() => {
    if (!isClientReady) return;

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
    if (!isMobile) {


      gsap.fromTo(".hero-title", { opacity: 0, y: 40, duration: 1.2, delay: 0.3, ease: "power3.out", }, { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out", });
      gsap.fromTo(".hero-card", { opacity: 0, y: 30, duration: 1.2, delay: 0.6, ease: "power2.out", }, { opacity: 1, y: 0, duration: 1.2, delay: 0.6, ease: "power2.out", });
      gsap.from(".hero-heart", { opacity: 0, scale: 0.55, rotation: -12, duration: 0.9, delay: 0.9, ease: "back.out(2)", });
      
      gsap.from(".about-title", { opacity: 0, y: 40, duration: 1.3, ease: "power3.out", scrollTrigger: { trigger: ".about-section", start: "top 70%", }, });
      gsap.from(".about-subtitle", { opacity: 0, y: 40, duration: 1.3, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".about-section", start: "top 65%", }, });
      gsap.from(".about-image", { opacity: 0, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: ".about-section", start: "top 70%", }, });
      gsap.from(".about-image-mobile", { opacity: 0, y: 60, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: ".about-section", start: "top 75%", }, });
      
      gsap.from(".product-btn", { opacity: 0, y: 20, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".products-section", start: "top 75%", }, });
      gsap.from(".slider", { opacity: 0, y: 40, duration: 1.8, ease: "power3.out", scrollTrigger: { trigger: ".products-section", start: "top 65%", }, });
      gsap.from(".products-pattern", { scale: 2.6, duration: 2, ease: "power3.out", scrollTrigger: { trigger: ".products-section", start: "top 80%", }, });
      gsap.to(".products-section", { opacity: 0, delay: 2, scrollTrigger: { trigger: ".products-section", start: "top top", end: "bottom top", scrub: true, }, });
    }
    gsap.to(".hero", { opacity: 0, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true, }, });
    
    gsap.from(".mission-title", { opacity: 0, y: 40, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".mission-section", start: "top 75%", }, });
    gsap.from(".mission-item", { opacity: 0, y: 50, rotateX: -15, scale: 0.9, duration: 1.2, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".mission-section", start: "top 70%", }, });
    gsap.from(".mission-subtitle", { opacity: 0, y: 35, filter: "blur(8px)", duration: 1.3, ease: "power3.out", scrollTrigger: { trigger: ".mission-section", start: "top 72%", }, });
    gsap.from(".mission-king", { opacity: 0, x: 40, y: 10, scale: 0.85, duration: 1.2, ease: "back.out(2)", scrollTrigger: { trigger: ".mission-section", start: "top 60%", }, });
    gsap.to(".mission-section", { scale: 1.02, scrollTrigger: { trigger: ".mission-section", start: "top bottom", end: "bottom top", scrub: true, }, });

    gsap.from(".banner-section", { opacity: 0, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: ".banner-section", start: "top 80%", } });
    gsap.fromTo(".banner-inner", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.6, ease: "power3.out", scrollTrigger: { trigger: ".banner-section", start: "top 75%", } });

    gsap.from(".important-section", { opacity: 0, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: ".important-section", start: "top 75%", }, });
    gsap.from(".important-item", { opacity: 0, y: 50, duration: 1.2, ease: "power3.out", stagger: 0.25, scrollTrigger: { trigger: ".important-section", start: "top 70%", }, });
    gsap.from(".important-img", { opacity: 0, scale: 0.85, duration: 1.1, ease: "back.out(1.8)", stagger: 0.2, scrollTrigger: { trigger: ".important-section", start: "top 68%", }, });
    gsap.from(".important-title", { opacity: 0, y: 25, letterSpacing: "-1px", duration: 1.2, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: ".important-section", start: "top 70%", }, });
    gsap.from(".important-desc", { opacity: 0, y: 20, duration: 1.3, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: ".important-section", start: "top 68%", }, });
    gsap.from(".important-slide-mobile", { opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: ".important-section", start: "top 85%", }, });

    gsap.to(".gallery-section", { opacity: 0, delay: 2, duration: 1.4, scrollTrigger: { trigger: ".gallery-section", start: "top top", end: "bottom top", scrub: true, }, });

    gsap.from(".where-title", { opacity: 0, y: 30, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".where-title", start: "top 85%", }, });

    gsap.from(".footer", { opacity: 0, y: 60, duration: 1.3, ease: "power3.out", scrollTrigger: { trigger: ".footer", start: "top 85%", }, });
    gsap.from(".footer-logo", { opacity: 0, scale: 0.8, duration: 1.1, ease: "power2.out", scrollTrigger: { trigger: ".footer-logo", start: "top 90%", }, });
    gsap.to(".footer-pattern", { y: -80, ease: "none", scrollTrigger: { trigger: ".footer", start: "top bottom", end: "bottom bottom", scrub: 1.2, }, });

  }, [isMobile, isClientReady]);

  return (
    <div ref={wrapperRef} id="smooth-wrapper" className='overflow-hidden'>
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