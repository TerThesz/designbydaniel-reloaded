import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import bundle from '../public/bundle/bundle';

function App({ Component, pageProps }: AppProps) {
  useEffect(bundle, []);

  return <Component {...pageProps} />
}

export default App;
