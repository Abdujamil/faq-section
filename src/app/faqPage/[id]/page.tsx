import {notFound} from "next/navigation";
import {faqData} from "../../../data/faq";
import React from "react";
import Footer from "../../footer";
import FaqPageContent from "../../../сomponents/FaqPageCard/FaqPageContent";
import styles from "../../page.module.scss";
import Header from "../../../сomponents/header/Header";

type Props = {
    params: { id: string };
};

export async function generateStaticParams() {
    return faqData.map((item) => ({
        id: item.id.toString(),
    }));
}

// interface Params {
//     params: {
//         id: string;
//     };
// }


export default async function FaqPage({params}: Props) {
    const {id: idString} = await params;
    const id = parseInt(idString);
    const faqItem = faqData.find((item) => item.id === id);

    if (!faqItem) return notFound();

    return (
        <>
            <div className={`h-dvh`}>
                <Header/>
                {/* Background */}
                <div
                    className={`${styles.faqBg} fixed w-full h-full bg-[url(/bg.png)] bg-no-repeat left-0 top-0 z-[-1]`}
                    style={{backgroundAttachment: 'fixed',}}
                >
                    <div className={`${styles.linear}  absolute inset-0 bg-black/20`}></div>
                </div>

                <div className="w-full max-w-[1160px] h-full mx-auto mt-[60px] px-[10px] mb-[100px] grid grid-cols-4 gap-[58px]">
                {/*<div className="w-full max-w-[1160px] mx-auto mt-[60px] px-[10px] mb-[100px] grid grid-cols-4 gap-[58px]">*/}
                    <FaqPageContent id={id}/>
                </div>
                <Footer/>
            </div>
        </>
    );
}
