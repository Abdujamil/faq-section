"use client";

import {useEffect, useState} from "react";
import {useScrollSpy} from "../useScrollSpy";

type AsideItem = {
    id: string;
    title: string;
};


export default function FaqAside({items}: { items: AsideItem[] }) {
    const sectionIds = items.map(item => item.id);
    const activeHash = useScrollSpy({ sectionIds, offset: 100 });

    // const [activeHash, setActiveHash] = useState(items[0]?.id || "");

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             const visibleEntries = entries
    //                 .filter(entry => entry.isIntersecting)
    //                 .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top); // Сортировка сверху вниз
    //
    //             if (visibleEntries.length > 0) {
    //                 const firstVisible = visibleEntries[0];
    //                 const id = "#" + firstVisible.target.id;
    //                 setActiveHash(id);
    //                 // window.history.replaceState(null, "", id);
    //             }
    //         },
    //         {
    //             threshold: 0.5,
    //             rootMargin: "0px 0px -50% 0px", // Чтобы не триггерился слишком рано
    //         }
    //     );
    //
    //     items.forEach((item) => {
    //         const el = document.getElementById(item.id.replace("#", ""));
    //         if (el) observer.observe(el);
    //     });
    //
    //     return () => observer.disconnect();
    // }, [items]);

    return (
        <ul className="space-y-4 text-[#737373] font-bold text-sm">
            {items.map((item) => (
                <li key={item.id} className="group cursor-pointer">
                    <a
                        href={item.id}
                        className={`text-[16px] font-normal transition-colors duration-300 group-hover:text-[#4A738C]  ${
                            activeHash === item.id ? "text-[#4A738C]" : ""
                        }`}
                    >
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}
