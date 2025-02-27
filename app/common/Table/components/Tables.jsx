import React, { useState } from "react";
import Actions from "./Actions";
import moment from "moment-jalaali";
import DeleteModal from "../../DeleteModal";
import { Modal } from "@/common";
import { numberWithCommas } from "@/helper";
export default function Index({ cols, data, apiDel, getList, actions, setRowData }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [descriptionModal, setDescriptionModal] = useState(false)
  const [descriptionInfo, setDescriptionInfo] = useState("")
  const hideDeleteModal = () => {
    setOpenDeleteModal(false);
  };
  const showDeleteModal = () => {
    setOpenDeleteModal(true);
  };
  const renderCell = (type, value, conditions) => {
    if (type === "date") {
      return moment(value).format("jYYYY/jMM/jDD");
    } else if (type === "condition") {
      return conditions.find((el) => el.value === value)?.replace;
    }
    else if (type === "price") {
      return numberWithCommas(value);
    }
    else if (type === "description") {
      return <span onClick={() => { setDescriptionModal(true); setDescriptionInfo(value) }} className="text-blue cursor-pointer font-bold">نمایش</span>
    }
    else {
      return value;
    }
  };

  return (
    <table className="rounded-xl text-sm overflow-hidden w-full h-auto">
      <thead className="bg-primary rounded-xl h-[40px]">
        <tr>
          {cols?.map((item, index) => (
            <th key={index} className="rounded-xl border-[3px] text-black border-white">
              {item.title}
            </th>
          ))}
          {actions && <th className="rounded-xl border-[3px] text-black border-white">عملیات</th>}
        </tr>
      </thead>
      <tbody className="rounded-xl w-full relative">
        {data.elements?.map((rowItem, rowIndex) => (
          <tr key={rowIndex} className={`${rowIndex % 2 !== 0 ? "bg-[#f8f8f8]" : "bg-none"} h-[40px] rounded-xl overflow-hidden`}>
            {cols?.map((colItem, colIndex) => (
              <td key={colIndex} className="w-[100px] rounded-xl border-[3px] border-white text-center">
                {renderCell(colItem.type, rowItem[colItem.field], colItem?.conditions)}
              </td>
            ))}
            <Actions rowItem={rowItem} setRowData={setRowData} actions={actions} showDeleteModal={showDeleteModal} setDeleteId={setDeleteId} />
          </tr>
        ))}
      </tbody>
      <DeleteModal open={openDeleteModal} onClose={hideDeleteModal} api={apiDel} id={deleteId} onSuccess={getList}>
        آیا مایلید رکورد مورد نظر حذف شود؟
      </DeleteModal>
      <Modal onClose={() => setDescriptionModal(false)} open={descriptionModal}>
        {descriptionInfo}
      </Modal>
    </table>
  );
}
