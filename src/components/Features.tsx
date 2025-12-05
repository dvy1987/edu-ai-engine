import { BookOpen, Layers, Shield, Repeat } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Pedagogy-Aware Content Generation",
    description: "Break down complex ideas with clear explanations, examples, analogies, and beginner/advanced versions.",
  },
  {
    icon: Layers,
    title: "Multi-Step Learning Sequence Builder",
    description: "Turn one topic into a structured lesson series designed for progressive learning.",
  },
  {
    icon: Shield,
    title: "Accurate, Credible, Expert-Level Outputs",
    description: "AI that maintains your voice, references core principles, and avoids misinformation.",
  },
  {
    icon: Repeat,
    title: "Repurpose Once, Teach Everywhere",
    description: "Transform long-form lessons into carousels, scripts, threads, quizzes, and short educational videos.",
  },
];

const Features = () => {
  return (
    <section className="py-24 lg:py-32 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
            Built for How Educators Teach
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Not another generic AI tool. Purpose-built features for educational content that truly teaches.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 lg:p-10 rounded-2xl bg-card gradient-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl lg:text-2xl font-display text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
