"use client";
import React, { useEffect, useState } from "react";
import PDFTemplate from "./template/PDFTemplate";
import moment from "moment-jalaali";
import { numberWithCommas } from "@/helper";
import { Button } from "@/common";
const MyApp = ({ pdfData }) => {
    const [ReactPDF, setReactPDF] = useState(null);
    useEffect(() => {
        import("@react-pdf/renderer").then((module) => {
            setReactPDF(module);
        });
    }, []);

    if (!ReactPDF) return <span className="flex m-auto w-[154px] h-[48px] text-center mt-5">درحال بارگذاری</span>;

    const { PDFDownloadLink } = ReactPDF;
    const doctorInfo = {
        name: pdfData?.firstName + " " + pdfData?.lastName,
        numberInsurance: pdfData?.numberInsurance,
        regDate: moment(pdfData?.expireDateInsurance).format("jYYYY/jMM/jDD"),
        coverageAmount: numberWithCommas(pdfData?.coverageAmount),
        alphabetCode: pdfData?.alphabetCode,
        licenseCode1: pdfData?.licenseCode1,
        licenseCode2: pdfData?.licenseCode2,
        provinceCode: pdfData?.provinceCode,
    };
    return (
        <section className="flex w-[160px] m-auto justify-center items-center mt-5">

            <PDFDownloadLink className="flex justify-center items-center" document={<PDFTemplate {...doctorInfo} />} fileName="doctor-info.pdf">
                {({ loading }) => (loading ? "" : <Button>دریافت بیمه نامه</Button>)}
            </PDFDownloadLink>


        </section>
    );
};

export default MyApp;