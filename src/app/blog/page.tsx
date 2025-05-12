'use client';

import styles from '../page.module.scss'
import Header from "../../сomponents/header/Header";

export default function Blog() {
    return (
        <>
            <div className={`${styles.page}`}>
                {/* Background */}
                <div
                    className={`${styles.faqBg} fixed w-full h-dvh bg-[url(/bg.png)] bg-no-repeat left-0 top-0 z-[-1]`}
                    style={{backgroundAttachment: 'fixed',}}
                >
                    <div className={`${styles.linear}  absolute inset-0 bg-black/20`}></div>
                </div>
            </div>
            <div className={`${styles.contact} w-full h-full mx-auto flex flex-col items-center`}>
                <Header/>
                <div
                    className={`${styles.contactContainer} pb-[127px] w-full max-w-[1160px] h-full min-h-[432px] flex justify-center items-center `}>
                    <div className={`w-full flex flex-col justify-center items-center gap-[2px]`}>
                        <h2 className={`${styles.txtGradientRight}  leading-[110%] text-[40px] font-normal mt-[-5px]`}>Полезные статьи и советы</h2>
                        <p className={`text-[#3d9ed6] text-[34px]`}>Скоро...</p>
                    </div>
                </div>
            </div>
        </>
    );
}