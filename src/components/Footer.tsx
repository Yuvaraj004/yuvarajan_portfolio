"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8 bg-background border-t border-slate-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Mr. Yuvarajan. All rights reserved.
                </p>

                <div className="flex items-center gap-6 text-slate-400">
                    <a href="https://github.com/Yuvaraj004" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/yuvarajan-g-55393b351" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    {/* <a href="#" className="hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a> */}
                    <a href="mailto:yuviyuvaraj0427@gmail.com" className="hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
