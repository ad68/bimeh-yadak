"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuLink from './components/MenuLink'

const TopNavigation = () => {


  const pathname = usePathname();

  // const isActive = pathname === item.href

  return (
    <>
      <ul className="flex flex-col gap-8 text-base font-semibold leading-6 antialiased md:flex md:flex-row md:items-center	">
        <MenuLink title="خانه" link="/" />
        <MenuLink title="خرید بیمه نامه" link="/purchase" />
        <MenuLink title="درخواست امداد خودرو" link="/request" />
        <MenuLink title="درباره ما" link="/about" />
        <MenuLink title="تماس با ما" link="/contact-us" />
      </ul>
    </>
  );
};

export default TopNavigation;
