import Image from "next/image"
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import useWidth from "@/hooks/useWidth";

const initialSlideImage = "/img/slider/allProducts.png";
const buttons = ["Тайский перец", "Сметана и зелень", "Сыр", "Краб", "С солью", "Марокканский соус"];
export const buttonColors = ["#ED323C", "#0050A9", "#FDB81C", "#FF808B", "#2AB5AD", "#216437"];
const products = ["/img/products/pepper.png", "/img/products/onion.png", "/img/products/cheese.png", "/img/products/crab.png", "/img/products/salt.png", "/img/products/sauce.png"];

const Products = ({ productsRef }: { productsRef: any }) => {
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const {isMobile} = useWidth();
    const swiperRef = useRef<SwiperClass | null>(null);
    const firstLoad = useRef(true);

    const normalizeIndex = (index: number) => {
        const total = buttons.length;
        return ((index % total) + total) % total;
    };

    const handleSlideChange = (swiper: SwiperClass) => {
        if (firstLoad.current) {
            firstLoad.current = false;
            setActiveIndex(-1);
            return;
        }

        if (swiper.realIndex === 0) {
            setActiveIndex(-1);
            return;
        }

        const normalized = normalizeIndex(swiper.realIndex - 1);
        setActiveIndex(normalized);
    };

    const goToSlide = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index + 1);
        }
    };

    const showingInitial = activeIndex === -1;
    const slidesPerView = showingInitial ? 1 : isMobile ? 1 : 3;

    return (
        <section
            ref={productsRef}
            id="products"
            className="products-section overflow-hidden bg-[#F2F2F2] w-dvw h-fit relative flex flex-col gap-[40px] md:gap-[4.19rem] pt-[50px] pb-[122px] md:py-[6.84rem]"
        >
            <div className="absolute top-1/2 left-1/2 w-full h-full -translate-y-1/2 -translate-x-1/2">
                <Image
                    src="/svg/patterns/ProductsPatter.svg"
                    alt="simpotato"
                    fill
                    className="scale-350 products-pattern"
                    priority
                />
            </div>

            <div className="product-btn-container relative z-10 flex flex-wrap md:justify-center gap-[1.71rem] w-full width-restrictions">
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
            {activeIndex !== -1 && <h3 style={{ color: buttonColors[activeIndex] }} className={`absolute bottom-14 left-1/2 -translate-x-1/2 text-[${buttonColors[activeIndex]}] text-nowrap font-medium md:text-5xl text-7xl`}>«{buttons[activeIndex]}»</h3>}
            <div className="slider flex-1 relative z-10 w-full h-full width-restrictions">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={slidesPerView}
                    centeredSlides
                    slidesPerGroup={1}
                    loop
                    speed={900}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={handleSlideChange}
                    navigation={{ prevEl: ".custom-prev-products", nextEl: ".custom-next-products" }}
                    className="w-full md:h-[40dvh] lg:h-[70dvh]"
                >

                    <SwiperSlide key="first">
                        <div className={`slide ${showingInitial ? "active" : ""}`}>
                            <Image
                                src={initialSlideImage}
                                alt="All products"
                                width={1471}
                                height={870.53}
                                className="2xl:scale-250 xl:scale-200 md:scale-150 scale-100 xl:mb-40 md:mb-10 md:pt-0 pt-40"
                            />
                        </div>
                    </SwiperSlide>

                    {buttons.map((_, i) => {
                        let isActive = activeIndex === i;
                        let isLeft = i === activeIndex - 1 || (activeIndex === 0 && i === buttons.length - 1);
                        let isRight = i === activeIndex + 1 || (activeIndex === buttons.length - 1 && i === 0);

                        if (showingInitial) {
                            isActive = false;
                            isLeft = false;
                            isRight = false;
                        }

                        return (
                            <SwiperSlide key={i}>
                                <div className={`slide ${isActive ? "active" : ""} ${isLeft ? "left" : ""} ${isRight ? "right" : ""}`}>
                                    <Image src={products[i]} alt={buttons[i]} width={496} height={724} loading="lazy" />
                                </div>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>

            </div>
        </section>
    );
};

export default Products;
