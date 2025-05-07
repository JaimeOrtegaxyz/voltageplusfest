import React from "react";

const Poster: React.FC = () => {
  // Use dynamic path construction to ensure the animation works in all environments
  const getAnimationPath = () => {
    const isProduction = window.location.hostname !== "localhost";
    return isProduction 
      ? `${window.location.origin}/halftone_animation_640x360_6fps_final.html`
      : "/halftone_animation_640x360_6fps_final.html";
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5f5f5]">
      <div className="w-full max-w-[900px] mx-auto bg-[#f5f5f5]">
        {/* Animation container - kept unchanged */}
        <div className="w-full border-b-2 border-black p-4">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}> {/* 16:9 aspect ratio */}
            <iframe 
              src={getAnimationPath()}
              className="absolute top-0 left-0 w-full h-full border-0 object-cover" 
              title="Halftone Animation" 
            />
          </div>
        </div>

        {/* New minimalist design */}
        <div className="p-4 md:p-8">
          {/* VOLTAGE title */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">VOLTAGE</h1>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">CDMX</h2>
          </div>
          
          {/* Horizontal separator */}
          <div className="w-full h-0.5 bg-black my-6"></div>
          
          {/* Electronic music night text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <div>electronic</div>
              <div>music</div>
              <div>night</div>
            </div>
            
            {/* Artists list */}
            <div className="grid grid-cols-2 gap-1">
              <div className="text-2xl md:text-3xl font-bold">MURCOF</div>
              <div className="text-2xl md:text-3xl font-bold">LIVE</div>
              
              <div className="w-full h-0.5 bg-black col-span-2"></div>
              
              <div className="text-2xl md:text-3xl font-bold">FJAAK</div>
              <div className="text-2xl md:text-3xl font-bold">DE</div>
              
              <div className="w-full h-0.5 bg-black col-span-2"></div>
              
              <div className="text-2xl md:text-3xl font-bold">DEBIT</div>
              <div className="text-2xl md:text-3xl font-bold">MX</div>
            </div>
          </div>
          
          {/* Horizontal separator */}
          <div className="w-full h-0.5 bg-black my-6"></div>
          
          {/* Time and Venue */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold">23:00</div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold">FORO NORMANDIE</div>
          </div>
          
          {/* Horizontal separator */}
          <div className="w-full h-0.5 bg-black mb-6"></div>
          
          {/* Date */}
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-center">
            16.08.2025
          </div>
          
          {/* Final separator */}
          <div className="w-full h-0.5 bg-black mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
