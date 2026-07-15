"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const educationData = [
    {
        institution: "Vellore Institute of Technology",
        degree: "M.Sc Data Science",
        period: "2024–Present",
        grade: "CGPA: 8.72 / 10",
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

const certificationsData = [
    {
        title: "Data Analytics Job Simulation",
        issuer: "Deloitte (Forage)",
        description: "Completed practical tasks in forensic technology and data analysis, resolving data cleaning and interpretation issues for client business cases.",
    },
    {
        title: "Python and SQL for Data Science",
        issuer: "Scaler Topics",
        description: "Comprehensive training in analytical Python libraries, SQL database schema queries, and data extraction pipelines.",
    },
    {
        title: "AI & Machine Learning Projects",
        issuer: "Simplilearn",
        description: "Hands-on project work developing and evaluating machine learning classification, regression, and clustering models.",
    },
    {
        title: "Introduction to Microsoft Excel",
        issuer: "Microsoft",
        description: "Core proficiency in spreadsheets, data organization, lookup functions, pivot tables, and professional reporting.",
    },
    {
        title: "Power BI Data Modeling with DAX",
        issuer: "Microsoft / Coursera",
        description: "Advanced modeling techniques using Data Analysis Expressions (DAX) to build scalable reports and KPI metrics.",
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
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900 mb-4">
                        Education
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="relative max-w-4xl mx-auto mb-24">
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

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-24 mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900 mb-4">
                        Certifications & Training
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {certificationsData.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:border-primary/50 transition-all hover:bg-slate-900/40 bg-zinc-950 border-slate-800">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start gap-4">
                                        <CardTitle className="text-lg font-bold text-slate-100 line-clamp-2">
                                            {cert.title}
                                        </CardTitle>
                                        <Award className="w-6 h-6 text-primary flex-shrink-0" />
                                    </div>
                                    <p className="text-primary/80 font-medium text-xs tracking-wider uppercase mt-1">{cert.issuer}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        {cert.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
