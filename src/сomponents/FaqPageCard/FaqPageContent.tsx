// "use client";
// import { useState, useMemo, useEffect } from "react";
// import Image from "next/image";
// import { faqData } from "../../data/faq";
// import CardListt from "./ShowCardList";
// import FaqAside from "./FaqAside";
// import styles from '../../app/page.module.scss';
// import GlassButton from "../GlassButton/GlassButton";
//
// export default function FaqPageContent({ id }: { id: number }) {
//     const [openQuestionId, setOpenQuestionId] = useState<number | null>(id);
//     const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
//
//     // Предзагрузка изображений при монтировании
//     useEffect(() => {
//         faqData.forEach(item => {
//             if (typeof item.largeImgSrc === 'string') {
//                 const img = new window.Image();
//                 img.src = item.largeImgSrc;
//                 img.onload = () => {
//                     setLoadedImages(prev => ({ ...prev, [item.id]: true }));
//                 };
//             }
//         });
//     }, []);
//
//     const { currentFaqItem, openFaqItem } = useMemo(() => {
//         const current = faqData.find((item) => item.id === id);
//         const open = faqData.find((item) => item.id === openQuestionId) || current;
//         return { currentFaqItem: current, openFaqItem: open };
//     }, [id, openQuestionId]);
//
//     if (!currentFaqItem || !openFaqItem) return null;
//
//     return (
//         <>
//             <aside className="sticky top-20 h-fit w-[260px] backdrop-blur-sm">
//                 <div className={`${styles.registerBlock} mb-[20px] p-[20px] text-center border border-[#353535] rounded-[6px]`}>
//                     <p className={`${styles.text} mb-[16px] text-[#3D9ED6] text-[20px] font-[400] leading-[110%]`}>
//                         При регистрации дарим 30 минут!
//                     </p>
//                     <GlassButton>Попробовать</GlassButton>
//                 </div>
//
//                 {openQuestionId && (
//                     <>
//                         <div className="relative w-[260px] h-[260px] mb-[20px]">
//                             <Image
//                                 src={openFaqItem.largeImgSrc}
//                                 alt={openFaqItem.question}
//                                 fill
//                                 sizes="260px"
//                                 className="rounded-lg object-cover"
//                                 priority={openFaqItem.id === id}
//                                 quality={85}
//                                 onLoadingComplete={() => setLoadedImages(prev => ({ ...prev, [openFaqItem.id]: true }))}
//                             />
//                             {!loadedImages[openFaqItem.id] && (
//                                 <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg" />
//                             )}
//                         </div>
//                         <FaqAside items={openFaqItem.aside} />
//                     </>
//                 )}
//             </aside>
//
//             <div className="col-span-3">
//                 <div className="pt-[80px] pb-[40px]">
//                     <h2 className={`${styles.title} mb-[30px] font-normal leading-[110%] text-[48px] text-[#CCCCCC]`}>
//                         FAQ: Ответы на главные вопросы
//                     </h2>
//                     <section className={`${styles.accordion} w-full flex flex-col gap-[5px]`}>
//                         <CardListt
//                             initialOpenId={id}
//                             onToggle={(id) => setOpenQuestionId(id)}
//                         />
//                     </section>
//                 </div>
//             </div>
//         </>
//     );
// }

"use client";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { faqData } from "../../data/faq";
import CardListt from "./ShowCardList";
import FaqAside from "./FaqAside";
import styles from '../../app/page.module.scss';
import GlassButton from "../GlassButton/GlassButton";

export default function FaqPageContent({ id }: { id: number }) {
    const [openQuestionId, setOpenQuestionId] = useState<number | null>(id);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const { currentFaqItem, openFaqItem } = useMemo(() => {
        const current = faqData.find((item) => item.id === id);
        const open = faqData.find((item) => item.id === openQuestionId) || current;
        return { currentFaqItem: current, openFaqItem: open };
    }, [id, openQuestionId]);

    // Сбрасываем состояние загрузки при изменении открытой карточки
    useEffect(() => {
        setIsImageLoaded(false);
    }, [openQuestionId]);

    if (!currentFaqItem || !openFaqItem) return null;

    return (
        <>
            <aside className="sticky top-20 h-fit w-[260px] backdrop-blur-sm">
                <div className={`${styles.registerBlock} mb-[20px] p-[20px] text-center border border-[#353535] rounded-[6px]`}>
                    <p className={`${styles.text} mb-[16px] text-[#3D9ED6] text-[20px] font-[400] leading-[110%]`}>
                        При регистрации дарим 30 минут!
                    </p>
                    <GlassButton>Попробовать</GlassButton>
                </div>

                {openQuestionId && (
                    <>
                        <div className="relative w-[260px] h-[260px] mb-[20px]">
                            <Image
                                src={openFaqItem.largeImgSrc}
                                alt={openFaqItem.question}
                                width={260}
                                height={260}
                                className="rounded-lg object-cover"
                                priority={openFaqItem.id === id}
                                quality={85}
                                onLoad={() => setIsImageLoaded(true)}
                                onError={() => setIsImageLoaded(true)} // На случай ошибки загрузки
                            />
                            {!isImageLoaded && (
                                <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg" />
                            )}
                        </div>
                        <FaqAside items={openFaqItem.aside} />
                    </>
                )}
            </aside>

            <div className="col-span-3">
                <div className="pt-[80px] pb-[40px]">
                    <h2 className={`${styles.title} mb-[30px] font-normal leading-[110%] text-[48px] text-[#CCCCCC]`}>
                        FAQ: Ответы на главные вопросы
                    </h2>
                    <section className={`${styles.accordion} w-full flex flex-col gap-[5px]`}>
                        <CardListt
                            initialOpenId={id}
                            onToggle={(id) => setOpenQuestionId(id)}
                        />
                    </section>
                </div>
            </div>
        </>
    );
}