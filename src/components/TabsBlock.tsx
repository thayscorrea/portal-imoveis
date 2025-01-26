"use client";

import React, { useState } from "react";

interface Link {
    url: string;
    text: string;
}

interface Button {
    title: string;
    value: string;
}

interface Tab {
    value: string;
    title: string;
    subtitle: string;
    button: {
        title: string;
    };
    links?: Link[];
}

interface TabsBlockProps {
    data: {
        buttons: Button[];
        tabs: Tab[];
    };
    currentTab: string;
    setCurrentTab: (value: string) => void;
}

const TabsBlock: React.FC<TabsBlockProps> = ({ data, currentTab, setCurrentTab }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // Índice atual do carrossel

    const nextSlide = () => {
        if (currentIndex <= data.buttons.length - 3) {
            setCurrentIndex(currentIndex + 3);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 3);
        }
    };

    return (
        <div className="bg-white p-6 rounded md:w-2/5 h-3/5">
            {/* Tabs */}
            <div className="flex">
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="disabled:hidden mr-4 mb-6"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none">
                        <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="md:space-x-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                    {data.buttons.slice(currentIndex, currentIndex + (window.innerWidth >= 768 ? 3 : 1)).map(({ title, value }, key) => (
                        <button
                            key={key}
                            className={`font-semibold rounded text-black focus:outline-none ${currentTab === value
                                ? "border-b-2 border-orange-500"
                                : "bg-white text-gray-700 border-none"
                                }`}
                            onClick={() => setCurrentTab(value)}
                        >
                            {title}
                        </button>
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    disabled={currentIndex >= data.buttons.length - 3}
                    className="disabled:hidden mb-6"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none">
                        <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Dynamic Content */}
            <div className="flex mb-4 p-4">
                {data.tabs.map(({ value, title, subtitle, button, links }, index) => {
                    if (currentTab === value) {
                        return (
                            <div key={value}> {/* Use uma key única, como o valor de 'value' */}
                                <h2 className="text-2xl font-bold mb-3">{title}</h2>
                                <p className="text-gray-600 mb-4">{subtitle}</p>
                                <button className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-2 px-4 rounded mb-6">
                                    {button.title}
                                </button>

                                {/* Renderize os links com keys únicas */}
                                {links &&
                                    links.map(({ url, text }, linkIndex) => (
                                        <p key={linkIndex} className="mb-4 text-gray-600 text-sm underline hover:text-purple-600">
                                            <a href={url}>{text}</a>
                                        </p>
                                    ))}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default TabsBlock;