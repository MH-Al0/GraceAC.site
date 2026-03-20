import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GraceAC - No such thing as hidden.',
  description:
    'Open-source Minecraft anticheat for 1.19+. Rules-based detection with an ML sidecar that catches everything from blatant killaura to ghost bypass configs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
