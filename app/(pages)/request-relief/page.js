import Form from "./components/Form";
const Index = () => {
  return (
    <>
    <section className="my-[80px] flex xl:h-[150px] h-[100px] w-full items-center justify-center bg-primary font-bold  ">
        <h3 className="xl:text-[40px] text-[24px] font-bold text-center px-10">
        درخواست امداد خودرو        </h3>
      </section>
      <section className="xl:mt-[60px] my-[60px] xl:w-[1440px] w-[90%] mx-auto xl:flex items-center justify-between">
        <Form />
      </section>
    </>
  );
};
export default Index;
