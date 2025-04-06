"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import {
  LuWrench,
  LuScan,
  LuCoins,
  LuLayoutGrid,
  LuCode,
  LuNetwork,
  LuServer,
  LuBox,
  LuBraces,
  LuVenetianMask,
  LuLayers,
} from "react-icons/lu";

export default function Feasibility() {
  const feasibilityPoints = [
    {
      title: "ICP Canister Memory",
      description:
        "Leveraging Internet Computer Protocol's persistent memory that's highly available and immutable by design.",
      details:
        "ICP canisters maintain state without external databases, providing inherent censorship resistance at the protocol level.",
    },
    {
      title: "Autonomous AI Agents",
      description:
        "Utilizing composable AI systems to validate, organize, and grow the knowledge base without central authority.",
      details:
        "Multiple specialized AI agents handle tasks like duplicate detection, cross-referencing, metadata extraction, and link analysis.",
    },
    {
      title: "Cryptographic Verification",
      description:
        "Implementing tamper-proof verification mechanisms to ensure content integrity over time.",
      details:
        "Each document receives a unique cryptographic signature, enabling verification without exposing contributor identity.",
    },
    {
      title: "Minimal Infrastructure",
      description:
        "Running entirely on the decentralized network without traditional servers or cloud dependencies.",
      details:
        "Zero reliance on centralized cloud providers eliminates points of control and censorship vulnerability.",
    },
  ];

  // Technical stack components
  const techStack = {
    foundation: [
      {
        name: "Internet Computer Protocol",
        icon: <LuServer className="w-6 h-6" />,
        category: "Infrastructure",
        description:
          "Provides autonomous canister smart contracts with orthogonal persistence",
      },
      {
        name: "Orthogonal Persistence",
        icon: <LuBox className="w-6 h-6" />,
        category: "Storage",
        description:
          "Memory persists between canister upgrades without external databases",
      },
      {
        name: "Motoko & Rust",
        icon: <LuCode className="w-6 h-6" />,
        category: "Backend",
        description:
          "Type-safe languages optimized for ICP canister development",
      },
    ],
    core: [
      {
        name: "React & TypeScript",
        icon: <LuLayoutGrid className="w-6 h-6" />,
        category: "Frontend",
        description: "Secure, type-safe user interface with responsive design",
      },
      {
        name: "Candid Interface",
        icon: <LuBraces className="w-6 h-6" />,
        category: "API",
        description:
          "Language-neutral interface description for canister services",
      },
      {
        name: "De-centralized AI",
        icon: <LuScan className="w-6 h-6" />,
        category: "AI",
        description:
          "On-chain model for content analysis and relationship mapping",
      },
    ],
    features: [
      {
        name: "Internet Identity",
        icon: <LuVenetianMask className="w-6 h-6" />,
        category: "Privacy",
        description:
          "Verifies information without revealing contributor identity",
      },
      {
        name: "ICP Token Integration",
        icon: <LuCoins className="w-6 h-6" />,
        category: "Incentives",
        description: "Native cryptocurrency payments for content rewards",
      },
      {
        name: "P2P Content Network",
        icon: <LuNetwork className="w-6 h-6" />,
        category: "Distribution",
        description: "Distributed content delivery across node network",
      },
    ],
  };

  // Implementation phases data
  const implementationPhases = [
    {
      title: "MVP Launch",
      timeline: "Q3 2025",
      features: [
        "Basic document storage and retrieval",
        "Simple reputation metrics",
        "Core ICP integration",
      ],
      progress: 0.8, // 80% complete
    },
    {
      title: "Feature Expansion",
      timeline: "Q1 2026",
      features: [
        "AI cross-referencing system",
        "Anonymous reputation system",
        "Cryptocurrency tipping",
      ],
      progress: 0.4, // 40% complete
    },
    {
      title: "Advanced Capabilities",
      timeline: "Q4 2026",
      features: [
        "Truth bounty marketplace",
        "Distributed validator network",
        "Content correlation mapping",
      ],
      progress: 0.15, // 15% complete
    },
    {
      title: "Ecosystem Growth",
      timeline: "2027+",
      features: [
        "Developer API and plugins",
        "Mobile applications",
        "Cross-blockchain bridges",
      ],
      progress: 0.05, // 5% complete
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

        <Card className="rounded-2xl shadow-soft-md hover:shadow-soft-lg transition-shadow duration-300 mb-8">
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
                    <p className="text-foreground/80 mb-2">
                      {point.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {point.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl shadow-soft-md h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <LuLayers className="w-5 h-5 mr-2 text-primary" />
                  Technology Stack
                </h3>

                {/* Simplified Tech Stack Visualization */}
                <div className="space-y-6">
                  {/* Foundation Layer */}
                  <div>
                    <h4 className="text-sm font-bold uppercase text-muted-foreground mb-3 flex items-center">
                      <div className="w-3 h-3 rounded-sm bg-primary/80 mr-2"></div>
                      Foundation Layer
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {techStack.foundation.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-background/50 border border-border p-3 rounded-lg hover:border-primary/30 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 rounded-md bg-primary/10">
                              {tech.icon}
                            </div>
                            <h5 className="font-bold text-sm">{tech.name}</h5>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {tech.description}
                          </div>
                          <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-accent/20 text-accent-foreground">
                            {tech.category}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Core Layer */}
                  <div>
                    <h4 className="text-sm font-bold uppercase text-muted-foreground mb-3 flex items-center">
                      <div className="w-3 h-3 rounded-sm bg-primary/60 mr-2"></div>
                      Core Layer
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {techStack.core.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.3 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="bg-background/50 border border-border p-3 rounded-lg hover:border-primary/30 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 rounded-md bg-primary/10">
                              {tech.icon}
                            </div>
                            <h5 className="font-bold text-sm">{tech.name}</h5>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {tech.description}
                          </div>
                          <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-accent/20 text-accent-foreground">
                            {tech.category}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Features Layer */}
                  <div>
                    <h4 className="text-sm font-bold uppercase text-muted-foreground mb-3 flex items-center">
                      <div className="w-3 h-3 rounded-sm bg-primary/40 mr-2"></div>
                      Feature Layer
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {techStack.features.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.6 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="bg-background/50 border border-border p-3 rounded-lg hover:border-primary/30 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 rounded-md bg-primary/10">
                              {tech.icon}
                            </div>
                            <h5 className="font-bold text-sm">{tech.name}</h5>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {tech.description}
                          </div>
                          <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-accent/20 text-accent-foreground">
                            {tech.category}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm">
                    The architecture ensures fully decentralized operation with
                    no single point of control, utilizing the Internet
                    Computer&apos;s unique capabilities for secure, autonomous
                    execution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl shadow-soft-md h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">
                  Implementation Timeline
                </h3>
                <div className="space-y-6">
                  {implementationPhases.map((phase, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold">{phase.title}</h4>
                        <span className="text-sm text-primary font-mono">
                          {phase.timeline}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${phase.progress * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <ul className="text-xs space-y-1 list-disc list-inside text-muted-foreground">
                        {phase.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg border border-accent/30 bg-accent/10 p-4">
                  <h4 className="text-sm font-bold mb-2">
                    Development Progress
                  </h4>
                  <p className="text-xs">
                    Current development is focused on the MVP phase, with
                    foundational canister architecture and content storage
                    systems already implemented. The roadmap prioritizes core
                    functionality first, with advanced features built
                    progressively as the platform matures.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
