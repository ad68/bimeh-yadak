import React from "react";
import Delete from '../icons/delete.svg'
import Edit from '../icons/edit.svg'
import Image from "next/image";
function Index({ actions, setDeleteId, item1, showDeleteModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      {actions && (
        <td className="w-[140px] rounded-xl justify-center items-center gap-1 border-[3px] border-white text-center">

          {actions.map((item, index) => (
            <span key={index}>
              {item.type === "edit" && (
                <button
                  onClick={() => {
                    item.onClick(item1);
                  }}
                  className="text-xs bg-[whitesmoke] mr-2 flex justify-center items-center hover:bg-[#dfeaff] text-white transition-all  w-[30px] h-[30px]  rounded-full"
                >
                  <Image className="w-[20px] h-[20px]" src={Edit} alt="" />
                </button>
              )}
              {item.type === "delete" && (
                <button
                  onClick={() => {
                    showDeleteModal();
                    setDeleteId(item1?.id);
                  }}
                  className="text-md flex m-auto justify-center items-center  rounded-full hover:bg-[#ffdfdf] transition-all  w-[30px] h-[30px] bg-[whitesmoke] font-normal text-red-500 "
                >
                  <Image src={Delete} className="w-[20px] h-[20px]" alt="" />
                </button>
              )}
            </span>
          ))}
        </td>
      )}
    </>
  );
}

export default React.memo(Index);
