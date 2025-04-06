"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

interface Box {
  id: number;
  x: number;
  y: number;
  z: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  scale: number;
  opacity: number;
}

export function ThreeDimensionalBoxes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate initial boxes
  useEffect(() => {
    const newBoxes: Box[] = [];
    for (let i = 0; i < 15; i++) {
      newBoxes.push({
        id: i,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        z: Math.random() * 100 - 50,
        rotateX: Math.random() * 360,
        rotateY: Math.random() * 360,
        rotateZ: Math.random() * 360,
        scale: 0.5 + Math.random() * 1.5,
        opacity: 0.2 + Math.random() * 0.8,
      });
    }
    setBoxes(newBoxes);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate boxes based on mouse position
  useEffect(() => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) => ({
        ...box,
        x: box.x + mousePosition.x * 2,
        y: box.y - mousePosition.y * 2,
        rotateY: box.rotateY + mousePosition.x * 5,
        rotateX: box.rotateX + mousePosition.y * 5,
      }))
    );
  }, [mousePosition]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] overflow-hidden perspective-1000 bg-gradient-to-b from-transparent to-primary/5 rounded-xl"
    >
      {boxes.map((box) => (
        <motion.div
          key={box.id}
          className="absolute w-16 h-16 transform-style-3d left-1/2 top-1/2 border-2 border-primary/80 bg-primary/10 backdrop-blur-sm"
          animate={{
            x: box.x,
            y: box.y,
            z: box.z,
            rotateX: box.rotateX,
            rotateY: box.rotateY,
            rotateZ: box.rotateZ,
            scale: box.scale,
            opacity: box.opacity,
          }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 10,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-xs text-primary font-mono opacity-50">
            {box.id}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
