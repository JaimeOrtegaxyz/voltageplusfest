import React, { useState, useEffect } from "react";
import { Separator } from "./ui/separator";

const Poster: React.FC = () => {
  const [bgImage, setBgImage] = useState<string>("");

  useEffect(() => {
    // Generate random number between 1 and 5
    const randomNum = Math.floor(Math.random() * 5) + 1;
    setBgImage(`/BG/${randomNum}.webp`);
  }, []);

  /*
   * The animation HTML sits in /public so it is copied verbatim to the
   * build output and is always available at the site root.  We can therefore
   * reference it with an absolute URL that starts with "/"
   */
  const iframeSrc = "/halftone_animation_640x360_6fps_final.html";
  
  return (
    <div
      className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-[#f5f5f5] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: bgImage ? `url('${bgImage}')` : undefined
      }}
    >
      {/* Centered and sticky poster card */}
      <div className="w-full max-w-[900px] mx-auto bg-[#f5f5f5] border-2 border-black transform lg:scale-[0.67] flex-shrink-0">
        {/* Pixelated DIALEKTIK logo */}
        <div className="w-full border-b-2 border-black p-4 bg-black">
          <div className="relative w-full overflow-hidden" style={{
            paddingBottom: "56.25%",
            background: "#000" /* Match the animation background color */
          }}> {/* 16:9 aspect ratio container */}
            <iframe 
              src={iframeSrc} 
              className="absolute top-0 left-0 w-full h-full border-0" 
              style={{
                transform: "scale(1)", /* Slightly scale up to eliminate black edges */
                transformOrigin: "center"
              }}
              title="Halftone Animation" 
            />
          </div>
        </div>

        {/* New minimalist design content */}
        <div>
          {/* VOLTAGE CDMX Header - align padding with content below */}
          <div className="px-8 md:px-12 py-8 mb-0">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tight leading-none w-full">VOLTAGE+</h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-tight leading-none w-full">CDMX</h2>
          </div>
          
          {/* Rest of content with normal padding */}
          <div className="px-8 md:px-12 pb-8">
            <Separator className="h-[2px] bg-black mb-6" />

            {/* Electronic music night */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2 md:order-1 order-2">
                {/* Artist lineup */}
                <div className="flex justify-between">
                  <span className="font-bold text-lg md:text-xl">MURCOF</span>
                  <span className="text-lg md:text-xl">LIVE</span>
                </div>
                <Separator className="h-[1px] bg-black" />
                <div className="flex justify-between">
                  <span className="font-bold text-lg md:text-xl">FJAAK</span>
                  <span className="text-lg md:text-xl">DE</span>
                </div>
                <Separator className="h-[1px] bg-black" />
                <div className="flex justify-between">
                  <span className="font-bold text-lg md:text-xl">DEBIT</span>
                  <span className="text-lg md:text-xl">MX</span>
                </div>
              </div>
              <div className="md:order-2 order-1 text-right">
                <h3 className="text-3xl md:text-4xl font-bold transition-all duration-500 cursor-pointer hover:text-white hover:bg-black inline-block px-2 rounded">BOLETOS ⬅</h3>
                <h3 className="text-3xl md:text-4xl font-bold transition-all duration-500 cursor-pointer hover:text-white hover:bg-black inline-block px-2 rounded">PLAYLIST ⬅</h3>
                <h3 className="text-3xl md:text-4xl font-bold transition-all duration-500 cursor-pointer hover:text-white hover:bg-black inline-block px-2 rounded">CÓMO LLEGAR ⬅</h3>
              </div>
            </div>

            <Separator className="h-[2px] bg-black mb-6" />

            {/* Time and venue */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-3xl md:text-3xl font-bold">16.08.2025 - 23:00</div>
              <div className="text-xl md:text-3xl font-bold">INSURGENTES SUR 701</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
