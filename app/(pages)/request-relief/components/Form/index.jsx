"use client";
import { api } from "@/api";
import { Button, ErrorMessage, TextBox } from "@/common";
import { Regex } from "@/enums";
import { useAxios } from "@/hooks";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function Index() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm(/* {
    defaultValues: {
      phone: "09120910782",
    },
  } */);
  const Map = useMemo(
    () =>
      dynamic(
        () => import("@/(pages)/request-relief/components/Form/components/Map"),
        {
          loading: () => <p>A map is loading</p>,
          ssr: false,
        },
      ),
    [],
  );
  const [actionLoading, setActionLoading] = useState(false);
  const [longData, setLongData] = useState(-308.5904);
  const [latData, setLatData] = useState(35.7249);
  useEffect(() => {
    console.log("lat", latData)
    console.log("long", longData)
  }, [latData, longData])

  const onSubmit = (data) => {
    let params = {
      firstName: data.firstName,
      lastName: data.lastName,
      mobileNumber: data.mobileNumber,
      nationalCode: data.nationalCode,
      latData: latData,
      longData: longData,
    };
    setActionLoading(true);
    useAxios
      .post(api.contactUs.addContactUs, params)
      .then((res) => {
        setActionLoading(false);
        reset({
          firstName: "",
          lastName: "",
          mobileNumber: "",
          nationalCode: "",

        });
        notify.Success(NotifyMessage.SUCCESS_ACTION);
      })
      .catch((err) => {
        setActionLoading(false);
      });
  };

  return (
    <>
      <section className=" xl:w-[1440px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full  ">
          <section className="xl:flex justify-center xl:gap-44 grid">
            <section className="flex flex-col xl:gap-6 justify-center">
              <section className="flex  flex-col gap-[2px] px-[13px] text-sm">
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
              <section className="flex w-[350px] flex-col gap-[2px] px-[13px] text-sm">
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
              <section className="flex w-[350px] flex-col gap-[2px] px-[13px] text-sm">
                <label className="pt-[6px] ">تلفن همراه </label>
                <Controller
                  control={control}
                  name="mobileNumber"
                  rules={{
                    required: "شماره همراه اجباری است",
                    pattern: {
                      value: Regex.MOBILE,
                      message: "شماره همراه  را به درستی وارد کنید",
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextBox
                      onChange={onChange}
                      value={value}

                      className="  h-[48px]  rounded-lg border"
                    />
                  )}
                />
                <ErrorMessage>{errors?.mobileNumber?.message}</ErrorMessage>
              </section>
              <section className="flex w-[350px] flex-col gap-[2px] px-[13px] text-sm">
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
            </section>
            <section className="mt-8 xl:w-[600px] w-[100%]  ">
              <Map
                setLongData={setLongData}
                setLatData={setLatData}
                latData={latData}
                longData={longData}
              />
            </section>
          </section>
          <section className="flex justify-center mt-6">
            <Button
              loading={actionLoading}
              className=" h-[48px] w-[93%] border-none text-lg font-bold leading-[27.9px] text-white xl:mb-0 xl:w-[280px] "
            >
              ذخیره
            </Button>
          </section>
        </form>

      </section>
    </>
  );
}
