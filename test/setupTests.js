import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { server } from './utils';

// console.log('SETUP TESTS');

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

// Fix window.matchMedia is not a function in Jest
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

// Mock the useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
