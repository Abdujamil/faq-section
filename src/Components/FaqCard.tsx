"use client";
import Image, {StaticImageData} from "next/image";
import React, {useState} from "react";
import styles from '../app/page.module.scss';
import ParallaxCard from "./ParallaxCard";
import {getFaqBackground} from "../utils/faqHelpers";

interface FaqCardProps {
    id: number;
    num: string;
    question: string;
    answer: string;
    src: string | StaticImageData;
    defaultOpen?: boolean;
}

const FaqCard: React.FC<FaqCardProps> = ({id, num, question, answer, src, defaultOpen = false}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    // const background = getFaqBackground(id);
    //
    return (
        <div className={`${styles.faqCard} ${isOpen ? styles.active : ""} relative cursor-pointer  s:py-[23px] group-active/window:text-[#FFF]`}
             onClick={handleClick}
             style={{
                 borderColor: isOpen ? "#CCCCCC" : "transparent",
                 background: isOpen ? "#53535380" : "",
                 boxShadow: isOpen ? "none" : "",
             }}
        >
            <div
                className={`${styles.question} w-full flex flex-row items-center p-5 rounded-[4px] `}
                style={{
                    // background,
                    paddingBottom: isOpen ? "0px" : "20px",
                    height: isOpen ? "78px" : "78px",
                    alignItems: isOpen ? "start" : "center",
                }}
                >
                <div
                    className={`${styles.number} p-[6px]`}
                    style={{
                        position: isOpen ? "relative" : "initial",
                        top: isOpen ? "-12px" : "0",
                    }}
                >
                    <p className={`font-[300] w-[45px] text-[22px] transition-all ease duration-[.1s] relative left-0`}>{num}</p>
                </div>
                <div className={`${styles.answerContainer} w-full`}>
                    <h3 className={`w-full font-[400] text-[20px] transition-all ease-in-out duration-[0.3s] `}>{question}</h3>
                </div>

                {/*<ParallaxCard*/}
                {/*    src={src}*/}
                {/*    alt="FAQ image"*/}
                {/*    style={{*/}
                {/*        display: isOpen ? "none" : "block",*/}
                {/*    }}*/}
                {/*/>*/}

                <div
                    className={`${styles.logoOnHover} absolute right-[8%] overflow-hidden opacity-0 z-[99] border border-[#CCCCCC] backdrop-blur-[2.5px]  rounded-[4px] transition-all ease-in-out duration-[0.3s]`}
                    style={{
                        display: isOpen ? "none" : "block",
                    }}
                >
                    <Image
                        src={src}
                        className="rounded-[4px] opacity-[70%]"
                        alt="FAQ image"
                        width={155}
                        height={155}
                    />
                </div>

                <div className={`${styles.arrow}`}>
                    <svg className={`transition-all duration-[.2s] ease-in-out`} width="24" height="24"
                         viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5L19 19" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M19 11L19 19L11 19" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            <div
                className={`${styles.answer}`}
                style={{
                    // height: isOpen ? "auto" : "0px",
                    // paddingTop: isOpen ? "30px" : "0px",
                    // paddingBottom: isOpen ? "30px" : "0px",
                    // paddingRight: isOpen ? "50px" : "0px",
                    // overflow: "hidden",

                    height: isOpen ? "auto" : "0px",
                    paddingTop: isOpen ? "0px" : "0px",
                    paddingBottom: isOpen ? "30px" : "0px",
                    paddingRight: isOpen ? "90px" : "0px",
                    paddingLeft: isOpen ? "80px" : "0px",
                    overflow: "hidden",
                }}
            >
                <div className={`${styles.texts} flex gap-[40px] mb-[30px]`}>
                    <p className={`text-[18px] font-normal`}>{answer}</p>

                    <Image
                        src={src}
                        className="${styles.logo} w-full min-w-[155px] h-[155px]  border border-[#CCCCCC] backdrop-blur-[2.5px transition-all ease-in-out duration-[0.3s] rounded-[4px] opacity-[100%]"
                        width={155}
                        height={155}
                        alt="FAQ image"
                    />
                </div>
                <button
                    className={`py-[16px] px-[61px] bg-black text-[24px] leading-[18px] cursor-pointer rounded-[4px] border-1 border-[#CCCCCC]`}>
                    подробнее
                </button>
            </div>
        </div>
    );
};

export default FaqCard;