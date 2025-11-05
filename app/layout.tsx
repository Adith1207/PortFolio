import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "";
import ClientLayout from "./components/ClientLayout";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AdithVerse",
    description: "To the universe of ADITH",
    icons:{
        icon:"/portfolio.png",
    }
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ClientLayout>{children}</ClientLayout>
        </body>
        </html>
    );
}
