"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LuLightbulb, LuZap } from "react-icons/lu";

export default function Novelty() {
  const noveltyPoints = [
    {
      title: "Native Canister Memory",
      description:
        "Utilizing ICP's orthogonal persistence for truly immutable, distributed storage",
      year: "2025",
      color: "rgb(136, 234, 197)",
      icon: <LuZap className="w-5 h-5" />,
    },
    {
      title: "Autonomous Knowledge Curation",
      description:
        "Self-updating AI systems that grow and refine information without human bias",
      year: "2025",
      color: "rgb(152, 199, 178)",
      icon: <LuZap className="w-5 h-5" />,
    },
    {
      title: "Decentralized Reputation System",
      description:
        "Transparent verification through distributed consensus, not central authority",
      year: "2026",
      color: "rgb(126, 201, 173)",
      icon: <LuZap className="w-5 h-5" />,
    },
    {
      title: "Composable Agent Networks",
      description:
        "Multiple specialized AI agents working in concert to validate and structure information",
      year: "2027",
      color: "rgb(170, 204, 192)",
      icon: <LuZap className="w-5 h-5" />,
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
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="bg-primary/10 p-2 rounded-full mr-3">
            <LuLightbulb className="w-6 h-6 text-primary" />
          </span>
          Innovation Roadmap
        </h2>

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
              {/* Timeline line with gradient */}
              <div className="absolute left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/30 rounded-full" />

              {/* Timeline items */}
              {noveltyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex mb-12 last:mb-0 relative group"
                >
                  {/* Year marker */}
                  <div className="w-32 flex-shrink-0 text-right pr-6 font-mono font-bold text-primary group-hover:scale-110 transition-transform translate-x-6 text-xl">
                    {point.year}
                  </div>

                  {/* Timeline dot with pulse effect */}
                  <div className="absolute left-16 transform -translate-x-[10px] flex items-center justify-center">
                    <div
                      className="w-6 h-6 rounded-full bg-background border-2"
                      style={{ borderColor: point.color }}
                    />
                    <div
                      className="absolute w-3 h-3 rounded-full"
                      style={{ backgroundColor: point.color }}
                    />
                    <div
                      className="absolute w-8 h-8 rounded-full animate-ping-slow opacity-30"
                      style={{ backgroundColor: point.color }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="pl-8 rounded-lg transition-all"
                    style={{ backgroundColor: `${point.color}08` }}
                  >
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <span
                        className=" rounded-md mr-2"
                        style={{ backgroundColor: `${point.color}30` }}
                      >
                        {point.icon}
                      </span>
                      {point.title}
                    </h3>
                    <p className="text-foreground/80">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Future indicator */}
            <div className="flex items-center justify-center mt-8">
              <div className="px-4 py-2 rounded-full text-sm bg-primary/10 border border-primary/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span>Continuous innovation pipeline</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
