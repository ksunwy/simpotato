import Image from "next/image"
import Link from "next/link"

const header = ({aboutSectionsRef, productsRef, footerRef, wherebuyRef, scrollToSection}: {aboutSectionsRef: any, productsRef: any, footerRef: any, wherebuyRef: any, scrollToSection: any}) => {

  return (
    <header className="absolute top-0 left-0 flex flex-row items-center justify-between w-full z-10 h-[6.16rem] bg-(--brown)">
      <nav className="text-(--white) flex items-center justify-between w-full width-restrictions">
        <ul className="flex items-center gap-[3.42rem] text-[1.54rem]">
          <li>
            <button
              onClick={() => scrollToSection(aboutSectionsRef)}
              className="bg-transparent border-none cursor-pointer text-(--white) hover:opacity-80 transition-opacity"
            >
              О бренде
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(productsRef)}
              className="bg-transparent border-none cursor-pointer text-(--white) hover:opacity-80 transition-opacity"
            >
              Ассортимент
            </button>
          </li>
        </ul>
        <ul className="flex items-center gap-[3.42rem] text-[1.54rem]">
          <li>
            <button
              onClick={() => scrollToSection(footerRef)}
              className="bg-transparent border-none cursor-pointer text-(--white) hover:opacity-80 transition-opacity"
            >
              Контакты
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(wherebuyRef)}
              className="bg-transparent border-none cursor-pointer text-(--white) hover:opacity-80 transition-opacity"
            >
              Где купить
            </button>
          </li>
        </ul>
      </nav>
     <div className="bg-(--white) px-10 py-[2.05rem] absolute top-0 left-1/2 -translate-x-1/3 rounded-b-[2.22rem] drop-shadow-[3px_4px_4.3px_rgba(86,0,2,0.2)]">
      <Image src={"/svg/Logo.svg"} alt="SIMPOTATO" width={200} height={64} />
     </div>
    </header>
  )
}

export default header
