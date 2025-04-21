"use client";

import React, {useState, useEffect} from "react";
import styles from '../../app/page.module.scss';
import FaqCard from "./FaqCard";
import {faqData} from "../../data/faq";

type Props = {
    initialOpenId?: number;
};

const CardListt: React.FC<Props> = ({ initialOpenId }) => {
    const [openId, setOpenId] = useState<number | null>(initialOpenId ?? null);
    const [activeHash, setActiveHash] = useState("");
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

    // Отслеживаем hash из URL (например, #about) и подсвечиваем
    useEffect(() => {
        const updateHash = () => {
            setActiveHash(window.location.hash);
        };

        window.addEventListener("hashchange", updateHash);
        updateHash(); // установить начальный hash

        return () => window.removeEventListener("hashchange", updateHash);
    }, []);

    return (
        <div className={`${styles.pageFaq} block`}>
            {faqData.map((item) => (
                <FaqCard
                    id={item.id}
                    key={item.id}
                    num={item.num}
                    question={item.question}
                    fullAnswer={item.fullAnswer}
                    src={item.src}
                    isOpen={openId === item.id}
                    onToggle={handleToggle}
                    animationSettings={animationSettings}
                    answer={""}/>
            ))}
        </div>
    );
};

export default CardListt;
