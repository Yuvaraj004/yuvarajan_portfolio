"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillsData = {
    Programming: ["Python", "SQL", "C"],
    "Machine Learning & AI": [
        "Scikit-learn",
        "TensorFlow",
        "Regression",
        "Classification",
        "Clustering",
        "Feature Engineering",
        "Model Evaluation",
        "Deep Learning",
        "NLP",
        "LLMs",
        "RAG",
        "LangChain",
        "Prompt Engineering",
        "Hugging Face"
    ],
    "Data Analysis": [
        "Pandas",
        "NumPy",
        "ETL",
        "EDA",
        "Data Cleaning",
        "Data Wrangling",
        "Data Transformation",
        "Statistical Analysis",
        "Data Visualization"
    ],
    "Software & Web": [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "REST API Design",
        "Flask",
        "FastAPI",
        "Streamlit"
    ],
    "Databases & BI": [
        "PostgreSQL",
        "MySQL",
        "SQL Query Optimization",
        "Power BI",
        "Tableau",
        "Matplotlib",
        "KPI Dashboards",
        "Excel (Pivot Tables, XLOOKUP, Power Query)"
    ],
    Tools: ["Git", "GitHub", "Jupyter Notebook", "VS Code"]
};

export default function Skills() {
    return (
        <section className="py-20 bg-background/50" id="skills">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900 mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-slate-100 mb-6 border-b border-primary/20 pb-2">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="bg-slate-800 text-slate-300 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>

                            {/* Dummy Progress Bar for visuals */}
                            <div className="mt-6">
                                <div className="text-xs text-slate-500 mb-1 flex justify-between">
                                    <span>Proficiency</span>
                                    <span>85-95%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-red-600 to-red-900"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${85 + Math.random() * 10}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
