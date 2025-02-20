import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import CollapseItem from "./CollapseItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  IconDamage,
  IconHome,
  IconInquiry2,
  IconLogoutN,
} from "@/common/icons";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setLogOutModal, setOpen }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [open2, setOpen2] = useState(false);
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
      <section className="mt-2 p-[14px]">
        <MenuItem
          link={"/dashboard"}
          isActive={pathname === "/dashboard"}
          title="داشبورد"
          icon={
            <IconHome
              color={pathname === "/dashboard" ? "#0165e1" : "#3E4151"}
              fill={pathname === "/dashboard" ? "#0165e1" : "#3E4151"}
            />
          }
        />

        <CollapseItem
          title="استعلامات"
          menuList={[
            { title: "استعلام خلافی", link: "/dashboard/Inquiry/violation" },
            {
              title: "استعلام گواهینامه",
              link: "/dashboard/Inquiry/certificate",
            },
            { title: "پلاک های من", link: "/dashboard/Inquiry/plates" },
            {
              title: "سوابق استعلام",
              link: "/dashboard/Inquiry/inquiryrecords",
            },
            {
              title: "استعلام نمره منفی",
              link: "/dashboard/Inquiry/negative-inquery-cerficate",
            },
            {
              title: "استعلام مدارک خودرو",
              link: "/dashboard/Inquiry/vehicledocuments",
            },
          ]}
        />

        <MenuItem
          link={"/dashboard/declaration-damage"}
          isActive={pathname === "/dashboard/declaration-damage"}
          icon={
            <IconDamage
              color={
                pathname === "/dashboard/declaration-damage"
                  ? "#0165e1"
                  : "#3E4151"
              }
              fill={
                pathname === "/dashboard/declaration-damage"
                  ? "#0165e1"
                  : "#3E4151"
              }
            />
          }
          title="اعلام خسارت"
        />
        <span
          onClick={() => {
            setLogOutModal(true);
            setOpen(false);
          }}
          className="flex h-[44px] w-full cursor-pointer items-center"
        >
          <IconLogoutN
            color={pathname === "/" ? "#0165e1" : "#3E4151"}
            fill={pathname === "/" ? "#0165e1" : "#3E4151"}
          />
          <span className={` mr-[14.5px] block text-[14px] font-normal `}>
            خروج از حساب کاربری
          </span>
        </span>
      </section>
    </>
  );
}
