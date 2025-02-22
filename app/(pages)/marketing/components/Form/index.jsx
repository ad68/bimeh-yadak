'use client'
import { api } from "@/api";
import { ErrorMessage, TextBox, Button } from "@/common";
import { Regex } from "@/enums";
import { notify } from "@/helper";
import { useAxiosWithToken } from "@/hooks";
import Image from "next/image";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useForm, Controller } from "react-hook-form";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    // ─── States ─────────────────────────────────────────────────────────────────────
    const [actionLoading, setActionLoading] = useState(false)
    const [refUrl, setRefUrl] = useState(null)
    const [copied, setCopied] = useState(false);
    // ─── Functions ──────────────────────────────────────────────────────────────────
    const signUp = (data) => {
        setActionLoading(true);
        let params = data
        useAxiosWithToken
            .post(api.collaboration.addCollaboration, params)
            .then((res) => {
                setActionLoading(false);
                setRefUrl(res?.data?.referralCodeUrl)
                notify.Success("درخواست شما با موفقیت ثبت شد");
            })
            .catch((e) => {
                notify.Error(NotifyMessage.GLOBAL_ERROR)
                setActionLoading(false);
            });
    };
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <form
        onSubmit={handleSubmit((data) => signUp(data))}
        className="grid grid-cols-1 xl:grid-cols-2 gap-4 py-10"
    >
        <section className="flex w-full flex-col gap-[2px] text-sm">
            <label className="pt-[6px]">نام </label>
            <Controller
                control={control}
                name="firstName"
                rules={{
                    required: "نام اجباری است",
                    minLength: {
                        value: 3,
                        message: "نام نباید کمتر از 3 کاراکتر باشد",
                    },
                    maxLength: {
                        value: 15,
                        message: "نام نباید بیشتر از 15 کاراکتر باشد",
                    },
                }}
                render={({ field: { onChange, value } }) => (
                    <TextBox
                        onChange={onChange}
                        value={value}
                        placeholder=" نام را وارد کنید"
                        className="h-[48px] rounded-lg "
                    />
                )}
            />
            <ErrorMessage>{errors?.firstName?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]   text-sm">
            <label className="pt-[6px]"> نام خانوادگی</label>
            <Controller
                control={control}
                name="lastName"
                rules={{
                    required: "نام خانوادگی اجباری است",
                    minLength: {
                        value: 3,
                        message: "نام خانوادگی نباید کمتر از 3 کاراکتر باشد",
                    },
                    maxLength: {
                        value: 15,
                        message: "نام خانوادگی نباید بیشتر از 15 کاراکتر باشد",
                    },
                }}
                render={({ field: { onChange, value } }) => (
                    <TextBox
                        onChange={onChange}
                        value={value}
                        placeholder="نام خانوادگی را وارد کنید"
                        className="h-[48px] rounded-lg "
                    />
                )}
            />
            <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
            <label className="pt-[6px]">کدملی </label>
            <Controller
                control={control}
                name="nationalCode"
                rules={{
                    required: "کد ملی اجباری است",
                    pattern: {
                        value: Regex.NATIONAL_CODE,
                        message: "کد ملی را به درستی وارد کنید",
                    },
                }}
                render={({ field: { onChange, value } }) => (
                    <TextBox
                        onChange={onChange}
                        value={value}
                        placeholder="کد ملی را وارد کنید"
                        className="h-[48px] rounded-lg "
                    />
                )}
            />
            <ErrorMessage>{errors?.nationalCode?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
            <label className="pt-[6px] ">تلفن همراه </label>
            <Controller
                control={control}
                rules={{
                    required: "تلفن همراه اجباری است",
                    pattern: {
                        value: Regex.MOBILE,
                        message: "تلفن همراه را به درستی وارد کنید",
                    },
                }}
                name="mobileNumber"
                render={({ field: { onChange, value } }) => (
                    <TextBox
                        onChange={onChange}
                        value={value}
                        placeholder="تلفن همراه را وارد کنید"
                        type="phone"
                        className="  h-[48px]  rounded-lg border border-solid "
                    />
                )}
            />
            <ErrorMessage>{errors?.mobileNumber?.message}</ErrorMessage>

        </section>
        <section className="xl:col-span-2 flex justify-center gap-4">
            <Button
                loading={actionLoading}
                className="mb-4 mt-[13px] h-[48px] w-[93%] text-lg leading-[27.9px] xl:mb-0 xl:w-[280px]"
            >
                ذخیره
            </Button>
        </section>
        {refUrl && <section className="w-full border rounded-lg flex justify-between items-center xl:col-span-2  text-center">
            <section className="text-center w-full font-light">
                {refUrl}
            </section>
            <section className="h-[50px] w-[50px] flex justify-center items-center bg-[whitesmoke]">
                <CopyToClipboard text={refUrl} onCopy={() => setCopied(true)}>
                    <button type="button">
                        <Image src="/assets/icons/copy.svg" width={25} height={25} alt="" />
                    </button>
                </CopyToClipboard>
            </section>
        </section>}
    </form>
}
