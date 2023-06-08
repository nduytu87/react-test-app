import type { NextApiHandler } from 'next';

const loginHandler: NextApiHandler = async (request, response) => {
  if (request.method === 'POST') {
    const { username, password } = request.body;
    // simulate IO latency
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (username === 'admin' && password === 'password123') {
      response.status(200).json({ message: 'Login successful' });
    } else {
      response.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    response.status(405).json({ message: 'Method not allowed' });
  }
};

export default loginHandler;
