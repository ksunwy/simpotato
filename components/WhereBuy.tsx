import Image from "next/image"

const WhereBuy = ({wherebuyRef}: {wherebuyRef: any}) => {
  return (
    <section ref={wherebuyRef} id="wherebuy" className="w-dvw h-fit md:h-[78.93rem] width-restrictions flex flex-col justify-center py-[50px] md:py-0 gap-[40px] md:gap-[8.04rem]">
      <h3 className="uppercase font-bold text-(--blue) text-[33px] md:text-[5.47rem]">где купить</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:justify-start w-full gap-[1.71rem]">
        <div className="bg-(--white) mx-auto md:ml-auto lg:m-0 rounded-lg shadow-[4px_4px_14.8px_rgba(100,118,151,0.25)] hover:shadow-[4px_4px_15.4px_7px_rgba(71,130,240,0.25)] transition-all duration-300 cursor-pointer w-full sm:w-1/2 md:w-full h-[128px] md:h-[18.32rem] px-[1.37rem] flex items-center justify-center">
            <Image src={"/img/shops/five.png"} alt="Пятерочка" className="" width={430} height={90.58} />
        </div>
        <div className="bg-(--white) mx-auto md:m-0 rounded-lg shadow-[4px_4px_14.8px_rgba(100,118,151,0.25)] hover:shadow-[4px_4px_15.4px_7px_rgba(71,130,240,0.25)] transition-all duration-300 cursor-pointer w-full sm:w-1/2 md:w-full h-[128px] md:h-[18.32rem] px-[1.37rem] flex items-center justify-center">
            <Image src={"/img/shops/ozon.png"} alt="OZON" className="" width={420} height={107} />
        </div>
        <div className="bg-(--white) mx-auto md:ml-auto lg:m-0 rounded-lg shadow-[4px_4px_14.8px_rgba(100,118,151,0.25)] hover:shadow-[4px_4px_15.4px_7px_rgba(71,130,240,0.25)] transition-all duration-300 cursor-pointer w-full sm:w-1/2 md:w-full h-[128px] md:h-[18.32rem] px-[1.37rem] flex items-center justify-center">
            <Image src={"/img/shops/wildberries.png"} alt="Wildberries" className="" width={430} height={63.61} />
        </div>
        <div className="bg-(--white) mx-auto md:m-0 rounded-lg shadow-[4px_4px_14.8px_rgba(100,118,151,0.25)] hover:shadow-[4px_4px_15.4px_7px_rgba(71,130,240,0.25)] transition-all duration-300 cursor-pointer w-full sm:w-1/2 md:w-full h-[128px] md:h-[18.32rem] px-[1.37rem] flex items-center justify-center">
            <Image src={"/img/shops/cross.png"} alt="Перекресток" className="" width={430} height={55.56} />
        </div>
        <div className="bg-(--white) mx-auto md:ml-auto lg:m-0 rounded-lg shadow-[4px_4px_14.8px_rgba(100,118,151,0.25)] hover:shadow-[4px_4px_15.4px_7px_rgba(71,130,240,0.25)] transition-all duration-300 cursor-pointer w-full sm:w-1/2 md:w-full h-[128px] md:h-[18.32rem] px-[1.37rem] flex items-center justify-center">
            <Image src={"/img/shops/market.png"} alt="Яндекс маркет" className="" width={430} height={63.61} />
        </div>
        <div className="bg-(--white) mx-auto md:m-0 rounded-lg shadow-[4px_4px_14.8px_rgba(100,118,151,0.25)] hover:shadow-[4px_4px_15.4px_7px_rgba(71,130,240,0.25)] transition-all duration-300 cursor-pointer w-full sm:w-1/2 md:w-full h-[128px] md:h-[18.32rem] px-[1.37rem] flex items-center justify-center">
            <Image src={"/img/shops/megamarket.png"} alt="Мегамаркет" className="" width={430} height={90.19} />
        </div>
      </div>
    </section>
  )
}

export default WhereBuy
