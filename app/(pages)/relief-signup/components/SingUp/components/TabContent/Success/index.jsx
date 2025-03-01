'use client'
import Pdf from './components/Pdf'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';

export default function Index({ preRegisterData }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    /* const pdfData = {
        alphabetCode: "ک",
        cityId: 843,
        color: "رنگ نقره ای",
        coverageAmount: 8000000,
        expireDateInsurance: "2025-02-23",
        firstName: "مهدی",
        lastName: "درگاهی",
        licenseCode1: "99",
        licenseCode2: "448",
        mobileNumber: "09365544221",
        modelYear: 1401,
        nationalCode: "0013654785",
        numberInsurance: "0013654987",
        provinceCode: "27",
        provinceId: 23,
        referralCode: null,
        vehicleClass: "SAVARI",
        vin: "1HGCM82633A123456"
    }; */
    // ─── States ─────────────────────────────────────────────────────────────────────

    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────
    /*  useEffect(() => {
         console.log("preRegisterData", preRegisterData)
     }, [preRegisterData]) */
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
        <Pdf pdfData={preRegisterData} />
        <Link className='block w-[200px] text-center m-auto mt-10 underline text-primary' href="/">بازگشت به صفحه اصلی</Link>


    </>;
}
