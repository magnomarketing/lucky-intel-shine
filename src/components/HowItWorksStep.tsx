import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface HowItWorksStepProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  isLast?: boolean;
}

export const HowItWorksStep = ({ 
  step, 
  icon: Icon, 
  title, 
  description, 
  delay, 
  isLast = false 
}: HowItWorksStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative flex gap-6"
    >
      {!isLast && (
        <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-primary/20" />
      )}
      <div className="relative z-10 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="flex-1 pt-2">
        <div className="text-sm font-semibold text-primary mb-2">Paso {step}</div>
        <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

