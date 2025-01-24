"use client";

import React, { useState, useEffect } from "react";

interface Property {
    City: string;
    Title: string;
    Author: string;
    Rooms: number;
    Tags: string[];
    Price: number;
    Image?: string; // Opcional
}

interface Place {
    name: string;
    state: string[];
    placeId: number;
}

const PropertyList = () => {
    const [places, setPlaces] = useState<Place[]>([]); // Lista de cidades
    const [flats, setFlats] = useState<Property[]>([]); // Lista de flats
    const [selectedCity, setSelectedCity] = useState("Belo Horizonte"); // Cidade selecionada
    const [currentIndex, setCurrentIndex] = useState(0); // Índice atual do carrossel

    // Carregar cidades do arquivo places.json
    useEffect(() => {
        fetch("/assets/place.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao carregar places.json");
                }
                return response.json();
            })
            .then((data) => setPlaces(data))
            .catch((error) => console.error("Erro ao carregar as cidades:", error));
    }, []);

    // Carregar flats relacionados à cidade selecionada
    useEffect(() => {
        if (selectedCity) {
            fetch("/assets/flats.json")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Erro ao carregar flats.json");
                    }
                    return response.json();
                })
                .then((data) => {
                    const filteredFlats = data.filter(
                        (flat) => flat.City.toLowerCase() === selectedCity.toLowerCase()
                    );
                    setFlats(filteredFlats);
                    setCurrentIndex(0); // Reiniciar o índice ao selecionar uma nova cidade
                })
                .catch((error) => console.error("Erro ao carregar os flats:", error));
        }
    }, [selectedCity]);

    const nextSlide = () => {
        if (currentIndex < flats.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="container mx-auto p-4 mt-16 mb-16">
            <h2 className="text-xl font-bold mb-4">
                Novos Anúncios em
                <select
                    className="ml-2 border p-1 rounded text-orange-500 border-none selected:border-none"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                >
                    {places.map((place, index) => (
                        <option key={index} value={place.name}>
                            {place.name}
                        </option>
                    ))}
                </select>
            </h2>
            <div className="flex justify-end mb-4">
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
                    disabled={currentIndex >= flats.length - 1}
                    className="px-2 py-2 border-2 rounded-full disabled:opacity-50"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            {selectedCity && flats.length > 0 ? (
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {flats.slice(currentIndex, currentIndex + (window.innerWidth >= 768 ? 3 : 1)).map((flat, index) => (
                            <div
                                key={index}
                                className="border rounded-lg shadow-md overflow-hidden"
                            >
                                <div
                                    className="relative bg-cover bg-center h-[200px]"
                                    style={{
                                        backgroundImage: `url('${flat.Image || "/default.png"}')`,
                                    }}
                                ></div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">{flat.Title}</h3>
                                    <p className="text-gray-500 text-sm">{flat.Author}</p>
                                    <p className="text-gray-500 text-sm">
                                        {flat.Rooms} Quartos · {flat.Tags.length} Tags
                                    </p>
                                    <div className="flex flex-wrap mt-2 gap-2">
                                        {flat.Tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 text-xs bg-gray-200 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-orange-500 font-bold mt-4">
                                        R$ {flat.Price.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : selectedCity ? (
                <p className="text-gray-500">Nenhum anúncio encontrado para esta cidade.</p>
            ) : (
                <p className="text-gray-500">Selecione uma cidade para visualizar os anúncios.</p>
            )}
        </div>
    );
};

export default PropertyList;