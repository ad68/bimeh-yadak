'use client'
import { useState, useContext, useEffect } from "react";
import RequestForm from './components/Steps/RequestForm'
import SelectPlate from './components/Steps/SelectPlate'

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────
    const [active, setActive] = useState(1)
    const [userInfo, setUserInfo] = useState([])

    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <>
        <section className={`${active === 1 ? `visible w-full` : `hidden`}`}>
            <RequestForm setActive={setActive} setUserInfo={setUserInfo} />
        </section>
        <section className={`${active === 2 ? `visible w-full` : `hidden`}`}>
            <SelectPlate userInfo={userInfo} />
        </section>

    </>;
}
