"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  LuBadgeAlert,
  LuFlame,
  LuKey,
  LuFileWarning,
  LuShield,
  LuNetwork,
} from "react-icons/lu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function ProblemStatement() {
  // Problems with current solutions
  const currentSolutionProblems = [
    {
      solution: "Traditional Archives",
      weaknesses: [
        "Vulnerable to physical destruction",
        "Limited geographic accessibility",
        "Subject to institutional bias",
        "Expensive to maintain",
      ],
      examples:
        "Library of Alexandria burning, Nazi book burnings, ISIS destruction of Palmyra archives",
    },
    {
      solution: "Cloud Storage",
      weaknesses: [
        "Centralized control and ownership",
        "Susceptible to content policy changes",
        "Provider can be compelled to remove content",
        "Business model changes can limit access",
      ],
      examples:
        "Google shutting down services, Dropbox changing terms of service, content removed due to DMCA",
    },
    {
      solution: "Git Repositories",
      weaknesses: [
        "Host platforms can remove content",
        "Not designed for large media files",
        "Technical barrier to entry",
        "Can be subject to DMCA takedowns",
      ],
      examples:
        "GitHub removing repositories based on government requests, size limitations",
    },
    {
      solution: "Traditional Blockchain",
      weaknesses: [
        "High storage costs",
        "Poor scalability",
        "Limited data structures",
        "No native compute capability",
      ],
      examples:
        "Ethereum gas fees making data storage prohibitively expensive, Bitcoin's limited data capacity",
    },
  ];

  // User case studies
  const userCaseStudies = [
    {
      profile: "Investigative Journalist",
      example:
        "Published exposé on political corruption disappeared from news sites after government pressure",
      consequence:
        "Evidence became inaccessible, legal case weakened, public interest diminished",
    },
    {
      profile: "Academic Researcher",
      example:
        "Climate data removed from government websites after administration change",
      consequence:
        "Years of research became unusable for references, scientific consensus undermined",
    },
    {
      profile: "Human Rights Advocate",
      example:
        "Video evidence of rights violations taken down from all major platforms",
      consequence:
        "Accountability impossible, violations continued without public awareness",
    },
    {
      profile: "Whistleblower",
      example:
        "Internal documents about pharmaceutical side effects removed after legal threats",
      consequence:
        "Public health risk information suppressed, no accountability for manufacturer",
    },
  ];

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
            <LuBadgeAlert className="w-6 h-6 text-primary" />
          </span>
          The Problem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card className="rounded-2xl shadow-soft-md">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <LuFlame className="text-primary" />
                <span>Knowledge Under Threat</span>
              </h3>

              <p className="mb-6">
                Critical information is increasingly vulnerable to censorship,
                manipulation, and erasure by powerful entities:
              </p>

              <div className="bg-accent/10 rounded-lg p-4 border border-accent/30 mb-6">
                <h4 className="font-bold text-sm mb-2">
                  The Scale of the Problem:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Internet freedom has declined for{" "}
                    <strong>12 consecutive years</strong> as of 2022
                  </li>
                  <li>
                    <strong>Only 31%</strong> of the world lives in a free
                    internet environment
                  </li>
                  <li>
                    Internet blocking cost the world economy{" "}
                    <strong>$5.5 billion</strong> in 2021
                  </li>
                  <li>
                    <span className="font-bold">42%</span> of journalists report
                    self-censoring due to fear of retribution
                  </li>
                </ul>
              </div>

              <Link
                href="https://www.go-globe.com/the-state-of-internet-censorship-statistics-and-trends-infographic/"
                target="_blank"
                className="text-xs text-foreground/80 text-center underline"
              >
                Source: Go Globe, 2025
              </Link>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-soft-md">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <LuFileWarning className="text-primary" />
                <span>Real-World Impact</span>
              </h3>

              <p className="mb-6">
                When critical information disappears, accountability vanishes
                and history becomes malleable:
              </p>

              <div className="mt-6 bg-primary/10 rounded-lg p-4 border border-primary/30">
                <h4 className="font-bold text-sm mb-2">
                  The Long-Term Consequences:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Historical understanding becomes skewed towards narratives
                    favorable to those in power
                  </li>
                  <li>
                    Scientific progress is hampered when research contradicting
                    corporate interests disappears
                  </li>
                  <li>
                    Democracy weakens when citizens cannot access reliable
                    information about their governments
                  </li>
                  <li>
                    Cultural heritage faces digital extinction when platforms
                    arbitrarily change content policies
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <LuKey className="text-primary" />
            <span>Current Solutions Are Failing</span>
          </h3>

          <Card className="rounded-2xl shadow-soft-md">
            <CardContent className="p-6">
              <Tabs defaultValue="solution1">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
                  <TabsTrigger value="solution1">
                    Traditional Archives
                  </TabsTrigger>
                  <TabsTrigger value="solution2">Cloud Storage</TabsTrigger>
                  <TabsTrigger value="solution3">Git Repositories</TabsTrigger>
                  <TabsTrigger value="solution4">Basic Blockchain</TabsTrigger>
                </TabsList>

                {currentSolutionProblems.map((problem, index) => (
                  <TabsContent key={index} value={`solution${index + 1}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-4">{problem.solution}</h4>
                        <h5 className="text-sm font-medium mb-2">
                          Key Weaknesses:
                        </h5>
                        <ul className="list-disc pl-5 space-y-2 text-sm mb-4">
                          {problem.weaknesses.map((weakness, i) => (
                            <li key={i}>{weakness}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium mb-2">
                          Real-World Examples:
                        </h5>
                        <div className="bg-background/50 p-4 rounded-lg border border-border text-sm">
                          {problem.examples}
                        </div>

                        <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/20">
                          <h5 className="text-sm font-medium mb-2">
                            Why This Matters:
                          </h5>
                          <p className="text-sm">
                            {problem.solution === "Traditional Archives" &&
                              "Physical archives have proven vulnerable to both deliberate destruction and natural disasters, resulting in permanent knowledge loss."}
                            {problem.solution === "Cloud Storage" &&
                              "Cloud providers prioritize business interests over information preservation, making content subject to changing policies."}
                            {problem.solution === "Git Repositories" &&
                              "Source control systems weren't designed for knowledge preservation and remain vulnerable to takedown requests."}
                            {problem.solution === "Traditional Blockchain" &&
                              "Earlier blockchain technologies cannot economically store large datasets or provide the computation needed for knowledge organization."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-bold mb-6">Who Is Most Affected</h3>

        {/* Condensed user case studies with shorter cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {userCaseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-2xl shadow-soft-md hover:shadow-soft-lg transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2 text-base">{study.profile}</h4>
                  <div className="bg-accent/80 p-2 rounded-lg border border-accent/30 mb-2">
                    <p className="text-xs">
                      Example: <br />
                      {study.example}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Impact: {study.consequence}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Three major critical needs blocks */}
        <h3 className="text-xl font-bold mb-6">Critical System Requirements</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card
              className="rounded-2xl shadow-soft-md border-t-4"
              style={{ borderTopColor: "rgb(136, 234, 197)" }}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <LuKey className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">
                  Immutable Preservation
                </h3>
                <p className="text-sm mb-4">
                  Information must be stored in a way that makes it impossible
                  for any entity, regardless of power or resources, to
                  permanently remove it from existence.
                </p>
                <div className="bg-primary/5 rounded-lg p-3">
                  <h4 className="text-sm font-medium mb-1">
                    Technical Requirements:
                  </h4>
                  <ul className="text-xs space-y-1 list-disc pl-4">
                    <li>Distributed, redundant storage across global nodes</li>
                    <li>
                      Content-addressed data structure that prevents silent
                      alteration
                    </li>
                    <li>Self-healing recovery mechanisms from partial data</li>
                    <li>Zero reliance on centralized infrastructure</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              className="rounded-2xl shadow-soft-md border-t-4"
              style={{ borderTopColor: "rgb(152, 199, 178)" }}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <LuShield className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">
                  Identity Protection
                </h3>
                <p className="text-sm mb-4">
                  Contributors must be able to establish reputation and
                  credibility without revealing their real identities,
                  protecting them from retaliation and persecution.
                </p>
                <div className="bg-primary/5 rounded-lg p-3">
                  <h4 className="text-sm font-medium mb-1">
                    Technical Requirements:
                  </h4>
                  <ul className="text-xs space-y-1 list-disc pl-4">
                    <li>
                      Zero-knowledge proof systems for verification without
                      revelation
                    </li>
                    <li>
                      Pseudonymous reputation mechanisms based on content
                      quality
                    </li>
                    <li>
                      Cryptographic identity separation between contributions
                    </li>
                    <li>
                      Resistance to deanonymization attempts through metadata
                      analysis
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              className="rounded-2xl shadow-soft-md border-t-4"
              style={{ borderTopColor: "rgb(126, 201, 173)" }}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <LuNetwork className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">
                  Knowledge Interconnection
                </h3>
                <p className="text-sm mb-4">
                  Information must be validated, verified, and interconnected to
                  create a comprehensive knowledge graph that reveals patterns
                  and inconsistencies.
                </p>
                <div className="bg-primary/5 rounded-lg p-3">
                  <h4 className="text-sm font-medium mb-1">
                    Technical Requirements:
                  </h4>
                  <ul className="text-xs space-y-1 list-disc pl-4">
                    <li>
                      Automatic cross-referencing with existing verified
                      information
                    </li>
                    <li>
                      Semantic relationship mapping between separate documents
                    </li>
                    <li>
                      On-chain AI for pattern recognition and anomaly detection
                    </li>
                    <li>
                      Cryptographic validation of information provenance and
                      history
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="rounded-2xl shadow-soft-md border border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <p className="text-sm font-medium">
                EverTree Vault addresses these critical requirements through a
                combination of ICP&apos;s orthogonal persistence, zero-knowledge
                cryptography, and distributed AI-powered verification.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
