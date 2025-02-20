import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowdown, IconInquiry2 } from "@/common/icons";
import { usePathname } from "next/navigation";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ title, menuList = [] }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section
        onClick={() => setOpen(!open)}
        className="flex h-[48px] w-full cursor-pointer items-center justify-between rounded-[8px]"
      >
        <section className="flex items-center">
          <span>
            {title}
          </span>
        </section>
        <IconArrowdown
          width={15}
          height={15}
          className={`transition-all duration-500 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </section>
      <section
        className={`${open ? "h-[80px]" : "h-0"}  overflow-auto transition-all duration-500 ease-in-out`}
      >
        <ul className="text-[13px] leading-6 text-[#3E4151]">
          {menuList.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`${pathname === item.link ? "text-blue" : ""} flex items-center`}
              >

                <span className="mr-[16px]">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
