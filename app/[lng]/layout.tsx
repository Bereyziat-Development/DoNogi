import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import { languages } from '@/app/i18n/settings';
import { PageTypes } from '@/@types/page-types';
import { dir } from 'i18next';

const GTM_ID = 'GTM-WVHXQTW4';
const GA_MEASUREMENT_ID = 'G-33EXQF2MF3';

export const metadata: Metadata = {
  title: 'Do Nogi!',
  description: 'Find Your Lost Pet with Ease in Warsaw!',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
} & PageTypes) {
  return (
    <html lang={lng} dir={dir(lng)}>
      {/* Google Tag Manager Script */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!= 'dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
      </Script>

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <title>Do Nogi</title>
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
