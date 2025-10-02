import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProblemCardProps {
  icon: LucideIcon;
  text: string;
  delay: number;
}

export const ProblemCard = ({ icon: Icon, text, delay }: ProblemCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex items-center gap-4 p-6 rounded-xl bg-card border border-destructive/20"
    >
      <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-destructive" />
      </div>
      <p className="text-foreground font-medium">{text}</p>
    </motion.div>
  );
};


