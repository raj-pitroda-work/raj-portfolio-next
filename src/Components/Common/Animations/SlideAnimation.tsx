"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const SlideAnimation: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  translate?: "left" | "right" | "bottom";
  isAllInView?: boolean;
}> = ({ children, delay, className, translate, isAllInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: isAllInView ? "all" : "some" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return translate === "bottom" ? (
    <motion.span
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateY: translate === "bottom" ? 50 : -50 },
        visible: { opacity: 1, translateY: 0 },
      }}
      transition={{
        type: "tween",
        duration: 0.2,
        delay: delay,
        ease: "linear",
      }}
      initial="hidden"
      animate={controls}
      className={`block ${className}`}
    >
      {children}
    </motion.span>
  ) : (
    <motion.span
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateX: translate === "right" ? -200 : 200 },
        visible: { opacity: 1, translateX: 0 },
      }}
      // whileInView={"visible"}
      transition={{
        type: "tween",
        duration: 0.4,
        delay: delay,
      }}
      initial="hidden"
      animate={controls}
      className={`block ${className}`}
    >
      {children}
    </motion.span>
  );
};

export default SlideAnimation;
