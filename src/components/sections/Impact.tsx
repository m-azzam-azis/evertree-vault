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
  LuChartBar,
  LuCoins,
  LuTrendingUp,
  LuChartPie,
  LuInfo,
} from "react-icons/lu";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Impact() {
  // Impact categories
  const impactPoints = [
    {
      title: "Democratizing Truth",
      description:
        "Breaking the monopoly on information controlled by powerful entities",
      icon: <LuUsers className="w-6 h-6" />,
      color: "rgb(136, 234, 197)",
      metrics: {
        current: "2%",
        target: "15%",
        label: "sensitive information protected from censorship",
      },
    },
    {
      title: "Preventing Historical Revisionism",
      description:
        "Ensuring that uncomfortable truths remain accessible for learning",
      icon: <LuGlobe className="w-6 h-6" />,
      color: "rgb(152, 199, 178)",
      metrics: {
        current: "67",
        target: "10,000+",
        label: "historical events permanently documented",
      },
    },
    {
      title: "Empowering the Marginalized",
      description:
        "Giving voice to those historically silenced by providing an immutable platform",
      icon: <LuScale className="w-6 h-6" />,
      color: "rgb(126, 201, 173)",
      metrics: {
        current: "12",
        target: "1,500+",
        label: "independent journalists supported",
      },
    },
    {
      title: "Safeguarding Vulnerable Knowledge",
      description:
        "Protecting cultural heritage and scientific discoveries from erasure",
      icon: <LuShield className="w-6 h-6" />,
      color: "rgb(170, 204, 192)",
      metrics: {
        current: "543",
        target: "50,000+",
        label: "scientific papers preserved",
      },
    },
  ];

  // Potential impact goals
  const impactGoals = [
    {
      value: "1M+",
      label: "Records Preserved Annually",
      icon: <LuDatabase className="w-8 h-8" />,
      color: "rgb(136, 234, 197)",
      description:
        "Preservation of critical documents, evidence, and research across multiple fields",
    },
    {
      value: "150+",
      label: "Countries Reached",
      icon: <LuGlobe className="w-8 h-8" />,
      color: "rgb(152, 199, 178)",
      description:
        "Global reach ensuring information access in nations with high censorship risks",
    },
    {
      value: "90%",
      label: "Censorship Attempts Prevented",
      icon: <LuShieldAlert className="w-8 h-8" />,
      color: "rgb(126, 201, 173)",
      description:
        "Resistance to takedown requests through decentralized architecture",
    },
    {
      value: "100K+",
      label: "Historical Events Documented",
      icon: <LuBookOpen className="w-8 h-8" />,
      color: "rgb(170, 204, 192)",
      description:
        "Comprehensive archive of significant historical moments with evidence",
    },
  ];

  // Bounty data by category
  const bountyData = [
    {
      category: "Politics & Governance",
      count: 128,
      avgReward: 350,
      highest: 15000,
    },
    {
      category: "Corporate Misconduct",
      count: 97,
      avgReward: 430,
      highest: 22000,
    },
    {
      category: "Scientific Research",
      count: 76,
      avgReward: 280,
      highest: 8000,
    },
    {
      category: "Environmental Issues",
      count: 53,
      avgReward: 320,
      highest: 12000,
    },
    {
      category: "Human Rights",
      count: 112,
      avgReward: 380,
      highest: 18000,
    },
  ];

  // Projected growth data
  const growthData = [
    { year: 2025, users: 5000, content: 25000, bounties: 500 },
    { year: 2026, users: 30000, content: 180000, bounties: 2400 },
    { year: 2027, users: 120000, content: 650000, bounties: 8500 },
    { year: 2028, users: 380000, content: 1800000, bounties: 24000 },
    { year: 2029, users: 850000, content: 4200000, bounties: 65000 },
    { year: 2030, users: 1500000, content: 10000000, bounties: 150000 },
  ];

  return (
    <section id="impact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col lg:flex-row gap-10 items-center">
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
                  When fully realized, EverTree Vault will transcend being just
                  a technological solution—it could catalyze a societal shift
                  toward information integrity and democratic knowledge access.
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
                      <div className="w-full">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {point.title}
                        </h3>
                        <p className="text-foreground/80 mb-3">
                          {point.description}
                        </p>

                        <div className="flex justify-between items-center bg-background/50 rounded-lg p-2 border border-border">
                          <div className="text-xs">
                            <span className="text-muted-foreground">
                              Current:
                            </span>
                            <span className="font-bold ml-1">
                              {point.metrics.current}
                            </span>
                          </div>
                          <div className="h-1 flex-1 mx-4 bg-border rounded-full overflow-hidden">
                            <motion.div
                              className="h-full"
                              style={{ backgroundColor: point.color }}
                              initial={{ width: "5%" }}
                              whileInView={{ width: "100%" }}
                              transition={{ duration: 1.5 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <div className="text-xs">
                            <span className="text-muted-foreground">
                              Target:
                            </span>
                            <span className="font-bold ml-1">
                              {point.metrics.target}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-center mt-1 text-muted-foreground">
                          {point.metrics.label}
                        </p>
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
                  <p className="text-xs mt-2 text-foreground/70">
                    {goal.description}
                  </p>
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl shadow-soft-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <LuChartBar className="w-5 h-5 mr-2 text-primary" />
                  Projected Growth (2025-2030)
                </h3>

                {/* Simple Table-based Growth Visualization */}
                <div className="overflow-x-auto mb-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Year</TableHead>
                        <TableHead>Users</TableHead>
                        <TableHead>Content Items</TableHead>
                        <TableHead>Active Bounties</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[0, 2, 5].map((index) => (
                        <TableRow key={index}>
                          <TableCell className="font-bold">
                            {growthData[index].year}
                          </TableCell>
                          <TableCell>
                            {growthData[index].users.toLocaleString()}
                          </TableCell>
                          <TableCell>
                            {growthData[index].content.toLocaleString()}
                          </TableCell>
                          <TableCell>
                            {growthData[index].bounties.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Growth progression visualization */}
                <div className="space-y-5 mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium flex items-center">
                        <LuUsers className="w-4 h-4 mr-1" /> User Growth
                      </span>
                      <span className="text-xs text-primary font-mono">
                        5K → 1.5M
                      </span>
                    </div>
                    <div className="space-y-1">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <motion.div
                          key={index}
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${
                              (growthData[index].users / 1500000) * 100
                            }%`,
                          }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="h-1 bg-primary rounded-full"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium flex items-center">
                        <LuDatabase className="w-4 h-4 mr-1" /> Content Growth
                      </span>
                      <span className="text-xs text-primary font-mono">
                        25K → 10M
                      </span>
                    </div>
                    <div className="space-y-1">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <motion.div
                          key={index}
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${
                              (growthData[index].content / 10000000) * 100
                            }%`,
                          }}
                          transition={{ duration: 1, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="h-1 bg-accent rounded-full"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium flex items-center">
                        <LuTarget className="w-4 h-4 mr-1" /> Bounty Growth
                      </span>
                      <span className="text-xs text-primary font-mono">
                        500 → 150K
                      </span>
                    </div>
                    <div className="space-y-1">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <motion.div
                          key={index}
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${
                              (growthData[index].bounties / 150000) * 100
                            }%`,
                          }}
                          transition={{ duration: 1, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="h-1 bg-primary/60 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="text-xs text-muted-foreground">Users</p>
                    <p className="font-bold">1.5M+</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      Content Items
                    </p>
                    <p className="font-bold">10M+</p>
                  </div>
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <p className="text-xs text-muted-foreground">Bounties</p>
                    <p className="font-bold">150K+</p>
                  </div>
                </div>

                <div className="mt-4 text-xs text-center text-muted-foreground">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-center justify-center w-full">
                        <LuInfo className="w-3 h-3 mr-1" /> Based on adoption
                        patterns of similar platforms
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs text-xs">
                          Projections extrapolated from growth rates of
                          platforms like Signal, Substack, and ICP adoption
                          curves, adjusted for the unique value proposition of
                          EverTree Vault.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl shadow-soft-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <LuCoins className="w-5 h-5 mr-2 text-primary" />
                  Bounty System Impact
                </h3>

                {/* Simple Bar Chart Visualization */}
                <div className="space-y-4 mb-6">
                  <p className="text-sm mb-3">
                    Truth bounties create economic incentives for uncovering and
                    preserving critical information across various domains:
                  </p>

                  {bountyData.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <div className="font-medium truncate mr-2">
                          {item.category}
                          <span className="text-xs font-normal text-muted-foreground ml-1">
                            ({item.count} bounties)
                          </span>
                        </div>
                        <div className="text-xs font-mono">
                          Avg: {item.avgReward} ICP
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                          >
                            <Progress
                              value={(item.count / 128) * 100}
                              className="h-2"
                            />
                          </motion.div>
                        </div>
                        <div
                          className="text-xs font-mono bg-primary/10 px-1.5 py-0.5 rounded"
                          title="Highest bounty in this category"
                        >
                          {item.highest} ICP
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/10 rounded-lg border border-accent/30 p-4 mb-6">
                  <h4 className="text-sm font-bold mb-2">
                    Real-World Impact Example
                  </h4>
                  <p className="text-sm mb-2">
                    A 22,000 ICP bounty ($396,000 at projected value) could
                    incentivize the safe disclosure of documents revealing
                    corporate misconduct that traditional whistleblowing
                    channels have failed to expose.
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Contributors receive funds directly to their anonymous ICP
                    wallets, maintaining complete privacy while enabling
                    financial sustainability.
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="text-xs text-muted-foreground">Categories</p>
                    <p className="font-bold">{bountyData.length}</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <p className="text-xs text-muted-foreground">Avg Reward</p>
                    <p className="font-bold">350 ICP</p>
                  </div>
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      Highest Reward
                    </p>
                    <p className="font-bold">22K ICP</p>
                  </div>
                </div>

                <div className="mt-4 text-xs text-center">
                  <div className="inline-flex items-center px-4 py-1 rounded text-muted-foreground">
                    <LuTrendingUp className="w-3 h-3 mr-1 text-accent" />
                    Bounty values increase with information significance
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl shadow-soft-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <LuChartBar className="w-5 h-5 mr-2 text-primary" />
                Key Performance Indicators
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm flex items-center">
                    <LuChartPie className="w-4 h-4 mr-1 text-primary" /> Content
                    Distribution
                  </h4>
                  <p className="text-xs text-muted-foreground mb-1">
                    Types of information preserved on the platform
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Investigative Reporting</span>
                      <span>35%</span>
                    </div>
                    <Progress value={35} className="h-1.5" />

                    <div className="flex justify-between text-xs">
                      <span>Scientific Research</span>
                      <span>28%</span>
                    </div>
                    <Progress value={28} className="h-1.5" />

                    <div className="flex justify-between text-xs">
                      <span>Historical Documentation</span>
                      <span>22%</span>
                    </div>
                    <Progress value={22} className="h-1.5" />

                    <div className="flex justify-between text-xs">
                      <span>Corporate Evidence</span>
                      <span>15%</span>
                    </div>
                    <Progress value={15} className="h-1.5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm flex items-center">
                    <LuUsers className="w-4 h-4 mr-1 text-primary" />{" "}
                    Contributor Network
                  </h4>
                  <p className="text-xs text-muted-foreground mb-1">
                    How information providers interact with the system
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Anonymous Contributors</span>
                      <span>72%</span>
                    </div>
                    <Progress value={72} className="h-1.5" />

                    <div className="flex justify-between text-xs">
                      <span>Verified Journalists</span>
                      <span>18%</span>
                    </div>
                    <Progress value={18} className="h-1.5" />

                    <div className="flex justify-between text-xs">
                      <span>Academic Sources</span>
                      <span>8%</span>
                    </div>
                    <Progress value={8} className="h-1.5" />

                    <div className="flex justify-between text-xs">
                      <span>Institutional Partners</span>
                      <span>2%</span>
                    </div>
                    <Progress value={2} className="h-1.5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm flex items-center">
                    <LuShield className="w-4 h-4 mr-1 text-primary" />{" "}
                    Protection Mechanisms
                  </h4>
                  <p className="text-xs text-muted-foreground mb-1">
                    Technical solutions for information safety
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Distributed Storage</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} className="h-1.5" />

                    <div className="flex justify-between text-xs">
                      <span>Zero-Knowledge Proofs</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-1.5" />

                    <div className="flex justify-between text-xs">
                      <span>Cryptographic Verification</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} className="h-1.5" />

                    <div className="flex justify-between text-xs">
                      <span>Censorship Resistance</span>
                      <span>98%</span>
                    </div>
                    <Progress value={98} className="h-1.5" />
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  EverTree Vault aims to establish a self-sustaining ecosystem
                  where truth preservation becomes financially viable and
                  censorship attempts become technically infeasible.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
