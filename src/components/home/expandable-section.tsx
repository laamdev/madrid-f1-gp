"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { cn } from "@/lib/utils";

interface ExpandableSectionProps {
  title: string;
  description: string;
  className?: string;
  imageUrl?: string;
}

export function ExpandableSection({
  title,
  description,
  className,
  imageUrl = "/path/to/default-image.jpg",
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden cursor-pointer",
        "w-full rounded-lg",
        className
      )}
      onClick={() => setIsExpanded(!isExpanded)}
      layout
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>

      {/* Content */}
      <motion.div className="relative z-10 p-6" layout>
        <motion.h2
          className="text-2xl font-bold uppercase text-white mb-2"
          layout
        >
          {title}
        </motion.h2>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-white/90"
            >
              <p>{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
