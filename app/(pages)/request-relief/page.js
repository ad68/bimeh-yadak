import RequestWizard from "./RequestWizard";
const Index = () => {
  return (
    <>
      <section className="mt-[80px] mb-[30px] flex xl:h-[150px] h-[100px] w-full items-center justify-center bg-primary font-bold  ">
        <h3 className="xl:text-[40px] text-[24px] font-bold text-center px-10">درخواست امداد خودرو </h3>
      </section>
      <section className="xl:mt-[60px] my-[60px] xl:w-[1440px] w-[90%] mx-auto xl:flex items-center justify-between">
        <RequestWizard />
      </section>
    </>
  );
};
export default Index;
