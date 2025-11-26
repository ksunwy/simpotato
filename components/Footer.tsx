import Link from "next/link"

const Footer = ({footerRef}: {footerRef: any}) => {
  return (
    <footer ref={footerRef} id="footer" className="relative w-full h-[52.82rem] bg-blue flex flex-col gap-[9.16rem] py-[6.84rem] text-white bg-(--blue) overflow-hidden">
      <img src="/svg/patterns/FooterPattern.svg" alt="simpotato" className="absolute bottom-0 right-0" />
      <img src="/svg/LogoLightRu.svg" alt="SIMPOTATO" className="w-full h-[19.77rem]" />
      <div className="flex flex-col gap-[5.13rem] width-restrictions">
        <div className="flex items-center justify-between">
          <p className="text-left">ПАО "Корпоративный цент ИКС5", ОГРН 1247700463911. <br /> Адрес: 109029, город Москва, ул. Средняя Калитниковская, д. 28, стр. 4.</p>
          <Link href="/" className="hover:opacity-75 transition-all duration-300">Политика конфиденциальности</Link>
        </div>
        <span className="text-left">Связаться с нами — <a href="mailto:help@rockitbrands.ru" className="hover:opacity-75 transition-all duration-300"><u>help@rockitbrands.ru</u></a></span>
      </div>
    </footer>
  )
}

export default Footer
