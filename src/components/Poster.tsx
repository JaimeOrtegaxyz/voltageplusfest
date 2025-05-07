
import React from "react";

const Poster: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-[900px] mx-auto bg-[#f5f5f5]">
        {/* Pixelated DIALEKTIK logo */}
        <div className="w-full border-b-2 border-black p-4">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}> {/* 16:9 aspect ratio container */}
            <iframe 
              src="/halftone_animation_640x360_6fps_final.html" 
              className="absolute top-0 left-0 w-full h-full border-0 object-cover"
              title="Halftone Animation"
            ></iframe>
          </div>
        </div>

        {/* White space */}
        <div className="w-full h-80 bg-[#f5f5f5]"></div>

        {/* Description text */}
        <div className="p-4 text-sm leading-tight">
          <p className="mb-4">
            VOLTAGE es una noche dedicada a la música electrónica experimental en la Ciudad de México. Reunimos a los mejores artistas locales e internacionales para presentar sonidos innovadores que abarcan techno, ambient, y electrónica experimental. Con visuales impactantes y un sistema de sonido inmersivo, creamos una experiencia única para los verdaderos amantes de la música electrónica.
            <span className="float-right">→</span>
          </p>

          {/* Table */}
          <div className="border-2 border-black">
            <div className="grid grid-cols-3 border-b-2 border-black">
              <div className="p-2 border-r-2 border-black">
                <div className="text-3xl font-bold">VOLTAGE</div>
                <div className="text-3xl font-bold">NIGHT</div>
                <div className="text-3xl font-bold">CDMX</div>
              </div>
              <div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-2 border-r-2 border-black">MURCOF</div>
                  <div className="p-2">LIVE</div>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-2 border-r-2 border-black">FJAAK</div>
                  <div className="p-2">LIVE</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-2 border-r-2 border-black">DEBIT</div>
                  <div className="p-2">DJ SET</div>
                </div>
              </div>
              <div>
                <div className="p-2 border-b-2 border-black">MX</div>
                <div className="p-2 border-b-2 border-black">DE</div>
                <div className="p-2">MX</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 border-b-2 border-black">
              <div className="p-2 text-center">
                ↑ ↑ ↑ ↑ APOYADO POR NAAFI COLECTIVO ↑ ↑ ↑ ↑
              </div>
            </div>
            
            <div className="grid grid-cols-3">
              <div className="p-2 flex border-r-2 border-black">
                <span className="mr-2">
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-xs">LOGO</div>
                </span>
                <span className="mr-2">
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-xs">LOGO</div>
                </span>
                <div className="flex-grow flex items-center">
                  <div className="w-full h-4 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgAgMAAABXJHGjAAAACVBMVEX///8AAAAAAABoyjxuAAAAAnRSTlMA/1uRIrUAAAAbSURBVCiRY2AgCbDBGEoMr3ACTAwj3oD+DgAf5A6APwJ+CAAAAABJRU5ErkJggg==')" }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-2 border-r-2 border-black">
                  <div>DESDE 23:00H</div>
                  <div>HASTA 5:00H</div>
                </div>
                <div className="p-2">
                  <div>FORO</div>
                  <div>NORMANDIE</div>
                </div>
              </div>
              <div className="p-2">
                Insurgentes Sur 701<br />
                06170 Ciudad de México
              </div>
            </div>
          </div>

          {/* Bottom boxes */}
          <div className="grid grid-cols-2 mt-4">
            <div className="border-2 border-black p-2">
              <div className="text-4xl font-bold">VOLTAGE</div>
            </div>
            <div className="border-2 border-black p-2">
              <div className="text-4xl font-bold">16.08.2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
