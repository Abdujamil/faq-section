// "use client"
// import Image from "next/image";
// // import ParallaxCard from "@/Components/ParallaxCard";
// import React from "react";
// import styles from "./page.module.scss";
//
//
// export default function Home() {
//     const [activeIndex, setActiveIndex] = React.useState(null);
//
//     const handleClick = (index) => {
//         setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//     };
//
//     return (<div className={styles.page}>
//         <main className={styles.main}>
//             <h2 className={styles.title}>FAQ: Ответы на главные вопросы</h2>
//
//             <section className={styles.accordion}>
//
//                 <div className={styles.faqCard}>
//                     <div
//                         className={`${styles.question}
//                             ${activeIndex === 0 ? styles.active : ""}`}
//                         style={{
//                             paddingBottom: activeIndex === 0 ? "0px" : "20px",
//                             height: activeIndex === 0 ? "auto" : "78px",
//                         }}
//                     >
//                         <div className={styles.number}>
//                             <p>1</p>
//                         </div>
//
//                         <h3>Что же такое аудиосектор?</h3>
//
//
//                         {/*<ParallaxCard src="/firstLogo.png" alt="image">*/}
//
//                         {/*</ParallaxCard>*/}
//
//                         <Image
//                             className={`${styles.logoOnHover}`}
//                             style ={{
//                                 display: activeIndex === 0 ? "none" : "block",
//                             }}
//                             src='/firstLogo.png'
//                             width={155}
//                             height={155}
//                             alt='image'
//                         />
//
//                         <div
//                             className={styles.arrow}
//                             onClick={() => handleClick(0)}
//                         >
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
//                                  xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M5 5L19 19" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round"
//                                       strokeLinejoin="round"/>
//                                 <path d="M19 11L19 19L11 19" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round"
//                                       strokeLinejoin="round"/>
//                             </svg>
//                         </div>
//                     </div>
//                     <div className={styles.answer} style={{
//                         height: activeIndex === 0 ? "auto" : "0px", // padding: activeIndex === 0 ? "20px" : "0px",
//                         paddingTop: activeIndex === 0 ? "30px" : "0px",
//                         paddingBottom: activeIndex === 0 ? "30px" : "0px",
//                         paddingLeft: activeIndex === 0 ? "64px" : "0px",
//                         paddingRight: activeIndex === 0 ? "64px" : "0px",
//                         overflow: "hidden",
//                     }}>
//                         <div className={styles.texts}>
//                             <p>
//                                 AudioSector — это передовая платформа для транскрибации аудио и видео, привносящая
//                                 инновации
//                                 в области обработки речи. Наш сервис предлагает точные и быстрые решения для
//                                 конвертации
//                                 речи в текст в любой сфере деятельности. Мы используем передовые технологии
//                                 искусственного
//                                 интеллекта, чтобы обрабатывать файлы любого формата и длины, включая записи с
//                                 акцентами
//                                 и
//                                 фоновым шумом. AudioSector гарантирует конфиденциальность данных и высокую точность
//                                 транскрипции, обеспечивая пользователей инструментами для эффективного управления и
//                                 анализа
//                                 аудиоматериалов. Воспользуйтесь AudioSector сегодня и упростите процесс работы с
//                                 аудиофайлами до максимальной степени!
//                             </p>
//
//                             <Image
//                                 className={`${styles.logo}`}
//                                 // style ={{
//                                 //     position: activeIndex === 0 ? "initial" : "absolute",
//                                 // }}
//                                 src='/firstLogo.png'
//                                 width={155}
//                                 height={155}
//                                 alt='image'
//                             />
//                         </div>
//                         <button>подробнее</button>
//                     </div>
//                 </div>
//             </section>
//
//         </main>
//         <footer className={styles.footer}>
//             {/* Footer content */}
//         </footer>
//     </div>);
// }

"use client";
import Image from "next/image";
import React, {useState} from "react";
import styles from "./page.module.scss";

const Home: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState < number | null > (null);

    const handleClick = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h2 className={styles.title}>FAQ: Ответы на главные вопросы</h2>
                <section className={styles.accordion}>
                    <div className={styles.faqCard}>
                        <div
                            className={`${styles.question} ${activeIndex === 0 ? styles.active : ""}`}
                            style={{
                                paddingBottom: activeIndex === 0 ? "0px" : "20px",
                                height: activeIndex === 0 ? "auto" : "78px",
                            }}
                        >
                            <div className={styles.number}>
                                <p>1</p>
                            </div>
                            <h3>Что же такое аудиосектор?</h3>
                            <Image
                                className={`${styles.logoOnHover}`}
                                style={{
                                    display: activeIndex === 0 ? "none" : "block",
                                }}
                                src="/firstLogo.png"
                                width={155}
                                height={155}
                                alt="image"
                            />
                            <div className={styles.arrow} onClick={() => handleClick(0)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L19 19" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M19 11L19 19L11 19" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div
                            className={styles.answer}
                            style={{
                                height: activeIndex === 0 ? "auto" : "0px",
                                paddingTop: activeIndex === 0 ? "30px" : "0px",
                                paddingBottom: activeIndex === 0 ? "30px" : "0px",
                                paddingLeft: activeIndex === 0 ? "64px" : "0px",
                                paddingRight: activeIndex === 0 ? "64px" : "0px",
                                overflow: "hidden",
                            }}
                        >
                            <div className={styles.texts}>
                                <p>
                                    AudioSector — это передовая платформа для транскрибации аудио и видео, привносящая
                                    инновации в области обработки речи. Наш сервис предлагает точные и быстрые решения
                                    для конвертации речи в текст в любой сфере деятельности. Мы используем передовые
                                    технологии искусственного интеллекта, чтобы обрабатывать файлы любого формата и
                                    длины, включая записи с акцентами и фоновым шумом. AudioSector гарантирует
                                    конфиденциальность данных и высокую точность транскрипции, обеспечивая пользователей
                                    инструментами для эффективного управления и анализа аудиоматериалов. Воспользуйтесь
                                    AudioSector сегодня и упростите процесс работы с аудиофайлами до максимальной
                                    степени!
                                </p>
                                <Image
                                    className={`${styles.logo}`}
                                    src="/firstLogo.png"
                                    width={155}
                                    height={155}
                                    alt="image"
                                />
                            </div>
                            <button>подробнее</button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className={styles.footer}>
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default Home;
