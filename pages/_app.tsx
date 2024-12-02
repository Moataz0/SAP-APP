import '../styles/globals.css'
import "@ui5/webcomponents-react/dist/Assets";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
