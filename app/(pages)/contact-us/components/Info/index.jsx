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
      <section className="flex flex-col gap-4 xl:gap-8">
        <section className="flex items-start gap-4">
          <Image
            alt=" "
            src="/assets/icons/Phone CallingAbout.svg"
            width={48}
            height={48}
            className="h-7 w-7 xl:h-12 xl:w-12"
          />
          <span className="text-base xl:text-xl">تلفن:</span>
          <span className="text-sm xl:text-xl">
          ۰۲۱۹۱۰۱۱۵۹۳
          </span>
        </section>
        <section className="flex items-start gap-4">
          <Image
            alt=""
            src="/assets/icons/Lettercomment.svg"
            width={48}
            height={48}
            className="h-7 w-7 xl:h-12 xl:w-12"
          />
          <span className="text-base xl:text-xl">ایمیل:</span>
          <span className="text-base xl:text-xl"> info@emdadkhodro1593.ir </span>
        </section>

        <section className="flex items-start gap-4">
          <Image
            alt=" "
            src="/assets/icons/Point On Mapcomments.svg"
            width={48}
            height={48}
            className="h-7 w-7 xl:h-12 xl:w-12"
          />
          <span className="text-base xl:text-xl">آدرس:</span>
          <span className="text-sm xl:w-[550px] xl:text-xl">
          تهران،کیانشهر، خیابان شهید سید عیوض روانبخش، بن بست چهارم، پلاک ۴، طبقه دوم
          </span>
        </section>
      </section>
    </>
  );
}
