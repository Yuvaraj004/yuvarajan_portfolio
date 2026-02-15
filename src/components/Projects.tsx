"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "Farm Assistant",
        description: "Integrated website with Machine Learning for smarter farming.",
        details: [
            "Django-based web application",
            "Crop prediction using soil and weather data",
            "Plant disease detection using Deep Learning",
        ],
        tags: ["Python", "Django", "Machine Learning", "Deep Learning"],
        icon: <Zap className="w-10 h-10 text-yellow-400" />,
        gradient: "from-green-500/20 to-emerald-700/20",
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
        icon: <Layers className="w-10 h-10 text-blue-400" />,
        gradient: "from-blue-500/20 to-indigo-700/20",
    },
];

export default function Projects() {
    return (
        <section className="py-20 bg-background/50" id="projects">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4">
                        Projects
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className={`group relative p-8 rounded-2xl overflow-hidden glass-card border border-slate-800 hover:border-primary/50 transition-all`}
                        >
                            {/* Background Gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-700 group-hover:border-primary/50 transition-colors">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-2">
                                        <a href="#" className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-6">
                                    {project.description}
                                </p>

                                <ul className="mb-6 space-y-2 text-sm text-slate-300">
                                    {project.details.map((detail, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="bg-slate-900/50 text-slate-300 border-slate-700">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
                                    <Button variant="ghost" className="group/btn hover:text-primary hover:bg-transparent p-0">
                                        View Details <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">-&gt;</span>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
