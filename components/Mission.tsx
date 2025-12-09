import Image from "next/image";
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SliderButtons from './SliderButtons';
import 'swiper/css';
import 'swiper/css/navigation';

const items = [
  { id: 1, text: "Натуральный картофель", img: "/img/mission/missionOnion.jpg" },
  { id: 2, text: "Продукт без ГМО", img: "/img/mission/missionCrab.jpg" },
  { id: 3, text: "Насыщенный вкус", img: "/img/mission/missionCheese.jpg" },
  { id: 4, text: "Качественные специи", img: "/img/mission/missionPepper.jpg" },
];

const Mission = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="mission-section overflow-hidden relative w-dvw h-fit md:min-h-dvh width-restrictions py-[50px] md:py-[12.84rem] flex flex-col justify-center gap-[7.7rem]">
      <div className="flex flex-col gap-[20px] md:gap-[2.56rem]">
        <span className="mission-subtitle text-[16px] md:text-[2.05rem]">Миссия бренда</span>
        <h2 className="mission-title text-(--blue) font-bold text-[33px] md:text-[5.47rem] leading-[32px] md:leading-[5.9rem] uppercase">Превращать каждый момент <br /> в маленькое удовольствие</h2>
      </div>
      <div className="relative hidden md:grid md:grid-cols-2 2xl:flex 2xl:flex-row items-center gap-[40px] md:gap-[3.03rem] justify-center w-fit mx-auto">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <div key={item.id} className="mission-item flex flex-col items-center gap-[25px] md:gap-13">
              <Image src={item.img} alt="миссия" className="rounded-sm" width={333} height={333} />
              <svg className="mission-line" width="305" height="13" viewBox="0 0 305 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.104492 0.507829C0.104492 0.507829 2.97567 1.12408 4.60449 2.00425C6.45065 3.00187 9.10449 5.99472 10.1045 7.49114C10.9504 8.75703 11.4056 9.54372 12.6045 10.484C14.1045 11.6604 15.8219 12.3646 18.1045 12.4792C20.757 12.6124 22.4117 11.9787 24.6045 10.484C25.4843 9.88429 26.4774 8.70264 27.6045 7.49114C29.1045 5.87886 31.1045 3.00187 32.6045 2.00425C34.1045 1.00664 35.5665 0.559083 37.6045 0.507829C39.8301 0.451854 41.252 0.772415 43.1045 2.00425C44.6045 3.00168 46.9316 6.32126 48.1045 7.49114C49.1045 8.48856 49.7371 9.55062 51.1045 10.484C52.4719 11.4174 54.6355 12.5458 57.1045 12.4792C59.3891 12.4176 60.7214 11.776 62.6045 10.484C63.7377 9.70648 64.8202 8.66496 65.6045 7.49114C66.6045 5.99452 68.0729 3.42105 70.6045 2.00425C72.5462 0.917615 73.8782 0.507829 76.1045 0.507829C78.3308 0.507829 79.752 0.772415 81.6045 2.00425C83.1045 3.00168 84.2133 5.29403 86.1045 7.49095C87.0981 8.64515 87.9054 9.54389 89.1045 10.484C91.0464 12.0065 92.6346 12.4792 95.1045 12.4792C97.5744 12.4792 99.0661 11.8754 101.104 10.484C102.472 9.55062 102.977 8.70264 104.104 7.49114C105.992 5.46191 106.225 3.42909 108.604 2.00425C110.513 0.861215 111.878 0.507829 114.104 0.507829C116.331 0.507829 117.663 0.917615 119.604 2.00425C122.136 3.42105 122.588 5.40836 124.604 7.49114C125.756 8.67995 126.237 9.55062 127.604 10.484C129.643 11.8754 131.136 12.5458 133.604 12.4792C135.889 12.4176 137.221 11.776 139.104 10.484C140.47 9.54735 140.953 8.67995 142.104 7.49114C144.121 5.40836 144.576 3.42732 147.104 2.00425C148.88 1.00485 150.067 0.559083 152.104 0.507829C154.33 0.451854 155.663 0.917615 157.604 2.00425C159.104 2.84371 161.104 5.49572 162.604 7.49114C163.599 8.81351 164.237 9.55062 165.604 10.484C166.972 11.4174 169.135 12.4792 171.604 12.4792C174.074 12.4792 176.071 11.4843 177.826 9.75084C179.104 8.48856 179.883 7.72509 180.604 6.99214C181.326 6.25919 183.883 3.23582 185.383 2.2382C187.235 1.0062 188.378 0.507829 190.604 0.507829C192.831 0.507829 194.252 0.772415 196.104 2.00425C198.209 3.40366 198.713 5.29403 200.604 7.49095C201.598 8.64515 202.407 9.54225 203.604 10.484C205.69 12.124 207.452 12.6124 210.104 12.4792C212.387 12.3646 213.721 11.776 215.604 10.484C216.97 9.54735 217.61 8.81351 218.604 7.49114C220.104 5.49572 220.81 4.29294 222.604 2.50287C224.104 1.00644 226.378 0.507829 228.604 0.507829C230.831 0.507829 233.079 1.3221 234.104 2.00406C235.604 3.00168 237.088 5.40831 239.104 7.49114C240.256 8.67996 240.737 9.55062 242.104 10.484C244.143 11.8754 245.636 12.5458 248.104 12.4792C250.389 12.4176 251.721 11.776 253.604 10.484C254.97 9.54735 255.477 8.70264 256.604 7.49114C258.492 5.46191 260.104 3.50041 261.104 2.50287C262.104 1.50541 264.692 0.39588 267.104 0.507829C269.141 0.602319 270.329 1.00485 272.104 2.00425C273.88 3.00366 277.104 7.49114 277.104 7.49114C277.104 7.49114 278.737 9.55062 280.104 10.484C282.143 11.8754 283.635 12.4792 286.104 12.4792C288.574 12.4792 290.163 12.0065 292.104 10.484C293.304 9.54385 294.604 7.49114 294.604 7.49114C294.604 7.49114 297.194 3.61824 299.604 2.00425C301.104 1 301.878 0.507829 304.104 0.507829" stroke="black" />
              </svg>
              <span className={`${item.id === 2 ? "md:max-w-60" : "md:max-w-88"} text-[20px] md:text-[3.08rem] text-center`}>{item.text}</span>
              {isLastItem && (
                <Image
                  src="/img/icons/king-potato.png"
                  alt="Potato-King"
                  width={68.05}
                  height={95.04}
                  className="mission-king absolute md:bottom-52 bottom-40 -right-8 2xl:-right-14"
                />
              )}
            </div>
          )
        })}
      </div>
      <div className="md:hidden flex relative w-full h-fit opacity-100">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation={{
            prevEl: ".custom-prev-missions",
            nextEl: ".custom-next-missions",
          }}
          speed={500}
          className="w-full h-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {items.map((item, index) => {
            const isLastItem = index === items.length - 1;
            return (
              <SwiperSlide key={item.id}>
                <div className="opacity-100 w-full h-full flex flex-col gap-[40px] items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.text}
                    width={280}
                    height={280}
                    className="rounded-sm w-full"
                  />
                  <div className="flex flex-col gap-[25px] items-center justify-center max-w-[320px] opacity-100">
                    <p className="text-center text-[18px] md:font-bold md:text-(--blue) opacity-100">
                      {item.text}
                    </p>
                  </div>
                  {isLastItem && (
                <Image
                  src="/img/icons/king-potato.png"
                  alt="Potato-King"
                  width={68.05}
                  height={95.04}
                  className="mission-king absolute bottom-20 right-0"
                />
              )}
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <SliderButtons
          prev="custom-prev-missions"
          next="custom-next-missions"
          activeIndex={activeIndex}
          totalSlides={items.length}
        />
      </div>
    </section>
  )
}

export default Mission
