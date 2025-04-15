"use client";
import Image, {StaticImageData} from "next/image";
import React, {useState, useRef, useEffect} from "react";
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
    isOpen?: boolean;
    onToggle?: any;
}


const FaqCard: React.FC<FaqCardProps> = ({id, num, question, answer, src, defaultOpen = false, isOpen, onToggle}) => {
    const cardRef = useRef<null | HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({width: 0, height: 0});
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [oldMousePX, setOldMousePX] = useState(0);
    const [mouseLeaveDelay, setMouseLeaveDelay] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (card) {
            setDimensions({
                width: card.offsetWidth,
                height: card.offsetHeight
            });
        }
    }, [cardRef.current]);

    const mousePX = mouseX / dimensions.width;
    const mousePY = mouseY / dimensions.height;

    const cardStyle = {
        transform: `rotateY(${(mousePX || 0) * 30}deg) rotateX(${(mousePY || 0) * -30}deg)`,
        perspective: '1200px',
        transition: 'transform 0.3s ease-out'
    };

    const textStyle = {
        transform: `translate3d(${(mousePX || 0) * 20 * 2}px, ${(mousePY || 0) * 20 * 2}px, 0) scale(1.1)`,
        transition: 'transform 0.3s ease-out',
        willChange: 'transform'
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        const card = cardRef.current;
        if (card) {
            const rect = card.getBoundingClientRect();
            setMouseX(e.clientX - rect.left - dimensions.width / 2);
            setMouseY(e.clientY - rect.top - dimensions.height / 2);

            setOldMousePX(e.clientX - rect.left - dimensions.width / 2)

        }
    };

    const handleMouseEnter = () => {
        if (mouseLeaveDelay) {
            clearTimeout(mouseLeaveDelay);
        }
    };

    const handleMouseLeave = () => {
        setMouseLeaveDelay(setTimeout(() => {
            setMouseX(0);
            setMouseY(0);
            setTimeout(() => {
                setOldMousePX(0)
            }, 500)
        }, 1000));
    };

    const handleClick = () => {
        onToggle(id);
    };

    // const background = getFaqBackground(id);
    //
    return (
        <div
            className={`${styles.faqCard} ${isOpen ? styles.active : ""} transition-all ease duration-[.3s] relative cursor-pointer s:py-[23px] group-active/window:text-[#FFF]`}
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
                     // paddingBottom: isOpen ? "0px" : "20px",
                     height: isOpen ? "69px" : "69px",
                     alignItems: isOpen ? "start" : "center",
                     // background: isOpen ? "#1A1A1A" : "",
                     borderBottom: isOpen ? "1px solid #CCCCCC" : "",
                     // boxShadow: isOpen ? "none" : "none",
                     // borderBottomRightRadius: isOpen ? "0" : "4px",
                     // borderBottomLeftRadius: isOpen ? "0" : "4px",
                 }}
            >
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

                    {/*<ParallaxCard*/}
                    {/*    src={src}*/}
                    {/*    alt="FAQ image"*/}
                    {/*    style={{*/}
                    {/*        display: isOpen ? "none" : "block",*/}
                    {/*    }}*/}
                    {/*/>*/}

                    <div
                        className={`${styles.logoOnHover} absolute right-[8%] overflow-hidden opacity-0 z-[9999] w-[155px] h-[155px] border border-[#CCCCCC] backdrop-blur-[2.5px]  rounded-[4px] transition-all ease-in-out duration-[0.3s]`}
                        style={{
                            display: isOpen ? "none" : "block",
                        }}
                    >
                        <Image
                            src={src}
                            className="rounded-[4px] opacity-[80%]"
                            style={{
                                objectFit: 'contain', // или 'cover' в зависимости от потребностей
                                aspectRatio: '1 / 1' // явное указание соотношения
                            }}
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

                    <div
                        ref={cardRef}
                        className={`${styles.faqCard} ${isOpen ? styles.active : ""} w-[170px] h-full max-h-[170px]`}
                        style={cardStyle}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                    >
                        <div ref={imageRef} style={textStyle}>
                            <Image
                                src={src}
                                className="mt-[7px] w-full min-w-[155px] h-[155px] border border-[#CCCCCC] backdrop-blur-[2.5px] transition-all ease-in-out duration-[0.3s] rounded-[6px] opacity-100"
                                width={155}
                                height={155}
                                alt="FAQ image"
                            />
                        </div>
                    </div>
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