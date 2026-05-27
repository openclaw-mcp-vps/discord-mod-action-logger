import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discord Mod Action Logger — Track Moderation Across Servers',
  description: 'Centralized dashboard for tracking moderation actions, user warnings, and ban patterns across multiple Discord servers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="39c47e1e-1816-497c-8afe-6a77b8363d64"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
