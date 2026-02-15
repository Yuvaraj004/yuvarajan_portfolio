"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";

const TypingAnimation = ({ text }: { text: string }) => {
    const characters = text.split("");

    return (
        <div className="flex justify-center md:justify-start">
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.1,
                        delay: index * 0.05,
                        repeat: Infinity,
                        repeatDelay: 5,
                        repeatType: "reverse",
                    }}
                    className="text-xl md:text-2xl font-mono text-primary"
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
            {/* Background Particles/Shapes */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -50, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -70, 70, 0],
                        y: [0, 70, -70, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left space-y-6"
                    >
                        <h2 className="text-secondary font-medium tracking-wide text-lg">
                            Hello, I&apos;m
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight">
                            Mr. Yuvarajan
                        </h1>

                        <TypingAnimation text="Data Scientist | ML Engineer | AI Enthusiast" />

                        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
                            Data Science professional with experience in data analysis and the
                            development of machine learning and deep learning solutions.
                            Proficient in Python and skilled in implementing ML, DL, and AI
                            models to solve real-world problems.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
                            <Button size="lg" className="group" asChild>
                                <a href="#projects">
                                    View Projects
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="group border-slate-700 hover:border-primary/50" asChild>
                                <a href="https://drive.google.com/file/d/1h0lYfYPszHyKwGrFYjbxFOU-pCdqPyiB/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                                    <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                                    Download Resume
                                </a>
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 justify-center md:justify-start pt-8 text-slate-400">
                            <a href="https://github.com/Yuvaraj004" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/yuvarajan-g-55393b351" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <div className="h-px w-20 bg-slate-800 hidden md:block" />
                            <span className="text-sm hidden md:block">Connect with me</span>
                        </div>
                    </motion.div>

                    {/* Value Area / Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative hidden md:block"
                    >
                        <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
                            {/* Floating Elements mimicking Data Nodes */}
                            <motion.div
                                className="absolute top-0 right-0 p-4 glass-card rounded-2xl border-l-4 border-l-primary z-20"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                        <span className="text-primary font-bold">ML</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Model Accuracy</p>
                                        <p className="font-bold text-slate-200">98.5%</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-10 -left-4 p-4 glass-card rounded-2xl border-l-4 border-l-purple-500 z-20"
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <span className="text-purple-400 font-bold">AI</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Deep Learning</p>
                                        <p className="font-bold text-slate-200">Neural Networks</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Image Placeholder */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl z-10 bg-slate-800/50 flex items-center justify-center group">
                                {/* Replace src with your actual image path, e.g., "/profile.jpg" */}
                                <div className="text-slate-500 text-center p-4">
                                    <p className="mb-2 text-sm">Add your photo here</p>
                                    <p className="text-xs text-slate-600">/public/profile.jpg</p>
                                </div>
                                {/* Example of usage when you have the image:
                    <img 
                        src="/profile.jpg" 
                        alt="Mr. Yuvarajan" 
                        className="w-full h-full object-cover"
                    /> 
                    */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>

                            {/* Decorative Circle Behind */}
                            <div className="absolute inset-4 bg-gradient-to-tr from-primary/10 to-purple-500/10 rounded-full blur-2xl -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
