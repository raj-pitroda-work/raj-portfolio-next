"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const SlideScaleAnimation: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        controls.start("visible");
      }, 100);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 100, scale: 0 },
        visible: { opacity: 1, x: 0, scale: 1 },
      }}
      // whileInView={"visible"}
      transition={{
        type: "tween",
        duration: 0.4,
        delay: delay,
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideScaleAnimation;
