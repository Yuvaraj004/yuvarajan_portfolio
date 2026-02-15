"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const languages = [
    { name: "Tamil", level: "Read, Write & Speak" },
    { name: "English", level: "Read, Write & Speak" },
    { name: "Telugu", level: "Speak Only" },
];

export default function Languages() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900 mb-4">
                        Languages
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
                    {languages.map((lang, index) => (
                        <motion.div
                            key={lang.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card px-8 py-6 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors"
                        >
                            <h3 className="text-2xl font-bold text-slate-100 mb-2">
                                {lang.name}
                            </h3>
                            <Badge variant="secondary" className="bg-slate-800 text-primary">
                                {lang.level}
                            </Badge>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
