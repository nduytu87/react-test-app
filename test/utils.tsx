import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';
import { setupServer } from 'msw/node';

import { AppStore, RootState, makeStore } from '@/store/config';

import { handlers } from './handlers';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store. For
// future dependencies, such as wanting to test with react-router, you can extend
// this interface to accept a path and route and use those in a <MemoryRouter />
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const render = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = makeStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
};

const server = setupServer(...handlers);

// re-export everything from @testing-library
export * from '@testing-library/react';

export { render, server };
