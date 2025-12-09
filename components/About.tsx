import Image from "next/image"
import { useEffect } from "react";

const About = ({ aboutSectionsRef }: { aboutSectionsRef: any }) => {

    useEffect(() => {
        if (typeof window === "undefined" || window.matchMedia("(hover: none)").matches) return;

        const chips = Array.from(document.querySelectorAll(".chip")) as HTMLElement[];

        const parallaxData = chips.map((chip, i) => ({
            el: chip,
            coef: 8 + (i % 5) * 3, 
            x: 0,
            y: 0
        }));

        let mouseX = 0;
        let mouseY = 0;
        let frameRequested = false;

        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;

            mouseX = (e.clientX / innerWidth - 0.5) * 2;
            mouseY = (e.clientY / innerHeight - 0.5) * 2;

            if (!frameRequested) {
                frameRequested = true;
                requestAnimationFrame(updateChips);
            }
        };

        const updateChips = () => {
            parallaxData.forEach(d => {
                const tx = mouseX * d.coef;
                const ty = mouseY * d.coef;

                d.x += (tx - d.x) * 0.07;
                d.y += (ty - d.y) * 0.07;

                d.el.style.transform = `translate3d(${d.x}px, ${d.y}px, 0)`;
            });

            frameRequested = false;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section ref={aboutSectionsRef} id="about" className="about-section overflow-hidden relative w-dvw h-[621px] md:h-[80.9rem] bg-linear-to-b md:bg-linear-to-r from-[#002F64] to-[#0058BB] md:via-[54%] text-white ">
            <svg className="about-bg-ellipse hidden md:flex! absolute top-1/2 -translate-y-1/2 -right-25" width="796" height="945" viewBox="0 0 796 945" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="613" cy="473" rx="613" ry="705" fill="#003D81" />
            </svg>
            <svg className="about-bg-ellipse-mobile flex md:hidden! absolute -bottom-[40%] left-1/2 -translate-x-1/2" width="501" height="550" viewBox="0 0 501 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="250.5" cy="275" rx="250.5" ry="275" fill="#003D81" />
            </svg>

            <Image src={"/img/AboutProduct.png"} alt="simpotato" className="about-image absolute top-[48%] -translate-y-1/2 right-0 hidden md:flex! w-[480px] h-[550px] 2xl:w-[599px] 2xl:h-[716px]" width={599} height={716} />
            <Image src={"/img/AboutMobile.png"} alt="simpotato" className="about-image-mobile absolute bottom-0 left-1/2 -translate-x-1/2 flex md:hidden!" width={1080} height={680} />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex!">
                <div className="relative w-[70.29rem] h-[71.66rem]">
                    <Image src={"/img/ships/chips1.png"} alt="chips" className="chip about-image absolute top-0 left-[.8rem]" width={102} height={51} />
                    <Image src={"/img/ships/chips10.png"} alt="chips" className="chip about-image absolute top-[200px] left-[132px] hidden 2xl:flex" width={104} height={104} />
                    <Image src={"/img/ships/chips3.png"} alt="chips" className="chip about-image absolute top-[413px] left-0" width={93} height={37} />
                    <Image src={"/img/ships/chips5.png"} alt="chips" className="chip about-image absolute top-[516px] left-[125px]" width={93} height={104} />
                    <Image src={"/img/ships/chips6.png"} alt="chips" className="chip about-image absolute bottom-[75px] left-[247px] hidden 2xl:flex" width={88} height={120} />
                    <Image src={"/img/ships/chips7.png"} alt="chips" className="chip about-image absolute bottom-0 left-[407px]" width={107} height={92} />
                    <Image src={"/img/ships/chips8.png"} alt="chips" className="chip about-image absolute top-[8px] right-0" width={96} height={127} />
                    <Image src={"/img/ships/chips9.png"} alt="chips" className="chip about-image absolute top-[166px] right-[109px] hidden 2xl:flex" width={74} height={111} />
                    <Image src={"/img/ships/chips2.png"} alt="chips" className="chip about-image absolute top-[363px] right-[79px]" width={94} height={114}  />
                </div>
            </div>
            <div className="about-text-wrapper flex flex-col gap-[5.99rem] w-dvw width-restrictions absolute left-1/2 -translate-x-1/2 top-[50px] md:top-1/2 md:-translate-y-1/2">
                <p className="about-title text-[20px] md:text-[3.76rem] leading-[24px] md:leading-[4.1rem] text-[#FFE29B] font-bold tracking-wide max-w-[320px] md:max-w-244">
                    «Чипсы из симпатичной картошки» — это не просто снек,
                    а стиль жизни, где вкус, <br /> эстетика и удовольствие сливаются в идеальном хрусте
                </p>
                <p className="about-subtitle text-[16px] leading-[18px] md:leading-[3.59rem] md:text-[2.73rem] tracking-wide max-w-[300px] md:max-w-220"><span className="font-bold">SIMPOTATO</span> — это бренд картофельных <br />
                    чипсов, который превращает обычный снек 
                    в искусство наслаждения вкусом, красотой 
                    и моментом.
                </p>
            </div>
        </section>
    )
}

export default About



