"use client";

import { useState } from "react";

interface AccordionProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

export default function Accordion({ title, subtitle, children }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#EAEAEA] py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-start text-left focus:outline-none group"
            >
                <div>
                    <h3 className="font-labHeading text-xl font-bold group-hover:text-[#0055FF] transition-colors">
                        {title}
                    </h3>
                    <p className="font-mono text-sm text-gray-500 mt-1">{subtitle}</p>
                </div>
                <span className="text-2xl font-light text-gray-400 ml-4">
                    {isOpen ? "−" : "+"}
                </span>
            </button>

            {isOpen && (
                <div className="mt-4 prose prose-sm max-w-none text-gray-700 font-labBody">
                    {children}
                </div>
            )}
        </div>
    );
}