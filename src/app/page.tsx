"use client";

import { useRef } from "react";
import { ScrollControls } from "@/components/ui/scroll-controls";
import Hero from "@/components/sections/Hero";
import ProblemStatement from "@/components/sections/ProblemStatement";
import TargetAudience from "@/components/sections/TargetAudience";
import ProposedSolution from "@/components/sections/ProposedSolution";
import Feasibility from "@/components/sections/Feasibility";
import Impact from "@/components/sections/Impact";
import Novelty from "@/components/sections/Novelty";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Number of sections (excluding hero)
  const numSections = 6;

  return (
    <div>
      {/* Hero Section - Outside the parallax container */}
      <Hero />

      <div ref={containerRef}>
        <ScrollControls
          containerRef={containerRef as React.RefObject<HTMLDivElement>}
          totalSections={numSections}
        >
          {/* Problem Section */}
          <section className=" w-full min-h-screen flex items-center overflow-hidden bg-background">
            <div className="container mx-auto px-6">
              <ProblemStatement />
            </div>
          </section>

          {/* Target Audience Section */}
          <section className=" w-full min-h-screen flex items-center overflow-hidden bg-background">
            <div className="container mx-auto px-6">
              <TargetAudience />
            </div>
          </section>

          {/* Solution Section */}
          <section className=" w-full min-h-screen flex items-center overflow-hidden bg-background">
            <div className="container mx-auto px-6">
              <ProposedSolution />
            </div>
          </section>

          {/* Feasibility Section */}
          <section className=" w-full min-h-screen flex items-center overflow-hidden bg-background">
            <div className="container mx-auto px-6">
              <Feasibility />
            </div>
          </section>

          {/* Impact Section */}
          <section className=" w-full min-h-screen flex items-center overflow-hidden bg-background">
            <div className="container mx-auto px-6">
              <Impact />
            </div>
          </section>

          {/* Novelty Section */}
          <section className=" w-full min-h-screen flex items-center overflow-hidden bg-background">
            <div className="container mx-auto px-6">
              <Novelty />
            </div>
          </section>
        </ScrollControls>
      </div>
    </div>
  );
}
