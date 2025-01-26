"use client";

import React from "react";

const CozySpotSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg mt-24 mb-24">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
          <img
            src="/image.png"
            alt="Todo mundo merece seu cantinho do aconchego"
          />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 mt-8 ml-12 md:mt-0 md:ml-24">
        <h3 className="text-lg font-semibold text-gray-500 p-6">
          Aqui vai uma frase de efeito
        </h3>
        <ul>
          {Array(3)
            .fill("")
            .map((_, index) => (
              <li key={index} className="flex items-start">
                <span
                  className="w-5 h-5 mt-1 rounded-full bg-[lightgrey] flex-shrink-0 mr-4"
                  aria-hidden="true"
                ></span>
                <div>
                  <p className="text-gray-600 font-semibold mb-4 text-sm">
                    Motivo para negociar com a Netimóveis
                  </p>
                  <p className="text-gray-500 text-sm mb-8">
                    Aqui é desenvolvido esse motivo para negociar com a
                    Netimóveis. Ipsum voluptatem quia voluptas sit aspernatur
                    aut odit aut fugit.
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CozySpotSection;
