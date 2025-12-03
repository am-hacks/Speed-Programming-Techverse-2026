const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-background" />
      
      {/* Scanning line effect */}
      <div 
        className="absolute inset-0 animate-scan opacity-30"
        style={{
          background: "linear-gradient(transparent 0%, hsl(120 100% 50% / 0.03) 50%, transparent 100%)",
          backgroundSize: "100% 20px",
        }}
      />
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute top-4 right-4 w-20 h-20 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-primary/20" />
      <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-primary/20" />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, hsl(220 20% 4% / 0.8) 100%)",
        }}
      />
    </div>
  );
};

export default GridBackground;
