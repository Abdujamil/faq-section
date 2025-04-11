"use client";
import React, {useEffect, useRef, CSSProperties} from "react";
import Image, {StaticImageData} from "next/image";
import styles from '../app/page.module.scss';

const range = 40;

const calcValue = (a: number, b: number): string => (a / b * range - range / 2).toFixed(1);

interface ParallaxCardProps {
    src: string | StaticImageData;
    alt: string;
    style?: CSSProperties;
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({src, alt, style}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
    const backgroundsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleMouseMove = ({x, y}: { x: number; y: number }) => {
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
                    // @ts-ignore
                    background.style.backgroundPosition = `${xValue * 0.45}px ${-yValue * 0.45}px`;
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const setImageRef = (el: HTMLDivElement | null) => {
        imagesRef.current[0] = el;
    };

    const setBackgroundRef = (el: HTMLDivElement | null) => {
        backgroundsRef.current[0] = el;
    };

    return (
        <div ref={cardRef} className={styles.logoOnHover} style={style}>
            <div
                ref={setImageRef}
                className={styles.card__img}
            >
                <Image src={src} alt={alt} width={155} height={155}/>
            </div>
            <div
                ref={setBackgroundRef}
                className={styles.card__bg}
            ></div>
        </div>
    );
};

export default ParallaxCard;