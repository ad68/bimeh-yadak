import SliderSearch from "./components/SliderSearch";
import Vehicles from "./components/Vehicles";
import Calculate from "./components/CalculateBox";
import CalculateBoxMobile from "./components/CalculateBoxMobile";
import Article from "./components/Article";

/* import BrandCarousel from "./components/BrandCarousel"; */
/* import BrandCarousel from "./components/BrandCarousel"; */
/* import BigProducts from "./components/BigProducts"; */
/* import MostViewed from "./components/MostViewed"; */
/* import SearchByProperty from "./components/SearchByProperty"; */

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function page() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  //

  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="w-[1366px] m-auto">
        <section className="container hidden items-center justify-center lg:flex">
          <Calculate />
        </section>
        <section className="container flex items-center justify-center lg:hidden">{/*  <CalculateBoxMobile /> */}</section>
      </section>
    </>
  );
}
