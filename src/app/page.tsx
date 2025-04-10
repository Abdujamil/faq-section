"use client";

import React from "react";
import styles from '../app/page.module.scss';
import FaqCard from "../Components/FaqCard";

const Home: React.FC = () => {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h2 className={styles.title}>FAQ: Ответы на главные вопросы</h2>
                <section className={styles.accordion}>
                    <FaqCard/>
                </section>
            </main>
            <footer className={styles.footer}>
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default Home;
