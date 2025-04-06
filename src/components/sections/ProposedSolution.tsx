"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  LuSave,
  LuCheckCheck,
  LuQuote,
  LuArrowRight,
  LuCoins,
  LuFileSearch,
  LuDatabase,
  LuBrain,
  LuShield,
} from "react-icons/lu";

export default function ProposedSolution() {
  // Core system workflow steps
  const systemWorkflow = [
    {
      title: "Content Submission",
      icon: <LuFileSearch className="w-6 h-6 text-primary" />,
      description:
        "Users submit documents, evidence or articles to the platform securely",
      color: "rgb(136, 234, 197)",
    },
    {
      title: "AI Processing",
      icon: <LuBrain className="w-6 h-6 text-primary" />,
      description:
        "Content is analyzed, categorized, and linked to related information",
      color: "rgb(152, 199, 178)",
    },
    {
      title: "Distributed Storage",
      icon: <LuDatabase className="w-6 h-6 text-primary" />,
      description:
        "Data is cryptographically sealed and stored across ICP network",
      color: "rgb(126, 201, 173)",
    },
    {
      title: "Reputation Building",
      icon: <LuShield className="w-6 h-6 text-primary" />,
      description:
        "Contributors build verifiable reputation while maintaining anonymity",
      color: "rgb(170, 204, 192)",
    },
    {
      title: "Funding & Bounties",
      icon: <LuCoins className="w-6 h-6 text-primary" />,
      description:
        "Users support content creators or create bounties for specific information",
      color: "rgb(184, 241, 214)",
    },
  ];

  const featureHighlights = [
    {
      title: "Anonymous Reputation System",
      description:
        "Contributors build credibility through verification and consistency without revealing identity",

      details: [
        "Zero-knowledge proof verification",
        "Content-based reputation metrics",
        "Trustless history tracking",
        "Cross-reference validation with existing verified content",
      ],
    },
    {
      title: "Cryptocurrency Rewards",
      description:
        "Direct ICP token support for valued contributors creates sustainable ecosystem",
      details: [
        "Automated smart contract payments",
        "Tipping for valuable information",
        "Subscription support for ongoing work",
        "Bounty fulfillment payments",
      ],
    },
    {
      title: "Truth Bounties",
      description:
        "Users can place bounties for specific information, incentivizing investigative work",

      details: [
        "Escrow-protected bounty system",
        "Community verification for bounty completion",
        "Multiple-contributor partial rewards",
        "Escalating reward tiers for deeper investigation",
      ],
    },
    {
      title: "Content Cross-Linking",
      description:
        "AI automatically finds connections between separate pieces of information",

      details: [
        "Semantic relationship analysis",
        "Chronological linking",
        "Citation network mapping",
        "Entity recognition and correlation",
      ],
    },
  ];

  return (
    <section id="solution" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col gap-10"
      >
        <div>
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
              <div className="space-y-4 mb-8">
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

              <div className="rounded-xl border border-border p-6 mb-8 bg-background/50">
                <h3 className="text-xl font-bold mb-6">
                  How EverTree Vault Works
                </h3>

                {/* Simple workflow visualization */}
                <div className="overflow-x-auto pb-4">
                  <div className="flex flex-nowrap min-w-[800px]">
                    {systemWorkflow.map((step, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center flex-1"
                      >
                        {/* Step number */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-primary mb-4"
                        >
                          {index + 1}
                        </motion.div>

                        {/* Icon */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.1 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="w-16 h-16 rounded-xl flex items-center justify-center mb-3"
                          style={{ backgroundColor: `${step.color}20` }}
                        >
                          {step.icon}
                        </motion.div>

                        {/* Title */}
                        <h4 className="font-bold text-sm mb-2 text-center">
                          {step.title}
                        </h4>

                        {/* Description */}
                        <p className="text-xs text-center text-muted-foreground px-2">
                          {step.description}
                        </p>

                        {/* Connecting arrow - don't show for last item */}
                        {index < systemWorkflow.length - 1 && (
                          <div className="hidden md:flex items-center justify-center w-full pt-4">
                            <motion.div
                              initial={{ width: 0, opacity: 0 }}
                              whileInView={{ width: "80%", opacity: 1 }}
                              transition={{
                                duration: 0.6,
                                delay: 0.3 + index * 0.1,
                              }}
                              viewport={{ once: true }}
                              className="h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent relative"
                            >
                              <div className="absolute -right-1 top-1/2 transform -translate-y-1/2">
                                <LuArrowRight className="w-3 h-3 text-primary" />
                              </div>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-sm text-muted-foreground">
                    The system combines AI-powered content processing with
                    decentralized storage and cryptographic verification to
                    create a self-sustaining knowledge ecosystem.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featureHighlights.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
                  >
                    <h3 className="text-lg font-bold flex items-center mb-2">
                      <LuArrowRight className="w-4 h-4 mr-2 text-primary" />
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/80 mb-3">
                      {feature.description}
                    </p>

                    <div className="text-xs space-y-1">
                      {feature.details.map((detail, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-1 h-1 rounded-full bg-primary mt-1.5 mr-2"></div>
                          <div>{detail}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-center py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative max-w-md"
          >
            <div className="absolute -top-8 -left-8 text-primary/20">
              <LuQuote className="w-16 h-16 transform -scale-y-100" />
            </div>

            <Card className="rounded-xl border-primary/20 shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-accent" />

              <CardContent className="p-8 relative">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <q className="text-lg md:text-xl font-medium italic mb-6 leading-relaxed">
                    Those who who fail to learn from history, are doomed to
                    repeat it
                  </q>

                  <div className="flex items-center justify-end">
                    <div className="w-8 h-[1px] bg-primary/30 mr-3" />
                    <p className="text-foreground/60 text-sm">
                      Winston Churchill
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
