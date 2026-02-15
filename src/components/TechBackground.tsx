"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TechBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
            {/* 1. Deep Red Gradient Background */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    background: `
            radial-gradient(circle at 15% 50%, rgba(120, 0, 0, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 85% 30%, rgba(150, 0, 0, 0.25) 0%, transparent 50%),
            linear-gradient(to bottom, #050505, #1a0505 80%, #000000)
          `
                }}
            />

            {/* 2. Neural Network / Constellation Pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="neural-net" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="2" fill="#ef4444" opacity="0.5" />
                        <circle cx="80" cy="50" r="2" fill="#ef4444" opacity="0.5" />
                        <circle cx="40" cy="80" r="2" fill="#ef4444" opacity="0.5" />

                        <path d="M20 20 L80 50" stroke="#b91c1c" strokeWidth="0.5" opacity="0.3" />
                        <path d="M80 50 L40 80" stroke="#b91c1c" strokeWidth="0.5" opacity="0.3" />
                        <path d="M40 80 L20 20" stroke="#b91c1c" strokeWidth="0.5" opacity="0.3" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#neural-net)" />
            </svg>

            {/* 3. Falling Binary Code (Matrix-style but Red & Subtle) */}
            <div className="absolute inset-0 opacity-20 flex justify-around">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="text-red-500 font-mono text-xs writing-vertical-rl text-orientation-upright"
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: "120vh", opacity: [0, 1, 0] }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    >
                        {Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join(' ')}
                    </motion.div>
                ))}
            </div>

            {/* 4. Animated Data Graph Line */}
            <svg className="absolute bottom-0 left-0 w-full h-64 opacity-20" preserveAspectRatio="none">
                <motion.path
                    d="M0 100 Q 200 50, 400 100 T 800 100 T 1200 50 T 1600 100 V 200 H 0 Z"
                    fill="url(#red-gradient)"
                    initial={{ d: "M0 100 Q 200 50, 400 100 T 800 100 T 1200 50 T 1600 100 V 200 H 0 Z" }}
                    animate={{
                        d: [
                            "M0 100 Q 200 50, 400 100 T 800 100 T 1200 50 T 1600 100 V 200 H 0 Z",
                            "M0 100 Q 200 150, 400 100 T 800 100 T 1200 150 T 1600 100 V 200 H 0 Z",
                            "M0 100 Q 200 50, 400 100 T 800 100 T 1200 50 T 1600 100 V 200 H 0 Z"
                        ]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <defs>
                    <linearGradient id="red-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#dc2626" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* 5. Glowing Orbs from Previous Step */}
            <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-red-600/20 rounded-full blur-[80px] mix-blend-screen" />
            <div className="absolute bottom-[20%] left-[10%] w-64 h-64 bg-red-800/20 rounded-full blur-[80px] mix-blend-screen" />
        </div>
    );
}
