// "use client"
// import Image, {StaticImageData}  from "next/image";
// import React, {useState} from "react";
// import styles from '../app/page.module.scss';
// import ParallaxCard from "./ParallaxCard";
//
// interface FaqCardProps {
//     num: string;
//     question: string;
//     answer: string;
//     src: string | StaticImageData;
//     defaultOpen?: boolean;
// }
//
// const FaqCard: React.FC<FaqCardProps> = () => {
//     const [activeIndex, setActiveIndex] = useState<number | null>(null);
//
//     const handleClick = (index: number) => {
//         setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//     };
//
//     return (
//         <>
//             <div className={styles.faqCard}>
//                 <div
//                     className={`${styles.question} ${activeIndex === 0 ? styles.active : ""}`}
//                     style={{
//                         paddingBottom: activeIndex === 0 ? "0px" : "20px",
//                         height: activeIndex === 0 ? "auto" : "78px",
//                         alignItems: activeIndex === 0 ? "start" : "center",
//                     }}
//                 >
//                     <div
//                         className={styles.number}
//                         style={{
//                             position: activeIndex === 0 ? "relative" : "initial",
//                             top: activeIndex === 0 ? "-12px" : "0",
//                         }}
//                     >
//                         <p>1</p>
//                     </div>
//                     <div>
//                         <h3>Что же такое аудиосектор?</h3>
//
//                         <div
//                             className={styles.answer}
//                             style={{
//                                 height: activeIndex === 0 ? "auto" : "0px",
//                                 paddingTop: activeIndex === 0 ? "30px" : "0px",
//                                 paddingBottom: activeIndex === 0 ? "30px" : "0px",
//                                 // paddingLeft: activeIndex === 0 ? "64px" : "0px",
//                                 // paddingRight: activeIndex === 0 ? "64px" : "0px",
//                                 overflow: "hidden",
//                             }}
//                         >
//                             <div className={styles.texts}>
//                                 <p>
//                                     AudioSector — это передовая платформа для транскрибации аудио и видео, привносящая
//                                     инновации в области обработки речи. Наш сервис предлагает точные и быстрые решения
//                                     для конвертации речи в текст в любой сфере деятельности. Мы используем передовые
//                                     технологии искусственного интеллекта, чтобы обрабатывать файлы любого формата и
//                                     длины, включая записи с акцентами и фоновым шумом. AudioSector гарантирует
//                                     конфиденциальность данных и высокую точность транскрипции, обеспечивая пользователей
//                                     инструментами для эффективного управления и анализа аудиоматериалов. Воспользуйтесь
//                                     AudioSector сегодня и упростите процесс работы с аудиофайлами до максимальной
//                                     степени!
//                                 </p>
//                                 <Image
//                                     className={`${styles.logo}`}
//                                     src="/firstLogo.png"
//                                     width={155}
//                                     height={155}
//                                     alt="image"
//                                 />
//                             </div>
//                             <button>подробнее</button>
//                         </div>
//                     </div>
//
//
//                     <ParallaxCard
//                         src="/firstLogo.png"
//                         alt="image"
//
//                         style={{
//                             display: activeIndex === 0 ? "none" : "block",
//                         }}
//                     />
//
//                     <div className={styles.arrow} onClick={() => handleClick(0)}>
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
//                              xmlns="http://www.w3.org/2000/svg">
//                             <path d="M5 5L19 19" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round"
//                                   strokeLinejoin="round"/>
//                             <path d="M19 11L19 19L11 19" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round"
//                                   strokeLinejoin="round"/>
//                         </svg>
//                     </div>
//                 </div>
//
//                 {/* <div*/}
//                 {/*    className={styles.answer}*/}
//                 {/*    style={{*/}
//                 {/*        height: activeIndex === 0 ? "auto" : "0px",*/}
//                 {/*        paddingTop: activeIndex === 0 ? "30px" : "0px",*/}
//                 {/*        paddingBottom: activeIndex === 0 ? "30px" : "0px",*/}
//                 {/*        paddingLeft: activeIndex === 0 ? "64px" : "0px",*/}
//                 {/*        paddingRight: activeIndex === 0 ? "64px" : "0px",*/}
//                 {/*        overflow: "hidden",*/}
//                 {/*    }}*/}
//                 {/*>*/}
//                 {/*    <div className={styles.texts}>*/}
//                 {/*        <p>*/}
//                 {/*            AudioSector — это передовая платформа для транскрибации аудио и видео, привносящая*/}
//                 {/*            инновации в области обработки речи. Наш сервис предлагает точные и быстрые решения*/}
//                 {/*            для конвертации речи в текст в любой сфере деятельности. Мы используем передовые*/}
//                 {/*            технологии искусственного интеллекта, чтобы обрабатывать файлы любого формата и*/}
//                 {/*            длины, включая записи с акцентами и фоновым шумом. AudioSector гарантирует*/}
//                 {/*            конфиденциальность данных и высокую точность транскрипции, обеспечивая пользователей*/}
//                 {/*            инструментами для эффективного управления и анализа аудиоматериалов. Воспользуйтесь*/}
//                 {/*            AudioSector сегодня и упростите процесс работы с аудиофайлами до максимальной*/}
//                 {/*            степени!*/}
//                 {/*        </p>*/}
//                 {/*        <Image*/}
//                 {/*            className={`${styles.logo}`}*/}
//                 {/*            src="/firstLogo.png"*/}
//                 {/*            width={155}*/}
//                 {/*            height={155}*/}
//                 {/*            alt="image"*/}
//                 {/*        />*/}
//                 {/*    </div>*/}
//                 {/*    <button>подробнее</button>*/}
//                 {/*</div> */}
//             </div>
//         </>
//     );
// };
//
// export default FaqCard;

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

    const background = getFaqBackground(id);

    return (
        <div className={styles.faqCard}>
            <div
                className={`${styles.question} ${isOpen ? styles.active : ""}`}
                style={{
                    background,
                    paddingBottom: isOpen ? "0px" : "20px",
                    height: isOpen ? "auto" : "78px",
                    alignItems: isOpen ? "start" : "center",
                }}
            >
                <div
                    className={styles.number}
                    style={{
                        position: isOpen ? "relative" : "initial",
                        top: isOpen ? "-12px" : "0",
                    }}
                >
                    <p>{num}</p>
                </div>
                <div className={styles.answerContainer}>
                    <h3>{question}</h3>

                    <div
                        className={styles.answer}
                        style={{
                            height: isOpen ? "auto" : "0px",
                            paddingTop: isOpen ? "30px" : "0px",
                            paddingBottom: isOpen ? "30px" : "0px",
                            overflow: "hidden",
                        }}
                    >
                        <div className={styles.texts}>
                            <p>{answer}</p>
                            <Image
                                className={styles.logo}
                                src={src}
                                width={155}
                                height={155}
                                alt="FAQ image"
                            />
                        </div>
                        <button>подробнее</button>
                    </div>
                </div>

                {/*<ParallaxCard*/}
                {/*    src={src}*/}
                {/*    alt="FAQ image"*/}
                {/*    style={{*/}
                {/*        display: isOpen ? "none" : "block",*/}
                {/*    }}*/}
                {/*/>*/}

                <Image
                    src={src}
                    alt="FAQ image"
                    className={styles.logoOnHover}
                    width={155}
                    height={155}
                    style={{
                        display: isOpen ? "none" : "block",
                    }}
                />

                <div className={styles.arrow} onClick={handleClick}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5L19 19" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M19 11L19 19L11 19" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default FaqCard;