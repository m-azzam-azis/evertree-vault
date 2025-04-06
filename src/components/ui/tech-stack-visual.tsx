"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  category: string;
}

interface TechStack {
  foundation: TechItem[];
  core: TechItem[];
  features: TechItem[];
}

interface TechStackVisualProps {
  techStack: TechStack;
}

export function TechStackVisual({ techStack }: TechStackVisualProps) {
  const colors = {
    Infrastructure: "#88eac5", // primary
    Storage: "#98c7b2",
    Backend: "#7ec9ad",
    Frontend: "#aaccc0",
    API: "#cff7e9",
    AI: "#b8f1d6",
    Privacy: "#88eac5", // primary
    Incentives: "#98c7b2",
    Distribution: "#7ec9ad",
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      {/* Foundation layer */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h4 className="text-sm font-bold text-center mb-2">Foundation Layer</h4>
        <div className="flex justify-between gap-4 w-full mb-8">
          {techStack.foundation.map((tech, index) => (
            <motion.div
              key={index}
              className="flex-1 border border-border rounded-lg p-3 bg-background"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2"
                style={{
                  backgroundColor: `${
                    colors[tech.category as keyof typeof colors]
                  }20`,
                }}
              >
                {tech.icon}
              </div>
              <div className="text-center">
                <p className="text-xs font-bold">{tech.name}</p>
                <p className="text-xs text-muted-foreground">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core layer */}
      <motion.div
        className="w-4/5 mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h4 className="text-sm font-bold text-center mb-2">Core Layer</h4>
        <div className="flex justify-between gap-4 w-full mb-8">
          {techStack.core.map((tech, index) => (
            <motion.div
              key={index}
              className="flex-1 border border-border rounded-lg p-3 bg-background"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2"
                style={{
                  backgroundColor: `${
                    colors[tech.category as keyof typeof colors]
                  }20`,
                }}
              >
                {tech.icon}
              </div>
              <div className="text-center">
                <p className="text-xs font-bold">{tech.name}</p>
                <p className="text-xs text-muted-foreground">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features layer */}
      <motion.div
        className="w-3/5 mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h4 className="text-sm font-bold text-center mb-2">Features Layer</h4>
        <div className="flex justify-between gap-4 w-full">
          {techStack.features.map((tech, index) => (
            <motion.div
              key={index}
              className="flex-1 border border-border rounded-lg p-3 bg-background"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2"
                style={{
                  backgroundColor: `${
                    colors[tech.category as keyof typeof colors]
                  }20`,
                }}
              >
                {tech.icon}
              </div>
              <div className="text-center">
                <p className="text-xs font-bold">{tech.name}</p>
                <p className="text-xs text-muted-foreground">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
