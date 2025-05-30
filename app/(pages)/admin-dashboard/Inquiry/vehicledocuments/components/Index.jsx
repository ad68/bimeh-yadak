"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
/* import { TextBox, Button } from "@/common"; */
import { Radio } from "antd";
/* import {CarLicensePlate} from "@/common"; */
import { CycleLicensePlate } from "@/common";


import { CarLicensePlate } from "@/common";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [value, setValue] = useState(1);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [mySelect, setMySelect] = useState("");
  const [inputCycleValue1, setInputCycleValue1] = useState("");
  const [inputCycleValue2, setInputCycleValue2] = useState("");
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(inputValue1);
  }, [inputValue1]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className=" mt-[37px] xl:w-[407px] max-w-full rounded-xl p-8 shadow-[-4px_-4px_4px_0px_#F6F6FBCC,4px_4px_12px_0px_#F6F6FBCC] xl:mr-6 ">
        <section className="mb-8 flex items-start gap-2">
          <Image
            src="/assets/icons/Ellipse.svg"
            width={8}
            height={8}
            className="mt-[12px]"
            alt=""
          />
          <p className="leading-[27.64px] text-[#3E4151]">
            برای مشاهده خلافی شماره پلاک خود را وارد کنید یا از لیست “ پلاک‌های
            من” پلاک مد نظر خود را انتخاب نمایید.
          </p>
        </section>
        <section className="xl:ml-[33.5px] xl:mr-[29.65px]">
          <p className="text-sm text-[#505050]">نوع وسیله نقلیه</p>
          <Radio.Group
            onChange={onChange}
            className="mt-3 flex justify-between"
            value={value}
          >
            <Radio value={1}>سواری</Radio>
            <Radio value={2}>موتور سیکلت</Radio>
          </Radio.Group>
        </section>
        <section className="mb-8 xl:ml-[33.5px] xl:mr-[29.65px] mt-[31px] border-b border-dashed border-[#8B929A36] pb-8">
          <h2 className="text-sm font-normal">شماره پلاک</h2>
          {value === 1 ? (
            <CarLicensePlate
              inputValue1={inputValue1}
              setInputValue1={setInputValue1}
              inputValue2={inputValue2}
              setInputValue2={setInputValue2}
              inputValue3={inputValue3}
              setInputValue3={setInputValue3}
              mySelect={mySelect}
              setMySelect={setMySelect}
            />
          ) : (
            <CycleLicensePlate
              inputValue1={inputCycleValue1}
              setInputValue1={setInputCycleValue1}
              inputValue2={inputCycleValue2}
              setInputValue2={setInputCycleValue2}
            />
          )}
        </section> 
        
      </section>
    </>
  );
}
