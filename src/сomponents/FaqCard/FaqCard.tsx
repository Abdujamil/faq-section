"use client";
import React from "react";
import styles from '../../app/page.module.scss';
import {FaqCardProps, defaultSettings} from "../../utils/types";
import QuestionHeader from "./QuestionHeader";
import AnswerSection from "./AnswerSection";

const FaqCard: React.FC<FaqCardProps> = ({
                                             id,
                                             num,
                                             question,
                                             answer,
                                             src,
                                             defaultOpen = false,
                                             isOpen,
                                             onToggle,
                                             animationSettings = defaultSettings,
                                         }) => {
    const handleClick = () => {
        if (onToggle) onToggle(id);
    };

    return (
        <div
            className={`${styles.faqCard} ${isOpen ? styles.active : ""} relative cursor-pointer s:py-[23px] group-active/window:text-[#FFF]`}
            style={{
                borderColor: isOpen ? "#CCCCCC" : "transparent",
                background: isOpen ? "#53535380" : "",
                boxShadow: isOpen ? "none" : "",
            }}
        >
            <QuestionHeader
                isOpen={isOpen}
                num={num}
                question={question}
                src={src}
                handleClick={handleClick}
            />
            <AnswerSection
                isOpen={isOpen}
                answer={answer}
                src={src}
                animationSettings={animationSettings}
            />
        </div>
    );
};

export default FaqCard;
