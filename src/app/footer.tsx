"use client";
import React from "react";
import styles from '../app/page.module.scss';
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer
            className={`${styles.footer} w-full mt-[132px] bg-[#ffffff10] shadow-[0_0_10px_-5px_#000000] backdrop-blur-sm`}>
            <div
                className={`${styles.footerTop} w-full h-full max-h-[127px] p-[20px] rounded-[4px] flex items-center justify-between`}>
                <div className={`${styles.form} flex items-center gap-[30px]`}>
                    <Image
                        src="/microphone.png"
                        alt='microphone'
                        width={95}
                        height={189}
                    />
                    <div>
                        <p className={`text-[20px] text-[#3D9ED6] mb-[28px]`}>Подписаться на новости</p>

                        <form action="#" className="flex items-center gap-[10px]">
                            <input
                                className="bg-[#2B2B2B] border border-[#737373] rounded-[4px] py-[8px] pr-[10px] pl-[13px] focus:outline-none active:outline-none "
                                type="email" name="email" id="email" placeholder="Email"/>

                            <button
                                className="bg-[#2B2B2B] border border-[#737373] rounded-[4px] py-[8px] px-[18px] cursor-pointer"
                                type="submit">
                                <Image
                                    className=' transition-all duration-[.3s] ease-in-out'
                                    src="/send-icon.svg"
                                    alt='send-icon'
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </form>
                    </div>
                </div>
                <div
                    className={`${styles.logo} mx-[10px] text-center flex flex-col justify-center items-center gap-[13px]`}>
                    <p className="font-[400 text-[#878787] text-[16px]">ИНН 6000005874 </p>
                    <h3 className="text-[18px]">ООО &quot;АУДИОСЕКТОР&quot;</h3>
                    <p className="font-[400 text-[#878787] text-[16px]">Политика конфиденциальности</p>
                </div>
                <div className={`${styles.links} flex text-end gap-[76px] h-full`}>
                    <div className="flex items-end justify-between flex-col">
                        <ul className="flex items-center gap-[20px]">
                            <li><a href="#" className="text-[18px]">Блог</a></li>
                            <li><a href="#" className="text-[18px]">Лицензии</a></li>
                            <li><a href="#" className="text-[18px]">Контакты</a></li>
                        </ul>

                        <p className="text-[16px] text-[#A4A4A4]">
                            © 2025 Audiosector
                        </p>
                    </div>
                    <div className={`${styles.footerBtns} flex flex-col justify-center items-center relative`}>
                        {/*<button className="w-[65px] h-auto p-0 rounded-0 bg-none cursor-pointer transition-all duration-[.2s] ease"  aria-label="Scroll to top" type="button">*/}
                        {/*    <Image*/}
                        {/*        src="/button-top.png"*/}
                        {/*        alt=""*/}
                        {/*        width={60}*/}
                        {/*        height={60}*/}
                        {/*        priority={false} // Для некритичных изображений*/}
                        {/*    />*/}
                        {/*</button>*/}
                        {/*<button className="w-[65px] h-auto p-0 rounded-0 bg-none cursor-pointer transition-all duration-[.2s] ease"  aria-label="Scroll to bottom" type="button">*/}
                        {/*    <Image*/}
                        {/*        src="/button-bottom.png"*/}
                        {/*        alt=""*/}
                        {/*        width={60}*/}
                        {/*        height={60}*/}
                        {/*        priority={false}*/}
                        {/*    />*/}
                        {/*</button>*/}

                        <svg
                            className="cursor-pointer"
                            width="67"
                            height="50"
                            viewBox="0 0 67 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" filter="url(#filter0_dd_2378_748)">
                                <path d="M26 25V18.697L43 5L60 18.697V25L43 11.303L26 25Z" fill="#737373"/>
                            </g>
                            <defs>
                                <filter id="filter0_dd_2378_748" x="-1.90735e-06" y="9.53674e-07" width="66.2"
                                        height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset dx="-11" dy="10"/>
                                    <feGaussianBlur stdDeviation="7.5"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_2378_748"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset dx="-2" dy="4"/>
                                    <feGaussianBlur stdDeviation="4.1"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="effect1_dropShadow_2378_748"
                                             result="effect2_dropShadow_2378_748"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2378_748"
                                             result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                        <svg
                            className="cursor-pointer"
                            width="67"
                            height="50"
                            viewBox="0 0 67 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" filter="url(#filter0_dd_2378_749)">
                                <path d="M26 5V11.303L43 25L60 11.303V5L43 18.697L26 5Z" fill="#737373"/>
                            </g>
                            <defs>
                                <filter id="filter0_dd_2378_749" x="-1.90735e-06" y="9.53674e-07" width="66.2"
                                        height="50"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset dx="-11" dy="10"/>
                                    <feGaussianBlur stdDeviation="7.5"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_2378_749"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset dx="-2" dy="4"/>
                                    <feGaussianBlur stdDeviation="4.1"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="effect1_dropShadow_2378_749"
                                             result="effect2_dropShadow_2378_749"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2378_749"
                                             result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;