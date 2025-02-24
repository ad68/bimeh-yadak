'use client'
import { useState, useContext, useEffect } from "react";
import RequestForm from './components/Steps/RequestForm'
import SelectPlate from './components/Steps/SelectPlate'
import SelectLocation from './components/Steps/SelectLocation'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────
    const [active, setActive] = useState(1)
    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <>
        <section className={`${active === 1 ? `visible` : `hidden`}`}>
            <RequestForm />
        </section>
        <section className={`${active === 2 ? `visible` : `hidden`}`}>
            <SelectPlate />
        </section>
        <section className={`${active === 3 ? `visible` : `hidden`}`}>
            <SelectLocation />
        </section>
    </>;
}
