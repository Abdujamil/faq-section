"use client";
import React from "react";
import styles from '../app/page.module.scss';
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.form}>
                    <Image
                        src="/microphone.png"
                        alt='microphone'
                        width={95}
                        height={189}
                    />
                    <div>
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
                </div>
                <div className={styles.logo}>
                    <p>Политика конфиденциальности </p>
                    <h3>ООО &quot;АУДИОСЕКТОР&quot;</h3>
                    <p>ИНН 6000005874</p>

                </div>
                <div className={styles.links}>
                    <div>
                        <ul>
                            <li><a href="#">Блог</a></li>
                            <li><a href="#">Контакты</a></li>
                            <li><a href="#">Лицензии</a></li>
                        </ul>

                        <p>
                            © 2025 Audiosector
                        </p>
                    </div>
                    <div className={styles.footerBtns}>
                        <button aria-label="Scroll to top" type="button">
                            <Image
                                src="/button-top.png"
                                alt=""
                                width={60}
                                height={60}
                                priority={false} // Для некритичных изображений
                            />
                        </button>
                        <button aria-label="Scroll to bottom" type="button">
                            <Image
                                src="/button-bottom.png"
                                alt=""
                                width={60}
                                height={60}
                                priority={false}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;