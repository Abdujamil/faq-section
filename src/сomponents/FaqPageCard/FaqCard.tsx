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
                                             fullAnswer,
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
            className={`${styles.faqCard} ${isOpen ? styles.active : ""} mb-[5px] bg-black/5 border  backdrop-blur-sm transition-[border] duration-[.3s] ease-in-out`}
            style={{
                // borderColor: isOpen ? "#CCCCCC" : "",
                background: isOpen ? "#53535380" : "",
                boxShadow: isOpen ? "none" : "",
            }}
        >
            <QuestionHeader
                id={id}
                isOpen={isOpen}
                num={num}
                question={question}
                src={src}
                handleClick={handleClick}
            />
            <AnswerSection
                id={id}
                isOpen={isOpen}
                fullAnswer={fullAnswer}
                src={src}
                animationSettings={animationSettings}
            />
        </div>
    );
};

export default FaqCard;
