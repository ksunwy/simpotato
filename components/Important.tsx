import Image from "next/image"


const Important = () => {
    return (
        <section className="w-dvw h-dvh bg-linear-to-b from-[#600000] to-[#AC0000] flex items-center justify-center">
            <div className="w-full h-fit width-restrictions flex flex-col gap-[13.69rem] text-white ">
                <div className="flex items-center gap-5 justify-between">
                    <div className="flex items-center gap-[2.99rem]">
                        <Image src={"/img/important/mission1.png"} alt="Кетчуп" width={201} height={201} />
                        <div className="flex flex-col gap-[2.99rem]">
                            <span className="text-[#FFB400] text-[2.56rem] font-bold uppercase">Смакование момента</span>
                            <p className="text-[1.88rem] leading-[2.22rem] max-w-120"><span className="font-bold">SIMPOTATO</span> — это приглашение
                                замедлиться, насладиться хрустом <br />
                                и почувствовать радость <br />
                                от простых вещей
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[2.99rem]">
                        <Image src={"/img/important/mission2.png"} alt="Potato-King" width={201} height={201} />
                        <div className="flex flex-col gap-[2.99rem]">
                            <span className="text-[#FFB400] text-[2.56rem] font-bold uppercase">Красота в деталях</span>
                            <p className="text-[1.88rem] leading-[2.22rem] max-w-120"><span className="font-bold">SIMPOTATO</span> стремится радовать
                                глаз, вызывать эстетическое
                                удовольствие и вдохновлять
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 justify-between">
                    <div className="flex items-center gap-[2.99rem]">
                        <Image src={"/img/important/mission3.png"} alt="Перец" width={201} height={201} />
                        <div className="flex flex-col gap-[2.99rem]">
                            <span className="text-[#FFB400] text-[2.56rem] font-bold uppercase">Игривость</span>
                            <p className="text-[1.88rem] leading-[2.22rem] max-w-124"><span className="font-bold">SIMPOTATO</span> — это бренд с улыбкой,
                                который добавляет легкости <br />
                                и радости в каждый момент
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[2.99rem]">
                        <Image src={"/img/important/mission4.png"} alt="Smile" width={201} height={201} />
                        <div className="flex flex-col gap-[2.99rem]">
                            <span className="text-[#FFB400] text-[2.56rem] font-bold uppercase">Наслаждение вкусом</span>
                            <p className="text-[1.88rem] leading-[2.22rem] max-w-132">
                                Мы создаем чипсы, которые удивляют,
                                радуют и дарят гастрономическое
                                удовольствие
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Important
