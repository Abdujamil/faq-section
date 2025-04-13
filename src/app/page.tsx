"use client";

import React from "react";
import styles from '../app/page.module.scss';
import FaqCard from "../Components/FaqCard";
import Footer from "./footer";
import {faqData} from "../data/faq";

const Home: React.FC = () => {
    return (
        <div className={`${styles.page} block `}>
            <main className={`${styles.main} w-full max-w-[1160px] mx-auto pt-[80px] pr-[10px] pl-[10px] flex flex-col`}>
                <h2 className={`${styles.title} mb-[60px] font-normal text-4xl text-[#CCCCCC]`} >FAQ: Ответы на главные вопросы</h2>
                <section className={`${styles.accordion} w-full flex flex-col gap-[5px]`}>
                    {faqData.map((item) => (
                        <FaqCard
                            id={item.id}
                            key={item.id}
                            num={item.num}
                            question={item.question}
                            answer={item.answer}
                            src={item.src}
                        />
                    ))}
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default Home;
