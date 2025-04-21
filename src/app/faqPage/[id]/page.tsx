import Image from "next/image";
import {notFound} from "next/navigation";
import {faqData} from "../../../data/faq";
import Link from "next/link";
import styles from "../../page.module.scss";
import CardListt from "../../../сomponents/FaqPageCard/ShowCardList";


type Props = {
    params: { id: string };
};

export async function generateStaticParams() {
    return faqData.map((item) => ({
        id: item.id.toString(),
    }));
}

// interface Params {
//     params: {
//         id: string;
//     };
// }



export default async function FaqPage({ params }: Props) {
    const id = parseInt(params.id);
    const faqItem = faqData.find((item) => item.id === id);

    if (!faqItem) return notFound();

    return (
        <div className="w-full max-w-[1160px] mx-auto pt-[80px] pr-[10px] pl-[10px] flex gap-[58px]">
            {/* Sidebar */}
            <aside className="w-1/4 sticky top-20">
                <Image
                    src={faqItem.src}
                    alt={faqItem.question}
                    width={323}
                    height={323}
                    className="rounded-lg mb-6 border border-[#3D9ED6]"
                />

                <Link href={`/`} className="group">
                    <button
                        className="group-hover:border-[#3D9ED6] transition-all duration-[.3s] ease-in flex justify-between w-full cursor-pointer font-bold text-left items-center mb-5 py-3 border-b border-[#CCCCCC]">
                        Краткое содержание
                        <svg
                            width="10"
                            height="11"
                            viewBox="0 0 10 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.91602 8.41797L2.08268 2.58464"
                                stroke="#CCCCCC"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.08268 5.91797L2.08268 2.58464L5.41602 2.58464"
                                stroke="#CCCCCC"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </Link>

                <ul className="space-y-4 text-[#737373] font-bold text-sm">
                    {faqItem.aside?.map((item) => {
                        const isActive = typeof window !== "undefined" && window.location.hash === item.id;
                        return (
                            <li key={item.id}>
                                <a
                                    href={item.id}
                                    className={isActive ? "text-[#3D9ED6]" : ""}
                                >
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </aside>

            {/* Main content */}
            <main className="w-3/4">
                <section
                    className={`${styles.accordion} w-full flex flex-col gap-[5px]`}
                >
                    <CardListt initialOpenId={id} />
                </section>
            </main>
        </div>
    );
}
