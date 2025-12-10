import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useState, useRef } from 'react';
import SliderButtons from './SliderButtons';

const Important = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperClass | null>(null);

    const totalSlides = 4;
    return (
        <section className="important-section relative overflow-hidden w-dvw h-[522px] md:h-dvh bg-linear-to-b from-[#600000] to-[#AC0000] flex items-center justify-center">
            <div className="w-full h-fit width-restrictions hidden md:flex flex-col gap-[13.69rem] text-white">
                <div className="grid grid-cols-2 items-center gap-5 ">
                    <div className="important-item flex items-center gap-[2.99rem]">
                        <Image src={"/img/important/mission1.png"} alt="Кетчуп" width={201} height={201} className='important-img w-[150px] h-[150px] lg:w-[201px] lg:h-[201px]' />
                        <div className="important-text flex flex-col gap-[2.99rem]">
                            <span className="important-title text-[#FFB400] text-[2.56rem] font-bold uppercase">Смакование момента</span>
                            <p className="important-desc text-[1.88rem] leading-[2.22rem] max-w-120"><span className="font-bold">SIMPOTATO</span> — это приглашение
                                замедлиться, насладиться хрустом <br />
                                и почувствовать радость <br />
                                от простых вещей
                            </p>
                        </div>
                    </div>
                    <div className="important-item flex items-center gap-[2.99rem] xl:w-[600px] xl:ml-auto">
                        <Image src={"/img/important/mission2.png"} alt="Potato-King" width={201} height={201} className='important-img w-[150px] h-[150px] lg:w-[201px] lg:h-[201px]' />
                        <div className="important-text flex flex-col gap-[2.99rem]">
                            <span className="important-title text-[#FFB400] text-[2.56rem] font-bold uppercase">Красота в деталях</span>
                            <p className="important-desc text-[1.88rem] leading-[2.22rem] max-w-120"><span className="font-bold">SIMPOTATO</span> стремится радовать
                                глаз, вызывать эстетическое
                                удовольствие и вдохновлять
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-5">
                    <div className="important-item flex items-center gap-[2.99rem]">
                        <Image src={"/img/important/mission3.png"} alt="Перец" width={201} height={201} className='important-img w-[150px] h-[150px] lg:w-[201px] lg:h-[201px]' />
                        <div className="important-text flex flex-col gap-[2.99rem]">
                            <span className="important-title text-[#FFB400] text-[2.56rem] font-bold uppercase">Игривость</span>
                            <p className="important-desc text-[1.88rem] leading-[2.22rem] max-w-124"><span className="font-bold">SIMPOTATO</span> — это бренд с улыбкой,
                                который добавляет легкости <br />
                                и радости в каждый момент
                            </p>
                        </div>
                    </div>
                    <div className="important-item flex items-center gap-[2.99rem] xl:w-[600px] xl:ml-auto">
                        <Image src={"/img/important/mission4.png"} alt="Smile" width={201} height={201} className='important-img w-[150px] h-[150px] lg:w-[201px] lg:h-[201px]' />
                        <div className="important-text flex flex-col gap-[2.99rem]">
                            <span className="important-title text-[#FFB400] text-[2.56rem] font-bold uppercase">Наслаждение вкусом</span>
                            <p className="important-desc text-[1.88rem] leading-[2.22rem] max-w-132">
                                Мы создаем чипсы, которые удивляют,
                                радуют и дарят гастрономическое
                                удовольствие
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden relative w-full width-restrictions">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation={{
                        prevEl: ".custom-prev-important",
                        nextEl: ".custom-next-important",
                    }}
                       pagination={{
                        clickable: true,
                        el: ".custom-pagination-important",
                        bulletClass: "custom-bullet",
                        bulletActiveClass: "custom-bullet-active",
                        renderBullet: (index, className) => {
                            return `<span class="${className} inline-block w-[8px] h-[8px] rounded-full transition-all duration-300"></span>`;
                        },
                    }}
                    speed={500}
                    className="w-full h-full"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    <SwiperSlide>
                        <div className="important-slide-mobile w-full h-full flex flex-col gap-[40px] items-center justify-center text-(--white)">
                            <Image src={"/img/important/mission1.png"} alt='Кетчуп' width={162} height={162} />
                            <div className="flex flex-col gap-[25px] items-center justify-center w-[320px]">
                                <span className='text-[#FFB400] text-center uppercase font-bold text-[25px]'>Смакование момента</span>
                                <p className='text-center text-[18px]'>
                                    <span className='font-bold'>SIMPOTATO </span> — это приглашение
                                    замедлиться, насладиться хрустом <br />
                                    и почувствовать радость <br />
                                    от простых вещей
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="important-slide-mobile w-full h-full flex flex-col gap-[40px] items-center justify-center text-(--white)">
                            <Image src={"/img/important/mission2.png"} alt='Potato-King' width={162} height={162} />
                            <div className="flex flex-col gap-[25px] items-center justify-center w-[320px]">
                                <span className='text-[#FFB400] text-center uppercase font-bold text-[25px]'>Игривость</span>
                                <p className='text-center text-[18px]'>
                                    <span className='font-bold'>SIMPOTATO </span> — это бренд с улыбкой, <br />
                                    который добавляет легкости <br />
                                    и радости в каждый момент
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="important-slide-mobile w-full h-full flex flex-col gap-[40px] items-center justify-center text-(--white)">
                            <Image src={"/img/important/mission3.png"} alt='Перец' width={162} height={162} />
                            <div className="flex flex-col gap-[25px] items-center justify-center w-[320px]">
                                <span className='text-[#FFB400] text-center uppercase font-bold text-[25px]'>Красота в деталях</span>
                                <p className='text-center text-[18px]'>
                                    <span className='font-bold'>SIMPOTATO </span> стремится радовать <br />
                                    глаз, вызывать эстетическое <br />
                                    удовольствие и вдохновлять
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="important-slide-mobile w-full h-full flex flex-col gap-[40px] items-center justify-center text-(--white)">
                            <Image src={"/img/important/mission4.png"} alt='Smile' width={162} height={162} />
                            <div className="flex flex-col gap-[25px] items-center justify-center w-[320px]">
                                <span className='text-[#FFB400] text-center uppercase font-bold text-[25px]'>Наслаждение вкусом</span>
                                <p className='text-center text-[18px]'>
                                    Мы создаем чипсы, которые удивляют, <br />
                                    радуют и дарят гастрономическое <br />
                                    удовольствие
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <SliderButtons prev="custom-prev-important" next="custom-next-important" activeIndex={activeIndex} totalSlides={totalSlides} /> */}
            </div>
            <div className="custom-pagination-important flex justify-center items-center gap-4 absolute -left-1/2 bottom-[30px]!" />
        </section>
    )
}

export default Important