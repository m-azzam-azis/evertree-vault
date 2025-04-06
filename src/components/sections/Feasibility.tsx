"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { LuWrench } from "react-icons/lu";

export default function Feasibility() {
  const feasibilityPoints = [
    {
      title: "ICP Canister Memory",
      description:
        "Leveraging Internet Computer Protocol's persistent memory that's highly available and immutable by design.",
    },
    {
      title: "Autonomous AI Agents",
      description:
        "Utilizing composable AI systems to validate, organize, and grow the knowledge base without central authority.",
    },
    {
      title: "Cryptographic Verification",
      description:
        "Implementing tamper-proof verification mechanisms to ensure content integrity over time.",
    },
    {
      title: "Minimal Infrastructure",
      description:
        "Running entirely on the decentralized network without traditional servers or cloud dependencies.",
    },
  ];

  return (
    <section id="feasibility" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="bg-primary/10 p-2 rounded-full mr-3">
            <LuWrench className="w-6 h-6 text-primary" />
          </span>
          Technical Feasibility
        </h2>

        <Card className="rounded-2xl shadow-soft-md hover:shadow-soft-lg transition-shadow duration-300">
          <CardContent className="p-8">
            <p className="text-lg mb-6">
              Evertree Vault is built on proven technological foundations that
              enable truly decentralized, permanent knowledge storage with
              unprecedented reliability:
            </p>

            <div className="space-y-6">
              {feasibilityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="mt-1 text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{point.title}</h3>
                    <p className="text-foreground/80">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
