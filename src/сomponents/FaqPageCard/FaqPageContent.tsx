"use client";

import {useState} from "react";
import Image from "next/image";
import {faqData} from "../../data/faq";
import CardListt from "./ShowCardList";
import FaqAside from "./FaqAside";
import styles from '../../app/page.module.scss'

export default function FaqPageContent({id}: { id: number }) {
    const [openQuestionId, setOpenQuestionId] = useState<number | null>(id);

    // Данные текущей страницы (из URL)
    const currentFaqItem = faqData.find((item) => item.id === id);
    // Данные открытой карточки (может отличаться от текущей страницы)
    const openFaqItem = faqData.find((item) => item.id === openQuestionId) || currentFaqItem;

    if (!currentFaqItem || !openFaqItem) return null;

    return (
        <>
            {/* Sidebar - всегда видим, контент зависит от openQuestionId */}
            <aside className="sticky top-20 h-fit w-[260px] backdrop-blur-sm ">
                {/* Блок с кнопкой (всегда использует данные текущей страницы) */}
                <div
                    className={`${styles.registerBlock} mb-[20px] p-[20px] text-center border border-[#353535] rounded-[6px]`}>
                    <p className={`${styles.text} mb-[16px] text-[#3D9ED6] text-[20px] font-[400] leading-[110%]`}>
                        При регистрации дарим 30 минут!
                    </p>
                    <button
                        className={`${styles.btn} text-[#CCCCCC] text-[20px] h-[51px] w-full  px-[36px] border border-[#353535] backdrop-blur-[2px] rounded-[4px] cursor-pointer hover:border-[#CCCCCC] transition-[border] duration-300 ease-in`}>
                        Попробовать
                    </button>
                </div>

                {/* Картинка и якоря (используют данные открытой карточки) */}
                {openQuestionId && (
                    <>
                        <Image
                            src={openFaqItem.largeImgSrc}
                            alt={openFaqItem.question}
                            width={260}
                            height={260}
                            className="rounded-lg mb-[20px] opacity-[90%]"
                        />
                        <FaqAside items={openFaqItem.aside}/>
                    </>
                )}
            </aside>

            {/* Main content */}
            <div className="col-span-3">
                <div className="pt-[80px] pb-[40px]">
                    <h2 className={`${styles.title} mb-[40px] font-normal leading-[110%] text-[48px] text-[#CCCCCC]`}>
                        FAQ: Ответы на главные вопросы
                    </h2>

                    <section className={`${styles.accordion} w-full flex flex-col gap-[5px]`}>
                        <CardListt
                            initialOpenId={id}
                            onToggle={(id) => setOpenQuestionId(id)}
                        />
                    </section>
                </div>
            </div>
        </>
    );
}
