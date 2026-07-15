"use client";

import { motion } from "framer-motion";
import { Activity, ExternalLink, Film, Github, Layers, Zap, MessageSquare, TrendingUp, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "Enterprise RAG AI Assistant",
        description: "Retrieval-Augmented Generation chatbot for PDF document analysis.",
        details: [
            "Developed a Retrieval-Augmented Generation chatbot to answer questions from PDF documents using LLMs, integrating LangChain and OpenAI/Gemini APIs for context-aware responses.",
            "Implemented semantic search with Sentence Transformers and deployed an interactive Streamlit application for document-based AI conversations.",
        ],
        tags: ["Python", "LangChain", "FAISS", "Hugging Face", "Streamlit", "APIs"],
        icon: <MessageSquare className="w-10 h-10 text-red-500" />,
        gradient: "from-red-500/20 to-zinc-900/20",
    },
    {
        title: "Smart Retail Analytics & Inventory Management System",
        description: "End-to-end retail analytics platform automating sales and inventory reporting.",
        details: [
            "Designed an end-to-end retail analytics platform automating sales and inventory reporting for 100K+ transaction records; built ETL pipeline and RESTful APIs with full CRUD operations.",
            "Optimized complex SQL queries and database schema, reducing report generation time by 40%.",
        ],
        tags: ["Python", "Flask", "PostgreSQL", "Power BI", "REST API", "SQL Query Optimization"],
        icon: <TrendingUp className="w-10 h-10 text-orange-500" />,
        gradient: "from-orange-500/20 to-zinc-900/20",
    },
    {
        title: "Customer Shopping Behavior Analysis",
        description: "ETL pipeline and interactive dashboard analyzing shopping trends.",
        details: [
            "Built an end-to-end ETL pipeline to extract, clean, and transform a retail dataset of 3,900 customer records across 18 attributes using Python (Pandas), then loaded it into PostgreSQL.",
            "Wrote optimized SQL queries to analyze customer behavior across 4 product categories, 50 states, and 6 payment methods, identifying purchase and discount trends totaling $233K+.",
            "Developed an interactive Power BI dashboard visualizing KPIs including average purchase value, discount usage, subscription rate, and review ratings for stakeholder reporting.",
        ],
        tags: ["Python", "PostgreSQL", "Power BI", "Pandas", "ETL", "SQL Query Optimization"],
        icon: <ShoppingBag className="w-10 h-10 text-blue-500" />,
        gradient: "from-blue-500/20 to-zinc-900/20",
    },
    {
        title: "Emotion-Based Movie Recommendation System",
        description: "Personalized movie suggestions based on user emotions.",
        details: [
            "Used scikit-learn to classify user emotions with machine learning models.",
            "Applied pandas for data preprocessing and content-based filtering.",
            "Developed an interactive interface using Streamlit.",
        ],
        tags: ["Python", "scikit-learn", "pandas", "Streamlit"],
        icon: <Film className="w-10 h-10 text-red-500" />,
        gradient: "from-red-500/20 to-red-900/20",
    },
    {
        title: "Farm Assistant",
        description: "Integrated website with Machine Learning for smarter farming.",
        details: [
            "Django-based web application",
            "Crop prediction using soil and weather data",
            "Plant disease detection using Deep Learning",
        ],
        tags: ["Python", "Django", "Machine Learning", "Deep Learning"],
        icon: <Zap className="w-10 h-10 text-yellow-500" />,
        gradient: "from-red-500/20 to-orange-700/20",
    },
    {
        title: "Cephalometric Landmark Detection",
        description: "Medical AI solution for X-ray analysis.",
        details: [
            "Vision Transformer (ViT) model",
            "Direct coordinate prediction",
            "Applied to medical X-ray analysis",
        ],
        tags: ["Python", "PyTorch", "ViT", "Computer Vision"],
        icon: <Layers className="w-10 h-10 text-blue-500" />,
        gradient: "from-red-500/20 to-blue-900/20",
    },
    {
        title: "AI-Based Oral Cancer Prediction System",
        description: "Machine learning and image analysis system for oral cancer screening.",
        details: [
            "Developed a machine learning and image analysis system using oral cavity images.",
            "Implemented image preprocessing and pattern identification to detect abnormal tissues.",
            "Designed an intuitive web interface for clinical assistance and early warning support.",
        ],
        tags: ["Python", "Machine Learning", "Computer Vision", "Streamlit"],
        icon: <Activity className="w-10 h-10 text-emerald-500" />,
        gradient: "from-red-500/20 to-emerald-900/20",
    },
];

export default function Projects() {
    return (
        <section className="py-20 bg-black" id="projects">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 mb-4">
                        Projects
                    </h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className={`group relative p-8 rounded-2xl overflow-hidden glass-card border border-gray-800 hover:border-red-500/50 transition-all bg-zinc-950`}
                        >
                            {/* Background Gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br from-red-900/10 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 group-hover:border-red-500/50 transition-colors">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-2">
                                        <a href="https://github.com/Yuvaraj004" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-gray-400 hover:text-white">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-red-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 text-sm">
                                    {project.description}
                                </p>

                                <ul className="mb-6 space-y-2 text-sm text-gray-300 flex-grow">
                                    {project.details.map((detail, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2 mt-1.5 flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="bg-zinc-900 text-gray-300 border-zinc-800 hover:bg-red-900/30 hover:text-red-200">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
