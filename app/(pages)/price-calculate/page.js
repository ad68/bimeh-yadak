"use client";
import CalculateBox from "../components/CalculateBox";
import CalculateBoxMobile from "../components/CalculateBoxMobile";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mt-[65px] xl:mt-[80px] flex xl:h-[150px] h-[100px] w-full items-center justify-center bg-primary font-bold  ">
        <h3 className="xl:text-[40px] text-[24px] font-bold text-center px-10">ارزش روز خودرو</h3>
      </section>
      <section className="container hidden items-center justify-center lg:flex">
        <CalculateBox />
      </section>
      <section className="container flex items-center justify-center lg:hidden">
        <CalculateBoxMobile />
      </section>
    </>
  );
}
