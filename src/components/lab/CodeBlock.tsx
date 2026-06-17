"use client";

import { useState } from "react";

interface CodeBlockProps {
  language: string;
  code: string;
  filename?: string;
}

export default function CodeBlock({ language, code, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-[#EAEAEA] bg-[#111111] text-gray-300 font-mono text-sm shadow-sm">
      <div className="flex justify-between items-center px-4 py-2 bg-[#1A1A1A] border-b border-[#333]">
        <span className="text-gray-400 text-xs tracking-wider">
          {filename || language.toUpperCase()}
        </span>
        <button 
          onClick={handleCopy}
          className="text-xs hover:text-white transition-colors"
        >
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
