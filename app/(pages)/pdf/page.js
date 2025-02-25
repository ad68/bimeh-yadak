"use client";
import React, { useEffect, useState } from "react";
import PDFTemplate from "./template/PDFTemplate";
import moment from "moment-jalaali";
import { numberWithCommas } from "@/helper";
const MyApp = () => {
  const [ReactPDF, setReactPDF] = useState(null);

  useEffect(() => {
    import("@react-pdf/renderer").then((module) => {
      setReactPDF(module);
    });
  }, []);

  if (!ReactPDF) return <div>در حال بارگذاری...</div>;

  const { PDFDownloadLink } = ReactPDF;
  const doctorInfo = {
    name: "دکتر علی محمدی",
    numberInsurance: 454555,
    regDate: moment("2025-02-21T20:31:25.041119").format("jYYYY/jMM/jDD"),
    coverageAmount: numberWithCommas(5000000),
    alphabetCode: "الف",
    licenseCode1: "39",
    licenseCode2: "328",
    provinceCode: "30",
  };
  return (
    <section className="mt-[100px] h-[400px] bg-slate-100 flex justify-center items-center">
      <PDFDownloadLink document={<PDFTemplate {...doctorInfo} />} fileName="doctor-info.pdf">
        {({ loading }) => (loading ? "در حال بارگذاری..." : "دانلود PDF")}
      </PDFDownloadLink>
    </section>
  );
};

export default MyApp;
