"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-20 relative" id="contact">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900 mb-4">
                        Get in Touch
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 rounded-3xl border border-slate-700 text-center space-y-8"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-100">
                            Let&apos;s Work Together
                        </h3>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            I&apos;m currently looking for new opportunities. Whether you have a question
                            or just want to say hi, feel free to reach out via email!
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-8">
                            <Button size="lg" className="h-16 px-8 text-lg rounded-full group" asChild>
                                <a href="mailto:yuviyuvaraj0427@gmail.com">
                                    <Mail className="mr-3 w-6 h-6 group-hover:animate-bounce" />
                                    yuviyuvaraj0427@gmail.com
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="h-16 px-8 text-lg rounded-full border-slate-600 bg-transparent hover:bg-slate-800" asChild>
                                <a href="tel:+916383874959">
                                    <Phone className="mr-3 w-6 h-6" />
                                    +91 6383874959
                                </a>
                            </Button>
                        </div>

                        <div className="flex items-center justify-center gap-4 text-slate-400">
                            <div className="flex items-center gap-2">
                                <span className="w-5 h-5 flex items-center justify-center"></span>
                                Vellore, Tamil Nadu
                            </div>
                            <span>|</span>
                            <div className="flex gap-3">
                                <a href="https://github.com/Yuvaraj004" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/yuvarajan-g-55393b351" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
