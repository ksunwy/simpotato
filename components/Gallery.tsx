import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useState, useRef } from 'react';
import SliderButtons from './SliderButtons';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const totalSlides = 4;

  return (
    <section className="gallery-section w-dvw h-fit relative overflow-hidden">

      <div className="pointer-events-none absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="relative width-restrictions w-full h-full">
          <SliderButtons prev="custom-prev" next="custom-next" activeIndex={activeIndex} totalSlides={totalSlides} />
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
