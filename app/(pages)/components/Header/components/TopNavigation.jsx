"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconSave } from "@/common/icons";

const TopNavigation = () => {
  const menuItems = [
    { title: "خانه", href: "/" },
    { title: "ماشین", href: "/products" },
    { title: "موتور سیکلت", href: "/car" },
    { title: "سنگین", href: "/car1" },
    { title: "درباره ما", href: "/car2" },
    { title: "تماس با ما", href: "/car3" },
  ];

  const pathname = usePathname();

  // const isActive = pathname === item.href

  return (
    <>
      <ul className="mr-12 flex flex-col gap-8 text-base font-semibold leading-6 antialiased md:flex md:flex-row md:items-center	">
        {/* {
          menuItems.map((item) => {
            // console.log(pathname)
            // console.log(item.href)
            return (

              <li key={`navigation-${item.href}`}>
                <Link
                  href={item.href}
                  className={`hover:text-blue active:border-[#224290] transition-colors pb-1 hover:border-b-2 text-black hover:border-blue/10 ${isActive && " transition-all  ease-in-out border-b-2    border-[#224290]/50  text-[#224290]"}`}
                >
                  {item.title}
                </Link>
              </li>
            );
          }
          )
          } */}
        <li>
          <div className="group relative cursor-pointer py-2">
            <div className="">
              {/* <IconArrowDown
                className={`h-4 w-4 `}
                strokeWidth="0"
                fill="#000"
              /> */}
              <Link
                href="/"
                className={`${pathname === "/" ? "text-blue" : ""} pb-7 align-middle text-black  transition-colors hover:border-b-2 hover:border-blue/75  hover:text-blue active:border-[#224290] dark:text-darkText-200 ${pathname === "/" && " border-b-2 border-[#224290]/50 text-[#224290] transition-all ease-in-out"}`}
              >
                خانه
              </Link>
            </div>
          </div>
        </li>
        {/* ************************* */}
        <li>
          <div className="group relative cursor-pointer py-2">
            <div className="">
              <span
                className={`${pathname === "/car-pricing" ? "text-blue" : ""} pb-7 align-middle text-black  transition-colors hover:border-b-2 hover:border-blue/75  hover:text-blue active:border-[#224290] dark:text-darkText-200 ${pathname === "/products" && " border-b-2 border-[#224290]/50 text-[#224290] transition-all ease-in-out"}`}
              >
                ماشین
              </span>
            </div>
            <div className="border-gary-800  invisible absolute top-[60px] z-50 flex w-60 flex-col border-2 bg-white px-4 pb-8 pt-2 text-black shadow-xl group-hover:visible  dark:border-none dark:bg-darkBg-100 dark:text-darkText-200">
              <div className="mt-4 flex flex-col items-start justify-center gap-6">
                <Link
                  href="/car-pricing"
                  className={`${pathname === "/car-pricing" ? "text-blue" : ""} flex cursor-pointer items-center justify-center gap-2 hover:text-blue`}
                >
                  <IconSave className={`h-6 w-6`} strokeWidth="0" fill="#000" />
                  <p className="text-lg">قیمت روز خودرو</p>
                </Link>
                {/* ------------------------------- */}
                {/*  <div className="flex cursor-pointer items-center justify-center gap-2 hover:text-blue">
                  <IconSave className={`h-6 w-6`} strokeWidth="0" fill="#000" />
                  <p className="text-lg">مشخصات خودرو</p>
                </div> */}
                {/* ------------------------------- */}
                <div className="flex cursor-pointer items-center justify-center gap-2 hover:text-blue">
                  <IconSave className={`h-6 w-6`} strokeWidth="0" fill="#000" />
                  <p className="text-lg">اخبار خودرو</p>
                </div>
                {/* ------------------------------- */}
              </div>
            </div>
          </div>
        </li>
        {/* ************************* */}
        <li>
          <div className="group relative cursor-pointer py-2">
            <div className="">
              <span
                /* href="/car" */
                className={`${pathname === "/motor-pricing" ? "text-blue" : ""} pb-7 align-middle text-black  transition-colors hover:border-b-2 hover:border-blue/75  hover:text-blue active:border-[#224290] dark:text-darkText-200 ${pathname === "/car" && " border-b-2 border-[#224290]/50 text-[#224290] transition-all ease-in-out"}`}
              >
                موتور سیکلت
              </span>
            </div>
            <div className="border-gary-800  invisible absolute top-[60px] z-50 flex w-64 flex-col border-2 bg-white px-4 pb-8 pt-2 text-black shadow-xl group-hover:visible  dark:border-none dark:bg-darkBg-100 dark:text-darkText-200">
              <div className="mt-4 flex flex-col items-start justify-center gap-6">
                <Link
                  href="/motor-pricing"
                  className={`${pathname === "/motor-pricing" ? "text-blue" : ""} flex cursor-pointer items-center justify-center gap-2 hover:text-blue`}
                >
                  <IconSave className={`h-6 w-6`} strokeWidth="0" fill="#000" />
                  <p className="text-lg">قیمت روز موتور سیکلت</p>
                </Link>
                {/* ------------------------------- */}
                {/*  <div className="flex cursor-pointer items-center justify-center gap-2 hover:text-blue">
                  <IconSave className={`h-6 w-6`} strokeWidth="0" fill="#000" />
                  <p className="text-lg">مشخصات موتور سیکلت</p>
                </div> */}
                {/* ------------------------------- */}
                <div className="flex cursor-pointer items-center justify-center gap-2 hover:text-blue">
                  <IconSave className={`h-6 w-6`} strokeWidth="0" fill="#000" />
                  <p className="text-lg">اخبار موتور سیکلت</p>
                </div>
                {/* ------------------------------- */}
              </div>
            </div>
          </div>
        </li>
        {/* ************************* */}
        {/*   <li>
          <div className="group relative cursor-pointer py-2">
            <div className="">
              <Link
                href="/car1"
                className={`pb-7 align-middle dark:text-darkText-200  text-black transition-colors hover:border-b-2  hover:border-blue/75 hover:text-blue active:border-[#224290] ${pathname === "/car1" && " border-b-2 border-[#224290]/50 text-[#224290] transition-all ease-in-out"}`}
              >
                سنگین
              </Link>
            </div>
            <div className="border-gary-800  invisible absolute top-[60px] z-50 flex w-72 flex-col border-2 dark:text-darkText-200 dark:border-none dark:bg-darkBg-100  bg-white px-4 pb-8 pt-2 text-black shadow-xl group-hover:visible">
              <div className="mt-4 flex flex-col items-start justify-center gap-6">
                <div className="flex cursor-pointer items-center justify-center gap-2 hover:text-blue">
                  <IconSave className={`h-6 w-6`} strokeWidth="0" fill="#000" />
                  <p className="text-lg">قیمت روز ماشین سنگین</p>
                </div>
              
                <div className="flex cursor-pointer items-center justify-center gap-2 hover:text-blue">
                  <IconSave className={`h-6 w-6`} strokeWidth="0" fill="#000" />
                  <p className="text-lg">مشخصات ماشین سنگین</p>
                </div>
               
                <div className="flex cursor-pointer items-center justify-center gap-2 hover:text-blue">
                  <IconSave className={`h-6 w-6`} strokeWidth="0" fill="#000" />
                  <p className="text-lg">اخبار ماشین سنگین</p>
                </div>
              
              </div>
            </div>
          </div>
        </li> */}
        {/* ************************* */}
        <li>
          <div className="group relative cursor-pointer py-2">
            <div className="">
              <Link
                href="/price-drop"
                className={`${pathname === "/price-drop" ? "text-blue" : ""} pb-7 align-middle text-black  transition-colors hover:border-b-2 hover:border-blue/75  hover:text-blue active:border-[#224290] dark:text-darkText-200 ${pathname === "/car1" && " border-b-2 border-[#224290]/50 text-[#224290] transition-all ease-in-out"}`}
              >
                محاسبه افت قیمت
              </Link>
            </div>
          </div>
        </li>
        <li>
          <div className="group relative cursor-pointer py-2">
            <div className="">
              <Link
                href="/inquiry-intro"
                className={` ${pathname === "/inquiry-intro" ? "text-blue" : ""} pb-7 align-middle text-black  transition-colors hover:border-b-2 hover:border-blue/75  hover:text-blue active:border-[#224290] dark:text-darkText-200 ${pathname === "/Inquiry" && " border-b-2 border-[#224290]/50 text-[#224290] transition-all ease-in-out"}`}
              >
                استعلامات
              </Link>
            </div>
          </div>
        </li>
        {/* ************************* */}
        <li>
          <div className="group relative cursor-pointer py-2">
            <div className="">
              <Link
                href="/about"
                className={`${pathname === "/about" ? "text-blue" : ""} pb-7 align-middle text-black  transition-colors hover:border-b-2 hover:border-blue/75  hover:text-blue active:border-[#224290] dark:text-darkText-200 ${pathname === "/car1" && " border-b-2 border-[#224290]/50 text-[#224290] transition-all ease-in-out"}`}
              >
                درباره ما
              </Link>
            </div>
          </div>
        </li>

        {/* ************************* */}
        <li>
          <div className="group relative cursor-pointer py-2">
            <div className="">
              <Link
                href="/contact-us"
                className={`${pathname === "/contact-us" ? "text-blue" : ""} pb-7 align-middle text-black  transition-colors hover:border-b-2 hover:border-blue/75  hover:text-blue active:border-[#224290] dark:text-darkText-200 ${pathname === "/car1" && " border-b-2 border-[#224290]/50 text-[#224290] transition-all ease-in-out"}`}
              >
                تماس با ما
              </Link>
            </div>
          </div>
        </li>
        {/* ************************* */}
      </ul>
    </>
  );
};

export default TopNavigation;
