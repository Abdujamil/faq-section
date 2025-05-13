"use client";
import React from "react";
import styles from '../app/page.module.scss';
import FooterSubscriptionForm from "../сomponents/footer/FooterSubscriptionForm";
import FooterCompanyInfo from "../сomponents/footer/FooterCompanyInfo";
import FooterLinks from "../сomponents/footer/FooterLinks";

const Footer: React.FC = () => (
    <footer className={`${styles.footer} w-full bg-[#ffffff10] shadow-[0_0_10px_-5px_#000000] backdrop-blur-sm`}>
        <div className={`${styles.footerTop} w-full h-full max-h-[127px] py-[20px] pl-[22px] px-[30px] rounded-[4px] flex items-center justify-between`}>
            <FooterSubscriptionForm />
            <FooterCompanyInfo />
            <FooterLinks />
        </div>
    </footer>
);

export default Footer;
