"use client";

import React, { useState } from "react";

const Footer = () => {
    const [activeTab, setActiveTab] = useState("Tipos de Propriedades");

    const tabs = [
        {
            title: "Tipos de Propriedades",
            content: [
                {
                    category: "Alugar",
                    items: ["Apartamentos", "Casas", "Terrenos", "Lojas"],
                },
                {
                    category: "Comprar",
                    items: [
                        "Casas à venda",
                        "Imóveis em Condomínios",
                        "Comprar terrenos",
                        "Lançamentos",
                    ],
                },
                {
                    category: "Comercial",
                    items: [
                        "Imóveis com escritório",
                        "Prédio comercial",
                        "Galpão de Armazenamento",
                        "Salão de Eventos",
                    ],
                },
            ],
        },
        {
            title: "Populares para Venda",
            content: [],
        },
        {
            title: "Populares para Locação",
            content: [],
        },
    ];

    const footerLinks = [
        {
            title: "A Netimóveis",
            links: [
                "Quem somos",
                "Como funciona",
                "Seja um parceiro",
                "Quero me associar",
                "Assessoria de imprensa",
                "Soluções Corporativas",
                "Covid-19",
            ],
        },
        {
            title: "Recursos",
            links: [
                "Comprar",
                "Alugar",
                "Lançamentos",
                "Anunciar Imóvel",
                "Simular Financiamento",
                "Imobiliárias",
                "Blog",
            ],
        },
        {
            title: "Contato",
            links: ["Fale Conosco", "Perguntas Frequentes", "Suporte"],
        },
        {
            title: "Nossos Aplicativos",
            links: [
                "Loc Fácil Netimóveis",
                "Pro Imob Netimóveis",
            ],
        },
    ];

    return (
        <footer className="bg-gray-50 text-gray-800 mt-24">
            {/* Tabs Section */}
            <div className="mx-40 border-b border-gray-200">
                <div className="flex space-x-8 px-6 py-4 text-sm font-semibold p-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.title}
                            onClick={() => setActiveTab(tab.title)}
                            className={`${activeTab === tab.title
                                ? "text-orange-500 border-b-2 border-orange-500"
                                : "text-gray-600"
                                } pb-2`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
                    {tabs
                        .find((tab) => tab.title === activeTab)
                        ?.content.map((section, index) => (
                            <div key={index}>
                                <h4 className="text-gray-700 font-bold mb-2">{section.category}</h4>
                                <ul className="space-y-1 text-sm">
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="hover:text-orange-500 cursor-pointer">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="bg-[#EDF1F4]">
                <div className="mx-40 grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-8 p-6">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h4 className="text-[#063D7E] font-bold mb-2">{section.title}</h4>
                            <ul className="space-y-1 text-sm">
                                {section.links.map((link, idx) => (
                                    <li key={idx} className="hover:text-orange-500 cursor-pointer">
                                        {link}
                                    </li>
                                ))}
                            </ul>

                            {section.title == 'Nossos Aplicativos' &&
                                <div className="flex justify-between mt-4">
                                    <img
                                        src='/app.png'
                                        alt='Apple Store'
                                        className=" object-cover"
                                    />
                                    <img
                                        src='/google.png'
                                        alt='Play Store'
                                        className=" object-cover"
                                    />
                                </div>
                            }

                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-orange-500 ">
                <div className="mx-40 text-white text-sm py-4 px-6 flex justify-between items-center">
                    <div>
                        <img
                            src='/logo-branco.png'
                            alt='NetImoveis'
                            className=" object-cover"
                        />
                    </div>

                    <div>
                        <span>
                            © Copyright 2021 Netimóveis Brasil SA. Todos os direitos reservados.
                        </span>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300">
                                Política de privacidade
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                Termos de uso
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                LGPD
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                Versão: 25/10/2021
                            </a>
                        </div>
                    </div>

                    <div>
                        <img
                            src='/SocialMedia.png'
                            alt='NetImoveis'
                            className=" object-cover"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;