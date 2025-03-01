"use client";
import { useState } from "react";
import Tabs from "./components/Tabs";
import Rules from "./components/TabContent/Rules";
import PreSignup from "./components/TabContent/Pre-Signup";
import Success from "./components/TabContent/Success";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState(1);
  const [preRegisterData, setPreRegisterData] = useState({})
  // ─── Functions ──────────────────────────────────────────────────────────────────
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section>
      <section className="xl:my-[80px] mt-[60px] flex xl:h-[150px] h-[100px] w-full items-center justify-center bg-primary font-bold  ">
        <h3 className="xl:text-[40px] text-[24px] font-bold text-center px-10">
          پیش ثبت نام بیمه امداد حمل رایگان
        </h3>
      </section>
      <section className="  w-[1366px] max-w-full m-auto">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 1 && <Rules setActiveTab={setActiveTab} />}
        {activeTab === 2 && <PreSignup setPreRegisterData={setPreRegisterData} setActiveTab={setActiveTab} />}
        {activeTab === 3 && <Success preRegisterData={preRegisterData} setActiveTab={setActiveTab} />}
      </section>
    </section>
  );
}
