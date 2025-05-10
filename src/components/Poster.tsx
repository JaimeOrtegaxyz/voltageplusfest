import React, { useState, useEffect } from "react";
import { Separator } from "./ui/separator";

const Poster: React.FC = () => {
  const [bgImage, setBgImage] = useState<string>("");

  useEffect(() => {
    // Generate random number between 1 and 4
    const randomNum = Math.floor(Math.random() * 4) + 1;
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
      className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-[#f5f5f5] bg-cover bg-center bg-no-repeat overflow-hidden lg:overflow-hidden overflow-y-auto"
      style={{
        backgroundImage: bgImage ? `url('${bgImage}')` : undefined
      }}
    >
      {/* Centered and sticky poster card */}
      <div className="w-full max-w-[900px] mx-auto bg-[#f5f5f5] border-2 border-black flex-shrink-0 lg:scale-[0.67]">
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
          <div className="px-4 py-4 md:px-8 md:py-8 lg:px-12 lg:py-8 mb-0">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl lg:text-[10rem] font-bold tracking-tight leading-none w-full">VOLTAGE+</h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:text-[7rem] font-bold tracking-tight leading-none w-full">CDMX</h2>
          </div>
          
          {/* Rest of content with normal padding */}
          <div className="px-4 pb-4 md:px-8 md:pb-8 lg:px-12 lg:pb-8">
            <Separator className="h-[2px] bg-black mb-6" />

            {/* Electronic music night */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2 md:order-1 order-2">
                {/* Artist lineup */}
                <div className="flex justify-between">
                  <span className="font-bold text-base sm:text-lg md:text-xl">MURCOF (LIVE)</span>
                  <span className="text-base sm:text-lg md:text-xl">DE</span>
                </div>
                <Separator className="h-[1px] bg-black" />
                <div className="flex justify-between">
                  <span className="font-bold text-base sm:text-lg md:text-xl">FJAAK</span>
                  <span className="text-base sm:text-lg md:text-xl">FR</span>
                </div>
                <Separator className="h-[1px] bg-black" />
                <div className="flex justify-between">
                  <span className="font-bold text-base sm:text-lg md:text-xl">DEBIT</span>
                  <span className="text-base sm:text-lg md:text-xl">MX</span>
                </div>
              </div>
              <div className="md:order-2 order-1 text-right space-y-0">
                {['BOLETOS', 'PLAYLIST', 'CÓMO LLEGAR'].map((label, idx) => (
                  <div
                    key={label}
                    className="group inline-flex items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold transition-all duration-500 cursor-pointer px-2 rounded hover:bg-black"
                  >
                    <span
                      className="transition-colors duration-500 group-hover:text-[#f5f5f5] text-black"
                    >
                      {label}
                    </span>
                    <span className="relative ml-2 h-[0.9em] w-[0.9em] inline-block">
                      <img
                        src="/left_arrow_black.svg"
                        alt="arrow"
                        className="absolute inset-0 h-full w-full transition-opacity duration-500 opacity-100 group-hover:opacity-0 pointer-events-none"
                      />
                      <img
                        src="/left_arrow_f5f5f5.svg"
                        alt="arrow hover"
                        className="absolute inset-0 h-full w-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="h-[2px] bg-black mb-6" />

            {/* Time and venue */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-lg sm:text-xl md:text-3xl font-bold">16.08.2025 - 23:00</div>
              <div className="text-base sm:text-xl md:text-3xl font-bold">INSURGENTES SUR 701</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
