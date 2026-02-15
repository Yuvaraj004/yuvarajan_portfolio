"use client";

import { useEffect, useState } from "react";

export default function TechBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px),
                            linear-gradient(to bottom, #333 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                    maskImage: "radial-gradient(circle at center, black, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)"
                }}
            />

            {/* Tech Circuit Lines - SVG Overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M10 10 h80 v80 h-80 z" fill="none" />
                        <path d="M20 20 h10 v10 h-10 z" fill="rgba(220, 38, 38, 0.1)" />
                        <path d="M70 70 h10 v10 h-10 z" fill="rgba(220, 38, 38, 0.1)" />
                        <path d="M50 10 v20" stroke="rgba(220, 38, 38, 0.2)" strokeWidth="1" />
                        <path d="M10 50 h20" stroke="rgba(220, 38, 38, 0.2)" strokeWidth="1" />
                        <path d="M90 50 h-20" stroke="rgba(220, 38, 38, 0.2)" strokeWidth="1" />
                        <path d="M50 90 v-20" stroke="rgba(220, 38, 38, 0.2)" strokeWidth="1" />
                        <circle cx="50" cy="50" r="2" fill="rgba(220, 38, 38, 0.3)" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>

            {/* Animated Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
    );
}
