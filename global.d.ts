import { ScrollSmoother } from "gsap/ScrollSmoother";

declare global {
  interface Window {
    scrollSmoother?: ScrollSmoother;
  }
}