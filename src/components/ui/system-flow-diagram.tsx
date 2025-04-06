"use client";

import React from "react";
import { motion } from "framer-motion";

interface Step {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface SystemFlowDiagramProps {
  steps: Step[];
}

export function SystemFlowDiagram({ steps }: SystemFlowDiagramProps) {
  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center">
      {/* Central hub */}
      <motion.div
        className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-20 absolute"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-primary font-bold text-xs text-center">
          EverTree
          <br />
          Core
        </div>
      </motion.div>

      {/* Connectors to steps */}
      {steps.map((_, index) => {
        // Calculate position in the circle
        const angle = index * ((2 * Math.PI) / steps.length) - Math.PI / 2;
        const y = 50 + 40 * Math.sin(angle);

        return (
          <motion.div
            key={`connector-${index}`}
            className="absolute w-full h-[2px] bg-gradient-to-r from-primary/10 via-primary to-primary/10 origin-left"
            style={{
              top: `${y}%`,
              left: `50%`,
              width: "40%",
              transform: `rotate(${angle * (180 / Math.PI)}deg)`,
              transformOrigin: "0% 50%",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
          />
        );
      })}

      {/* Steps around the circle */}
      {steps.map((step, index) => {
        // Calculate position in the circle
        const angle = index * ((2 * Math.PI) / steps.length) - Math.PI / 2;
        const x = 50 + 40 * Math.cos(angle);
        const y = 50 + 40 * Math.sin(angle);

        return (
          <motion.div
            key={index}
            className="absolute w-48 flex flex-col items-center"
            style={{
              top: `${y}%`,
              left: `${x}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center mb-2">
              {step.icon}
            </div>
            <h4 className="text-sm font-semibold text-center mb-1">
              {step.title}
            </h4>
            <p className="text-xs text-center text-muted-foreground">
              {step.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
