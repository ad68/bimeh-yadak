
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
import Image from "next/image";
import Link from "next/link";
export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────

    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <>
        <h2 className="text-[18px] xl:text-[25px] font-bold text-center mt-[100px] flex justify-center gap-3 items-center">
            <Image src="/assets/icons/check.png" width={40} height={40} alt="" />
            <span>اطلاعات شما با موفقیت ثبت شد</span>

        </h2>
        <h2 className="text-[16px] px-4 xl:text-[20px] text-center mt-5">
            منتظر ارسال لینک پرداخت حق بیمه امداد حمل رایگان از سامانه پیامکی ۱۰۰۰۰۱۵۹۳ باشید
        </h2>
        <Link className="block m-auto bg-primary text-black p-3 rounded-md mt-10 w-[200px] text-center" href="/">بازگشت به صفحه اصلی</Link>
    </>;
}
