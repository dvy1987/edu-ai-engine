import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This is the first AI tool that actually understands how educators teach.",
    name: "Sarah L.",
    role: "Career Coach & Creator",
  },
  {
    quote: "I produced a full week of high-quality lessons in under an hour.",
    name: "James O.",
    role: "Coding Instructor",
  },
  {
    quote: "Finally — content automation that respects my expertise.",
    name: "Maria K.",
    role: "Financial Educator",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
            Trusted by Educators
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Early feedback from beta testers who are transforming their content creation.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 lg:p-10 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-12 h-12 text-foreground" />
              </div>

              {/* Quote text */}
              <blockquote className="text-lg lg:text-xl text-foreground font-display leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
