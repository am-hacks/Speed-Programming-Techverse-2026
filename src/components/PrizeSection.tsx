import TerminalCard from "./TerminalCard";
import { Trophy, Medal, Award } from "lucide-react";

const PrizeSection = () => {
  return (
    <section id="prizes" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <TerminalCard title="Prize Money">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Winner */}
            <div className="relative p-8 border-2 border-primary rounded-sm bg-primary/5 text-center group hover:bg-primary/10 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-background border border-primary rounded-sm">
                <span className="text-primary text-sm font-bold">1ST PLACE</span>
              </div>
              <Trophy className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl md:text-4xl font-bold text-primary text-glow mb-2">
                PKR 30,000
              </h3>
              <p className="text-muted-foreground">Winner Prize</p>
            </div>

            {/* Runner-up */}
            <div className="relative p-8 border-2 border-secondary rounded-sm bg-secondary/5 text-center group hover:bg-secondary/10 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-background border border-secondary rounded-sm">
                <span className="text-secondary text-sm font-bold">2ND PLACE</span>
              </div>
              <Medal className="w-16 h-16 mx-auto text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl md:text-4xl font-bold text-secondary text-glow-cyan mb-2">
                PKR 15,000
              </h3>
              <p className="text-muted-foreground">Runner-up Prize</p>
            </div>
          </div>

          {/* Certificates note */}
          <div className="mt-8 p-4 border border-terminal-yellow/30 rounded-sm bg-terminal-yellow/5 flex items-center gap-3">
            <Award className="w-6 h-6 text-terminal-yellow flex-shrink-0" />
            <p className="text-card-foreground">
              <span className="text-terminal-yellow font-bold">Note:</span> Certificates will be provided to all participants.
            </p>
          </div>
        </TerminalCard>
      </div>
    </section>
  );
};

export default PrizeSection;
