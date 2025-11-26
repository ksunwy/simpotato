import Image from "next/image"
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const buttons = ["Тайский перец", "Сметана и зелень", "Сыр", "Краб", "С солью", "Марокканский соус"];
const products = ["/img/products/pepper.png", "/img/products/onion.png", "/img/products/cheese.png", "/img/products/crab.png", "/img/products/salt.png", "/img/products/sauce.png"];

const CustomPrevButton = () => (
    <svg
        width="59"
        height="59"
        viewBox="0 0 59 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            className="circle-path"
            d="M29.1302 56.7604C44.39 56.7604 56.7604 44.39 56.7604 29.1302C56.7604 13.8705 44.39 1.5 29.1302 1.5C13.8705 1.5 1.5 13.8705 1.5 29.1302C1.5 44.39 13.8705 56.7604 29.1302 56.7604Z"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M29.1302 18.0781L18.0781 29.1302L29.1302 40.1823"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M40.1823 29.1304H18.0781"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CustomNextButton = () => (
    <svg
        width="59"
        height="59"
        viewBox="0 0 59 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            className="circle-path"
            d="M29.1305 56.7604C13.8708 56.7604 1.50032 44.39 1.50032 29.1302C1.50032 13.8705 13.8708 1.5 29.1305 1.5C44.3903 1.5 56.7607 13.8705 56.7607 29.1302C56.7607 44.39 44.3903 56.7604 29.1305 56.7604Z"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M29.1305 18.0781L40.1826 29.1302L29.1305 40.1823"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M18.0785 29.1304H40.1826"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Products = ({productsRef}: {productsRef: any}) => {
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

    return (
        <section ref={productsRef} id="products" className="bg-[#F2F2F2] w-dvw h-dvh relative flex flex-col gap-[4.19rem] py-[6.84rem]">
            <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2">
                <Image
                    src="/svg/patterns/ProductsPatter.svg"
                    alt="simpotato"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </div>
            <div className="relative z-10 flex gap-[1.71rem] w-full width-restrictions">
                {buttons.map((label, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`product-btn ${activeIndex === index ? "active" : ""}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="flex-1 relative z-10 w-full h-full width-restrictions">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    centeredSlides
                    speed={900}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={handleSlideChange}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    className="w-full h-full"
                >
                    {buttons.map((_, i) => {
                        const isActive = i === activeIndex;
                        const isLeft = i === activeIndex - 1 || (activeIndex === 0 && i === buttons.length - 1);
                        const isRight = i === activeIndex + 1 || (activeIndex === buttons.length - 1 && i === 0);

                        return (
                            <SwiperSlide key={i}>
                                <div className={`slide ${isActive ? "active" : ""} ${isLeft ? "left" : ""} ${isRight ? "right" : ""}`}>
                                    <Image src={products[i]} alt={buttons[i]} width={591} height={824} />
                                </div>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>

                <button className="custom-prev custom-button absolute right-[6.84rem] top-0 cursor-pointer z-50 ">
                    <CustomPrevButton />
                </button>
                <button className="custom-next custom-button absolute right-0 top-0 cursor-pointer z-50 ">
                    <CustomNextButton />
                </button>
            </div>
        </section>
    )
}

export default Products
