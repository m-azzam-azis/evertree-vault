"use client";

import React from "react";
import { motion } from "framer-motion";

interface Step {
  icon: React.ReactNode;
  label: string;
}

interface UseCaseFlowProps {
  steps: Step[];
  color: string;
}

export function UseCaseFlow({ steps, color }: UseCaseFlowProps) {
  return (
    <div className="w-full h-full flex items-center justify-between relative">
      {/* Connecting line */}

      {/* Steps */}
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center z-10 relative"
        >
          {/* Icon circle */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
            style={{
              backgroundColor: `${color}30`,
              border: `2px solid ${color}`,
            }}
          >
            <div className="text-primary">{step.icon}</div>
          </div>

          {/* Label */}
          <motion.p
            className="text-xs text-center font-medium line-clamp-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.3 }}
            viewport={{ once: true }}
          >
            {step.label}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}
