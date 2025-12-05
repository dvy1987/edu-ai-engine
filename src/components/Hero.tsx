import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm border border-accent/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Only 500 Beta Spots Left
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-display text-foreground leading-tight text-balance animate-fade-up-delay-1">
          Revolutionary AI Content Tool for Educators & Influencers
        </h1>

        {/* Supporting text */}
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-up-delay-2">
          Turn your expertise into clear, engaging, multi-step educational content — in minutes.
        </p>

        <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto text-balance animate-fade-up-delay-2">
          Generate explanations, analogies, learning sequences, quizzes, and more. Stay consistent without burnout.
        </p>

        {/* Launch info */}
        <p className="mt-6 text-sm font-medium text-foreground/70 tracking-wide uppercase animate-fade-up-delay-3">
          Launching Q2 2026
        </p>

        {/* Form */}
        <div className="mt-10 animate-fade-up-delay-4">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 text-base"
              />
              <Button 
                type="submit" 
                variant="hero" 
                size="xl"
                disabled={isLoading}
                className="sm:w-auto w-full"
              >
                {isLoading ? "Joining..." : "Join the Waitlist"}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <p className="text-lg text-foreground font-medium">
                You're on the waitlist!
              </p>
              <p className="text-muted-foreground">
                We'll notify you when the beta is ready.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
