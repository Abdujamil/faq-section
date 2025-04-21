"use client";

import React, {useState} from "react";
import styles from '../app/page.module.scss';
// import FaqCard from "../сomponents/FaqCard";
import FaqCard from '../сomponents/FaqCard/index'
import Footer from "./footer";
import {faqData} from "../data/faq";

const Home: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(null);
    const [animationSettings, setAnimationSettings] = useState({
        duration: 0.6,
        bounce: 5,
        delay: 0,
        ease: [0.30, 1.7, 0.60, 1],
        times: [0, 0.2, 0.5, 0.8, 1],
        openY: [0, 26, 0, 0, 0],
        closeY: [60, -6, 0, 0, 0],
        opacity: [0, 1, 1, 1, 1],
    });

    const handleToggle = (id: number) => {
        setOpenId(prevId => prevId === id ? null : id);
    };

    return (
        <>
            <div className={`${styles.page} block`}>
                <main
                    className={`${styles.main} w-full max-w-[1160px] mx-auto pt-[80px] pr-[10px] pl-[10px] flex flex-col`}>
                    <h2 className={`${styles.title} mb-[60px] font-normal text-[48px] text-[#CCCCCC]`}>FAQ: Ответы на
                        главные
                        вопросы</h2>
                    {/*<div>*/}
                    {/*    <h3>Настройки анимации</h3>*/}
                    {/*    <form className="flex gap-3 flex-wrap mb-5 border-2 p-5 rounded-[4px]">*/}
                    {/*        <label>*/}
                    {/*            Duration:*/}
                    {/*            <input*/}
                    {/*                type="number"*/}
                    {/*                name="duration"*/}
                    {/*                value={animationSettings.duration}*/}
                    {/*                step="0.1"*/}
                    {/*                onChange={e => setAnimationSettings({*/}
                    {/*                    ...animationSettings,*/}
                    {/*                    duration: parseFloat(e.target.value)*/}
                    {/*                })}*/}
                    {/*            />*/}
                    {/*        </label>*/}
                    {/*        <label>*/}
                    {/*            Delay:*/}
                    {/*            <input*/}
                    {/*                type="number"*/}
                    {/*                name="delay"*/}
                    {/*                value={animationSettings.delay}*/}
                    {/*                step="0.1"*/}
                    {/*                onChange={e => setAnimationSettings({*/}
                    {/*                    ...animationSettings,*/}
                    {/*                    delay: parseFloat(e.target.value)*/}
                    {/*                })}*/}
                    {/*            />*/}
                    {/*        </label>*/}
                    {/*        <label>*/}
                    {/*            Ease:*/}
                    {/*            <div className="flex gap-2">*/}
                    {/*                {animationSettings.ease.map((val, i) => (*/}
                    {/*                    <input*/}
                    {/*                        key={i}*/}
                    {/*                        type="number"*/}
                    {/*                        value={val}*/}
                    {/*                        step="0.01"*/}
                    {/*                        onChange={(e) => handleEaseChange(i, e.target.value)}*/}
                    {/*                        className="w-12"*/}
                    {/*                    />*/}
                    {/*                ))}*/}
                    {/*            </div>*/}
                    {/*        </label>*/}
                    {/*        <label>*/}
                    {/*            Times:*/}
                    {/*            <input*/}
                    {/*                type="text"*/}
                    {/*                name="times"*/}
                    {/*                value={JSON.stringify(animationSettings.times)}*/}
                    {/*                onChange={handleChange}*/}
                    {/*            />*/}
                    {/*        </label>*/}
                    {/*        <label>*/}
                    {/*            Open Y:*/}
                    {/*            <input*/}
                    {/*                type="text"*/}
                    {/*                name="openY"*/}
                    {/*                value={JSON.stringify(animationSettings.openY)}*/}
                    {/*                onChange={handleChange}*/}
                    {/*            />*/}
                    {/*        </label>*/}
                    {/*        <label>*/}
                    {/*            Close Y:*/}
                    {/*            <input*/}
                    {/*                type="text"*/}
                    {/*                name="closeY"*/}
                    {/*                value={JSON.stringify(animationSettings.closeY)}*/}
                    {/*                onChange={handleChange}*/}
                    {/*            />*/}
                    {/*        </label>*/}
                    {/*        <label>*/}
                    {/*            Opacity:*/}
                    {/*            <input*/}
                    {/*                type="text"*/}
                    {/*                name="opacity"*/}
                    {/*                value={JSON.stringify(animationSettings.opacity)}*/}
                    {/*                onChange={handleChange}*/}
                    {/*            />*/}
                    {/*        </label>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                    <section className={`${styles.accordion} w-full flex flex-col gap-[5px]`}>
                        {faqData.map((item) => (
                            <FaqCard
                                id={item.id}
                                key={item.id}
                                num={item.num}
                                question={item.question}
                                answer={item.answer}
                                fullAnswer={""}
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
        </>
    );
};

export default Home;
