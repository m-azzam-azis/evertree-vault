"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { LuShieldCheck, LuTreeDeciduous, LuBookOpen } from "react-icons/lu";

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />

      <div className="container relative z-10 px-4 py-32 md:py-40 mx-auto">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-accent rounded-full opacity-30 animate-ping-slow" />
              <div className="relative bg-background/30 backdrop-blur-sm rounded-full p-4 border border-primary/20">
                <LuTreeDeciduous className="w-12 h-12 text-primary" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="text-primary">Ever</span>Tree Vault
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl font-bold mb-2"
          >
            Preserving Knowledge for Humanity&apos;s Future
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            A decentralized knowledge vault resistant to censorship,
            manipulation, and loss — ensuring truth remains accessible for
            future generations.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 justify-center mb-12"
          >
            <div className="flex items-center gap-2">
              <LuShieldCheck className="text-primary" />
              <span>Censorship Resistant</span>
            </div>
            <div className="flex items-center gap-2">
              <LuBookOpen className="text-primary" />
              <span>Permanent Archives</span>
            </div>
            <div className="flex items-center gap-2">
              <LuTreeDeciduous className="text-primary" />
              <span>Decentralized Truth</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/demo"
              target="_blank"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all transform hover:translate-1.5"
            >
              Try Demo (non ICP)
            </Link>
            <Link
              href="https://icp.ninja/s/G934N"
              target="_blank"
              className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-all transform hover:translate-1.5"
            >
              Try Demo (ICP)
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-muted-foreground flex items-center justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
