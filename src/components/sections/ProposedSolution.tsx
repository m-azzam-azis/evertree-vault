"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { LuSave, LuCheckCheck } from "react-icons/lu";

export default function ProposedSolution() {
  return (
    <section id="solution" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-10"
      >
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="bg-primary/10 p-2 rounded-full mr-3">
              <LuSave className="w-6 h-6 text-primary" />
            </span>
            Our Solution
          </h2>

          <Card className="rounded-2xl shadow-soft-md">
            <CardContent className="p-8">
              <p className="text-lg mb-6">
                EverTree Vault creates an immutable, distributed knowledge
                archive that ensures information remains:
              </p>
              <div className="space-y-4 mb-6">
                {[
                  {
                    title: "Uncensorable",
                    description:
                      "Distributed across the Internet Computer Protocol, making it resistant to takedown attempts",
                  },
                  {
                    title: "Permanent",
                    description:
                      "Stored through orthogonal persistence with no central server to fail or be compromised",
                  },
                  {
                    title: "Verifiable",
                    description:
                      "Cryptographically secured with transparent provenance and change history",
                  },
                  {
                    title: "Accessible",
                    description:
                      "Available to anyone through a decentralized network with no gatekeepers",
                  },
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 text-primary">
                      <LuCheckCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{point.title}</h3>
                      <p className="text-foreground/80 text-sm">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 flex items-center justify-center py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative max-w-md"
          >
            <div className="rounded-xl  shadow-xl overflow-hidden ">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-accent" />

              <div className="p-8 relative">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <q className="text-lg md:text-xl font-medium italic text-foreground leading-relaxed block mb-4">
                    Those who control the present, control the past and those
                    who control the past control the future.
                  </q>

                  <div className="w-full flex justify-end mt-4">
                    <p className="text-sm text-foreground/60 text-end">
                      — George Orwell
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
