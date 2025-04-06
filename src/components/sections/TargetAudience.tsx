"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import {
  LuUsers,
  LuFileText,
  LuShield,
  LuLightbulb,
  LuNetwork,
} from "react-icons/lu";

export default function TargetAudience() {
  const audiences = [
    {
      title: "Journalists & Whistleblowers",
      description:
        "Truth-seekers who need a tamper-proof platform to store revelations and evidence.",
      icon: <LuFileText className="w-10 h-10" />,
      iconColor: "#88eac5",
      name: "Investigative Journalists",
    },
    {
      title: "Researchers & Academics",
      description:
        "Knowledge builders who require permanent archives for their discoveries and data.",
      icon: <LuLightbulb className="w-10 h-10" />,
      iconColor: "#98c7b2",
      name: "Academic Research Teams",
    },
    {
      title: "Privacy Advocates",
      description:
        "Guardians fighting for decentralized information sovereignty and digital rights.",
      icon: <LuShield className="w-10 h-10" />,
      iconColor: "#7ec9ad",
      name: "Digital Rights Activists",
    },
    {
      title: "Decentralized Thinkers",
      description:
        "Visionaries building systems beyond centralized control and single points of failure.",
      icon: <LuNetwork className="w-10 h-10" />,
      iconColor: "#aaccc0",
      name: "Blockchain Developers",
    },
  ];

  return (
    <section id="audience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="bg-primary/10 p-2 rounded-full mr-3">
            <LuUsers className="w-6 h-6 text-primary" />
          </span>
          Who Preserves Truth
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }} // adds Framer hover animation
            >
              <Card className="rounded-2xl h-full shadow-soft-md transition-transform duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 text-primary">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/80">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
