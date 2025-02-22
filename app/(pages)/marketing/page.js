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
    <section className="w-[800px] max-w-[90%] m-auto border border-1 mt-[100px] xl:mt-[200px] p-5 rounded-md">
      <h3 className="text-[24px] font-bold text-center mt-10 px-10"> ثبت نام همکاری در بازایابی امداد </h3>
      <MarketingForm />
    </section>
  );
}
