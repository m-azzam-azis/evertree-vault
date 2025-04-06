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
  LuTarget,
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

  // Potential impact goals
  const impactGoals = [
    {
      value: "10K+",
      label: "Records Preserved Annually",
      icon: <LuDatabase className="w-8 h-8" />,
      color: "rgb(136, 234, 197)",
    },
    {
      value: "150+",
      label: "Countries Reached",
      icon: <LuGlobe className="w-8 h-8" />,
      color: "rgb(152, 199, 178)",
    },
    {
      value: "90%",
      label: "Censorship Attempts Prevented",
      icon: <LuShieldAlert className="w-8 h-8" />,
      color: "rgb(126, 201, 173)",
    },
    {
      value: "100K+",
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
              <LuTarget className="w-6 h-6 text-primary" />
            </span>
            Potential Impact
          </h2>

          <Card className="rounded-2xl shadow-soft-md">
            <CardContent className="p-8">
              <p className="text-lg mb-6">
                When fully realized, EverTree Vault will transcend being just a
                technological solution—it could catalyze a societal shift toward
                information integrity and democratic knowledge access.
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
          <div className="mb-4 text-center">
            <h3 className="text-xl font-bold mb-2">Our Vision by 2030</h3>
            <p className="text-muted-foreground text-sm max-w-md">
              These metrics represent the potential scale and impact we aim to
              achieve as EverTree Vault grows and matures.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {impactGoals.map((goal, index) => (
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
                    style={{ backgroundColor: `${goal.color}20` }}
                  >
                    {goal.icon}
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
                      {goal.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">
                      {goal.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-accent/20 border border-accent/40"
            >
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span>Projected Growth Path</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
