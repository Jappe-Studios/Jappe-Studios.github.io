'use client';

import 'antd/dist/reset.css'; // Ant Design global styles reset
import './globals.css'; // Global styles

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;