"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  LuGlobe,
  LuShield,
  LuUsers,
  LuScale,
  LuDatabase,
  LuBookOpen,
  LuShieldAlert,
} from "react-icons/lu";

export default function Impact() {
  const impactPoints = [
    {
      title: "Democratizing Truth",
      description:
        "Breaking the monopoly on information controlled by powerful entities",
      icon: <LuUsers className="w-6 h-6" />,
      color: "rgb(136, 234, 197)",
    },
    {
      title: "Preventing Historical Revisionism",
      description:
        "Ensuring that uncomfortable truths remain accessible for learning",
      icon: <LuGlobe className="w-6 h-6" />,
      color: "rgb(152, 199, 178)",
    },
    {
      title: "Empowering the Marginalized",
      description:
        "Giving voice to those historically silenced by providing an immutable platform",
      icon: <LuScale className="w-6 h-6" />,
      color: "rgb(126, 201, 173)",
    },
    {
      title: "Safeguarding Vulnerable Knowledge",
      description:
        "Protecting cultural heritage and scientific discoveries from erasure",
      icon: <LuShield className="w-6 h-6" />,
      color: "rgb(170, 204, 192)",
    },
  ];

  // Impact statistics
  const impactStats = [
    {
      value: "1.2M+",
      label: "Records Preserved",
      icon: <LuDatabase className="w-8 h-8" />,
      color: "rgb(136, 234, 197)",
    },
    {
      value: "143",
      label: "Countries Reached",
      icon: <LuGlobe className="w-8 h-8" />,
      color: "rgb(152, 199, 178)",
    },
    {
      value: "53K+",
      label: "Censorship Attempts Blocked",
      icon: <LuShieldAlert className="w-8 h-8" />,
      color: "rgb(126, 201, 173)",
    },
    {
      value: "87K",
      label: "Historical Events Documented",
      icon: <LuBookOpen className="w-8 h-8" />,
      color: "rgb(170, 204, 192)",
    },
  ];

  return (
    <section id="impact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-10 items-center"
      >
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="bg-primary/10 p-2 rounded-full mr-3">
              <LuGlobe className="w-6 h-6 text-primary" />
            </span>
            Social Impact
          </h2>

          <Card className="rounded-2xl shadow-soft-md">
            <CardContent className="p-8">
              <p className="text-lg mb-6">
                EverTree Vault transcends being just a technological
                solution—it&apos;s a societal shift toward information integrity
                and democratic knowledge access.
              </p>

              <ul className="space-y-6">
                {impactPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 group"
                  >
                    <div
                      className="mt-1 p-2 rounded-full group-hover:scale-110 transition-all flex-shrink-0"
                      style={{ backgroundColor: `${point.color}30` }}
                    >
                      <div className="text-primary">{point.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-foreground/80">{point.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center p-4">
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 hover:translate-x-1 transform transition-transform">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <motion.div
                      className="text-xl font-bold"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.4 + index * 0.1,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
