import {notFound} from "next/navigation";
import {faqData} from "../../../data/faq";
import React from "react";
import Footer from "../../footer";
import FaqPageContent from "../../../сomponents/FaqPageCard/FaqPageContent";
import styles from "../../page.module.scss";

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
    const { id: idString } = await params;
    const id = parseInt(idString);
    const faqItem = faqData.find((item) => item.id === id);

    if (!faqItem) return notFound();

    return (
        <>
            {/* Background */}
            <div
                className="fixed w-full h-screen bg-[url(/bg-1.svg)] bg-no-repeat bg-cover bg-top left-0 top-0 z-[-1]"
                style={{ backgroundAttachment: 'fixed' }}
            >
                <div className={`${styles.linear}  absolute inset-0 bg-black/20`}></div>
            </div>

            <div className="w-full max-w-[1160px] mx-auto px-[10px] mb-[100px] grid grid-cols-4 gap-[58px]">
                <FaqPageContent id={id} />
            </div>

            <Footer />
        </>
    );
}
