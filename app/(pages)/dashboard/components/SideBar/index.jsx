"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ListItem from "./components/ListItem";
import EditProfileSideBar from "./components/EditProfile";
import { useAuthStore } from "@/store/auth/login";
import { isEmptyObject } from "@/helper";
import { usePathname } from "next/navigation";
import { IconDamage, IconHome, IconInquiry2, IconLogout } from "@/common/icons";
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
  const [openInquiry, setOpenInquiry] = useState(false);
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
        <section className="flex h-[173px] flex-col items-center border-b border-solid border-[#CCE0F9] bg-[url('/assets/images/rec-bg.png')] bg-[length:328.7px_307.89px] bg-[left_3rem_top_-2.5rem] bg-no-repeat dark:bg-[#33373d]">
          <Image
            src="/assets/icons/avatar.svg"
            width={40}
            height={40}
            className="mt-6"
            alt=""
          />
          <section className="mt-3">
            <span className="ltr ml-[14px] dark:text-white">{authStatus}</span>
            <button
              onClick={() => {
                showSideBar(true);
              }}
            >
              <Image
                src="/assets/icons/edit.svg"
                width={16}
                height={16}
                alt=""
              />
            </button>
          </section>
          <section className="mt-[22px] flex items-center">
            <Image
              src="/assets/icons/Ellipse.svg"
              width={8}
              height={8}
              alt=""
            />
            <span className="ml-[24px] mr-[6px] text-sm dark:text-white">
              پلاک‌های من
            </span>
            <Link
              href="/dashboard/Inquiry/plates"
              className="flex items-center gap-[6px]"
            >
              <span className="text-xs text-[#4E94EA] dark:text-white">
                مشاهده پلاک‌ها
              </span>
              <Image
                src="/assets/icons/arrow-left.svg"
                width={12}
                height={12}
                alt=""
              />
            </Link>
          </section>
        </section>
        <section className="mx-6 mt-4 flex h-auto flex-col  justify-start">
          <Link
            href="/dashboard"
            className={`${pathname === "/dashboard" ? "text-blue" : ""} mb-2 flex h-12 w-full items-center gap-[12px] pr-[14.5px] dark:text-white`}
          >
            <IconHome
              color={pathname === "/dashboard" ? "#0165e1" : "#3E4151"}
              fill={pathname === "/dashboard" ? "#0165e1" : "#3E4151"}
            />
            <span>داشبورد</span>
          </Link>
          <Link
            href="/dashboard/declaration-damage"
            className={`${pathname === "/dashboard/declaration-damage" ? "text-blue" : ""} mb-2 flex h-[48px] items-center gap-[12px] pr-[14.5px] dark:text-white`}
          >
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
            <span>اعلام خسارت</span>
          </Link>
          <button
            onClick={() => {
              setOpenInquiry(!openInquiry);
            }}
            className={`${openInquiry || pathname === "/dashboard" ? "border-[#CCE0F9] bg-[#E6F0FC]" : "border-none"} mb-[16px] flex h-[48px] items-center justify-between rounded-lg border border-solid   pr-[14.5px]`}
          >
            <section className="flex items-center">
              <IconInquiry2
                color={
                  openInquiry || pathname === "/dashboard"
                    ? "#0165e1"
                    : "#3E4151"
                }
                fill={
                  openInquiry || pathname === "/dashboard"
                    ? "#0165e1"
                    : "#3E4151"
                }
                className="ml-[12px]"
              />

              <span
                className={`${openInquiry || pathname === "/dashboard" ? "text-[#0165E1]" : ""} w-[117px] text-right `}
              >
                استعلام
              </span>
            </section>
            <span
              className={`${openInquiry ? "" : "rotate-180"} ml-[15.33px] h-4 w-4 transition-all`}
            >
              <Image
                src="/assets/icons/Chevron.svg"
                width={16}
                height={16}
                className=""
                alt=""
              />
            </span>
          </button>
          <section
            className={`${openInquiry ? " h-[160px]" : " h-0"} flex flex-col  gap-2 overflow-hidden pr-5 transition-all `}
          >
            <ListItem
              isActive={pathname === "/dashboard/Inquiry/violation"}
              link={"/dashboard/Inquiry/violation"}
              title="استعلام خلافی"
            />
            <ListItem
              isActive={pathname === "/dashboard/Inquiry/certificate"}
              link={"/dashboard/Inquiry/certificate"}
              title="استعلام گواهینامه"
            />
            <ListItem
              isActive={pathname === "/dashboard/Inquiry/plates"}
              link={"/dashboard/Inquiry/plates"}
              title="پلاک های من"
            />
            <ListItem
              isActive={pathname === "/dashboard/Inquiry/inquiryrecords"}
              link={"/dashboard/Inquiry/inquiryrecords"}
              title="سوابق استعلام"
            />
            <ListItem
              isActive={
                pathname === "/dashboard/Inquiry/negative-inquery-cerficate"
              }
              link={"/dashboard/Inquiry/negative-inquery-cerficate"}
              title="استعلام نمره منفی"
            />
            <ListItem
              isActive={pathname === "/dashboard/Inquiry/vehicledocuments"}
              link={"/dashboard/Inquiry/vehicledocuments"}
              title="استعلام مدارک خودرو"
            />
          </section>
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
