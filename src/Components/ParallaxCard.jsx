"use client";
import React, {useEffect, useRef} from "react";
import Image from "next/image";
import styles from '../app/page.module.scss';

const range = 80;

const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1);

const ParallaxCard = ({src, alt, children, style}) => {
    const cardRef = useRef(null);
    const imagesRef = useRef([]);
    const backgroundsRef = useRef([]);

    useEffect(() => {
        const handleMouseMove = ({x, y}) => {
            const card = cardRef.current;
            const yValue = calcValue(y, window.innerHeight);
            const xValue = calcValue(x, window.innerWidth);

            if (card) {
                card.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
            }

            imagesRef.current.forEach((image) => {
                if (image) {
                    image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
                }
            });

            backgroundsRef.current.forEach((background) => {
                if (background) {
                    background.style.backgroundPosition = `${xValue * 0.45}px ${-yValue * 0.45}px`;
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div ref={cardRef} className={styles.logoOnHover} style={style}>
            {children}
            <div ref={(el) => (imagesRef.current[0] = el)} className={styles.card__img}>
                <Image src={src} alt={alt} width={155} height={155}  />
            </div>
            <div ref={(el) => (backgroundsRef.current[0] = el)} className={styles.card__bg}></div>
        </div>
    );
};

export default ParallaxCard;
