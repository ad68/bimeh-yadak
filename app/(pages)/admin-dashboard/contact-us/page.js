"use client";
import { api } from "@/api";
import React, { useEffect, useState } from "react";
import { Table } from "@/common";
import Edit from "./components/EditDescr";
import { title } from "process";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const cols = [
    { title: "نام", field: "firstName" },
    { title: "نام خانوادگی", field: "lastName" },
    { title: "تاریخ", field: "createdOn", type: "date" },
    { title: "شماره تماس", field: "mobileNumber" },
    { title: "توضیحات", field: "description" },
    { title: " توضیحات پشتیبان", field: "responseDescription" },
    {title: 'وضعیت', field:'contactUsStatusFa'}
  ];
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [reload, setReload] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [rowData, setRowData] = useState({});
  
  const [formData, setFormData] = useState({
    contactUsType: "BIME_YADAK",
  });

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const showEditModal = (item) => {
    setRowData(item);
    setEditModal(true);
  };
  const hideModal = () => {
    setEditModal(false);
  };
  const reloadTable = () => {
    setReload(!reload);
  };
  const actions = [
    { type: "delete", api: "" },
    {
      type: "edit",
      onClick: showEditModal,
    },
  ];
  useEffect(()=>{
  console.log("ss",rowData)
    },[rowData])
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mt-[10px] w-full mb-[200px] xl:mb-0 xl:w-full max-w-full flex flex-col justify-center items-center">
        <header className="mt-4 text-[20px] text-[#170F49] font-semibold xl:mb-10 xl:text-[28px]">ارتباط با ما</header>
        <section className=" justify-center w-[90%]  flex flex-col items-center">
          <Table cols={cols} rowData={rowData}  setRowData={setRowData} api={api.contactUs.getContactUsList} actions={actions} queries={formData} apiDel={api.contactUs.deleteContactUs} reload={reload} />
        </section>
        <Edit
          // getOrder={getOrder}
          reloadTable={reloadTable}
          rowData={rowData}
          hideModal={hideModal}
          open={editModal}
        />
      </section>
    </>
  );
}
