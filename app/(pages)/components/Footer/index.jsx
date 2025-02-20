"use client";
import {
  IconAddressMap,
  IconCall,
  IconInstagram,
  IconLetter,
  IconLinkedin,
  IconLocation,
  IconMessage,
  IconTelegram,
  IconWhatsapp,
} from "@/common/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/price-drop/print" && (
        <section className="mb-0 w-full print:hidden  ">
          <section className="relative  flex h-auto w-full flex-col gap-10 overflow-hidden border-[1px] border-solid border-[#ffffff1a] bg-black  bg-opacity-95 py-[20px] text-white shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A]  xl:h-[250px] xl:flex-row xl:gap-0  xl:px-[45px] xl:pt-[32px] ">
            <Image
              className="absolute left-[40%] top-0 translate-x-[-50%] opacity-50 "
              src="/assets/images/bg pic-footer.png"
              width={788}
              height={288}
              alt="LogoDesktop z-[10]"
            />
            <section className="mx-auto flex w-[90%] flex-col gap-[14px] xl:w-[291px]">
              <Link href="/" className="hidden cursor-pointer lg:flex">
                <h3 className="flex h-[51px] w-[109px] gap-1 text-[30px] font-bold tracking-wider text-white">
                  <span className="text-primary">بیمه</span>
                  <span>یدک</span>
                </h3>
              </Link>
            </section>
            <section className="z-[20] mx-auto flex w-[90%] flex-col gap-[14px] xl:mr-[85px] xl:w-[267px]">
              <span className="text-base font-bold leading-[24.18px] text-white dark:text-white">
                ارتباط با ما
              </span>
              <span className="flex w-full items-center gap-4 text-sm leading-[20.73px]">
                <Image
                  className=""
                  src="/assets/icons/Call1.svg"
                  color="white"
                  width={24}
                  height={24}
                  alt="LogoDesktop"
                />
                <span>( هزار خط ) 999 الی 84229000-021 </span>
              </span>
              <span className="flex w-full items-center gap-4 text-xs leading-[20.73px]">
                <IconAddressMap
                  viewBox="0 0 24 24"
                  width={48}
                  height={48}
                  className="stroke-white md:hidden"
                />
                <IconAddressMap
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="hidden stroke-white md:block xl:hidden"
                />
                <IconAddressMap
                  viewBox="0 0 24 24"
                  width={73}
                  height={73}
                  className="hidden stroke-white xl:block"
                />
                تهران، ولی عصر ، ابتدای یوسف آباد ، خیابان سید جمال الدین اسد
                آبادی ، خیابان هفتم ، پلاک ۱۴ ، ساختمان ایرانیان پوشش
              </span>
              <span className="flex w-full items-center gap-4 text-sm leading-[20.73px]">
                <IconLetter
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  className="stroke-white"
                />
                info@tazminmashin.com
              </span>
            </section>
            <section className="z-[20] mx-auto  flex w-[90%] flex-col gap-[14px] xl:mr-[101px] xl:w-[109px]">
              <span className="text-base font-bold leading-[20.73px] text-white dark:text-white">
                دسترسی سریع
              </span>
              <Link
                href="/dashboard/Inquiry/violation"
                className={` w-full text-sm leading-[20.73px] text-white transition-colors hover:text-[#CCE0F9]  dark:text-darkText-200  ${pathname === "/Inquiry" && "  text-[#224290] transition-all ease-in-out"}`}
              >
                استعلامات
              </Link>
              <span className="w-full cursor-pointer text-sm leading-[20.73px] ">
                مقالات
              </span>
              <Link
                href="/about"
                className={` w-full text-sm leading-[20.73px]  text-white transition-colors hover:text-[#CCE0F9]  dark:text-darkText-200  ${pathname === "/Inquiry" && "  text-[#224290] transition-all ease-in-out"}`}
              >
                درباره ما
              </Link>
              <Link
                href="/contact-us"
                className={` w-full cursor-pointer text-sm leading-[20.73px] text-white transition-colors hover:text-[#CCE0F9]  dark:text-darkText-200  ${pathname === "/Inquiry" && "  text-[#224290] transition-all ease-in-out"}`}
              >
                تماس با ما
              </Link>
            </section>
            <section className="z-[20] mx-auto flex w-[90%] flex-col items-center gap-[40px] xl:mr-[165px] xl:w-[185px]">
              <section className="flex gap-8">
                <Image
                  alt=""
                  width={80}
                  height={80}
                  src="/assets/images/logo footer-l.png"
                />
                <Image
                  alt=""
                  width={80}
                  height={80}
                  src="/assets/images/logo footer-r.png"
                />
              </section>
              <section className="flex gap-[19px] ">
                <IconLinkedin
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  color="white"
                  fill="white"
                  className="hidden dark:block "
                />
                <IconLinkedin
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  className="cursor-pointer fill-white transition-all hover:fill-blue hover:stroke-blue dark:hidden "
                />
                <IconInstagram
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  color="white"
                  fill="white"
                  className="hidden dark:block"
                />
                <IconInstagram
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  className="cursor-pointer fill-white transition-all hover:fill-blue hover:stroke-blue "
                />
                <IconTelegram
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  color="white"
                  fill="white"
                  className="hidden dark:block"
                />
                <IconWhatsapp
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  color="white"
                  fill="white"
                  className="hidden dark:block "
                />
                <IconTelegram
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  className="cursor-pointer fill-white transition-all hover:fill-blue hover:stroke-blue "
                />
                <IconWhatsapp
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  className="cursor-pointer fill-white transition-all hover:fill-blue hover:stroke-blue"
                />
              </section>
            </section>
          </section>
        </section>
      )}
    </>
  );
}
