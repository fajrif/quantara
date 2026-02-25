"use client"

import { motion } from "motion/react"

const leftItems = [
    "Buy-side and sell-side deal origination",
    "Transaction advisory and structuring",
    "Financing solutions and fundraising support",
    "Business and transaction strategy analysis",
]

const rightItems = [
    "Investor and strategic partner introductions",
    "Due diligence coordination",
    "Cross-border deal navigation",
]

function SupportItem({ text, index }: { text: string; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <div className="flex items-start gap-3 py-5">
                <span className="mt-1 text-primary text-xs">▪</span>
                <p className="text-lg font-normal text-primary">{text}</p>
            </div>
            <div className="border-t border-primary/15" />
        </motion.div>
    )
}

export function WhatWeSupport() {
    return (
        <section id="what-we-support" className="bg-white pb-10">
            <div className="container mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-light uppercase tracking-wide text-primary md:text-4xl">
                      What We Support
                    </h2>
                    <p className="mt-3 max-w-xl font-light leading-relaxed">
                      Our advisory services cover the full transaction lifecycle, including:
                    </p>
                </motion.div>

                {/* Two-column list */}
                <div className="mt-10 grid grid-cols-1 gap-x-24 md:grid-cols-2">
                    {/* Left column */}
                    <div>
                        {leftItems.map((item, i) => (
                            <SupportItem key={item} text={item} index={i} />
                        ))}
                    </div>

                    {/* Right column */}
                    <div>
                        {rightItems.map((item, i) => (
                            <SupportItem key={item} text={item} index={i + leftItems.length} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
