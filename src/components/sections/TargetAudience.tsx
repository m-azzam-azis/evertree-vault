"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  LuUsers,
  LuFileText,
  LuShield,
  LuLightbulb,
  LuNetwork,
  LuListChecks,
  LuNewspaper,
  LuFlaskRound,
  LuScale,
  LuServer,
} from "react-icons/lu";
import { UseCaseFlow } from "../ui/use-case-flow";

export default function TargetAudience() {
  const audiences = [
    {
      title: "Journalists & Whistleblowers",
      description:
        "Truth-seekers who need a tamper-proof platform to store revelations and evidence.",
      icon: <LuFileText className="w-10 h-10" />,
      iconColor: "#88eac5",
      name: "Investigative Journalists",
      useCases: [
        "Securely storing sensitive source evidence",
        "Publishing investigations immune to takedowns",
        "Building verifiable reputation while maintaining anonymity",
        "Receiving direct funding through cryptocurrency",
      ],
      workflow: [
        { icon: <LuNewspaper />, label: "Research Story" },
        { icon: <LuFileText />, label: "Upload Evidence" },
        { icon: <LuNetwork />, label: "Decentralized Publishing" },
      ],
    },
    {
      title: "Researchers & Academics",
      description:
        "Knowledge builders who require permanent archives for their discoveries and data.",
      icon: <LuLightbulb className="w-10 h-10" />,
      iconColor: "#98c7b2",
      name: "Academic Research Teams",
      useCases: [
        "Creating immutable proof of research precedence",
        "Maintaining data integrity across long-term studies",
        "Collaborative cross-verification of findings",
        "Preserving controversial research from institutional pressure",
      ],
      workflow: [
        { icon: <LuFlaskRound />, label: "Conduct Research" },
        { icon: <LuFileText />, label: "Document Findings" },
        { icon: <LuListChecks />, label: "Peer Verification" },
        { icon: <LuServer />, label: "Permanent Archiving" },
      ],
    },
    {
      title: "Privacy Advocates",
      description:
        "Guardians fighting for decentralized information sovereignty and digital rights.",
      icon: <LuShield className="w-10 h-10" />,
      iconColor: "#7ec9ad",
      name: "Digital Rights Activists",
      useCases: [
        "Documenting privacy violations and government overreach",
        "Creating censorship-resistant educational resources",
        "Building reputation systems without identity disclosure",
        "Coordinating decentralized awareness campaigns",
      ],
      workflow: [
        { icon: <LuShield />, label: "Identify Violations" },
        { icon: <LuFileText />, label: "Document Evidence" },
        { icon: <LuScale />, label: "Legal Analysis" },
        { icon: <LuNetwork />, label: "Secure Distribution" },
      ],
    },
    {
      title: "Web3 Developers",
      description:
        "Visionaries building systems beyond centralized control and single points of failure.",
      icon: <LuNetwork className="w-10 h-10" />,
      iconColor: "#aaccc0",
      name: "Blockchain Developers",
      useCases: [
        "Creating truly censorship-resistant applications",
        "Implementing decentralized identity and reputation systems",
        "Building knowledge markets with cryptocurrency incentives",
        "Developing truth bounty and verification mechanisms",
      ],
      workflow: [
        { icon: <LuServer />, label: "Develop Protocol" },
        { icon: <LuNetwork />, label: "Implement Smart Contracts" },
        { icon: <LuUsers />, label: "Community Governance" },
        { icon: <LuShield />, label: "Security Auditing" },
      ],
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
              whileHover={{ y: -6 }}
            >
              <Card className="rounded-2xl h-full shadow-soft-md transition-transform duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 text-primary">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/80 mb-4">{item.description}</p>

                  <div className="mt-4 mb-6 w-full h-24">
                    <UseCaseFlow steps={item.workflow} color={item.iconColor} />
                  </div>

                  <h4 className="font-semibold text-sm mb-2">Key Use Cases:</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside text-foreground/80">
                    {item.useCases.map((useCase, i) => (
                      <li key={i}>{useCase}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
