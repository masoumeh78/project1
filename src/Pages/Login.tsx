import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import '../App.css';
import { Link } from 'react-router-dom';

const Login = () => {

    return (

        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
        // onFinish={onFinish}
        >
            <h2>Welcome back</h2>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password?
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
            Or <Link to="/Signup">Register now!</Link>
        </Form>









    );
};
export default Login;