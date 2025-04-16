"use client";

import React, {useState} from "react";
import styles from '../app/page.module.scss';
import FaqCard from "../Components/FaqCard";
import Footer from "./footer";
import {faqData} from "../data/faq";

const Home: React.FC = () => {

    const [openId, setOpenId] = useState<number | null>(null);
    const [animationSettings, setAnimationSettings] = useState({
        duration: 0.6,
        bounce: 5,
        delay: 0,
        ease: [0.34, 1.56, 0.64, 1],
        times: [0, 0.2, 0.5, 0.8, 1],
        y: [5, -5, 5, -5, 0],
        opacity: [0, 1, 1, 1, 1],
    });

    const handleEaseChange = (index: number, value: string) => {
        const newEase = [...animationSettings.ease] as [number, number, number, number];
        newEase[index] = parseFloat(value) || 0;
        setAnimationSettings({...animationSettings, ease: newEase});
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'ease' || name === 'times' || name === 'y' || name === 'opacity') {
            try {
                setAnimationSettings(prev => ({
                    ...prev,
                    [name]: JSON.parse(value)
                }));
            } catch {
                console.error('Invalid JSON input');
            }
        } else {
            setAnimationSettings(prev => ({
                ...prev,
                [name]: name === 'duration' || name === 'delay'
                    ? parseFloat(value)
                    : parseInt(value)
            }));
        }
    };

    // const [animationSettings, setAnimationSettings] = useState({
    //     duration: 0.8,
    //     bounce: 0.5,
    //     delay: 0.1
    // });

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

                <div>
                    <h3>Настройки анимации</h3>
                    <form className="flex gap-3 flex-wrap mb-5 border-2 p-5 rounded-[4px]">
                        <label>
                            Duration:
                            <input
                                type="number"
                                name="duration"
                                value={animationSettings.duration}
                                step="0.1"
                                onChange={e => setAnimationSettings({ ...animationSettings, duration: parseFloat(e.target.value) })}
                            />
                        </label>
                        {/*<label>*/}
                        {/*    Bounce:*/}
                        {/*    <input*/}
                        {/*        type="number"*/}
                        {/*        name="bounce"*/}
                        {/*        value={animationSettings.bounce}*/}
                        {/*        step="1"*/}
                        {/*        onChange={e => setAnimationSettings({ ...animationSettings, bounce: parseInt(e.target.value) })}*/}
                        {/*    />*/}
                        {/*</label>*/}
                        <label>
                            Delay:
                            <input
                                type="number"
                                name="delay"
                                value={animationSettings.delay}
                                step="0.1"
                                onChange={e => setAnimationSettings({ ...animationSettings, delay: parseFloat(e.target.value) })}
                            />
                        </label>
                        <label>
                            Ease:
                            <div className="flex gap-2">
                                {animationSettings.ease.map((val, i) => (
                                    <input
                                        key={i}
                                        type="number"
                                        value={val}
                                        step="0.01"
                                        onChange={(e) => handleEaseChange(i, e.target.value)}
                                        className="w-12"
                                    />
                                ))}
                            </div>
                        </label>
                        <label>
                            Times:
                            <input
                                type="text"
                                name="times"
                                value={JSON.stringify(animationSettings.times)}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Y (Movement):
                            <input
                                type="text"
                                name="y"
                                value={JSON.stringify(animationSettings.y)}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Opacity:
                            <input
                                type="text"
                                name="opacity"
                                value={JSON.stringify(animationSettings.opacity)}
                                onChange={handleChange}
                            />
                        </label>
                    </form>
                </div>

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
