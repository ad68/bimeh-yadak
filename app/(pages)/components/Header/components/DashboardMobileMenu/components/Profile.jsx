import { IconEdit } from "@/common/icons";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { useAuthStore } from "@/store/auth/login";
import { isEmptyObject } from "@/helper";
import { useSideBarStore } from "@/store/dashboard/sidebar";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const authInfo = useAuthStore((state) => state.authInfo);
  const showSideBar = useSideBarStore((state) => state.showSideBar);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [authStatus, setAuthStatus] = useState(false);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getAuthStatus = () => {
    if (!isEmptyObject(authInfo)) {
      if (authInfo?.mobileNumber && !authInfo?.firstName) {
        return authInfo?.mobileNumber;
      } else if (authInfo?.firstName) {
        return authInfo?.firstName + " " + authInfo?.lastName;
      }
    }
  };

  //
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    setAuthStatus(getAuthStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authInfo]);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="flex h-[126px] w-full flex-col items-center justify-center overflow-hidden rounded-tl-[8px] rounded-tr-[8px]  border-b-[2px] border-silver bg-[url('/assets/images/dmenubg.png')] bg-right-top bg-no-repeat">
      <Image src="/assets/images/duser.png" width={40} height={40} alt="" />
      <section className="mt-[12px] flex justify-center">
        <span className="ltr font-semibold">{authStatus}</span>
        <IconEdit
          onClick={showSideBar}
          className="cursor-pointer fill-blue stroke-blue"
        />
      </section>
    </section>
  );
}
