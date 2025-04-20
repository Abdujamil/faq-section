import Image from "next/image";
import styles from '../../app/page.module.scss';
import React from "react";

interface Props {
    id: number;
    num: number | string;
    question: string;
    src: any;
    isOpen: boolean | undefined;
    handleClick: () => void;
}

const QuestionHeader: React.FC<Props> = ({id, num, question, src, isOpen, handleClick}) => {
    return (
        <div
            className={`${styles.question}
                    w-full flex flex-row items-center border border-[#737373] active:bg-[#20272B] rounded-[6px] active:shadow-[2px_2px_4px_0px_#000000CC_inset,-2px_-2px_4px_0px_#000000CC_inset]`}
            onClick={handleClick}
            style={{
                height: isOpen ? "69px" : "68px",
                alignItems: isOpen ? "start" : "center",
                borderBottom: isOpen ? "1px solid #737373" : "",
            }}
        >
            <div
                className={`${styles.questionContainer} relative z-[99] w-full h-full p-5 inline-flex flex-row items-center transition-all ease duration-[.1s] `}>
                <div className={`${styles.number} p-[6px]`}
                     style={{
                         position: isOpen ? "relative" : "initial",
                         top: isOpen ? "-12px" : "0",
                     }}
                >
                    <p className={`font-[300] w-[45px] text-[22px] text-[#737373] transition-all ease duration-[.1s] relative left-0`}>{num}</p>
                </div>
                <div className={`${styles.answerContainer} w-full`}>
                    <h3 className={`w-full font-[400] text-[20px] text-[#737373] transition-all ease-in-out duration-[0.3s] `}>{question}</h3>
                </div>

                <div className={`${styles.arrow}`}>
                    <svg className={`transition-all duration-[.2s] ease-in-out`} width="24" height="24"
                         viewBox="0 0 24 24" fill="none">
                        <path d="M5 5L19 19" stroke="#737373" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M19 11L19 19L11 19" stroke="#737373" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
            </div>

            <style jsx>{`
              
            `}</style>
        </div>
    );
};

export default QuestionHeader;

