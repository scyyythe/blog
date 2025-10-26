import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const faqs = [
  {
    question: "What is Thread?",
    answer:
      "Thread is a modern blogging platform that allows writers and creators to share their stories, connect with readers, and build meaningful communities around their content.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes, Thread is free to use with basic features. We also offer premium plans for advanced features and professional bloggers.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply click the 'Sign Up' button, create your account, and you can start writing and sharing your posts immediately.",
  },
  {
    question: "Can I import my existing blog?",
    answer:
      "Yes! We provide tools to easily import your content from other platforms like WordPress, Medium, or Substack.",
  },
  {
    question: "How do I monetize my content?",
    answer:
      "Thread offers various monetization options including subscriptions, tip jars, and sponsored post opportunities for eligible creators.",
  },
  {
    question: "What makes Thread different?",
    answer:
      "Thread combines modern design, powerful features, and a supportive community to create the best possible platform for writers and readers alike.",
  },
];

export const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Find answers to common questions about our platform
        </p>
        <div className="max-w-md mx-auto">
          <Input
            type="search"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-8"
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
