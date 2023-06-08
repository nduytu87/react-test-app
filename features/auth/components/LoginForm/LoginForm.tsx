import React from 'react';
import { Alert, Button, Form, Input, Result, Space } from 'antd';
import { useRouter } from 'next/router';

import { useLoginMutation } from '@/features/auth/service';

interface LoginFormProps {
  className?: string;
}

interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginForm: React.FC<LoginFormProps> = () => {
  const router = useRouter();

  const [login, { isLoading, isError, isSuccess }] = useLoginMutation();

  // console.log('STATUS', { isLoading, isError, isSuccess });

  const handleOnLogin = async (values: LoginFormValues) => {
    // console.log('HANDLE LOG IN');
    const res = await login(values);
    // console.log('RES', res);
    return res;
  };

  if (isSuccess) {
    return <Result status="success" title="Logged in successfully" />;
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={handleOnLogin}
      autoComplete="off"
    >
      {isError && (
        <Alert message="Invalid Username or Password" type="error" showIcon className="mb-5" />
      )}
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Space>
          <Button onClick={() => router.back()}>Cancel</Button>
          <Button type="primary" htmlType="submit" loading={isLoading} className="bg-blue-500">
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
