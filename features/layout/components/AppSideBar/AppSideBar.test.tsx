import { render, screen } from '@testing-library/react';
import { AppSideBar } from '@/features/layout/components';

describe('AppSideBar', () => {
  test('renders sidebar items correctly', () => {
    render(<AppSideBar />);

    const dashboardLink = screen.getByRole('link', { name: 'Dashboard' });
    expect(dashboardLink).toHaveAttribute('href', '/');

    const informationLink = screen.getByRole('link', { name: 'Information' });
    expect(informationLink).toHaveAttribute('href', '/#');

    const nestedPagesLink = screen.getByRole('button', { name: 'Nested Pages' });
    expect(nestedPagesLink).toBeInTheDocument();

    const loginLink = screen.getByRole('link', { name: 'Login' });
    expect(loginLink).toHaveAttribute('href', '/login');
  });
});
