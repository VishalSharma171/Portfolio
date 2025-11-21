import { motion } from "framer-motion";

export default function AnimatedBlob({ className = "", style = {} }) {
  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      style={style}
      initial={{ scale: 1, rotate: 0 }}
      animate={{ scale: [1, 1.06, 1], rotate: [0, 3, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <svg viewBox="0 0 600 600" className="w-full h-full">
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <motion.path
          d="M421,349Q397,448,299,462Q201,476,141,393Q81,310,125,219Q169,128,260,99Q351,70,420,140Q489,210,421,349Z"
          fill="url(#g1)"
          initial={{ pathLength: 0.9 }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "center" }}
          opacity="0.95"
        />
      </svg>
    </motion.div>
  );
}
