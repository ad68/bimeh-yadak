import MarketingForm from "./components/Form";
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
  return (
    <section>
      <section className="mt-[80px] mb-[30px] flex xl:h-[150px] h-[100px] w-full items-center justify-center bg-primary font-bold  ">
        <h3 className="xl:text-[40px] text-[24px] font-bold text-center px-10">ثبت نام همکاری در بازاریابی امداد</h3>
      </section>
      <section className="w-[800px] max-w-[90%] m-auto  p-5 rounded-md">
        <MarketingForm />
      </section>
    </section>
  );
}
