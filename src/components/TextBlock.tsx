"use client";

import React, { useState } from "react";
import TabsBlock from './TabsBlock'

export default function TextBlock() {
    const [currentTab, setCurrentTab] = useState("alugar");

    const data = {
        buttons: [
            {
                title: 'Alugar Imóvel',
                value: 'alugar',
            },
            {
                title: 'Comprar Imóvel',
                value: 'comprar',
            },
            {
                title: 'Anunciar Imóvel',
                value: 'anunciar',
            }
        ],
        tabs: [
            {
                value: 'alugar',
                title: 'Alugue sem complicação',
                subtitle: 'Alugue imóveis qualificados e sem repetição. Confira nossas opções e aproveite!',
                button: {
                    title: 'Ver imóveis para Alugar',
                    link: ''
                },
                links: [
                    {
                        url: '',
                        text: 'Veja como Alugar sem Fiador'
                    },
                    {
                        url: '',
                        text: 'Saiba como funciona o Aluguel na NetImóveis'
                    }
                ]
            },
            {
                value: 'comprar',
                title: 'Encontre o imóvel dos seus sonhos',
                subtitle: 'Compre imóveis selecionados com as melhores condições do mercado.',
                button: {
                    title: 'Ver imóveis para Comprar',
                    link: ''
                },
                links: [
                    {
                        url: '',
                        text: 'Simule seu Financiamento'
                    },
                    {
                        url: '',
                        text: 'Saiba como funciona a Compra na NetImóveis'
                    }
                ]
            },
            {
                value: 'anunciar',
                title: 'Anuncie seu imóvel agora mesmo',
                subtitle: 'Anuncie seu imóvel com agilidade e alcance um público qualificado.',
                button: {
                    title: 'Anunciar Imóvel',
                    link: ''
                },
                links: [
                    {
                        url: '',
                        text: 'Descubra Quanto Cobrar'
                    }
                ]
            }
        ]
    }

    return (
        <div className="bg-gray-100 pt-12 pb-12">
            <div className="block md:flex md:mx-40 p-8">
                <div className="md:w-2/5">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-700 md:text-gray-600 mb-4">Encontre um lugar que é a sua cara</h1>
                    <p className="text-gray-500 mb-6">
                        A Netimóveis te oferece uma experiência ágil e segura na hora de comprar ou alugar seu imóvel.
                        Seja de maneira digital ou física, fazemos a diferença neste momento tão importante que é decidir um lar.
                    </p>
                </div>

                <div className="md:w-1/5"></div>
                <TabsBlock data={data} currentTab={currentTab} setCurrentTab={setCurrentTab} />
            </div>
        </div>
    );
}