import {
  IconBus,
  IconCar,
  IconLogin,
  IconMotorcycle,
} from "@/common/icons";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";
import ProfileBtn from "./components/ProfileBtn";
import { useAuthStore } from "@/store/auth/login";
import { isEmptyObject } from "@/helper";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({ open, setLogOutModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const pathname = usePathname();
  const authInfo = useAuthStore((state) => state.authInfo);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [selectedTab, setSelectedTab] = useState(1);
  const [authStatus, setAuthStatus] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    setAuthStatus(getAuthStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authInfo]);
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
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section
      className={`mobileMenu fixed flex flex-col justify-between ${open ? "right-0" : "right-[-100%]"} top-[63px]  z-[1000] h-full w-full bg-white shadow-md transition-all duration-500 ease-in-out`}
    >
      <section>
        <section className="mt-2 grid grid-cols-3 px-4 text-center">
          <section
            onClick={() => setSelectedTab(1)}
            className={`border-b-2 ${selectedTab === 1 ? "border-[#0165e1] text-[#0165e1]" : "border-silver"} pb-3`}
          >
            <IconCar
              className={`m-auto h-8 w-8`}
              strokeWidth="0"
              fill={`${selectedTab === 1 ? "#0165e1" : "#000"} `}
            />
            <span className="mt-2 block">خودرو</span>
          </section>
          <section
            onClick={() => setSelectedTab(2)}
            className={`border-b-2 ${selectedTab === 2 ? "border-[#0165e1]  text-[#0165e1]" : "border-silver"} pb-3`}
          >
            <IconMotorcycle
              className={`m-auto h-8 w-8`}
              strokeWidth="0"
              fill={`${selectedTab === 2 ? "#0165e1" : "#000"} `}
            />
            <span className="mt-2 block">موتور</span>
          </section>
          <section
            onClick={() => setSelectedTab(3)}
            className={`border-b-2 ${selectedTab === 3 ? "border-[#0165e1]  text-[#0165e1]" : "border-silver"} pb-3`}
          >
            <IconBus
              className={`m-auto h-8 w-8`}
              strokeWidth="0"
              fill={`${selectedTab === 3 ? "#0165e1" : "#000"} `}
            />
            <span className="mt-2 block">سنگین</span>
          </section>
        </section>

        {selectedTab === 1 && (
          <section className="flex flex-col">
            <Link
              href="/car-pricing"
              className="mt-4 flex items-center px-[15px] py-2"
            >
              <LeftOutlined className="ml-[3px] text-[13px]" />
              قیمت روز خودرو
            </Link>
            {/*   <Link className="flex items-center px-[15px] py-2" href="">
              <LeftOutlined className="ml-[3px] text-[13px]" />
              مشخصات خودرو
            </Link> */}
            <Link className="flex items-center px-[15px] py-2" href="">
              <LeftOutlined
                className={`ml-[3px] text-[13px] ${pathname === "" ? "text-blue" : ""}`}
              />
              اخبار خودرو
            </Link>
          </section>
        )}
        {selectedTab === 2 && (
          <section className="flex flex-col">
            <Link
              href="/motor-pricing"
              className={`${pathname === "/motor-pricing" ? "text-blue" : ""} mt-4 flex items-center px-[15px] py-2`}
            >
              <LeftOutlined className="ml-[3px] text-[13px]" />
              قیمت روز موتور
            </Link>
            {/*  <Link className="flex items-center px-[15px] py-2" href="">
              <LeftOutlined className="ml-[3px] text-[13px]" />
              مشخصات موتور
            </Link> */}
            <Link className="flex items-center px-[15px] py-2" href="">
              <LeftOutlined
                className={`${pathname === "" ? "text-blue" : ""} ml-[3px] text-[13px]`}
              />
              اخبار موتور
            </Link>
          </section>
        )}
        {selectedTab === 3 && (
          <section className="flex flex-col">
            <Link className="mt-4 flex items-center px-[15px] py-2" href="">
              <LeftOutlined
                className={`${pathname === "" ? "text-blue" : ""} ml-[3px] text-[13px]`}
              />
              قیمت روز ماشین سنگین
            </Link>
            <Link className="flex items-center px-[15px] py-2" href="">
              <LeftOutlined
                className={`${pathname === "" ? "text-blue" : ""} ml-[3px] text-[13px]`}
              />
              مشخصات ماشین سنگین
            </Link>
            <Link className="flex items-center px-[15px] py-2" href="">
              <LeftOutlined
                className={`${pathname === "" ? "text-blue" : ""} ml-[3px] text-[13px]`}
              />
              اخبار ماشین سنگین
            </Link>
          </section>
        )}
      </section>
      <section className="flex flex-col bg-[#f7f7f7] pb-5 shadow-lg">
        <ul className="list-disc"></ul>
        <Link
          className={`mt-4 px-[15px] py-2 ${pathname === "/" ? "text-blue" : ""}`}
          href="/"
        >
          صفحه اصلی
        </Link>
        <Link
          className={`${pathname === "/inquiry-intro" ? "text-blue" : ""} px-[15px] py-2`}
          href="/inquiry-intro "
        >
          استعلامات
        </Link>
        <Link
          className={`${pathname === "/contact-us" ? "text-blue" : ""} px-[15px] py-2`}
          href="/contact-us"
        >
          تماس با ما
        </Link>
        <Link
          className={`${pathname === "/about" ? "text-blue" : ""} px-[15px] py-2`}
          href="/about"
        >
          درباره ما
        </Link>

        <section className="px-[15px]">
          {authStatus === "notLoggedIn" && (
            <Link
              className="m-auto flex  items-center justify-center gap-1 rounded-md bg-blue px-4 py-[10px] text-base font-medium text-white  hover:bg-[#4E94EA]"
              href="/login"
            >
              <p className="mb-[2px] align-middle">ورود | ثبت نام</p>
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
        </section>
      </section>
    </section>
  );
}
