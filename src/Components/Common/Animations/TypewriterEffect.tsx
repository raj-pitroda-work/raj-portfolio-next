import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const Typewriter = ({ text }: { text: string }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (!isDeleting && prev < text.length) return prev + 1;
        if (isDeleting && prev > 0) return prev - 1;

        setTimeout(() => setIsDeleting(!isDeleting), 800);
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isDeleting, text.length]);

  return (
    <motion.span
      style={{
        fontSize: "1.2rem",
        borderRight: `2px solid var(--theme-color)`,
        paddingRight: "4px",
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
    >
      {text.slice(0, visibleChars)}
    </motion.span>
  );
};

export default Typewriter;
