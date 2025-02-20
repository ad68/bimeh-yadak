import React, { useState, useEffect } from "react";
import Avatar from "../../../../../../../public/assets/icons/avatar.svg";
import ArrowDown from "../../../../../../../public/assets/icons/fillArrowDown.svg";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowdown,
  IconDashboard,
  IconDashboardprofile,
  IconLogout,
} from "@/common/icons";
import { useRouteListener } from "@/hooks";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

// eslint-disable-next-line react/display-name
function ProfileBtn({ authInfo, mode, setLogOutModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const [routeStatus] = useRouteListener();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [menuShow, setMenuShow] = useState(false);

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    let proFileMenuBtn = document.querySelector(".profileMenuBtnDesc");
    let profileMenu = document.querySelector(".profileMenuDesc");
    document.onclick = function (e) {
      if (
        !proFileMenuBtn.contains(e.target) &&
        !profileMenu.contains(e.target)
      ) {
        setMenuShow(false);
      }
    };
  }, []);
  useEffect(() => {
    setMenuShow(false);
  }, [routeStatus]);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="relative">
        <button
          onClick={() => setMenuShow(!menuShow)}
          className="profileMenuBtnDesc flex h-9 min-w-[100px] items-center justify-center gap-1 rounded-full bg-blue px-4
              py-[10px] font-medium leading-normal text-[white] hover:bg-[#4E94EA] md:h-[42px] xl:w-auto dark:bg-darkBtn-100 dark:text-darkText-500 dark:hover:bg-darkBtn-200"
        >
          <Image src={Avatar} alt="" className="h-[25px] w-[25px]" />
          <span className="mr-2">
            {mode === "userInfoNotComplete" && authInfo?.mobileNumber}
            {mode === "userInfoComplete" &&
              authInfo?.firstName + " " + authInfo?.lastName}
          </span>
          <Image src={ArrowDown} alt="" className="h-[20px] w-[20px]" />
        </button>
        <section
          className={`profileMenuDesc absolute left-0  mr-[-1px] mt-[4px] h-auto w-[200px] overflow-hidden rounded-xl bg-white shadow-xl transition-all [&>*]:transition-all [&>span:hover]:bg-slate-200 ${menuShow ? "block" : "hidden"}`}
        >
          {/* <span className='flex items-center py-3 pb-2 px-5 cursor-pointer '>
                        <IconUserCircle />
                        <span className='mr-2'>
                            {mode === "userInfoNotComplete" && authInfo?.mobileNumber}
                            {mode === "userInfoComplete" && authInfo?.firstName + " " + authInfo?.lastName}
                        </span>
                    </span> */}
          <span className="block cursor-pointer px-5 py-2">
            <Link href="/dashboard" className="flex items-center">
              <IconDashboardprofile />
              <span className="mr-2">داشبورد</span>
              <IconArrowdown className="mr-auto h-[20px] w-[20px] rotate-90" />
            </Link>
          </span>

          <span
            onClick={() => {
              setLogOutModal(true);
              setMenuShow(false);
            }}
            className="flex cursor-pointer items-center px-5 pb-3 pt-2"
          >
            <IconLogout />
            <span className="mr-2">خروج</span>
          </span>
        </section>
      </section>
    </>
  );
}

export default ProfileBtn;
