import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ icon, title, link, isActive }) {
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
    <Link
      href={link}
      className="flex h-[44px] w-full cursor-pointer items-center"
    >
      {icon}
      <span
        className={`${isActive ? "text-blue" : "text-gray-200"} mr-[14.5px] block text-[14px] font-normal `}
      >
        {title}
      </span>
    </Link>
  );
}
