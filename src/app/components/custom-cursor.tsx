import { motion } from "motion/react";

interface CustomCursorProps {
  x: number;
  y: number;
  isVisible: boolean;
}

export function CustomCursor({ x, y, isVisible }: CustomCursorProps) {
  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: 0,
        top: 0,
        x: x - 38.5, // Half of width to center
        y: y - 38.5, // Half of height to center
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="bg-[#ea1528] overflow-clip relative rounded-full size-[77px]">
        <p className="absolute font-['Inter',sans-serif] font-bold leading-[22.1px] left-[12px] not-italic text-[16px] text-white top-[44px] whitespace-nowrap">
          See more
        </p>
        <div className="absolute left-[51px] size-[32px] top-[12px]">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 32 32"
          >
            <g clipPath="url(#clip0_332_41)">
              <path
                d="M8 24L24 8"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M11 8H24V21"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
            <defs>
              <clipPath id="clip0_332_41">
                <rect fill="white" height="32" width="32" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
