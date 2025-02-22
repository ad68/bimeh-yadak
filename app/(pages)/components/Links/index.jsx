"use client";
import React, { useState, useContext, useEffect } from "react";
import LinkItem from "./components/LinkItem";
import Repair from "../../../../public/icons/Group 4.png";
import Api from "../../../../public/icons/Group 8.png";
import Store from "../../../../public/icons/Group 6.png";
import Money from "../../../../public/icons/Group 10.png";
import Chart from "../../../../public/icons/Layer_1.png";
//
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
    <section>
      <section className="w-[90%] mx-auto xl:w-full flex justify-center gap-x-10 xl:gap-[164px] gap-y-6 xl:gap-y-[20px] xl:mt-[75px] mt-[30px] ">
        <section>
          <LinkItem img={Repair} title="خرید بیمه‌نامه" href="/part-order" />
        </section>
        <section>
          <LinkItem
            img={Store}
            title="درخواست امداد خودرو"
            href="/website-sell"
          />
        </section>
        <section>
          <LinkItem img={Api} title="اعلام خسارت" href="/api-sell" />
        </section>
      </section>
      <section className="flex justify-center xl:gap-[164px] gap-x-10">
        <section>
          <LinkItem img={Money} title="ارزش روز خودرو" href="/" />
        </section>
        <section>
          <LinkItem
            img={Chart}
            title="محاسبه افت بازار و بیمه خودرو"
            href="/price-drop"
          />
        </section>
      </section>
    </section>
  );
}
