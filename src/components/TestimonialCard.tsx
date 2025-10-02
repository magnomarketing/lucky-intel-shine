import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  rating: number;
  testimonial: string;
}

export const TestimonialCard = ({ name, company, rating, testimonial }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-xl bg-card border"
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial}"</p>
      <div>
        <div className="font-semibold text-foreground">{name}</div>
        <div className="text-sm text-muted-foreground">{company}</div>
      </div>
    </motion.div>
  );
};

