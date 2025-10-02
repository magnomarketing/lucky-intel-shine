import { motion } from "framer-motion";

export const DynamicHeroBackground = () => {
  // Generar posiciones para 40 nodos
  const nodes = [
    { x: 10, y: 15, delay: 0, duration: 3 },
    { x: 25, y: 20, delay: 0.3, duration: 3.5 },
    { x: 40, y: 12, delay: 0.6, duration: 3.2 },
    { x: 55, y: 18, delay: 0.9, duration: 3.8 },
    { x: 70, y: 25, delay: 1.2, duration: 3.3 },
    { x: 85, y: 15, delay: 1.5, duration: 3.6 },
    { x: 15, y: 35, delay: 1.8, duration: 3.4 },
    { x: 30, y: 40, delay: 2.1, duration: 3.7 },
    { x: 45, y: 32, delay: 2.4, duration: 3.1 },
    { x: 60, y: 38, delay: 2.7, duration: 3.9 },
    { x: 75, y: 42, delay: 3.0, duration: 3.5 },
    { x: 90, y: 35, delay: 0.2, duration: 3.2 },
    { x: 8, y: 55, delay: 0.5, duration: 3.6 },
    { x: 22, y: 60, delay: 0.8, duration: 3.3 },
    { x: 38, y: 52, delay: 1.1, duration: 3.8 },
    { x: 52, y: 58, delay: 1.4, duration: 3.4 },
    { x: 68, y: 62, delay: 1.7, duration: 3.7 },
    { x: 82, y: 55, delay: 2.0, duration: 3.1 },
    { x: 12, y: 75, delay: 2.3, duration: 3.9 },
    { x: 28, y: 80, delay: 2.6, duration: 3.5 },
    { x: 42, y: 72, delay: 2.9, duration: 3.2 },
    { x: 58, y: 78, delay: 0.4, duration: 3.6 },
    { x: 72, y: 82, delay: 0.7, duration: 3.3 },
    { x: 88, y: 75, delay: 1.0, duration: 3.8 },
    { x: 5, y: 45, delay: 1.3, duration: 3.4 },
    { x: 18, y: 28, delay: 1.6, duration: 3.7 },
    { x: 35, y: 65, delay: 1.9, duration: 3.1 },
    { x: 48, y: 48, delay: 2.2, duration: 3.9 },
    { x: 65, y: 50, delay: 2.5, duration: 3.5 },
    { x: 78, y: 68, delay: 2.8, duration: 3.2 },
    { x: 92, y: 58, delay: 0.1, duration: 3.6 },
    { x: 20, y: 50, delay: 0.6, duration: 3.3 },
    { x: 50, y: 25, delay: 0.9, duration: 3.8 },
    { x: 80, y: 48, delay: 1.2, duration: 3.4 },
    { x: 32, y: 85, delay: 1.5, duration: 3.7 },
    { x: 62, y: 22, delay: 1.8, duration: 3.1 },
    { x: 95, y: 42, delay: 2.1, duration: 3.9 },
    { x: 3, y: 30, delay: 2.4, duration: 3.5 },
    { x: 50, y: 70, delay: 2.7, duration: 3.2 },
    { x: 75, y: 15, delay: 3.0, duration: 3.6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50" />

      {/* Animated Connection Lines - Más líneas para conectar nodos */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="10%" y1="15%" x2="40%" y2="12%"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-primary/15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="25%" y1="20%" x2="55%" y2="18%"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-primary/15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="55%" y1="18%" x2="85%" y2="15%"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-primary/15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="15%" y1="35%" x2="45%" y2="32%"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-secondary/15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1}}
          transition={{ duration: 3.8, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="45%" y1="32%" x2="75%" y2="42%"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-secondary/15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4.2, delay: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="22%" y1="60%" x2="52%" y2="58%"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-accent/15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1}}
          transition={{ duration: 3.3, delay: 2.5, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>

      {/* Animated Nodes/Dots - 40 nodos */}
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: node.duration,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute w-2 h-2 rounded-full ${
            index % 3 === 0 
              ? 'bg-primary shadow-md shadow-primary/30' 
              : index % 3 === 1 
              ? 'bg-secondary shadow-md shadow-secondary/30' 
              : 'bg-accent shadow-md shadow-accent/30'
          }`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        />
      ))}

      {/* Ambient Glow Effects */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />
    </div>
  );
};

