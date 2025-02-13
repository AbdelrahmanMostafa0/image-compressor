"use client";
import { motion } from "motion/react";
const ElementContainer = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(10px)" }}
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.div>
  );
};
export default ElementContainer;
