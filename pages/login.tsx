import { LoginForm } from '@/features/auth/components';

export interface LoginProps {
  username: string;
  password: string;
}

const LoginPage = () => {
  return (
    <div className="w-full max-w-xs">
      <LoginForm />
    </div>
  );
};
export default LoginPage;
