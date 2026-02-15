"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const educationData = [
    {
        institution: "Vellore Institute of Technology",
        degree: "M.Sc Data Science",
        period: "2024–Present",
        grade: "CGPA: 8.65 / 10",
        description: "Specializing in Advanced Machine Learning, Big Data Analytics, and AI.",
    },
    {
        institution: "Vellore Institute of Technology",
        degree: "Bachelor of Computer Applications (BCA)",
        period: "2021–2024",
        grade: "CGPA: 8.76 / 10",
        description: "Core foundation in Computer Science, Programming, and Database Management.",
    },
    {
        institution: "King’s Matriculation School",
        degree: "Higher Secondary",
        period: "Completed",
        grade: "12th: 89.5% | 10th: 82%",
        description: "Pupil Leader (2 years). Active in academic and extracurricular leadership roles.",
    },
];

export default function Education() {
    return (
        <section className="py-20 relative overflow-hidden" id="education">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4">
                        Education
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2" />

                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative flex items-center justify-between mb-12 md:mb-20 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                }`}
                        >
                            <div className="hidden md:block w-5/12" />

                            {/* Timeline Node */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-primary z-10">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            </div>

                            <div className="pl-10 md:pl-0 w-full md:w-5/12">
                                <Card className="hover:border-primary/50 transition-colors">
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-start mb-2">
                                            <Badge variant="secondary" className="mb-2">
                                                {item.period}
                                            </Badge>
                                            <GraduationCap className="w-5 h-5 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl font-bold text-slate-100">
                                            {item.degree}
                                        </CardTitle>
                                        <p className="text-primary font-medium text-sm">{item.institution}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center text-sm font-semibold text-slate-300">
                                            <span className="bg-slate-800 px-3 py-1 rounded-full text-xs">
                                                {item.grade}
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
