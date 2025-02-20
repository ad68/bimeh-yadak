import Calculate from "./components/CalculateBox";
import CalculateBoxMobile from "./components/CalculateBoxMobile";

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
      <section className="w-[1366px] max-w-full m-auto">
        <section className="container hidden items-center justify-center lg:flex">
          <Calculate />
        </section>
        <section className="container flex items-center justify-center lg:hidden">
          <CalculateBoxMobile />
        </section>
      </section>
    </>
  );
}
