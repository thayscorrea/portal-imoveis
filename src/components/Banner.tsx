"use client";

import { useState } from "react";
import LocationInput from "./LocationInput";

const Banner = () => {
    const [location, setLocation] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const suggestions = [
        "Av. José Faria da Rocha, Eldorado - Contagem/MG",
        "Rua José Faria de Barros, Parque Imperial - Salto/MG",
        "Rua José Faria de Almeida, Jardim das Palmeiras - Boituva/SP",
        "Rua José Faria de Carvalho, Exemplo de texto sobresalente - Pouso Alegre/MG",
        "Avenida José Maria de Faria, Lapa de Baixo - São Paulo/SP",
    ];

    return (
        <div className="relative bg-cover md:bg-center h-[15vh] md:h-[600px]" style={{ backgroundImage: "url('/img-moca.png')" }}>
            <div className="block md:flex md:flex-col absolute inset-0 justify-center items-center">
                <h1 className="text-white text-xl mt-2 md:text-3xl font-bold mb-6 w-[130px] md:w-[500px]">Vende. Aluga. Conecta.</h1>

                {/* Desktop Form */}
                <div className="grid md:flex bg-white md:shadow-md md:rounded-full md:overflow-hidden max-w-4xl w-full cursor-pointer mb-12 md:mb-0">
                    <LocationInput text='Localização' placeholder='Qual é a Localização?' isLocation={true} setIsFocused={setIsFocused} location={location} setLocation={setLocation} />

                    <LocationInput text='Nº de Quartos' placeholder='Quantos Quartos?' isLocation={false} setIsFocused={setIsFocused} location={location} setLocation={setLocation} />

                    <div className="flex justify-center">
                        <button className="bg-orange-500 text-white w-[90%] md:w-12 h-12 p-4 mt-1 mr-2 flex items-center justify-center md:rounded-full hover:bg-orange-600 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                <path d="M14 14L16.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M16.4333 18.5252C15.8556 17.9475 15.8556 17.0109 16.4333 16.4333C17.0109 15.8556 17.9475 15.8556 18.5252 16.4333L21.5667 19.4748C22.1444 20.0525 22.1444 20.9891 21.5667 21.5667C20.9891 22.1444 20.0525 22.1444 19.4748 21.5667L16.4333 18.5252Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                            <span className="text-white md:hidden">Buscar imóveis</span>
                        </button>
                    </div>
                </div>

                {/* Suggestions Dropdown */}
                {isFocused && location && (
                    <div className="absolute top-[250px] md:top-[130px] left-0 right-0 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
                        {suggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onMouseDown={() => setLocation(suggestion)}
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Banner;