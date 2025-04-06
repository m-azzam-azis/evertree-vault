"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { LuShield, LuBookX, LuHistory } from "react-icons/lu";

export default function ProblemStatement() {
  return (
    <section id="problem" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="bg-primary/10 p-2 rounded-full mr-3">
            <LuBookX className="w-6 h-6 text-primary" />
          </span>
          The Crisis of Lost Knowledge
        </h2>

        <Card className="rounded-2xl shadow-soft-md">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              {[
                {
                  icon: <LuHistory className="w-10 h-10" />,
                  title: "History Rewritten",
                  description:
                    "Crucial historical records are being altered or erased based on political convenience.",
                },
                {
                  icon: <LuShield className="w-10 h-10" />,
                  title: "Censorship Rising",
                  description:
                    "Centralized platforms can remove vital information with a single database update.",
                },
                {
                  icon: <LuBookX className="w-10 h-10" />,
                  title: "Knowledge Fragility",
                  description:
                    "Digital information's impermanence threatens societal memory and learning.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-8 bg-background/50 backdrop-blur-sm rounded-lg"
                >
                  <div className="text-primary mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/80">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="text-lg">
              In today&apos;s digital landscape, truth faces unprecedented
              challenges. Centralized platforms control what information
              persists and what disappears. Critical knowledge can be censored,
              altered, or lost forever. Historical facts become malleable,
              subject to political pressures and corporate interests. When we
              hide our mistakes rather than learn from them, we doom future
              generations to repeat them. We need an incorruptible foundation
              where verified knowledge can take root and remain accessible —
              resistant to manipulation by any single entity or authority.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
