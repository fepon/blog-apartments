import { Layout } from '@components/index'

import 'tailwindcss/tailwind.css'
import '@styles/global.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
