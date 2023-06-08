import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { AppSideBar } from '@/features/layout/components';
import { store } from '@/store/config';

import 'antd/dist/reset.css';
import '@/styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppSideBar />
      <div className="p-4 sm:ml-64 bg-slate-300 h-screen text-slate-800">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
