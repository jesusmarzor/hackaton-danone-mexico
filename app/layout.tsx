import { Footer } from 'components/Footer'
import './globals.css'
import { Header } from 'components/Header'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Danone Mexico Web',
  description: 'Website created for the NUWE + Danone Mexico hackathon.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-violetBlue text-md`}>
        <main className="min-h-screen flex flex-col">
          <Providers>
            <>
              <Header/>
                <div className="max-w-7xl mx-auto w-screen">
                  {children}
                </div>
              <Footer/>
            </>
          </Providers>
        </main>
      </body>
    </html>
  )
}
