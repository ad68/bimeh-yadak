import React, { useState, useContext, useEffect } from "react";
import { IconArrowRight } from "@/common/icons";
import { numberWithCommas } from "@/helper";
import dynamic from "next/dynamic";

/* import ReacApexChart from "react-apexcharts"; */
import { Button, Modal } from "@/common";
import DefectDetails from "./DefectDetails";
import Image from "next/image";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function Index({
  hideResult,
  result,
  chartMonthList,
  chartPriceList,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [monthList, setMonthList] = useState([]);
  const [priceList, setPriceList] = useState([]);
  const [monthState, setMontState] = useState(6);
  const [modal, setModal] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (monthState === 6) {
      setMonthList(chartMonthList.slice(6, 12));
      setPriceList(chartPriceList.slice(6, 12));
    }
    if (monthState === 12) {
      setMonthList(chartMonthList);
      setPriceList(chartPriceList);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthState, chartMonthList, chartPriceList]);
  /* useEffect(() => {
    console.log("monthList:", monthList);
    console.log("priceList:", priceList);
    console.log("chartMonthList:", chartMonthList);
    console.log("chartPriceList:", chartPriceList);
  }, [monthList, , priceList, chartMonthList, chartPriceList]); */

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  let chartOption = {
    series: [
      {
        name: "قیمت",
        data: priceList,
        color: "#03f2b4",
      },
    ],
    options: {
      legend: {
        show: true,
      },
      chart: {
        height: 100,
        /*  width: "50%", */
        type: "area",
        color: "#78909C",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 6,
        strokeWidth: 2,
        strokeColor: "#0491f4",

        hover: {
          size: 9,
        },
      },
      toolbar: {
        show: false,
      },
      dataLabels: {
        enabled: false,
        color: "#78909C",
      },
      stroke: {
        curve: "smooth",
        color: "#78909C",
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#0491f4"],

          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 0.6,
          opacityTo: 0.6,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        max: Math.max(...chartPriceList) + 50000000,
        min: Math.min(...chartPriceList) - 50000000,
        labels: {
          offsetX: -60,
          formatter: function (value) {
            return numberWithCommas(value);
          },
          style: {
            colors: "white",
            fontSize: "10px",
          },
        },
      },
      xaxis: {
        type: "string",
        categories: monthList,
        labels: {
          style: {
            colors: "white",
            fontSize: "11px",
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
          color: "#78909C",
        },
      },
    },
  };

  return (
    <>
      <section className="flex justify-end">
        <span
          onClick={hideResult}
          className="flex w-[130px] cursor-pointer items-center justify-end text-lg text-primary"
        >
          <IconArrowRight className="ml-2 mt-2" />
          <span>بازگشت</span>
        </span>
      </section>
      <section>
        <section className="mt-3 flex items-center justify-between">
          <section className="mr-[66px]">
            <span className="block text-xl font-bold text-white">
              {result?.carName}
            </span>
            <span className="block font-normal text-white">
              {result?.colorName}
            </span>
          </section>
          {result?.defectDetails?.length > 0 && (
            <Button onClick={() => setModal(true)} className="mr-[23px]">
              محاسبه افت قیمت
            </Button>
          )}
          {result?.imageUrl && (
            <Image
              className="h-[125px] rounded-[10px] bg-white p-1"
              src={result?.imageUrl}
              width={200}
              height={200}
              loading="lazy"
              alt="car picture"
            />
          )}
        </section>
      </section>
      <section className="mt-[20px] ">
        <section className="mr-[9px] flex h-[40px]  flex-col items-center justify-between text-lg font-bold text-white">
          <span>قیمت کارشناسی ما :</span>
          <span className="text-md font-bold">
            {numberWithCommas(result?.price)} تومان
          </span>
        </section>
      </section>
      <section className="mt-[17px] flex items-center justify-between text-white">
        <section className="mr-[70px] flex h-[40px] flex-col items-center justify-center text-[16px] font-semibold text-[#ffa8a8]">
          <span>حداکثر قیمت در بازار:</span>
          <span className="mt-1">
            {numberWithCommas(result?.priceUp)} تومان
          </span>
        </section>
        <section className="ml-[55px] flex h-[40px] flex-col items-center justify-center text-[16px] font-semibold text-[#ceffce]">
          <span>حداقل قیمت در بازار:</span>
          <span className="mt-1">
            {numberWithCommas(result?.priceDown)} تومان
          </span>
        </section>
      </section>
      <section className="mt-[24px] flex items-center justify-center">
        <button
          className={`mr-2.5 min-w-[100px] rounded-[101px] border  border-solid border-[#ffffff1a] bg-[#ffffff1a] p-[5px] text-sm font-normal text-white ${monthState === 12 && "bg-[#ffffff47]"}`}
          onClick={() => setMontState(12)}
        >
          12 ماه
        </button>
        <button
          className={`mr-2.5 min-w-[100px] rounded-[101px] border  border-solid border-[#ffffff1a] bg-[#ffffff1a] p-[5px] text-sm font-normal text-white ${monthState === 6 && "bg-[#ffffff47]"}`}
          onClick={() => setMontState(6)}
        >
          6 ماه
        </button>
      </section>
      <section className=" flex items-center justify-center">
        <ApexChart
          options={chartOption.options}
          series={chartOption.series}
          type="area"
          width={774}
          height={330}
        />
      </section>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        width={750}
        title="لیست افت قیمت"
      >
        <DefectDetails result={result?.defectDetails} />
      </Modal>
    </>
  );
}
