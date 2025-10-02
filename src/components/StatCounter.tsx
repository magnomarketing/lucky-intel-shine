import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
}

export const StatCounter = ({ end, label, suffix = "" }: StatCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary mb-2">
        0{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">{label}</div>
    </motion.div>
  );
};

