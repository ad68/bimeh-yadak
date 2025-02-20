"use client";
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconMenu, IconLogin } from "@/common/icons";
import { useAuthStore } from "@/store/auth/login";
import { isEmptyObject } from "@/helper";
import TopNavigation from "../TopNavigation";
import logo from "../../../../../../public/assets/images/logo.png";
import DashboardMobileMenu from "../DashboardMobileMenu";
import DarkMode from "../DarkMode";
import ProfileBtn from "./components/ProfileBtn";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({ setOpen, open, setLogOutModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const pathname = usePathname();
  const authInfo = useAuthStore((state) => state.authInfo);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [authStatus, setAuthStatus] = useState(false);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getAuthStatus = () => {
    if (!isEmptyObject(authInfo)) {
      if (authInfo?.mobileNumber && !authInfo?.firstName) {
        return "userInfoNotComplete";
      } else if (authInfo?.firstName) {
        return "userInfoComplete";
      }
    } else {
      return "notLoggedIn";
    }
  };

  //
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    setAuthStatus(getAuthStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authInfo]);

  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <header className="fixed top-0 z-[1000] w-full bg-white/30 backdrop-blur-sm">
      <nav className="flex items-center border-opacity-40 bg-white  bg-opacity-50 py-3 drop-shadow-sm dark:bg-darkBg-200">
        <header
          className="container mx-auto flex w-full items-center justify-between px-3
         font-normal lg:container "
        >
          <section
            className="relative flex h-7 w-7 flex-col items-center justify-between gap-[2px]  lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <IconMenu
              className="flex cursor-pointer lg:hidden"
              width={28}
              height={28}
              fill="red"
            />
          </section>
          <Link href="/" className="hidden cursor-pointer lg:flex">
            <Image
              className="hidden lg:flex"
              src={logo}
              width={162}
              height={54}
              alt="LogoDesktop"
            />
          </Link>
          <div className="hidden lg:flex">
            <TopNavigation />
          </div>
          <div className="hidden flex-row items-center justify-between lg:flex  lg:gap-16">
            {authStatus === "notLoggedIn" && (
              <Link
                className="flex h-9 min-w-[154px] items-center justify-center gap-1  rounded-full  bg-blue  px-4 py-[10px] font-medium leading-normal text-[white] hover:bg-[#4E94EA] md:h-[42px] md:w-[154px] dark:bg-darkBtn-100 dark:text-darkText-500 dark:hover:bg-darkBtn-200 "
                href="/login"
              >
                <p className="mb-[2px] align-middle md:text-[15px]">
                  ورود | ثبت نام
                </p>
                <span className="">
                  <IconLogin strokeWidth="2" />
                </span>
              </Link>
            )}
            {authStatus === "userInfoNotComplete" && (
              <ProfileBtn
                authInfo={authInfo}
                setLogOutModal={setLogOutModal}
                mode="userInfoNotComplete"
              />
            )}
            {authStatus === "userInfoComplete" && (
              <ProfileBtn
                authInfo={authInfo}
                setLogOutModal={setLogOutModal}
                mode="userInfoComplete"
              />
            )}
            {/* <DarkMode /> */}
          </div>
          <Link className="flex lg:hidden" href="/">
            <Image src={logo} width={112} height={38} alt="LogoMobile" />
          </Link>
          {pathname.substring(1, 10) === "dashboard" && (
            <DashboardMobileMenu setLogOutModal={setLogOutModal} />
          )}
        </header>
      </nav>
    </header>
  );
}
