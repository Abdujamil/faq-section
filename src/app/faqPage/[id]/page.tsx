import Image from "next/image";
import {notFound} from "next/navigation";
import {faqData} from "../../../data/faq";
import Link from "next/link";
import styles from "../../page.module.scss";
import CardListt from "../../../сomponents/FaqPageCard/ShowCardList";
import React from "react";
import FaqAside from "../../../сomponents/FaqPageCard/FaqAside";


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
    const id = parseInt(params.id);
    const faqItem = faqData.find((item) => item.id === id);

    if (!faqItem) return notFound();

    return (
        <>
            {/* Background */}
            <div className="w-full h-[110vh] bg-[url(/bg.png)] bg-no-repeat bg-cover bg-top absolute left-0 top-0 z-[-1]"></div>

            <div className="w-full max-w-[1160px] mx-auto px-[10px] mb-[100px] grid grid-cols-4 gap-[58px]">
                {/* Sidebar - 1 колонка */}
                <aside className="sticky top-20 h-fit">
                    <Image
                        src={faqItem.largeImgSrc}
                        alt={faqItem.question}
                        width={260}
                        height={260}
                        className="rounded-lg mb-6 opacity-[90%]"
                    />

                    <Link href={`/`} className="group">
                        <button className="group-hover:border-[#3D9ED6] transition-all duration-[.3s] ease-in flex justify-between w-full cursor-pointer font-bold text-left items-center mb-5 py-3 border-b border-[#CCCCCC]">
                            Краткое содержание
                            <svg
                                width="10"
                                height="11"
                                viewBox="0 0 10 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.91602 8.41797L2.08268 2.58464"
                                    stroke="#CCCCCC"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2.08268 5.91797L2.08268 2.58464L5.41602 2.58464"
                                    stroke="#CCCCCC"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </Link>

                    <FaqAside items={faqItem.aside} />
                </aside>

                {/* Main content - 3 колонки */}
                <div className="col-span-3">
                    <div className="pt-[80px] pb-[40px]">
                        <h2 className={`${styles.title} mb-[40px] font-normal leading-[110%] text-[48px] text-[#CCCCCC]`}>
                            FAQ: Ответы на главные вопросы
                        </h2>

                        <section className={`${styles.accordion} w-full flex flex-col gap-[5px]`}>
                            <CardListt initialOpenId={id} />
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
