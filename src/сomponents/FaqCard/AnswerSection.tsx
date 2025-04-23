import {motion, useAnimation} from "framer-motion";
import Image from "next/image";
import {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import styles from '../../app/page.module.scss';
import {useButton} from "../../utils/useButton";
import {AnimationSettings} from "../../utils/types";
import Link from "next/link";

interface Props {
    id: number;
    isOpen: boolean | undefined;
    answer: string;
    src: any;
    animationSettings: AnimationSettings;
}

const AnswerSection: React.FC<Props> = ({id, isOpen, answer, src, animationSettings}) => {
    const controls = useAnimation();
    const {setButtonRef, setWrapperRef} = useButton();
    const router = useRouter();
    const [clicked, setClicked] = useState(false);

    const handleClick = async () => {
        setClicked(true); // Запускаем эффект исчезновения
        await new Promise(resolve => setTimeout(resolve, 200)); // Ждем 300мс
        router.push(`/faqPage/${id}`);
    };

    useEffect(() => {
        const target = {
            y: isOpen ? animationSettings.openY : animationSettings.closeY,
            opacity: isOpen ? [0, 1, 1, 1, 1] : [1, 1, 1, 1, 0],
            transition: {
                duration: animationSettings.duration,
                ease: animationSettings.ease,
                times: animationSettings.times,
            },
        };
        controls.start(target);
    }, [isOpen, animationSettings]);

    return (
        <div
            className={`${styles.answer} bg-[#1A1A1A] rounded-[6px]`}
            style={{
                height: isOpen ? "auto" : "0px",
                paddingTop: isOpen ? "30px" : "0px",
                paddingBottom: isOpen ? "30px" : "0px",
                paddingRight: isOpen ? "90px" : "0px",
                paddingLeft: isOpen ? "80px" : "0px",
                borderTopRightRadius: isOpen ? "0" : "4px",
                borderTopLeftRadius: isOpen ? "0" : "4px",
                border: isOpen ? "1px solid #CCCCCC" : "",
                borderTopColor: isOpen ? "transparent" : "",
                marginTop: isOpen ? "-2px" : "",
                overflow: "hidden",
            }}
        >
            <div className={`${styles.texts} flex gap-[40px] mb-[30px]`}>
                <p className="text-[18px] font-normal">{answer}</p>
                <motion.div
                    className="w-[145.5px] max-h-[145.5px] mt-[7px]"
                    initial={{y: 20, opacity: 0}}
                    animate={controls}
                    style={{display: isOpen ? "block" : "none"}}
                >
                    <Image
                        src={src}
                        alt="FAQ image"
                        width={145.5}
                        height={145.5}
                        className="w-full min-w-[145.5px] h-[145.5px] border border-[#CCCCCC] rounded-[6px]"
                    />
                </motion.div>
            </div>

            <Link href={`/faqPage/${id}`} className="w-[300px]">
                <div ref={setWrapperRef} className={`${styles.textsBtn} relative max-w-[300px]`}>
                    <motion.button
                        ref={setButtonRef}
                        initial={{y: 20, opacity: 0}}
                        animate={controls}
                        className={`${styles.motionEffect} py-[16px] px-[61px] bg-black  text-[24px] leading-[18px] cursor-pointer rounded-[4px] border border-[#CCCCCC] `}
                        style={{display: isOpen ? "block" : "none"}}
                        // onClick={handleClick}
                        // disabled={clicked}
                    >
                        подробнее
                    </motion.button>
                </div>
            </Link>
        </div>
    );
};

export default AnswerSection;
