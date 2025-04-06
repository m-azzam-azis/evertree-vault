"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface Node {
  id: number;
  x: number;
  y: number;
  radius: number;
  color: string;
  connections: number[];
  vx: number;
  vy: number;
}

export function ImpactVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  // Colors from your theme
  const colors = [
    "rgb(136, 234, 197)", // primary
    "rgb(152, 199, 178)",
    "rgb(126, 201, 173)",
    "rgb(170, 204, 192)",
    "rgb(207, 247, 233)",
    "rgb(184, 241, 214)",
  ];

  // Initialize nodes
  useEffect(() => {
    const initialize = () => {
      const newNodes: Node[] = [];
      const nodeCount = 30;

      for (let i = 0; i < nodeCount; i++) {
        const radius = Math.random() * 6 + 3;
        const node: Node = {
          id: i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          connections: [],
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        };

        // Connect to some random nodes
        const connectionCount = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < connectionCount; j++) {
          const targetIndex = Math.floor(Math.random() * i);
          if (targetIndex < i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
            if (targetIndex >= 0 && newNodes[targetIndex]) {
              newNodes[targetIndex].connections.push(i);
            }
          }
        }

        newNodes.push(node);
      }

      nodesRef.current = newNodes;
    };

    initialize();

    const updateDimensions = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const parent = canvas.parentElement;
        if (parent) {
          const { width, height } = parent.getBoundingClientRect();
          setDimensions({ width, height });
          canvas.width = width;
          canvas.height = height;

          // Reposition nodes when dimensions change
          nodesRef.current.forEach((node) => {
            node.x = Math.random() * width;
            node.y = Math.random() * height;
          });
        }
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      cancelAnimationFrame(animationRef.current);
    };
  }, [colors, dimensions.width, dimensions.height]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = isHovered
        ? "rgba(184, 241, 214, 0.5)"
        : "rgba(184, 241, 214, 0.2)";
      ctx.lineWidth = isHovered ? 1.5 : 0.8;

      nodesRef.current.forEach((node) => {
        node.connections.forEach((targetId) => {
          const target = nodesRef.current[targetId];
          if (target) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodesRef.current.forEach((node) => {
        ctx.fillStyle = isHovered ? node.color : `${node.color}CC`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < node.radius || node.x > canvas.width - node.radius) {
          node.vx *= -1;
        }
        if (node.y < node.radius || node.y > canvas.height - node.radius) {
          node.vy *= -1;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationRef.current);
  }, [isHovered]);

  return (
    <div
      className="relative w-full h-64 rounded-2xl overflow-hidden border border-border bg-background/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: "transparent" }}
      />

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold border border-primary/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isHovered ? 1 : 0.7,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          Knowledge Network
        </motion.div>
      </div>
    </div>
  );
}
