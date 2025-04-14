import {StaticImageData} from "next/image";

interface FaqItem {
    id: number;
    num: string;
    question: string;
    answer: string;
    src: string | StaticImageData;
    attribute: string;
}

export const faqData: FaqItem[] = [
    {
        id: 1,
        num: "1",
        question: "Что же такое аудиосектор?",
        answer: "AudioSector — это передовая платформа для транскрибации...",
        src: "/firstLogo.png",
        attribute: 'firstLogo'
    },
    {
        id: 2,
        num: "2",
        question: "Как быстро работает транскрибация?",
        answer: "AudioSector — это передовая платформа для транскрибации...",
        src: "/2.png",
        attribute: 'secondLogo'
    },
    {
        id: 3,
        num: "3",
        question: "Защищены ли загружаемые вами файлы?",
        answer: "AudioSector — это передовая платформа для транскрибации...",
        src: "/3.png",
        attribute: 'thirdLogo'
    },
    {
        id: 4,
        num: "4",
        question: "Какие форматы поддерживает транскрибация?",
        answer: "AudioSector — это передовая платформа для транскрибации...",
        src: "/4.png",
        attribute: 'fourthLogo'
    },
    {
        id: 5,
        num: "5",
        question: "Сколько времени занимает транскрибация видео в текст?",
        answer: "AudioSector — это передовая платформа для транскрибации...",
        src: "/5.png",
        attribute: 'fifthLogo'
    },
    {
        id: 6,
        num: "6",
        question: "Загружать даже длинные файлы? Без проблем!",
        answer: "AudioSector — это передовая платформа для транскрибации...",
        src: "/6.png",
        attribute: 'sixthLogo'
    },
    {
        id: 7,
        num: "7",
        question: "Редактирование результатов транскрибации?",
        answer: "AudioSector — это передовая платформа для транскрибации...",
        src: "/7.png",
        attribute: 'seventhLogo'
    },
    {
        id: 8,
        num: "8",
        question: "Транскрибация, совместная работа и обмен файлами?",
        answer: "AudioSector — это передовая платформа для транскрибации...",
        src: "/8.png",
        attribute: 'eighthLogo'
    },
    {
        id: 9,
        num: "9",
        question: "Предлагаете ли Вы решения адаптированнные под разные отрасли?",
        answer: "AudioSector — это передовая платформа для транскрибации...",
        src: "/9.png",
        attribute: 'ninthLogo'
    },
    {
        id: 10,
        num: "10",
        question: "Массовая транскрибация аудио в текст?",
        answer: "AudioSector — это передовая платформа для транскрибации...",
        src: "/10.png",
        attribute: 'tenthLogo'
    },
    {
        id: 11,
        num: "11",
        question: "Обработка файлов с акцентами, шумом и плохим качеством?",
        answer: "AudioSector — это передовая платформа для транскрибации...",
        src: "/11.png",
        attribute: 'eleventhLogo'
    },
];