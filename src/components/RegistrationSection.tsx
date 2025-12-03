import TerminalCard from "./TerminalCard";
import { CreditCard, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";

const RegistrationSection = () => {
  return (
    <section id="registration" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <TerminalCard title="Registration">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Registration fee */}
            <div className="p-6 border border-border rounded-sm bg-muted/10">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-secondary" />
                <h3 className="text-lg font-bold text-primary">
                  Registration Fee
                </h3>
              </div>
              <div className="text-center py-8">
                <p className="text-5xl md:text-6xl font-bold text-primary text-glow mb-2">
                  2,500
                </p>
                <p className="text-muted-foreground text-lg">PKR per team</p>
              </div>
            </div>

            {/* Contact */}
            <div className="p-6 border border-border rounded-sm bg-muted/10">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-secondary" />
                <h3 className="text-lg font-bold text-primary">
                  For Queries Contact
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 border border-border rounded-sm hover:border-primary/50 transition-colors">
                  <User className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-primary font-medium">Ali Raza</p>
                    <a
                      href="tel:+923130669834"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +92 313 0669834
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border border-border rounded-sm hover:border-primary/50 transition-colors">
                  <User className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-primary font-medium">Ali Masood</p>
                    <a
                      href="tel:+923254180227"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +92 325 4180227
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Register CTA */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              onClick={() => window.open("https://umttechverse.com", "_blank")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-all duration-300 box-glow hover:scale-105"
            >
              <span>{"{"}</span>
              <span>REGISTER YOUR TEAM</span>
              <span>{"}"}</span>
            </Link>
          </div>
        </TerminalCard>
      </div>
    </section>
  );
};

export default RegistrationSection;
