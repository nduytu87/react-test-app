import { rest } from 'msw';

import { render, fireEvent, waitFor, server, screen } from '@/test/utils';

import { LoginForm } from './LoginForm';

describe('AppSideBar', () => {
  it('displays success message after successful login', async () => {
    // Arrange
    render(<LoginForm />);

    // Act
    // Fill in the form fields
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'admin' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Assert
    await waitFor(() => {
      expect(screen.getByText('Logged in successfully')).toBeInTheDocument();
    });
  });
  it('displays failure message after login fail', async () => {
    server.use(
      rest.post(`/login`, (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    // Arrange
    render(<LoginForm />);

    // Act
    // Fill in the form fields
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'admin' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Assert
    await waitFor(() => {
      expect(screen.getByText('Invalid Username or Password')).toBeInTheDocument();
    });
  });
});
