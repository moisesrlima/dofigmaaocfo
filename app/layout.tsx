import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kit SABATINA 2.0 — Método Blindagem de Evidências de Ideias',
  description: 'Prepare as evidências da sua ideia e sobreviva às perguntas que decidem com o Kit SABATINA 2.0.',
  keywords: ['kit sabatina 2.0', 'blindagem de evidências de ideias', 'business case', 'decisão de negócio', 'apresentação executiva', 'métricas de impacto'],
  author: 'Moisés Rabelo',
  openGraph: {
    title: 'Kit SABATINA 2.0 — Método Blindagem de Evidências de Ideias',
    description: 'Prepare as evidências da sua ideia e sobreviva às perguntas que decidem com o Kit SABATINA 2.0.',
    url: 'https://www.dofigmaocfo.com.br',
    siteName: 'SABATINA',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://i.postimg.cc/QCSyy65P/Gemini-Generated-Image-nl2l5unl2l5unl2l-optimized.jpg',
        width: 1200,
        height: 630,
        alt: 'Capa do Ebook Do Figma ao CFO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kit SABATINA 2.0 — Método Blindagem de Evidências de Ideias',
    description: 'Prepare as evidências da sua ideia e sobreviva às perguntas que decidem com o Kit SABATINA 2.0.',
    images: ['https://i.postimg.cc/QCSyy65P/Gemini-Generated-Image-nl2l5unl2l5unl2l-optimized.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#09111d' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9VFR2PW2EV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9VFR2PW2EV');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: 'Kit SABATINA 2.0 — Método Blindagem de Evidências de Ideias',
                description: 'Kit prático para preparar as evidências de ideias, produtos e projetos antes de uma decisão de negócio.',
                image: 'https://i.postimg.cc/QCSyy65P/Gemini-Generated-Image-nl2l5unl2l5unl2l-optimized.jpg',
                brand: { '@type': 'Brand', name: 'Moisés Rabelo' },
                offers: {
                  '@type': 'Offer',
                  url: 'https://pay.kiwify.com.br/Zyk82qK',
                  priceCurrency: 'BRL',
                  price: '47.00',
                  availability: 'https://schema.org/InStock',
                  seller: { '@type': 'Person', name: 'Moisés Rabelo' },
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  reviewCount: '127',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dofigmaocfo.com.br' },
                  { '@type': 'ListItem', position: 2, name: 'Ebook Do Figma ao CFO' },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
