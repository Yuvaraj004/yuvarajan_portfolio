"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experienceData = [
    {
        role: "Python Programming Intern",
        company: "Aspire Systems",
        period: "Jan 2026 – Mar 2026",
        description: [
            "Gained hands-on exposure to Python development practices.",
            "Participated in agile workflows and daily stand-ups.",
            "Experienced corporate IT environment and collaboration tools.",
        ],
    },
    {
        role: "Data Analytics Job Simulation",
        company: "Deloitte (Forage)",
        period: "Remote",
        description: [
            "Completed practical tasks in data analysis and forensic technology.",
            "Identified patterns and insights from complex datasets.",
            "Performed data cleaning and interpretation for business cases.",
        ],
    },
];

export default function Experience() {
    return (
        <section className="py-20 relative" id="experience">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4">
                        Professional Experience
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="hover:border-primary/50 transition-colors border-l-4 border-l-primary">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-slate-800 rounded-lg">
                                                <Briefcase className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl font-bold text-slate-100">
                                                    {item.role}
                                                </CardTitle>
                                                <div className="flex items-center gap-2 text-slate-400 text-sm">
                                                    <Building2 className="w-3 h-3" />
                                                    {item.company}
                                                </div>
                                            </div>
                                        </div>
                                        <Badge variant="outline" className="w-fit text-primary border-primary/20">
                                            {item.period}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {item.description.map((desc, i) => (
                                            <li key={i} className="flex items-start text-slate-300 text-sm">
                                                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0" />
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
