import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

const GTM_ID = 'GTM-WVHXQTW4';

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
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
    </Script>

    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Do Nogi</title>
    </head>
      <body>
      {children}
      <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
      />
      </body>
    </html>
  )
}
