import { motion } from "motion/react";
import { ReactNode, Key } from "react";

export function Reveal({ children, delay = 0, className = "", direction = "up", key }: { children: ReactNode, delay?: number, className?: string, direction?: "up" | "down" | "left" | "right", key?: Key }) {
  const getInitial = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 50, clipPath: "inset(10% 0 0 0)" };
      case "down": return { opacity: 0, y: -50, clipPath: "inset(0 0 10% 0)" };
      case "left": return { opacity: 0, x: 50, clipPath: "inset(0 0 0 10%)" };
      case "right": return { opacity: 0, x: -50, clipPath: "inset(0 10% 0 0)" };
      default: return { opacity: 0, y: 50, clipPath: "inset(10% 0 0 0)" };
    }
  };

  return (
    <motion.div
      key={key}
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0, clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "", key }: { children: ReactNode, className?: string, key?: Key }) {
  return (
    <motion.div
      key={key}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", key }: { children: ReactNode, className?: string, key?: Key }) {
  return (
    <motion.div
      key={key}
      variants={{
        hidden: { opacity: 0, y: 40, clipPath: "inset(10% 0 0 0)" },
        visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0 0)", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TextMask({ children, delay = 0, key }: { children: ReactNode, delay?: number, key?: Key }) {
  return (
    <span key={key} className="overflow-hidden inline-flex align-top">
      <motion.span
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}
