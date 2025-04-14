import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Metadata} from "next";

interface RootLayoutProps {
    children: React.ReactNode;
}

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "FAQ",
    description: "FAQ page for audiosector",
};

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="ru">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        </body>
        </html>
    );
}