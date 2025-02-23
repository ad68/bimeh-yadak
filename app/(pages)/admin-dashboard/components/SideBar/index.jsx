"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ListItem from "./components/ListItem";
import EditProfileSideBar from "./components/EditProfile";
import { useAuthStore } from "@/store/auth/login";
import { isEmptyObject } from "@/helper";
import { usePathname } from "next/navigation";
import { IconLogout } from "@/common/icons";
import { LogoutModal } from "@/common";
import { useSideBarStore } from "@/store/dashboard/sidebar";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const showSideBar = useSideBarStore((state) => state.showSideBar);
  const authInfo = useAuthStore((state) => state.authInfo);
  const pathname = usePathname();
  const [logOutModal, setLogOutModal] = useState(false);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [authStatus, setAuthStatus] = useState(false);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getAuthStatus = () => {
    if (!isEmptyObject(authInfo)) {
      if (authInfo?.mobileNumber && !authInfo?.firstName) {
        return authInfo?.mobileNumber;
      } else if (authInfo?.firstName) {
        return authInfo?.firstName + " " + authInfo?.lastName;
      }
    }
  };

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    setAuthStatus(getAuthStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authInfo]);

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="relative hidden h-[879px] w-[300px] overflow-hidden rounded-[10px] border border-solid border-[#8B929A36] sm:hidden md:hidden lg:block 2xl:block">
        <section className="mx-6 flex h-auto flex-col  justify-start">

          <Link
            href="/admin-dashboard/collaboration"
            className={`${pathname === "/admin-dashboard/collaboration" ? "text-blue" : ""}  flex mt-10 h-[48px] items-center gap-[12px] pr-[14.5px] dark:text-white`}
          >
            <span>لیست همکاری ها</span>
          </Link>
          <Link
            href="/admin-dashboard/relief-signup"
            className={`${pathname === "/admin-dashboard/relief-signup" ? "text-blue" : ""}  flex h-[48px] items-center gap-[12px] pr-[14.5px] dark:text-white`}
          >
            <span>پیش ثبت نام های بیمه</span>
          </Link>


        </section>
        <button
          onClick={() => setLogOutModal(true)}
          className="absolute bottom-0  mt-[296px] flex h-[57px] w-full items-center gap-[11.7px] self-end border-t border-solid border-[#8B929A36]"
        >
          <IconLogout
            color={pathname === "/" ? "#0165e1" : "#3E4151"}
            fill={pathname === "/" ? "#0165e1" : "#3E4151"}
            className="mr-[12px]"
          />
          <span className="dark:text-white">خروج از حساب</span>
        </button>
      </section>
      <EditProfileSideBar />
      <LogoutModal
        open={logOutModal}
        onClose={() => setLogOutModal(false)}
        title="خروج"
      />
    </>
  );
}
