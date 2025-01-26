"use client";

import { useState } from "react";

import TabsBlock from "./TabsBlock";

const ImageBlock = () => {
    const [currentTab, setCurrentTab] = useState("sol");

    const data = {
        buttons: [
            {
                title: 'Pega sol',
                value: 'sol',
            },
            {
                title: 'Aceitam pet',
                value: 'pet',
            },
            {
                title: 'Ônibus perto',
                value: 'onibus',
            },
            {
                title: 'Tem quintal',
                value: 'quintal',
            },
            {
                title: 'Tem varanda',
                value: 'varanda',
            },
            {
                title: 'Tem boa internet',
                value: 'internet',
            }
        ],
        tabs: [
            {
                value: 'sol',
                title: 'Sol que ilumina as suas manhãs',
                subtitle: 'Busque imóveis que pegam Sol durante a manhã para que você fique com a vitamina D em dia ;)',
                button: {
                    title: 'Buscar imóveis',
                    link: ''
                },
            },
            {
                value: 'pet',
                title: 'Imóveis que aceitam pets',
                subtitle: 'Busque imóveis que aceitem pets',
                button: {
                    title: 'Buscar imóveis',
                    link: ''
                },
            },
            {
                value: 'onibus',
                title: 'Imóveis que tem ponto de onibus por perto',
                subtitle: 'Busque imóveis que possuem ponto de onibus nas redondezas',
                button: {
                    title: 'Buscar imóveis',
                    link: ''
                },
            },
            {
                value: 'quintal',
                title: 'Imóveis com Quintal',
                subtitle: 'ABusque imóveis que possuem quintal.',
                button: {
                    title: 'Buscar imóveis',
                    link: ''
                },
            },
            {
                value: 'varanda',
                title: 'Imóveis com Varanda',
                subtitle: 'Busque imóveis que possuem varanda.',
                button: {
                    title: 'Buscar imóveis',
                    link: ''
                },
            },
            {
                value: 'internet',
                title: 'Imóveis com boa internet',
                subtitle: 'Busque imóveis que possuem uma boa internet.',
                button: {
                    title: 'Buscar imóveis',
                    link: ''
                },
            }
        ]
    }

    return (
        <div className="relative bg-cover md:bg-center h-[15vh] md:h-[600px] " style={{ backgroundImage: `url(${'/' + currentTab + '.png'})` }}>
            <div className="mx-48 block md:flex md:flex-col absolute inset-0 justify-center">
                <TabsBlock data={data} currentTab={currentTab} setCurrentTab={setCurrentTab} />
            </div>
        </div>
    );
};

export default ImageBlock;