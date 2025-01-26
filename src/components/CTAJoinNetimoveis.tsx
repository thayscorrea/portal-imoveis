"use client";

import React from "react";

const CTAJoinNetimoveis = () => {
  return (
    <div className="md:mx-40 pt-8 pl-8 pr-8 md:p-0 bg-[#1C2A39] text-white rounded-lg shadow-2xl flex flex-col md:flex-row items-center md:pl-12 md:mt-12 md:mb-16">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <span className="text-white font-medium text-sm inline-block mb-4 border border-orange-500 rounded-full px-3 py-1">
          Para Empresas
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Faça parte da Netimóveis
        </h2>
        <p className="text-gray-300 mb-6">
          É uma empresa ou rede de imobiliárias? Associe-se e alcance um próximo
          patamar de eficiência e tecnologia.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition">
            Mais Sobre se Associar
          </button>
          <button className="border border-gray-300 text-gray-300 py-2 px-6 rounded-lg hover:text-white hover:border-white transition">
            Conheça Nossos Produtos
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 flex justify-center">
        <img
          src="/puzzle.png" // Substitua pelo caminho real da imagem
          alt="Puzzle Hand"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default CTAJoinNetimoveis;
