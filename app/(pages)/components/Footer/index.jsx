"use client";

import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToTop } from "@/helper";
import Image from "next/image";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const pathName = usePathname();

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
      {pathName === "/" ||
      pathName === "/login" ||
      pathName === "/dashboard" ||
      pathName.startsWith("/dashboard/") ? (
        ""
      ) : (
        <footer className="w-full pt-[56px] bg-[#FFC727] mt-[139px]  xl:block hidden relative  rounded-t-[100px] h-auto max-w-full m-auto   ">
          <button
            onClick={scrollToTop}
            className="w-[98px] flex justify-center items-center bg-[#FFC727] h-[98px] rounded-full border-[8px]  absolute -top-[10%] left-[48%] border-[#fafafa]"
          >
            <Image src={'/icons/arrow-up-04-stroke-rounded 1.svg'} width={40} height={40} alt=""/>
            
          </button>
          <section className="flex pb-[60px] border-b  border-[#D9DBE9] gap-[153px] w-[1440px]  mx-auto ">
            <section className="w-[310px]">
              <Link href="/" className="flex items-center ">
          <Image src="/icons/Group 13.svg" width={133.89} height={89} alt="" className="w-[133.89px] h-[89px]"/>
          <h2 className="text-[32px] font-bold  mr-[-20px]"> بیمه یدک</h2>
        </Link>
              <p className="mt-6 h-[120px]  text-justify leading-[30px] text-sm font-medium">
                بیمه یدک، یک موتور جستجوی تخصصی لوازم یدکی خودرو است که با
                ارائه قیمت‌های به‌روز، دسترسی سریع و آسان به قطعات مختلف را برای
                شما فراهم می‌کند
              </p>
              <section className="flex mt-6 gap-6 items-center">
                <button className="hover:scale-110 hover:transition-all "><Image src={'/icons/YouTube.svg'} width={30} height={30} className="size-[20px]" alt="" /></button>
                <button className="hover:scale-110 hover:transition-all "><Image src={'/icons/LinkedIn.svg'} width={30} height={30} className="size-[20px]" alt="" /></button> 
                <button className="hover:scale-110 hover:transition-all "><Image src={'/icons/Instagram.svg'} width={30} height={30} className="size-[20px]" alt="" /></button>
                <button className="hover:scale-110 hover:transition-all "><Image src={'/icons/Twitter.svg'} width={30} height={30} className="size-[20px]" alt="" /></button>
                <button className="hover:scale-110 hover:transition-all "> <Image src={'/icons/Facebook.svg'} width={30} height={30} className="size-[20px]" alt="" /></button>
               
              </section> 
            </section>
            <section className="">
              <h2 className="text-[#170F49] text-[20px] font-bold leading-[22px]">
                خدمات
              </h2>
              <nav className="mt-10 flex flex-col gap-6  font-medium leading-[20px]">
                <Link href="/part-order" className="hover:opacity-50">
                خرید بیمه‌نامه                </Link>
                <Link href="/website-sell" className="hover:opacity-50">
                درخواست امداد خودرو                </Link>
                <Link href="/api-sell" className="hover:opacity-50">
                اعلام خسارت                </Link>
                <Link href="/agency" className="hover:opacity-50">
                ارزش روز خودرو                </Link>


                <Link href="/price-drop" className="hover:opacity-50">
                محاسبه افت بازار و بیمه خودرو                </Link>
              </nav>
            </section>
            <section className="">
              <h2 className="text-[#170F49] text-[20px] font-bold leading-[22px]">
                آشنایی با ما
              </h2>
              <ul className="mt-10 flex flex-col gap-6  font-medium leading-[20px]">
                   <li><Link className="hover:opacity-50" href="/about">
            درباره ما
          </Link></li>       
                <li><button className="hover:opacity-50">اخبار</button></li>
                <li>          <Link href="/article" className="hover:opacity-50">
            مقالات
          </Link></li>
              </ul>
            </section>
            <section className="">
              <h2 className="text-[#170F49] text-[20px] font-bold leading-[22px]">
                تماس با ما
              </h2>
              <ul className="mt-10 flex flex-col w-[286px] gap-6  font-medium leading-[20px]">
                <li className="flex gap-[6px] items-center">
                  <Image src={'/icons/Email.svg'} width={30} height={30} alt=""/>
                  info@emdadkhodro1593.ir
                  </li>
                <li className="flex gap-[6px] items-center">
                  <Image src={'/icons/Phone.svg'} width={30} height={30} alt=""/>
                  
                  ۰۲۱۹۱۳۰۱۵۹۳ 
                </li>
                <li className="flex gap-[6px]  items-start  leading-[32px]">
                  <Image src={'/icons/Mark.svg'} width={30} height={30} alt=""/>
                  
                  <span className="w-[260px] ">
                  
                    تهران،کیانشهر، خیابان شهید سید عیوض روانبخش، بن بست چهارم، پلاک ۴، طبقه دوم
                  </span>
                </li>
              </ul>

            <Image src={'/icons/photo_2025-02-23_19-18-27.jpg'} width={80} height={80} className="xl:w-[80px] xl:h-[110px] place-self-end mt-2" alt=""/>
            </section>
          </section>
        </footer>
      )}
    </>
  );
}
