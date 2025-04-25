// ShowCardList.tsx
"use client";

import React, {useState, useEffect} from "react";
import styles from '../../app/page.module.scss';
import FaqCard from "./FaqCard";
import {faqData} from "../../data/faq";

type Props = {
    initialOpenId?: number;
    onToggle?: (id: number | null) => void;
};

const CardListt: React.FC<Props> = ({ initialOpenId, onToggle }) => {
    const [openIds, setOpenIds] = useState<number[]>(initialOpenId ? [initialOpenId] : []);
    const [activeHash, setActiveHash] = useState("");

    const [animationSettings] = useState({
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
        const newOpenIds = openIds.includes(id)
            ? openIds.filter(openId => openId !== id)
            : [...openIds, id];

        setOpenIds(newOpenIds);

        // Для совместимости с FaqPageContent передаем последний открытый ID
        if (onToggle) {
            onToggle(newOpenIds.length > 0 ? newOpenIds[newOpenIds.length - 1] : null);
        }
    };

    useEffect(() => {
        const updateHash = () => {
            setActiveHash(window.location.hash);
        };
        window.addEventListener("hashchange", updateHash);
        updateHash();
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
                    isOpen={openIds.includes(item.id)}
                    onToggle={() => handleToggle(item.id)}
                    animationSettings={animationSettings}
                    answer={""}
                />
            ))}
        </div>
    );
};

export default CardListt;