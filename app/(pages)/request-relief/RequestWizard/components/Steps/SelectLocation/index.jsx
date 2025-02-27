import dynamic from "next/dynamic";
import { useState, useContext, useEffect, useMemo } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const Map = useMemo(
        () =>
            dynamic(
                () => import("@/(pages)/request-relief/RequestWizard/components/Map"),
                {
                    loading: () => <p>A map is loading</p>,
                    ssr: false,
                },
            ),
        [],
    );
    // ─── States ─────────────────────────────────────────────────────────────────────
    const [longData, setLongData] = useState(-308.5904);
    const [latData, setLatData] = useState(35.7249);
    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <>
        <section className="mt-8 xl:w-[600px] w-[100%] flex justify-center items-center">
            <Map
                setLongData={setLongData}
                setLatData={setLatData}
                latData={latData}
                longData={longData}
            />
        </section>
    </>;
}
