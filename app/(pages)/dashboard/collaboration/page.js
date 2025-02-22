"use client";
import { api } from "@/api";
import { Table } from "@/common";
import { useState } from "react";
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const cols = [
    { title: "شناسه", field: "id" },
    { title: "نام", field: "firstName" },
    { title: "نام خانوادگی", field: "lastName" },
  ];
  const actions = [{ type: "delete" }];
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <Table cols={cols} reload={reload} apiDel={api.collaboration.deleteCollaboration} actions={actions} api={api.collaboration.getCollaborationList} />
    </>
  );
}
