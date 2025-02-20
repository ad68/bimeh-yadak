import { IconDashboardprofile, IconEdit } from "@/common/icons";
import React, { useState, useContext, useEffect } from "react";
import { LogoutModal } from "@/common";
import Profile from "./components/Profile";
import Menu from "./components/Menu";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setLogOutModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [open, setOpen] = useState(false);

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="h-[28px] w-[28px]  rounded-lg border-[2px] border-blue lg:hidden"
      >
        <IconDashboardprofile className="mr-[-3px] mt-[5px] fill-[#0165E1] stroke-[#0165E1]" />
      </button>

      {open && (
        <>
          <section
            className="fixed left-0 top-[62px] z-40 h-screen w-screen shadow-[0px_19.74px_44.42px_-12.83px_#00000029]"
            onClick={() => setOpen(false)}
          ></section>
          <section className="fixed left-[15px] top-[50px] z-50 h-[482px] w-[238px] overflow-hidden rounded-[8px] border border-silver bg-white">
            <Profile />
            <Menu setLogOutModal={setLogOutModal} setOpen={setOpen} />
          </section>
        </>
      )}
    </>
  );
}
