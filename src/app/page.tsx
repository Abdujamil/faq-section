"use client";

import React from "react";
import styles from '../app/page.module.scss';
import FaqCard from "../Components/FaqCard";
import Footer from "./footer";
import {faqData} from "../data/faq";

const Home: React.FC = () => {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h2 className={styles.title}>FAQ: Ответы на главные вопросы</h2>
                <section className={styles.accordion}>
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
