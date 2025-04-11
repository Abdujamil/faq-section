"use client";
import React from "react";
import styles from '../app/page.module.scss';
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.form}>
                    <p>Подписаться на новости</p>

                    <form action="#">
                        <input type="email" name="email" id="email" placeholder="Email"/>

                        <button type="submit">
                            <Image
                                src="/send-icon.svg"
                                alt='send-icon'
                                width={24}
                                height={24}
                            />
                        </button>
                    </form>
                </div>
                <div className={styles.logo}>
                    <Image
                        src="/audio-logo.svg"
                        alt='audio-logo'
                        width={228}
                        height={87}
                    />
                </div>
                <div className={styles.links}>
                    <ul>
                        <li><a href="#">Блог</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">Лицензии</a></li>
                    </ul>

                    <p>
                        © 2025 Audiosector
                    </p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>Политика конфиденциальности </p>
                <p>ООО &quot;АУДИОСЕКТОР&quot;</p>
                <p>ИНН 6000005874</p>
            </div>
        </footer>
    );
};

export default Footer;