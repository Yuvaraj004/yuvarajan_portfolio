"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";

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
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4">
                        Get in Touch
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-slate-100">
                            Let&apos;s Work Together
                        </h3>
                        <p className="text-slate-400 text-lg">
                            I&apos;m currently looking for new opportunities. Whether you have a question
                            or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <a
                                href="mailto:yuviyuvaraj0427@gmail.com"
                                className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors"
                            >
                                <div className="p-3 bg-slate-800 rounded-full">
                                    <Mail className="w-6 h-6" />
                                </div>
                                yuviyuvaraj0427@gmail.com
                            </a>
                            <a
                                href="tel:+916383874959"
                                className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors"
                            >
                                <div className="p-3 bg-slate-800 rounded-full">
                                    <Phone className="w-6 h-6" />
                                </div>
                                +91 6383874959
                            </a>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="p-3 bg-slate-800 rounded-full">
                                    <span className="w-6 h-6 flex items-center justify-center font-bold">📍</span>
                                </div>
                                Vellore, Tamil Nadu
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground border-slate-700" asChild>
                                <a href="https://github.com/Yuvaraj004" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground border-slate-700" asChild>
                                <a href="https://www.linkedin.com/in/yuvarajan-g-55393b351" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl border border-slate-700"
                    >
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Name</label>
                                <Input placeholder="Your Name" className="bg-slate-900/50 border-slate-700 focus-visible:ring-primary" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email</label>
                                <Input type="email" placeholder="your@email.com" className="bg-slate-900/50 border-slate-700 focus-visible:ring-primary" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Message</label>
                                <Textarea placeholder="What's on your mind?" className="min-h-[120px] bg-slate-900/50 border-slate-700 focus-visible:ring-primary" />
                            </div>
                            <Button className="w-full group">
                                Send Message
                                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
