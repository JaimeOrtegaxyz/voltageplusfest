import React from "react";
const Poster: React.FC = () => {
  return <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-[900px] mx-auto bg-[#f5f5f5]">
        {/* Pixelated DIALEKTIK logo */}
        <div className="w-full border-b-2 border-black p-4 px-[25px] py-[25px]">
          <iframe src="/halftone_animation_640x360_6fps_final.html" className="w-full h-64 border-0" title="Halftone Animation"></iframe>
        </div>

        {/* White space */}
        <div className="w-full h-80 bg-[#f5f5f5]"></div>

        {/* Description text */}
        <div className="p-4 text-sm leading-tight">
          <p className="mb-4">
            Furthur Electronix is a label that will put out good quality electronic music in the forms of techno, breakbeat, IDM, electro and acid. With the help of Majkel from Stockholm on the graphics, we want to create excellent design along with the sound. We will press enough for the collectors and DJs to play these records worldwide.
            <span className="float-right">→</span>
          </p>

          {/* Table */}
          <div className="border-2 border-black">
            <div className="grid grid-cols-3 border-b-2 border-black">
              <div className="p-2 border-r-2 border-black">
                <div className="text-3xl font-bold">FURTHUR</div>
                <div className="text-3xl font-bold">ELECTRONIX</div>
                <div className="text-3xl font-bold">SHOWCASE</div>
              </div>
              <div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-2 border-r-2 border-black">JUNQ</div>
                  <div className="p-2">LIVE</div>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-2 border-r-2 border-black">CIGNOL</div>
                  <div className="p-2">LIVE</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-2 border-r-2 border-black">ANIL</div>
                  <div className="p-2">DJ SET</div>
                </div>
              </div>
              <div>
                <div className="p-2 border-b-2 border-black">UK</div>
                <div className="p-2 border-b-2 border-black">IRL</div>
                <div className="p-2">UK</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 border-b-2 border-black">
              <div className="p-2 text-center">
                ↑ ↑ ↑ ↑ SUPPORTED BY SHEETONE ↑ ↑ ↑ ↑
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
                  <div className="w-full h-4 bg-contain bg-no-repeat bg-center" style={{
                  backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgAgMAAABXJHGjAAAACVBMVEX///8AAAAAAABoyjxuAAAAAnRSTlMA/1uRIrUAAAAbSURBVCiRY2AgCbDBGEoMr3ACTAwj3oD+DgAf5A6APwJ+CAAAAABJRU5ErkJggg==')"
                }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-2 border-r-2 border-black">
                  <div>FROM 0:00H</div>
                  <div>TO 6:00H</div>
                </div>
                <div className="p-2">
                  <div>SALA</div>
                  <div>SIROCO</div>
                </div>
              </div>
              <div className="p-2">
                Calle San Dimas, 3<br />
                28015 Madrid, SP.
              </div>
            </div>
          </div>

          {/* Bottom boxes */}
          <div className="grid grid-cols-2 mt-4">
            <div className="border-2 border-black p-2">
              <div className="text-4xl font-bold">DIALEKTIK</div>
            </div>
            <div className="border-2 border-black p-2">
              <div className="text-4xl font-bold">23.03.2019</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Poster;