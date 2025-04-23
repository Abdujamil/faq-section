import Image from "next/image";
import {notFound} from "next/navigation";
import {faqData} from "../../../data/faq";
import Link from "next/link";
import styles from "../../page.module.scss";
import CardListt from "../../../сomponents/FaqPageCard/ShowCardList";
import React from "react";
import FaqAside from "../../../сomponents/FaqPageCard/FaqAside";
import Footer from "../../footer";


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
            <div
                className="fixed w-full h-screen bg-[url(/bg.png)] bg-no-repeat bg-cover bg-top left-0 top-0 z-[-1]"
                style={{
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="w-full max-w-[1160px] mx-auto px-[10px] mb-[100px] grid grid-cols-4 gap-[58px]">
                {/* Sidebar - 1 колонка */}
                <aside className="sticky top-20 h-fit w-[260px]">
                    <div
                        className={`${styles.registerBlock} mb-[20px] p-[20px] text-center border border-[#353535] rounded-[6px]`}>
                        <p className={`${styles.text} mb-[16px] text-[#3D9ED6] text-[20px] font-[400] leading-[110%]`}>
                            При регистрации дарим 30 минут!
                        </p>

                        <button
                            className={`${styles.btn} text-[#CCCCCC] text-[24px] py-[12px] px-[36px] border border-[#353535] backdrop-blur-[2px] rounded-[4px] cursor-pointer hover:border-[#CCCCCC] transition-[border] duration-300 ease-in`}>
                            Попробовать
                        </button>
                    </div>

                    <Image
                        src={faqItem.largeImgSrc}
                        alt={faqItem.question}
                        width={260}
                        height={260}
                        className="rounded-lg mb-[20px] opacity-[90%]"
                    />

                    {/*<Link href={`/`} className="group">*/}
                    {/*    <button*/}
                    {/*        className="group-hover:border-[#3D9ED6] transition-all duration-[.3s] ease-in flex justify-between w-full cursor-pointer text-[18px] text-left items-center mb-5 py-[10px] border-b border-[#737373]">*/}
                    {/*        Краткое содержание*/}
                    {/*        <svg*/}
                    {/*            width="10"*/}
                    {/*            height="11"*/}
                    {/*            viewBox="0 0 10 11"*/}
                    {/*            fill="none"*/}
                    {/*            xmlns="http://www.w3.org/2000/svg"*/}
                    {/*        >*/}
                    {/*            <path*/}
                    {/*                d="M7.91602 8.41797L2.08268 2.58464"*/}
                    {/*                stroke="#CCCCCC"*/}
                    {/*                strokeLinecap="round"*/}
                    {/*                strokeLinejoin="round"*/}
                    {/*            />*/}
                    {/*            <path*/}
                    {/*                d="M2.08268 5.91797L2.08268 2.58464L5.41602 2.58464"*/}
                    {/*                stroke="#CCCCCC"*/}
                    {/*                strokeLinecap="round"*/}
                    {/*                strokeLinejoin="round"*/}
                    {/*            />*/}
                    {/*        </svg>*/}
                    {/*    </button>*/}
                    {/*</Link>*/}

                    <FaqAside items={faqItem.aside}/>
                </aside>

                {/* Main content - 3 колонки */}
                <div className="col-span-3">
                    <div className="pt-[80px] pb-[40px]">
                        <h2 className={`${styles.title} mb-[40px] font-normal leading-[110%] text-[48px] text-[#CCCCCC]`}>
                            FAQ: Ответы на главные вопросы
                        </h2>

                        <section className={`${styles.accordion} w-full flex flex-col gap-[5px]`}>
                            <CardListt initialOpenId={id}/>
                        </section>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}
