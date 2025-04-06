"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Novelty() {
  const noveltyPoints = [
    {
      title: "Native Canister Memory",
      description:
        "Utilizing ICP's orthogonal persistence for truly immutable, distributed storage",
      year: "2023",
    },
    {
      title: "Autonomous Knowledge Curation",
      description:
        "Self-updating AI systems that grow and refine information without human bias",
      year: "2024",
    },
    {
      title: "Decentralized Reputation System",
      description:
        "Transparent verification through distributed consensus, not central authority",
      year: "2024",
    },
    {
      title: "Composable Agent Networks",
      description:
        "Multiple specialized AI agents working in concert to validate and structure information",
      year: "2025",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="novelty" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 ">What Makes Us Unique</h2>

        <Card className="rounded-2xl shadow-soft-md hover:shadow-soft-lg transition-shadow duration-300">
          <CardContent className="p-8">
            <p className="text-lg mb-8">
              Evertree Vault represents a quantum leap forward by combining
              Internet Computer Protocol&apos;s unique capabilities with
              emerging AI technologies in ways never before possible:
            </p>

            <motion.div
              className="relative"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Timeline line */}
              <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-primary/30" />

              {/* Timeline items */}
              {noveltyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex mb-12 last:mb-0 relative"
                >
                  {/* Year marker */}
                  <div className="w-32 flex-shrink-0 text-right pl-6  font-mono font-bold">
                    {point.year}
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-16 transform -translate-x-1/2  w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  {/* Content */}
                  <div className="pl-8">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      {point.title}
                      <ArrowRight className="ml-2 w-4 h-4 text-primary" />
                    </h3>
                    <p className="text-foreground/80">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
