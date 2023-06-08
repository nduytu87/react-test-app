import { rest } from 'msw';

export const authHandler = rest.post(`/login`, (req, res, ctx) => {
  const mockResponse = {
    token: 'token123',
  };
  return res(ctx.json(mockResponse));
});
