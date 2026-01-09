import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const eventDate = new Date("2026-01-09T17:40:00");
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-5 ">
      <div className="absolute top-1/4 left-10 text-primary/10 text-6xl font-bold select-none hidden lg:block">
        {"</>"}
      </div>
      <div className="absolute bottom-1/4 right-10 text-secondary/10 text-6xl font-bold select-none hidden lg:block">
        {"{ }"}
      </div>

      {/* Main content */}
      <div className="text-center space-y-8 max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-sm bg-card/50 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs  text-muted-foreground">
            UMT TECHVERSE 
          </span>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-flicker">
            <span className="text-primary text-glow">SPEED</span>
            <br />
            <span className="text-secondary text-glow-cyan">PROGRAMMING</span>
          </h1>
          <p className="text-xl md:text-2xl text-card-foreground">
            <span className="text-muted-foreground">Techverse</span>{" "}
            <span className="text-primary">Chapter 2</span>
          </p>
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground text-sm md:text-xl max-w-2xl mx-auto">
          <span className="text-secondary">{"<"}</span> Test your coding skills
          in a 5-hour intense battle of algorithms and problem-solving{" "}
          <span className="text-secondary">{">"}</span>
        </p>

        {/* Countdown */}
        <div className="pt-2">
          <p className="text-muted-foreground text-sm mb-4 uppercase tracking-widest">
            Competition Will  <b>Ends In</b>
          </p>
          <CountdownTimer targetDate={eventDate} />
        </div>

        {/* CTA */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
          <a
            href="#registration"
            className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-all duration-300 box-glow hover:scale-105"
          >
            {">> REGISTER_NOW <<"}
          </a>
          <a
            href="#overview"
            className="px-8 py-4 border border-secondary text-secondary font-bold rounded-sm hover:bg-secondary/10 transition-all duration-300"
          >
            {"[ VIEW_RULES ]"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
