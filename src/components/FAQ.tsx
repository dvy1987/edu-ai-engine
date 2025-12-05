import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is this tool designed for?",
    answer: "Educational creators, influencers, coaches, instructors, and subject-matter experts who teach online.",
  },
  {
    question: "How accurate is the content?",
    answer: "The system uses topic-aware reasoning and lets you refine frameworks to ensure clarity, accuracy, and credibility.",
  },
  {
    question: "Can it match my teaching voice and style?",
    answer: "Yes — it builds a personalized teaching profile from examples you provide.",
  },
  {
    question: "What content formats can it generate?",
    answer: "Short videos, scripts, carousels, explanations, outlines, quizzes, threads, lesson sequences, and more.",
  },
  {
    question: "When does the beta launch?",
    answer: "Q2 2026. Limited to 500 creators.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 lg:py-32 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about the platform.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 border-none shadow-soft data-[state=open]:shadow-card transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
