import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Do Figa ao CFO — Transforme Design em Resultado de Negócio',
  description: 'Ebook prático para Product Designers transformarem decisões de interface em métricas de negócio, ROI e argumentos para aprovar projetos no C-Level. Aprenda a falar a língua do dinheiro.',
  keywords: ['ebook design', 'figma ao cfo', 'product designer', 'ux metrics', 'roi design', 'design system', 'gestão de produto', 'design para negócios'],
  author: 'Moisés Rabelo',
  openGraph: {
    title: 'Do Figa ao CFO — Transforme Design em Resultado de Negócio',
    description: 'Ebook prático para Product Designers transformarem decisões de interface em métricas de negócio, ROI e argumentos para aprovar projetos no C-Level.',
    url: 'https://www.dofigmaocfo.com.br',
    siteName: 'Do Figma ao CFO',
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
    title: 'Do Figa ao CFO — Transforme Design em Resultado de Negócio',
    description: 'Ebook prático para Product Designers transformarem decisões de interface em métricas de negócio, ROI e argumentos para aprovar projetos no C-Level.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: 'Do Figma ao CFO — Transforme Design em Resultado de Negócio',
                description: 'Ebook prático para Product Designers transformarem decisões de interface em métricas de negócio, ROI e argumentos para aprovar projetos no C-Level.',
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
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
