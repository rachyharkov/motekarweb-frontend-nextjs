import '@/styles/style.css'
import '@/styles/bootstrap.css'
import '@/public/vendors/boxicons/css/boxicons.min.css'
import '@/styles/navbar.css'
import '@/styles/AboutPage.Module.css'
import '@/styles/OurTeam.Module.css'
import 'animate.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'

import LayoutLamanWeb from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Motekar Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
      </Head>
      <LayoutLamanWeb>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </LayoutLamanWeb>
    </>
  )
}
