"use client";

import React from "react";

const BlogSection = () => {

    const articles = [
        {
            image: "/blog/article1.png",
            title: "Encontro Netimóveis Brasil – N Connections 2021",
            readTime: 2,
            category: "Mundo Netimóveis",
        },
        {
            image: "/blog/article2.png",
            title: "Organização financeira nas imobiliárias",
            readTime: 3,
            category: "Finanças",
        },
        {
            image: "/blog/article3.png",
            title: "Eficiência na gestão de chamados de manutenção",
            readTime: 4,
            category: "Sucesso Profissional",
        },
    ];

    return (
        <div className="mx-40 py-12 px-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    Para compradores, vendedores ou curiosos :)
                </h2>
                <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-sm flex items-center"
                >
                    Ver mais no Blog →
                </a>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {articles.map((article, index) => (
                    <div
                        key={index}
                    >
                        {/* Image */}
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        {/* Content */}
                        <div className="p-4">
                            <p className="text-gray-500 text-xs flex items-center mb-2">
                                <span className="mr-2">🕒</span>
                                {article.readTime} Min de Leitura
                                <span className="ml-2 text-orange-500 font-medium">
                                    {article.category}
                                </span>
                            </p>
                            <h3 className="text-gray-800 font-bold text-lg mb-2">
                                {article.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;