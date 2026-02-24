import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })

export const metadata: Metadata = {
    title: "Quantara Strategic - Connecting Capital with Strategy",
    description: "Quantara Strategic operates as both deal-maker and strategic partner",
    metadataBase: new URL("https://quantara.id"),
    openGraph: {
        title: "Quantara Strategic - Connecting Capital with Strategy",
        description: "Quantara Strategic operates as both deal-maker and strategic partner",
        url: "https://quantara.id",
        siteName: "Quantara Strategic",
        images: [
            {
                url: "https://quantara.id/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Quantara Strategic Logo",
                type: "image/png",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Quantara Strategic - Connecting Capital with Strategy",
        description: "Quantara Strategic operates as both deal-maker and strategic partner",
        images: ["https://quantara.id/images/og-image.png"],
    },
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/apple-icon.png",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={`${inter.className} antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
