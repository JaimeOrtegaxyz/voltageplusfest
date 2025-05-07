import React from "react";
import { Separator } from "./ui/separator";

const Poster: React.FC = () => {
  /*
   * The animation HTML sits in /public so it is copied verbatim to the
   * build output and is always available at the site root.  We can therefore
   * reference it with an absolute URL that starts with "/"
   */
  const iframeSrc = "/halftone_animation_640x360_6fps_final.html";
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-[900px] mx-auto bg-[#f5f5f5]">
        {/* Pixelated DIALEKTIK logo */}
        <div className="w-full border-b-2 border-black p-4">
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
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tight leading-none w-full">VOLTAGE</h1>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold tracking-tight leading-none w-full">CDMX</h2>
          </div>
          
          {/* Rest of content with normal padding */}
          <div className="px-8 md:px-12 pb-8">
            <Separator className="h-[2px] bg-black mb-6" />

            {/* Electronic music night */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold">ELECTRONIC</h3>
                <h3 className="text-3xl md:text-4xl font-bold">MUSIC</h3>
                <h3 className="text-3xl md:text-4xl font-bold">NIGHT</h3>
              </div>
              
              <div className="space-y-2">
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
            </div>

            <Separator className="h-[2px] bg-black mb-6" />

            {/* Time and venue */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-3xl md:text-4xl font-bold">23:00</div>
              <div className="text-xl md:text-2xl font-bold">FORO NORMANDIE</div>
            </div>

            <Separator className="h-[2px] bg-black mb-6" />

            {/* Date */}
            <div className="flex justify-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold">16.08.2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
