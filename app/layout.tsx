import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Do Nogi!',
  description: 'Find Your Lost Pet with Ease in Warsaw!',
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
