import { useState, useEffect } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

const MyDocument = ({
    name,
    numberInsurance,
    regDate,
    coverageAmount,
    carModel,
    alphabetCode,
    licenseCode1,
    licenseCode2,
    provinceCode,
    insuranceCompany,
    claimPhoneNumber,
    claimWebsite,
}) => {
    const [ReactPDF, setReactPDF] = useState(null);

    useEffect(() => {
        import("@react-pdf/renderer").then((module) => {
            setReactPDF(module);
        });
    }, []);

    if (!ReactPDF) return <div>در حال بارگذاری...</div>;

    const { Document, Page, Text, View, StyleSheet, Font, Image } = ReactPDF;
    Font.register({
        family: "yekan",
        src: "/fonts/vazir/yekan.ttf",
    });
    Font.register({
        family: "yekan-bold",
        src: "/fonts/vazir/yekan-bold.ttf",
    });
    const styles = StyleSheet.create({
        page: {
            padding: 20, fontSize: 10, fontFamily: 'yekan', direction: 'rtl', textAlign: 'justify',
            borderWidth: 5,
            borderColor: "#F3C401",
        },

        section: { marginBottom: 10, display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", direction: 'rtl', textAlign: 'justify' },
        textBox: { display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", direction: 'rtl', textAlign: 'right' },
        plateBox: { display: "flex", fontFamily: "yekan-bold", flexDirection: "row", textAlign: 'right', gap: "2px", marginLeft: 5 },
        bold: { fontFamily: "yekan-bold" },
        link: { color: 'blue', textDecoration: 'underline' },
        px5: { paddingLeft: 2, paddingRight: 2 }
    });
    return <>
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <View style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
                        <Text style={{ fontFamily: "yekan-bold", fontSize: 20 }}>بسمه تعالی</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 10, fontFamily: "yekan-bold" }}>بیمه یدکی</Text>
                        <Image alt="" src="/icons/logo.png" style={{ width: 40 }} />
                    </View>

                    <View style={styles.section}>
                        <Text style={{ fontSize: 14, fontFamily: "yekan-bold" }}>بیمه گذار محترم آقا یا خانم <Text >{name}</Text></Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.textBox}>بیمه نامه امداد با شماره </Text>
                        <Text style={{ ...styles.bold, ...styles.px10 }}> {numberInsurance} </Text>
                        <Text style={styles.textBox}>از تاریخ</Text>
                        <Text style={styles.bold}>{regDate}</Text>
                        <Text style={styles.textBox}>با سقف تعهدات </Text>
                        <Text style={{ ...styles.bold, ...styles.px5 }}>{coverageAmount} </Text>
                        <Text> تومان </Text>
                        <Text style={styles.textBox}> به مدت یکسال برای خودرو <Text style={styles.bold}>{carModel}</Text></Text>
                        <Text style={styles.textBox}>به شماره پلاک</Text>
                        <View style={styles.plateBox}>
                            <Text>{licenseCode1}</Text>
                            <Text>{alphabetCode}</Text>
                            <Text>{licenseCode2}</Text>
                            <Text>{alphabetCode}</Text>
                            <Text>ایران</Text>
                            <Text> {provinceCode}</Text>
                        </View>
                        <Text style={styles.textBox}>توسط کارگزاری رسمی بیمه مباشر برای شرکت بیمه رازی <Text style={styles.bold}>{insuranceCompany}</Text> ارسال گردید.</Text>
                        <Text style={styles.textBox}>با توجه به شرایط ۳ روز انتظار در بیمه نامه، شرکت بیمه‌گر پوشش امدادی را تا سقف تعهدات حداکثر تا ۷۲ ساعت دیگر برای
                            <Text>
                                خودرو فعال می‌نماید
                            </Text>
                            <Text>
                                .
                            </Text>
                        </Text>

                    </View>

                    <View>
                        <Text style={{ ...styles.textBox, ...styles.bold }}>روش های اعلام خسارت</Text>
                        <View>

                            <Text style={styles.textBox}>- شماره تلفن مرکز امداد خودرو</Text>
                            <Text style={styles.textBox}>- سایت www.bimeyadak.com</Text>

                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.bold}>:نکته</Text>
                        <Text>خدمات امدادی تا سقف تعهدات برای شما رایگان بوده و امدادگر پس از تایید فاکتور، هزینه حمل خود را از بیمه‌گر دریافت</Text>
                        <Text>
                            .می‌نماید
                        </Text>
                    </View>

                    <View>
                        <Text style={{ ...styles.textBox, ...styles.bold }}>مدارک مورد نیاز:</Text>
                        <Text style={styles.textBox}>- کارت ماشین</Text>
                        <Text style={styles.textBox}>- کارت ملی یا گواهینامه</Text>
                        <Text style={styles.textBox}>- فاکتور تعمیرگاه</Text>
                        <Text style={styles.textBox}>- فاکتور امدادگر</Text>
                    </View>

                    {/*  <View style={styles.section}>
                    <Text>صادر گردید.</Text>
                    <Text>جهت مشاهده / چاپ به لینک زیر مراجعه شود:</Text>
                    <Text style={styles.link}>www.</Text>
                </View> */}

                    <View style={styles.section}>
                        <Text>:تلفن امدادهای طرف قرارداد</Text>
                        <View style={{ ...styles.section, ...styles.px5 }}>
                            <Text>1593</Text>
                            <Text> و </Text>
                            <Text>90001593</Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text>امضا و مهر سیستمی</Text>
                        <Text>توسط شرکت کارگزاری مباشر</Text>
                    </View>
                </View>

            </Page>
        </Document >
    </>

}

export default MyDocument