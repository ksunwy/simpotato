import Image from "next/image"

const About = ({ aboutSectionsRef }: { aboutSectionsRef: any }) => {
    return (
        <section ref={aboutSectionsRef} id="about" className="relative w-dvw h-[621px] md:h-[80.9rem] bg-linear-to-b md:bg-linear-to-r from-[#610000] to-[#9C0000] md:via-[80.89%] text-white overflow-hidden">
            <svg className="hidden md:flex! absolute top-1/2 -translate-y-1/2 -right-25" width="796" height="945" viewBox="0 0 796 945" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="613" cy="473" rx="613" ry="705" fill="#5F0000" />
            </svg>
            <svg className="flex md:hidden! absolute -bottom-[40%] left-1/2 -translate-x-1/2" width="501" height="550" viewBox="0 0 501 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="250.5" cy="275" rx="250.5" ry="275" fill="#5F0000" />
            </svg>

            <Image src={"/img/About.png"} alt="simpotato" className="absolute top-[48%] -translate-y-1/2 right-0 hidden md:flex!" width={1080} height={680} />
            <Image src={"/img/AboutMobile.png"} alt="simpotato" className="absolute bottom-0 left-1/2 -translate-x-1/2 flex md:hidden!" width={1080} height={680} />
            <div className="flex flex-col gap-[5.99rem] w-dvw width-restrictions absolute left-1/2 -translate-x-1/2 top-[50px] md:top-1/2 md:-translate-y-1/2">
                <p className="text-[20px] md:text-[3.76rem] leading-[24px] md:leading-[4.1rem] text-[#FFE29B] font-bold tracking-wide max-w-[244px] md:max-w-244">
                    «Чипсы из симпатичной картошки» — это не просто снек,
                    а стиль жизни, где вкус, <br /> эстетика и удовольствие сливаются в идеальном хрусте
                </p>
                <p className="text-[16px] leading-[18px] md:leading-[3.59rem] md:text-[2.73rem] tracking-wide max-w-[225px] md:max-w-none"><span className="font-bold">SIMPOTATO</span> — это бренд картофельных <br />
                    чипсов, который превращает обычный снек <br />
                    в искусство наслаждения вкусом, красотой <br />
                    и моментом.
                </p>
            </div>
        </section>
    )
}

export default About
// bg-linear-to-b from-[#610000] to-[#9C0000]