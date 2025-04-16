"use client";
import Image, {StaticImageData} from "next/image";
import React, {useState, useRef, useEffect} from "react";
import styles from '../app/page.module.scss';
import ParallaxCard from "./ParallaxCard";
import {getFaqBackground} from "../utils/faqHelpers";
import {motion, useAnimation} from 'framer-motion';
import {BounceEffect} from "../utils/BounceEffect";

interface AnimationSettings {
    duration: number;
    bounce: number; // Амплитуда отскока
    delay: number;   // Задержка
    ease: any;  // ease кривая
    times: number[]; // Временные точки для transition
    y: number[];     // Массив значений для движения по оси Y
    opacity: number[]; // Массив значений для opacity
}

interface FaqCardProps {
    id: number;
    num: string;
    question: string;
    answer: string;
    src: string | StaticImageData;
    defaultOpen?: boolean;
    isOpen?: boolean;
    onToggle?: (id: number) => void;
    animationSettings?: AnimationSettings;
}

// interface AnimationSettingsBounce {
//     duration: number;
//     bounce: number; // Амплитуда отскока
//     delay: number;   // Задержка
//     ease: [number, number, number, number];  // ease кривая
//     times: number[]; // Временные точки для transition
//     y: number[];     // Массив значений для движения по оси Y
//     opacity: number[]; // Массив значений для opacity
// }

const defaultSettings: AnimationSettings = {
    duration: 0.7,
    bounce: 5,
    delay: 0,
    ease: [0.34, 1.56, 0.64, 1],
    times: [0, 0.2, 0.5, 0.8, 1],
    y: [70, -3, 0, 0, 0],        // Дефолтные значения для движения по оси Y
    opacity: [0, 1, 1, 1, 1],    // Дефолтные значения для opacity
};

const defaultSettingsImg: AnimationSettings = {
    duration: 0.6,
    bounce: 5,
    delay: 0,
    ease: [0.34, 1.56, 0.64, 1],
    times: [0, 0.2, 0.5, 0.8, 1],
    y: [50, -55, 50, -40, 0],        // Дефолтные значения для движения по оси Y
    opacity: [0, 1, 1, 1, 1],    // Дефолтные значения для opacity
};


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

    const handleClick = async () => {
        if (onToggle) {
            onToggle(id);
        }
    };

    const controls = useAnimation();
    const controlsImage = useAnimation();

    useEffect(() => {
        if (isOpen) {
            controls.start({
                y: animationSettings.y,
                opacity: [0, 1, 1, 1, 1],
                transition: {
                    duration: animationSettings.duration,
                    ease: animationSettings.ease,
                    times: animationSettings.times
                }
            });
            controlsImage.start({
                y: [-80, 80, 0, 0, 0],
                opacity: [0, 1, 1, 1, 1],
                transition: {
                    duration: animationSettings.duration,
                    ease: animationSettings.ease,
                    times: animationSettings.times
                }
            });
        } else {
            controls.start({
                y: 0,
                opacity: 0
            });

            controlsImage.start({
                y: 0,
                opacity: 0
            });
        }
    }, [isOpen]);


    // const background = getFaqBackground(id);
    return (
        <div
            className={`${styles.faqCard} ${isOpen ? styles.active : ""} relative cursor-pointer s:py-[23px] group-active/window:text-[#FFF]`}
            style={{
                borderColor: isOpen ? "#CCCCCC" : "transparent",
                background: isOpen ? "#53535380" : "",
                boxShadow: isOpen ? "none" : "",
            }}
        >

            <div className={`${styles.question} 
                    w-full flex flex-row items-center bg-[#5353537F] active:bg-[#20272B] rounded-[6px] active:shadow-[2px_2px_4px_0px_#000000CC_inset,-2px_-2px_4px_0px_#000000CC_inset]`}
                 onClick={handleClick}
                 style={{
                     // background,
                     height: isOpen ? "69px" : "69px",
                     alignItems: isOpen ? "start" : "center",
                     borderBottom: isOpen ? "1px solid #CCCCCC" : "",
                 }}
            >
                <div
                    className={`${styles.logoOnHover} absolute right-[8%] overflow-hidden opacity-0 z-[9999] w-[155px] h-[155px] border border-[#CCCCCC] backdrop-blur-[2.5px]  rounded-[4px] transition-all ease-in-out duration-[0.3s]`}
                    style={{
                        display: isOpen ? "none" : "block",
                    }}
                >
                    <Image
                        src={src}
                        className="rounded-[4px] transition-all ease-in-out duration-[.3s]"
                        style={{
                            objectFit: 'contain', // или 'cover' в зависимости от потребностей
                            aspectRatio: '1 / 1' // явное указание соотношения
                        }}
                        alt="FAQ image"
                        width={155}
                        height={155}
                    />
                </div>

                <div
                    className={`${styles.questionContainer} relative z-[99] w-full h-full p-5 inline-flex flex-row items-center transition-all ease duration-[.1s]`}>
                    <div className={`${styles.number} p-[6px]`}
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

                    {/*<div*/}
                    {/*    className={`${styles.logoOnHover} absolute right-[8%] overflow-hidden opacity-0 z-[9999] w-[155px] h-[155px] border border-[#CCCCCC] backdrop-blur-[2.5px]  rounded-[4px] transition-all ease-in-out duration-[0.3s]`}*/}
                    {/*    style={{*/}
                    {/*        display: isOpen ? "none" : "block",*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <Image*/}
                    {/*        src={src}*/}
                    {/*        className="rounded-[4px] opacity-[80%]"*/}
                    {/*        style={{*/}
                    {/*            objectFit: 'contain', // или 'cover' в зависимости от потребностей*/}
                    {/*            aspectRatio: '1 / 1' // явное указание соотношения*/}
                    {/*        }}*/}
                    {/*        alt="FAQ image"*/}
                    {/*        width={155}*/}
                    {/*        height={155}*/}
                    {/*    />*/}
                    {/*</div>*/}

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
            </div>
            <div
                className={`${styles.answer} bg-[#1A1A1A] rounded-[6px]`}
                style={{
                    // height: isOpen ? "auto" : "0px",
                    // paddingTop: isOpen ? "30px" : "0px",
                    // paddingBottom: isOpen ? "30px" : "0px",
                    // paddingRight: isOpen ? "50px" : "0px",
                    // overflow: "hidden",

                    height: isOpen ? "auto" : "0px",
                    paddingTop: isOpen ? "30px" : "0px",
                    paddingBottom: isOpen ? "30px" : "0px",
                    paddingRight: isOpen ? "90px" : "0px",
                    paddingLeft: isOpen ? "80px" : "0px",
                    // borderTop: isOpen ? "1px solid #CCCCCC" : "",
                    borderTopRightRadius: isOpen ? "0" : "4px",
                    borderTopLeftRadius: isOpen ? "0" : "4px",
                    overflow: "hidden",
                }}
            >
                <div className={`${styles.texts} flex gap-[40px] mb-[30px]`}>
                    <p className={`text-[18px] font-normal`}>{answer}</p>

                    <motion.div
                        initial={{y: 20, opacity: 0}}
                        animate={controls}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        style={{display: isOpen ? 'block' : 'none'}}
                    >
                        <Image
                            src={src}
                            className=" mt-[7px] w-full min-w-[155px] h-[155px]  border border-[#CCCCCC] backdrop-blur-[2.5px transition-all ease-in-out duration-[0.2s] rounded-[6px] opacity-[100%]"
                            width={155}
                            height={155}
                            alt="FAQ image"
                        />
                    </motion.div>


                    {/*<motion.img*/}
                    {/*    initial={{ y: 30, opacity: 0 }}*/}
                    {/*    animate={controls}*/}
                    {/*    src={typeof src === 'string' ? src : src.src}*/}
                    {/*    className="mt-[7px] w-full min-w-[155px] h-[155px] border border-[#CCCCCC] backdrop-blur-[2.5px] transition-all ease-in-out duration-[0.3s] rounded-[6px] opacity-[100%]"*/}
                    {/*    width={155}*/}
                    {/*    height={155}*/}
                    {/*    alt="FAQ image"*/}
                    {/*/>*/}

                    {/*<Image*/}
                    {/*    src={src}*/}
                    {/*    className=" mt-[7px] w-full min-w-[155px] h-[155px]  border border-[#CCCCCC] backdrop-blur-[2.5px transition-all ease-in-out duration-[0.2s] rounded-[6px] opacity-[100%]"*/}
                    {/*    width={155}*/}
                    {/*    height={155}*/}
                    {/*    alt="FAQ image"*/}
                    {/*/>*/}
                </div>

                {/*<button*/}
                {/*    className={`py-[16px] px-[61px] bg-black text-[24px] leading-[18px] cursor-pointer rounded-[4px] border-1 border-[#CCCCCC]`}>*/}
                {/*    подробнее*/}
                {/*</button>*/}

                <motion.button
                    initial={{y: 20, opacity: 0}}
                    animate={controls}
                    className="py-[16px] px-[61px] bg-black text-[24px] leading-[18px] cursor-pointer rounded-[4px] border border-[#CCCCCC]"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    style={{display: isOpen ? 'block' : 'none'}}
                >
                    подробнее
                </motion.button>
            </div>
        </div>
    );
};

export default FaqCard;