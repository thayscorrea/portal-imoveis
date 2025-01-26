"use client";

import React from "react";

import useDeviceSize from '../hooks/useDeviceSize'

const CTA = () => {
  const [width, height] = useDeviceSize();

  return (
    <div
        className="md:mx-40 mt-16 mb-16 rounded-lg bg-cover md:bg-center grid md:flex justify-end"
        style={{       
            backgroundImage: `url(/cta.png)`, // Verificação robusta para state.Image
        }}>
          {width >= 768 &&
        <button className="mt-6 mr-10 bg-white text-orange-500 hover:bg-orange-500 hover:text-white py-3 px-4 rounded mb-6">
            Ver Imóveis em Portugal
        </button>}
    </div>
  );
};

export default CTA;