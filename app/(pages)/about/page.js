import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Items from './components/Items'
import Service from './components/Service'
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="">
        <section className="my-[80px] flex h-[150px] w-full items-center justify-center bg-primary font-bold  ">
          <h1 className="xl:text-[40px] text-[36px]"> درباره بیمه یدک </h1>
        </section>
        <section className="xl:w-[1366px] w-[90%] m-auto max-w-full">
          <p className="xl:text-center text-justify leading-10">مجموعه امداد خودرو کشوری با چندین سال سابقه در امر امداد رسانی آماده ارائه خدمات به مشتریان در سراسر ایران می باشد. امدادخودرو ۱۵۹۳ با ارایه خدمات خودرو بری، حمل خودرو، یدک کش، کفی خودرو آماده امداد رسانی به شما عزیزان می باشد.حمل و جابجایی خودروهای لوکس و گران قیمت خود را با خیال راحت به ما بسپارید.</p>
        <section className="mt-8 xl:flex justify-center grid gap-6 xl:gap-[80px]">
          <section className="grid gap-6">
          <Items text={'چندین سال سابقه'}/>
          <Items text={'بروزترین دستگاه ها'}/>
          <Items text={'حضور سریع امدادگران'}/>
          <Items text={'عیب یابی و تعمیر وسیله نقلیه'}/>
          </section>
          <section className="grid gap-4">
            <Items text={'کادر مجرب و متخصص'}/>
            <Items text={'دارای مجوز رسمی از سازمان ترافیک'}/>
            <Items text={'جوابگویی بصورت ۲۴ ساعته'}/>
            <Items text={'حمل خودرو به نزدیکترین تعمیرگاه'}/>
          </section>
        </section>
        </section>
        <section className="xl:w-[1366px] w-[90%] m-auto max-w-full xl:flex justify-center xl:gap-16 mt-14 grid grid-cols-2 justify-items-center  gap-6"> 
          <Service text={'قیمت مناسب'} img={'/icons/قیمت.png'}/>
          <Service text={'اعزام سریع'} img={'/icons/عازم-سریع.png'}/>
          <Service text={'دارای تخصص'} img={'/icons/متخصص.png'}/>
          <Service text={'۲۴/۷ پشتیبانی'} img={'/icons/پشتیبانی.png'}/>
        </section>
      </section>
    </>
  );
}
