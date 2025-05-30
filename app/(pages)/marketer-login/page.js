"use client";
import { useState } from "react";
import Logo from "../../../public/assets/images/logo.svg";
import SignIn from "./components/SignIn";
import RequestActiveCode from "./components/RequestActiveCode";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { notify } from "@/helper";
import { NotifyMessage } from "@/enums";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [panelMode, setPanelMode] = useState("activeCode");
  const [actionLoading, setActionLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const requestActiveCode = (data) => {
    setActionLoading(true);
    if (data) {
      setMobileNumber(data?.mobileNumber);
    }
    let params = {
      mobileNumber: data?.mobileNumber ? data?.mobileNumber : mobileNumber,
    };
    axios
      .post("https://api.tazminmashin.com/tazmin/notification/bime-yadak-send-otp", params)
      .then((res) => {
        setActionLoading(false);
        setPanelMode("login");
      })
      .catch((err) => {
        setActionLoading(false);
        notify.Error(NotifyMessage.GLOBAL_ERROR);
      });
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="flex h-screen w-full items-center justify-center ">
        <section className="relative flex h-[600px] w-[1000px] justify-between overflow-hidden rounded-xl md:border md:border-solid">
          <section className="z-10 hidden md:flex h-full w-[550px] justify-center items-center ">
            <Image src="/assets/images/marketer.png" className="w-[400px]" width={555} height={259} alt="" />
          </section>
          <section className="flex h-full w-[470px] flex-col items-center justify-center">
            <Link className="cursor-pointer" href="/">
              <Image className="logo m-auto mb-6 mt-4 w-[180px]" src={Logo} alt="Picture of the author" />
            </Link>
            <section className="flex w-[310px]  overflow-hidden">
              <section
                className="flex w-[1200px] min-w-[1200px] gap-5 transition-all duration-500 ease-in-out"
                style={{
                  transform: panelMode === "login" ? "translateX(320px)" : "translateX(0px)",
                }}
              >
                <RequestActiveCode actionLoading={actionLoading} requestActiveCode={requestActiveCode} panelMode={panelMode} setPanelMode={setPanelMode} />
                {panelMode === "login" && <SignIn loginLoading={actionLoading} mobileNumber={mobileNumber} requestActiveCode={requestActiveCode} panelMode={panelMode} setPanelMode={setPanelMode} />}
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
