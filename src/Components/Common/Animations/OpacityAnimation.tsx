"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const OpacityAnimation: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.span
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.2 },
        visible: { opacity: 1, scale: 1 },
      }}
      // whileInView={"visible"}
      transition={{
        duration: 0.2,
        ease: "linear",
      }}
      initial="hidden"
      animate={controls}
      className={`block ${className}`}
    >
      {children}
    </motion.span>
  );
};

export default OpacityAnimation;
