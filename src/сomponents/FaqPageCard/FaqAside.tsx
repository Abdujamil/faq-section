"use client";

import {useEffect, useState} from "react";
import Link from "next/link";

type AsideItem = {
    id: string;
    title: string;
};


export default function FaqAside({items}: { items: AsideItem[] }) {
    const [activeHash, setActiveHash] = useState("");

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };

        handleHashChange(); // установим текущий хеш при загрузке
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    return (
        <ul className="space-y-4 text-[#737373] font-bold text-sm">
            {items.map((item) => (
                <li key={item.id} className="group cursor-pointer">
                    <a
                        href={item.id}
                        className={`text-[16px] font-normal transition-colors duration-300 group-hover:text-[#3D9ED6] ${
                            activeHash === item.id ? "text-[#3D9ED6]" : ""
                        }`}
                    >
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}
