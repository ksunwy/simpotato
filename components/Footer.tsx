import Link from "next/link"

const Footer = ({ footerRef }: { footerRef: any }) => {
  return (
    <footer ref={footerRef} id="footer" className="relative w-full h-fit md:h-[52.82rem] bg-blue flex flex-col gap-[60px] md:gap-[9.16rem] py-[50px] md:py-[6.84rem] text-white bg-(--blue) overflow-hidden">
      <div className="w-full relative width-restrictions">
        <img src="/svg/LogoLightRu.svg" alt="SIMPOTATO" className="w-full h-auto md:h-[19.77rem]" />
      </div>
      <img src="/svg/patterns/FooterPattern.svg" alt="simpotato" className="absolute bottom-0 md:-bottom-[50%] right-0 scale-250 md:scale-175" />
      <div className="flex flex-col-reverse md:flex-col gap-[5.13rem] width-restrictions">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between">
          <p className="text-left text-[14px] md:text-[2.05rem] max-w-130 md:max-w-none">ПАО "Корпоративный цент ИКС5", ОГРН 1247700463911. <br /> Адрес: 109029, город Москва, ул. Средняя Калитниковская, д. 28, стр. 4.</p>
          <Link href="/" className="hover:opacity-75 transition-all duration-300 mb-5 md:m-0"><span className="text-[16px] md:text-[2.05rem]">Политика конфиденциальности</span></Link>
        </div>
        <span className="text-left text-[16px] md:text-[2.05rem] max-w-80 md:max-w-none">Связаться с нами — <a href="mailto:help@rockitbrands.ru" className="hover:opacity-75 transition-all duration-300"><u className="text-[16px] md:text-[2.05rem]">help@rockitbrands.ru</u></a></span>
      </div>
    </footer>
  )
}

export default Footer
