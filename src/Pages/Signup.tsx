import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const Signup = () => {
    return (

        <Form
            name="register"
            className='login-form'

        // {...formItemLayout}
        // form={form}

        // onFinish={onFinish}
        // initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
        // style={{ maxWidth: 600 }}
        // scrollToFirstError
        >
            <h2>Sign up</h2>
            <Form.Item
                name="Fullname"
                // label="Full Name"
                rules={[
                    {
                        type: 'string',

                    },
                    {
                        required: true,
                        message: 'Please input your Full name!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name="email"
                // label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="E-mail"
                />
            </Form.Item>
            <Form.Item
                name="phone"
                // label="Phone Number"
                rules={[
                    {
                        type: 'number',
                        message: 'The input is not valid phone number!',
                    },
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Phone Number"
                />
            </Form.Item>

            <Form.Item
                name="password"
                // label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item
                name="confirm"
                // label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Confirm Password"
                />
            </Form.Item>



            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
            // {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>

            <Form.Item >
                {/* {...tailFormItemLayout}> */}
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Register
                </Button>
            </Form.Item>
            Already have an account? <Link to="/Login">Login now!</Link>
        </Form>










        // const handleForm = (e: any) => {
        //     e.preventDefault(e);
        //     alert('Welcome')
        // }
        // 
        //     <form className='Form' onSubmit={handleForm}>
        //         <h1>Create Account</h1>
        //         <div className='input'>
        //             <input type="text" placeholder='FULL NAME' />
        //             <input type="email" placeholder='EMAIL' />
        //             <input type="number" placeholder='PHONE NUMBER' />
        //             <input type="password" placeholder='PASSWORD' />
        //             <input type="password" placeholder='CONFIRM PASSWORD' />
        //         </div>
        //         <div>
        //             <input type="checkbox" className='checkbox' />
        //             <label className='label'>
        //                 قوانین را خواندم و قبول دارم
        //             </label>
        //         </div>
        //         <div className='button-div'>
        //             <button className='button-S'>SIGN UP </button>
        //             <button className='button-L'>LOGIN </button>

        //         </div>


        //     </form>
    );
};
export default Signup;