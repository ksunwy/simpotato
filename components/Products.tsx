import Image from "next/image"
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const buttons = ["Тайский перец", "Сметана и зелень", "Сыр", "Краб", "С солью", "Марокканский соус"];
export const buttonColors = ["#ED323C", "#0050A9", "#FDB81C", "#FF808B", "#2AB5AD", "#216437"];
const products = ["/img/products/pepper.png", "/img/products/onion.png", "/img/products/cheese.png", "/img/products/crab.png", "/img/products/salt.png", "/img/products/sauce.png"];

const CustomPrevButton = () => (
    <svg width="26" height="48" viewBox="0 0 26 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.8975 1.25L1.2504 23.8971L23.8975 46.5441" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CustomNextButton = () => (
    <svg width="26" height="48" viewBox="0 0 26 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.25 1.25L23.8971 23.8971L1.25 46.5441" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Products = ({ productsRef }: { productsRef: any }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const swiperRef = useRef<SwiperClass | null>(null);

    const handleSlideChange = (swiper: SwiperClass) => {
        setActiveIndex(swiper.realIndex);
    };

    const goToSlide = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

const handlePrev = () => {
        const prevIndex = activeIndex === 0 ? buttons.length - 1 : activeIndex - 1;
        setActiveIndex(prevIndex);
        goToSlide(prevIndex);
    };

    const handleNext = () => {
        const nextIndex = activeIndex === buttons.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
        goToSlide(nextIndex);
    };

    return (
        <section ref={productsRef} id="products" className="products-section bg-[#F2F2F2] w-dvw h-fit relative flex flex-col gap-[40px] md:gap-[4.19rem] pt-[50px] pb-[122px] md:py-[6.84rem] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-full h-full -translate-y-1/2 -translate-x-1/2">
                <Image
                    src="/svg/patterns/ProductsPatter.svg"
                    alt="simpotato"
                    fill
                    className="scale-350 products-pattern"
                    priority
                />
            </div>
            <div className="product-btn-container relative z-10 flex flex-wrap gap-[1.71rem] w-full width-restrictions">
                {buttons.map((label, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`product-btn ${activeIndex === index ? "active" : ""}`}
                        style={
                            activeIndex === index
                                ? {
                                    color: buttonColors[index],
                                    borderColor: buttonColors[index],
                                }
                                : undefined
                        }
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="slider flex-1 relative z-10 w-full h-full width-restrictions">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    centeredSlides
                    slidesPerGroup={1}
                    centerInsufficientSlides
                    speed={900}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={handleSlideChange}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                    className="w-full md:h-[40dvh] lg:h-[70dvh]"
                >
                    {buttons.map((_, i) => {
                        const isActive = i === activeIndex;
                        const isLeft = i === activeIndex - 1 || (activeIndex === 0 && i === buttons.length - 1);
                        const isRight = i === activeIndex + 1 || (activeIndex === buttons.length - 1 && i === 0);

                        return (
                            <SwiperSlide key={i}>
                                <div className={`slide ${isActive ? "active" : ""} ${isLeft ? "left" : ""} ${isRight ? "right" : ""}`}>
                                    <Image src={products[i]} alt={buttons[i]} width={496} height={724} loading="lazy" />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <button onClick={handlePrev} className="custom-prev custom-button absolute left-6 -bottom-[80px] md:top-1/2 md:-translate-y-1/2 cursor-pointer z-50 ">
                    <CustomPrevButton />
                </button>
                <button onClick={handleNext} className="custom-next custom-button absolute right-6 -bottom-[80px] md:top-1/2 md:-translate-y-1/2 cursor-pointer z-50 ">
                    <CustomNextButton />
                </button>
            </div>
        </section>
    )
}

export default Products
