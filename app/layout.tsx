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
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
      <body>{children}</body>
    </html>
  )
}
