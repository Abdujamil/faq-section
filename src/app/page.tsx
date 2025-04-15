"use client";

import React, {useState} from "react";
import styles from '../app/page.module.scss';
import FaqCard from "../Components/FaqCard";
import Footer from "./footer";
import {faqData} from "../data/faq";

const Home: React.FC = () => {

    const [openId, setOpenId] = useState<number | null>(null);

    const [animationSettings, setAnimationSettings] = useState({
        duration: 0.8,
        bounce: 0.5,
        delay: 0.1
    });

    const handleToggle = (id: number) => {
        setOpenId(prevId => prevId === id ? null : id);
    };

    return (
        <div className={`${styles.page} block `}>
            <main
                className={`${styles.main} w-full max-w-[1160px] mx-auto pt-[80px] pr-[10px] pl-[10px] flex flex-col`}>
                <h2 className={`${styles.title} mb-[60px] font-normal text-4xl text-[#CCCCCC]`}>FAQ: Ответы на главные
                    вопросы</h2>
                {/* 🎛 Настройки анимации */}
                {/*<div className="flex flex-col gap-2 text-white mb-10">*/}
                {/*    <label className="flex gap-2">*/}
                {/*        <span className="block mb-1">Скорость анимации (чем больше — тем медленнее):</span>*/}
                {/*        <input*/}
                {/*            type="number"*/}
                {/*            step="0.1"*/}
                {/*            value={animationSettings.duration}*/}
                {/*            onChange={(e) => setAnimationSettings({*/}
                {/*                ...animationSettings,*/}
                {/*                duration: parseFloat(e.target.value)*/}
                {/*            })}*/}
                {/*            className="ml-2 px-2 py-1 border border-[#cccccc]"*/}
                {/*        />*/}
                {/*    </label>*/}
                {/*    <label className="flex gap-2">*/}
                {/*        <span className="block mb-1">Сила отскока (от 0 до 1):</span>*/}
                {/*        <input*/}
                {/*            type="number"*/}
                {/*            step="0.1"*/}
                {/*            value={animationSettings.bounce}*/}
                {/*            onChange={(e) => setAnimationSettings({*/}
                {/*                ...animationSettings,*/}
                {/*                bounce: parseFloat(e.target.value)*/}
                {/*            })}*/}
                {/*            className="ml-2 px-2 py-1 border border-[#cccccc]"*/}
                {/*        />*/}
                {/*    </label>*/}
                {/*    <label className="flex gap-2">*/}
                {/*        <span className="block mb-1">Задержка перед появлением (в секундах):</span>*/}
                {/*        <input*/}
                {/*            type="number"*/}
                {/*            value={animationSettings.delay}*/}
                {/*            onChange={(e) => setAnimationSettings({*/}
                {/*                ...animationSettings,*/}
                {/*                delay: parseFloat(e.target.value)*/}
                {/*            })}*/}
                {/*            className="ml-2 px-2 py-1 border border-[#cccccc]"*/}
                {/*        />*/}
                {/*    </label>*/}
                {/*</div>*/}
                <section className={`${styles.accordion} w-full flex flex-col gap-[5px]`}>
                    {faqData.map((item) => (
                        <FaqCard
                            id={item.id}
                            key={item.id}
                            num={item.num}
                            question={item.question}
                            answer={item.answer}
                            src={item.src}
                            isOpen={openId === item.id}
                            onToggle={handleToggle}
                            animationSettings={animationSettings}
                        />
                    ))}
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default Home;
