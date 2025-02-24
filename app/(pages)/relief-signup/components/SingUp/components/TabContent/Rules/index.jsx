'use client'
import { Button } from "@/common";
import { Checkbox } from "antd";
import { useState } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveTab }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────
    const [rule, setRule] = useState(false)
    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return (
        <section className="mt-[40px] px-3 py-2 text-justify">
            <h1 className="font-bold text-[20px]">
                چرا حمل در امداد خودرو رایگان می شود؟
            </h1>
            <p className="text-[16px] font-light mt-[5px] leading-10">
                با توجه به شکایت‌های متعدد صاحبان خودرو از نرخ و تعرفه حمل و عملکرد و نحوه خدمات خودروهای امداد یدک کش و چرخگیر نیسان و کامیونت‌های خودرو سوار در زمان نیاز به حمل توسط افراد سود جو و متخلف که موجبات نارضایتی شما صاحبان خودرو را با دریافت هزینه‌های گزاف و هنگفت در مبلغ کرایه‌های حمل «طرح انقلاب در امداد خودرو » با توکل بر خداوند و پشتیبانی شما عزیزان از ۲۲ بهمن اجرایی می‌شود در صورت ثبت نام در این طرح شما صاحب خودرو دیگر در زمان نیاز به حمل خودرو خود ، هیچ هزینه‌ای را پرداخت نخواهید کرد و حمل برای شما در سراسر کشور در صورت خرابی و یا تصادف (مقصر بودن) رایگان خواهد بود و کلیه هزینه کرایه حمل توسط بیمه پرداخت می گردد.
            </p>
            <ul className="text-[14px] list-disc leading-10 pr-[40px]">
                <li>
                    توجه ۱: کلیه پیامک ها از سامانه پیامکی ۱۰۰۰۰۱۵۹۳ فقط معتبر می باشد
                </li>
                <li>
                    توجه ۲:تلفن های ۱۵۹۳ و ۹۰۰۰۱۵۹۳ و ۹۰۰۰۶۴۲۱ فقط پاسخگوی شما عزیزان می باشد

                </li>
                <li>
                    توجه ۳: در انتخاب سقف تعهدات بیمه برای حمل رایگان بر اساس خودرو خود کاملا دقت نموده و یا در صورت نیاز به مشاوران ما با شماره ۰۲۱۹۱۳۰۶۴۲۱ تماس حاصل نمایید .

                </li>
                <li>
                    توجه ۴: هزینه بیمه تا پایان سال ۵ درصد مبلغ تعهدات خواهد بود و از آغاز سال جدید ۱۴۰۴ به ۱۰ درصد محاسبه خواهد شد
                </li>
            </ul>
            <section className="mt-5">
                <Checkbox onChange={(e) => setRule(e.target.checked)}>با تمام قوانین بالا موافقم</Checkbox>
            </section>
            <section className="flex justify-center">
                <Button disabled={!rule} onClick={() => setActiveTab(2)} className="mt-10 w-[280px]">مرحله بعد</Button>
            </section>
        </section>
    )

}
