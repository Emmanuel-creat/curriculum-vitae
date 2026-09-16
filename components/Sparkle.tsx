"use client";

import { motion } from "framer-motion";

type Props = {
  size?: number;
  className?: string;
  spin?: boolean;
};

export default function Sparkle({ size = 240, className = "", spin = true }: Props) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`sparkle ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <defs>
        <linearGradient id="chromeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4f6fa" />
          <stop offset="30%" stopColor="#a4adbf" />
          <stop offset="55%" stopColor="#f4f6fa" />
          <stop offset="80%" stopColor="#5b6377" />
          <stop offset="100%" stopColor="#c9d0dc" />
        </linearGradient>
        <radialGradient id="chromeCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#e5e9f0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#5b6377" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      <motion.g
        animate={spin ? { rotate: 360 } : undefined}
        transition={
          spin ? { duration: 40, repeat: Infinity, ease: "linear" } : undefined
        }
        style={{ transformOrigin: "100px 100px" }}
      >
        <path
          d="M100 10 C105 60 140 95 190 100 C140 105 105 140 100 190 C95 140 60 105 10 100 C60 95 95 60 100 10 Z"
          fill="url(#chromeGrad)"
          opacity="0.95"
        />
        <path
          d="M100 40 C103 75 125 97 160 100 C125 103 103 125 100 160 C97 125 75 103 40 100 C75 97 97 75 100 40 Z"
          fill="url(#chromeCore)"
        />
      </motion.g>
    </motion.svg>
  );
}
