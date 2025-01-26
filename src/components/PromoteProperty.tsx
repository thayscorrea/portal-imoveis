"use client";

import React from "react";

const PromoteProperty = () => {
  return (
    <div className="mx-40 mt-16 mb-16 flex flex-col md:flex-row bg-white border rounded-2xl">

      {/* Left Section: Image */}
      <div className="w-3/5 h-full">
        <img
          src="/casal.png"
          alt="Anuncie grátis"
          className="rounded-2xl"
        />
      </div>

      <div className="w-2/5 items-center">
        {/* Right Section: Content */}
        <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left">
          <p className="text-orange-500 font-bold mb-2 mt-6">Quer Vender ou Alugar?</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mr-12 pb-8">
            Anuncie grátis para mais de 100 mil pessoas todos os dias.
          </h2>
          <button className="mt-8 border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-2 px-4 rounded mb-6">
            Anunciar Imóvel
          </button>
          <p className="font-bold hover:text-purple-600">
            <a href="#saiba-mais">Saiba quanto vale seu imóvel →</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoteProperty;