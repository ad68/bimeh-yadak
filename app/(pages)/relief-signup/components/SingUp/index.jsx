'use client'
import { useState } from "react";
import Tabs from './components/Tabs'
import Rules from './components/TabContent/Rules'
import PreSignup from './components/TabContent/Pre-Signup'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    // ─── States ─────────────────────────────────────────────────────────────────────
    const [activeTab, setActiveTab] = useState(1)
    // ─── Functions ──────────────────────────────────────────────────────────────────
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────
    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <section className="h-[700px] mt-[100px] w-[1366px] max-w-full m-auto">
        <h3 className="text-[24px] font-bold text-center px-10">پیش ثبت نام بیمه امداد حمل رایگان</h3>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 1 && <Rules setActiveTab={setActiveTab} />}
        {activeTab === 2 && <PreSignup setActiveTab={setActiveTab} />}
    </section>;
}
