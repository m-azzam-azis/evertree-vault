"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { TracingBeam } from "@/components/ui/tracing-beam";
import { SparklesCore } from "@/components/ui/sparkles";
import { Card, CardContent } from "@/components/ui/card";
import {
  LuUser,
  LuHeartHandshake,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuGraduationCap,
  LuCodepen,
  LuFlag,
  LuBrain,
  LuMonitor,
  LuCarFront,
} from "react-icons/lu";
import {
  SiTypescript,
  SiReact,
  SiPython,
  SiHiveBlockchain,
  SiJupyter,
} from "react-icons/si";

export default function ProfilePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const technologies = [
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <SiReact className="text-blue-400" /> },
    { name: "Python", icon: <SiPython className="text-green-400" /> },
    {
      name: "Blockchain",
      icon: <SiHiveBlockchain className="text-orange-400" />,
    },
    {
      name: "Jupyter",
      icon: <SiJupyter className="text-red-400" />,
    },
  ];

  const interests = [
    { name: "Web Dev", icon: <LuMonitor /> },
    { name: "Blockchain", icon: <LuCodepen /> },
    { name: "AI/ML", icon: <LuBrain /> },
    { name: "Formula 1", icon: <LuCarFront /> },
    { name: "Football", icon: <LuFlag /> },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="container relative z-10 px-4 pt-32 pb-10 mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
              <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                  id="tsparticlesfullpage-dark"
                  background="white"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={60}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-4 not-dark:text-white"
              >
                Hi, I&apos;m{" "}
                <span className="text-primary underline underline-offset-4">
                  Azzam
                </span>
              </motion.h1>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground not-dark:text-green-900 mb-8 max-w-2xl mx-auto"
          >
            CS Student • Developer • Vibe Coder
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center not-dark:text-green-900"
          >
            <Link
              href="https://linkedin.com/in/m-azzam-azis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/30 transition-all"
            >
              <LuLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </Link>

            <Link
              href="https://github.com/m-azzam-azis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/30 transition-all"
            >
              <LuGithub className="w-5 h-5" />
              <span>GitHub</span>
            </Link>

            <Link
              href="mailto:m.azzam.azis@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-accent/30 transition-all"
            >
              <LuMail className="w-5 h-5" />
              <span>Email</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <TracingBeam className="px-6">
        <div className="max-w-3xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Card className="mb-16 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary/30" />
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <LuUser className="text-primary" />
                  <span>About Me</span>
                </h2>

                <p className="mb-4 text-lg">
                  I&apos;m a Computer Science student from Indonesia with a
                  passion for creating technology that empowers people and
                  protects fundamental freedoms.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="mb-16">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <LuGraduationCap className="text-primary" />
                  <span>Education & Skills</span>
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-bold">Computer Science</h3>
                  <p className="text-muted-foreground">
                    University of Indonesia
                  </p>
                </div>

                <h3 className="font-bold mb-4">Technologies</h3>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center p-4 bg-background/50 rounded-lg border border-border hover:border-primary/30 transition-all"
                    >
                      <div className="text-2xl mb-2">{tech.icon}</div>
                      <span className="text-sm">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                <h3 className="font-bold mb-4">Interests</h3>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center p-4 bg-background/50 rounded-lg border border-border hover:bg-accent/10 transition-all"
                    >
                      <div className="text-2xl mb-2 text-primary">
                        {interest.icon}
                      </div>
                      <span className="text-sm text-center">
                        {interest.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <LuHeartHandshake className="text-primary" />
                  <span>Values & Beliefs</span>
                </h2>

                <p className="mb-6">I&apos;m deeply committed to:</p>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <h3 className="font-bold mb-2">Freedom of Speech</h3>
                    <p className="text-sm">
                      The cornerstone of a free society and the engine of human
                      progress.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <h3 className="font-bold mb-2">Knowledge Preservation</h3>
                    <p className="text-sm">
                      Our collective wisdom must be protected from censorship
                      and manipulation.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <h3 className="font-bold mb-2">Democratic Access</h3>
                    <p className="text-sm">
                      Technology should empower individuals and communities, not
                      centralize power.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </TracingBeam>
    </>
  );
}
