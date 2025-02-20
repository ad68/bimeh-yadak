"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
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
      <section className="mx-auto md:w-[80%] xl:w-[391px] ">
        <Image
          src="/assets/images/car-group.png"
          width={460}
          height={255}
          className="mx-auto mb-[59px]  mt-0 h-auto w-[60%]  lg:mt-[165px] xl:mx-[5px] xl:h-[255] xl:w-[460px]"
          alt=""
        />
        <section className="mb-[47.63px] h-auto border-r-[2px] border-solid border-[#4E94EA]">
          <p className=" mr-2 text-sm leading-[24.18px] text-[#3E4151] xl:text-base xl:leading-[27.64px]">
            برای استعلام جریمه‌ها و پرداخت آنها کافی است، شماره پلاک وسیله نقلیه
            خود را در این بخش وارد کنید و با انتخاب روش مناسب به‌روزترین مبلغ
            خلافی خودرو را مشاهده و نسبت به پرداخت آن‌ها اقدام کنید.
          </p>
        </section>
      </section>
    </>
  );
}
