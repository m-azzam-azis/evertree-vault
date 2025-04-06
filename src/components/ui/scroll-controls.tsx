"use client";

import React, { useState, RefObject } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ScrollControlsProps {
  children: React.ReactNode;
  containerRef: RefObject<HTMLDivElement> | null;
  totalSections: number;
}

export function ScrollControls({
  children,
  containerRef,
  totalSections,
}: ScrollControlsProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll({
    container: containerRef as RefObject<HTMLDivElement>,
  });

  // Update current section based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionHeight = 1 / totalSections;
    const newSection = Math.min(
      totalSections - 1,
      Math.floor(latest / sectionHeight)
    );

    if (newSection !== currentSection) {
      setCurrentSection(newSection);
    }
  });

  // Handle scrolling to section
  const scrollToSection = (index: number) => {
    if (!containerRef || !containerRef.current) return;

    const targetY = (index * containerRef.current.scrollHeight) / totalSections;
    containerRef.current.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  // Helper function to get section names
  function getSectionName(index: number): string {
    const sections = [
      "Problem",
      "Audience",
      "Solution",
      "Feasibility",
      "Impact",
      "Novelty",
    ];
    return sections[index] || `Section ${index + 1}`;
  }

  // Generate CSS variables for dynamic colors
  const indicators = Array.from({ length: totalSections }).map((_, i) => {
    const isActive = i === currentSection;
    const isPassed = i < currentSection;

    // Background color with opacity
    const bgColor = isActive
      ? `rgb(136, 234, 197)33` // 33 is ~20% opacity in hex
      : isPassed
      ? `rgb(136, 234, 197)1A` // 1A is ~10% opacity in hex
      : "transparent";

    // Border color with opacity
    const borderColor = isActive
      ? "rgb(136, 234, 197)"
      : isPassed
      ? `rgb(136, 234, 197)CC` // CC is ~80% opacity in hex
      : "rgba(238, 234, 226, 0.5)";

    // For dark mode compatibility
    const styles = {
      backgroundColor: bgColor,
      borderColor: borderColor,
    };

    return {
      index: i,
      name: getSectionName(i),
      isActive,
      isPassed,
      styles,
    };
  });

  return (
    <>
      {children}

      <div className="-right-1 top-1/2 transform -translate-y-1/2 z-50 lg:flex flex-col gap-3 px-2 ml-4 hidden lg:fixed">
        {indicators.map((indicator) => (
          <div
            key={indicator.index}
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => scrollToSection(indicator.index)}
          >
            <div
              className={cn(
                "flex items-center justify-center size-4 rounded-lg border transition-all duration-300",
                indicator.isActive ? "scale-125" : "scale-100"
              )}
              style={indicator.styles}
            >
              <span> </span>
            </div>

            <Link
              href={`#${indicator.name.toLowerCase()}`}
              className={cn(
                "text-sm bg-background px-3 py-1 rounded-md shadow-sm border opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              )}
              style={{
                borderColor: indicator.isActive
                  ? "rgb(136, 234, 197)"
                  : indicator.isPassed
                  ? `${"rgb(136, 234, 197)"}80`
                  : "rgba(238, 234, 226, 0.5)",
              }}
            >
              {indicator.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
