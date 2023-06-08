import type { AppProps } from 'next/app';

import { AppSideBar } from '@/features/layout/components';

import '@/styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppSideBar />
      <div className="p-4 sm:ml-64 bg-slate-300 h-screen text-slate-800">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
