const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary text-glow">
            <span className="text-2xl">{"<"}</span>
            <span className="text-xl font-bold">TECHVERSE</span>
            <span className="text-2xl">{"/>"}</span>
          </div>
          <p className="text-muted-foreground">
            UMT TECHVERSE • Office of Participant Affairs • Estd 1990
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-terminal-dim">
            <span>Chapter 2</span>
            <span className="text-primary">•</span>
            <span>Speed Programming</span>
            <span className="text-primary">•</span>
            <span>2024</span>
          </div>
          <p className="text-xs text-muted-foreground pt-4">
            <span className="text-secondary">$</span> echo "May the best algorithm win!" <span className="w-2 h-3 bg-primary inline-block animate-pulse ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
