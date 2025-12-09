
const SliderButtons = ({prev, next, activeIndex, totalSlides, nodisable}: {prev: string, next: string, activeIndex: number, totalSlides: number, nodisable?: boolean}) => {
  return (
    <>
         <button
            className={`
              pointer-events-auto ${prev} absolute left-6 top-1/2 -translate-y-1/2 z-20
              transition-opacity duration-300
              ${nodisable ? "" : activeIndex === 0 ? "opacity-40 cursor-default" : "opacity-100 cursor-pointer"}
            `}
            disabled={nodisable ? false : activeIndex === 0}
          >
            <svg className="scale-60 md:scale-100" width="28" height="51" viewBox="0 0 28 51" fill="none">
              <g clipPath="url(#clip0)">
                <path
                  d="M25.2236 2.99628L2.57658 25.6433L25.2236 48.2904"
                  stroke="#FFFCF4" 
                  strokeWidth="4.462"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="28"
                    height="51"
                    fill="white"
                    transform="matrix(-1 0 0 1 28 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>

          <button
            className={`
              pointer-events-auto ${next} absolute right-6 top-1/2 -translate-y-1/2 z-20 rotate-180
              transition-opacity duration-300
              ${nodisable ? "" : activeIndex === totalSlides - 1 ? "opacity-40 cursor-default" : "opacity-100 cursor-pointer"}
            `}
            disabled={nodisable ? false : activeIndex === totalSlides - 1}
          >
            <svg className="scale-60 md:scale-100" width="28" height="51" viewBox="0 0 28 51" fill="none">
              <g clipPath="url(#clip0)">
                <path
                  d="M25.2236 2.99628L2.57658 25.6433L25.2236 48.2904"
                  stroke="#FFFCF4"
                  strokeWidth="4.462"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="28"
                    height="51"
                    fill="white"
                    transform="matrix(-1 0 0 1 28 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
    </>
  )
}

export default SliderButtons
