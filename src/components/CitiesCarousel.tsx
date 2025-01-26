"use client";

import React, { useState } from "react";

import useDeviceSize from '../hooks/useDeviceSize'

const CitiesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Índice atual do carrossel
    const [width, height] = useDeviceSize();

    const places = [
        {
            Name: "Minas Gerais",
            Image: "cities/mg.png"
        },
        {
            Name: "São Paulo",
            Image: "cities/sp.png"
        },
        {
            Name: "Rio Grande do Sul",
            Image: "cities/rs.png"
        },
        {
            Name: "Rio de Janeiro",
            Image: "cities/rj.png"
        },
    ]


    const nextSlide = () => {
        if (currentIndex < places.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="md:mx-40 p-4 mt-24 mb-16">

            <div className="flex md:justify-between mb-4">
                <h2 className="w-2/3 text-lg md:text-2xl font-bold mb-4">
                    Prontos pra te Receber em mais de 10 estados
                </h2>
                <div>
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="px-2 py-2 border-2 rounded-full disabled:opacity-50 mr-4 "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= places.length - 1}
                        className="px-2 py-2 border-2 rounded-full disabled:opacity-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {places.slice(currentIndex, currentIndex + (width >= 768 ? 4 : 1)).map((state, index) => {
                        return (
                            <div
                                key={index}
                                className=""
                            >
                                <div
                                    className="rounded-lg bg-cover bg-center h-[230px] md:h-[170px]"
                                    style={{
                                        backgroundImage: `url('${state.Image && state.Image.trim() !== "" ? state.Image : "/casa1.png"}')`, // Verificação robusta para state.Image
                                    }}
                                ></div>
                                <div className="p-4">
                                    <ul className="text-gray-500 text-xs list-disc">
                                        <li>Casas à venda em {state.Name}</li>
                                        <li>Apto. à venda em {state.Name}</li>
                                        <li>Casas para Locação em {state.Name}</li>
                                        <li>Apto. para Locação em {state.Name}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default CitiesCarousel;