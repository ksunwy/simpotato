import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useState, useRef } from 'react';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const totalSlides = 4;

  return (
    <section className="w-dvw h-fit relative overflow-hidden">

      <div className="pointer-events-none absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="relative width-restrictions w-full h-full">
          <button
            className={`
              pointer-events-auto custom-prev absolute left-6 top-1/2 -translate-y-1/2 z-20
              transition-opacity duration-300
              ${activeIndex === 0 ? "opacity-40 cursor-default" : "opacity-100 cursor-pointer"}
            `}
            disabled={activeIndex === 0}
          >
            <svg width="28" height="51" viewBox="0 0 28 51" fill="none">
              <g clipPath="url(#clip0)">
                <path
                  d="M25.2236 2.99628L2.57658 25.6433L25.2236 48.2904"
                  stroke="#FFFCF4"
                  strokeWidth="4.462"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="28"
                    height="51"
                    fill="white"
                    transform="matrix(-1 0 0 1 28 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>

          <button
            className={`
              pointer-events-auto custom-next absolute right-6 top-1/2 -translate-y-1/2 z-20 rotate-180
              transition-opacity duration-300
              ${activeIndex === totalSlides - 1 ? "opacity-40 cursor-default" : "opacity-100 cursor-pointer"}
            `}
            disabled={activeIndex === totalSlides - 1}
          >
            <svg width="28" height="51" viewBox="0 0 28 51" fill="none">
              <g clipPath="url(#clip0)">
                <path
                  d="M25.2236 2.99628L2.57658 25.6433L25.2236 48.2904"
                  stroke="#FFFCF4"
                  strokeWidth="4.462"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="28"
                    height="51"
                    fill="white"
                    transform="matrix(-1 0 0 1 28 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>

        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        speed={500}
        className="w-full h-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        <SwiperSlide className='flex items-center justify-center h-dvh overflow-hidden'>
          <div className="flex items-center justify-center w-full">
            <Image
              src="/img/slider/chipsPepperSlider.jpg"
              alt="Тайский перец"
              width={1920}
              height={1080}
              className="object-contain w-[1100px] md:w-full max-w-none h-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center h-dvh overflow-hidden'>
          <div className="flex items-center justify-center w-full">
            <Image
              src="/img/slider/chipsCheeseSlider.jpg"
              alt="Сыр"
              width={1920}
              height={1080}
              className="object-contain w-[1100px] md:w-full max-w-none h-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center h-dvh overflow-hidden'>
          <div className="flex items-center justify-center w-full">
            <Image
              src="/img/slider/chipsOnionSlider.jpg"
              alt="Сметана и зелень"
              width={1920}
              height={1080}
              className="object-contain w-[1100px] md:w-full max-w-none h-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center h-dvh overflow-hidden'>
          <div className="flex items-center justify-center w-full">
            <Image
              src="/img/slider/chipsCrabSlider.jpg"
              alt="Краб"
              width={1920}
              height={1080}
              className="object-contain w-[1100px] md:w-full max-w-none h-auto"
            />
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Gallery;
