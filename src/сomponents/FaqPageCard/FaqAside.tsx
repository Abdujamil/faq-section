"use client";

import {useEffect, useState} from "react";

type AsideItem = {
    id: string;
    title: string;
};


export default function FaqAside({items}: { items: AsideItem[] }) {
    const [activeHash, setActiveHash] = useState(items[0]?.id || "");

    useEffect(() => {
        const handleHashChange = () => {
            const currentHash = window.location.hash;
            setActiveHash(currentHash || items[0]?.id);
        };

        handleHashChange(); // установим текущий хеш при загрузке
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [items]);

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
