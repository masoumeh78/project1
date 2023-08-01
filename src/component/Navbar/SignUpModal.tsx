import { useEffect, useState } from 'react';
import './SignUpModal.css';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { LockOutlined, LoginOutlined, MailOutlined } from '@ant-design/icons';

function SignUpModal() {

    //-------------> Signup Modal <-------------------//

    const [signupForm] = Form.useForm();
    const [isSignup, setIsSignup] = useState(false);

    const showSignupModal = () => {
        setIsSignup(true);
        setIsLogin(false);
    };
    const handleSignupCancel = () => {
        setIsSignup(false);
        signupForm.resetFields();
    };
    //-------------> Signup Register Form <-------------------//

    const register = async () => {
        try {
            await signupForm.validateFields();
        } catch (e) {
            return
        }

        await fetch('http://localhost:1234/signup', {
            method: "POST",
            body: JSON.stringify({
                email: signupForm.getFieldsValue().email,
                password: signupForm.getFieldsValue().password
            }),
        })
            .then((response) => response.json())


            .then((data) => {
                if (data.state) {
                    handleSignupCancel()


                }
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    //-------------> Login Modal <-------------------//

    const [loginForm] = Form.useForm();
    const [isLogin, setIsLogin] = useState(false);

    const showLoginModal = () => {
        setIsLogin(true);
        setIsSignup(false);
    }
    const handleLoginCancel = () => {
        setIsLogin(false);
        loginForm.resetFields();

    };

    //-------------> Login Register Form <-------------------//

    const login = async () => {
        try {
            await loginForm.validateFields();
        } catch (e) {
            return
        }
        await fetch('http://localhost:1234/signin', {
            method: "POST",
            body: JSON.stringify({
                email: loginForm.getFieldsValue().email,
                password: loginForm.getFieldsValue().password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

            .then((response) => {
                response.json();
                console.log(response)
            })

            .then((data) => {
                // console.log(data)
                // if (data.state) {
                //     handleLoginCancel()
                // }
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    // /////////////////////// //
    useEffect(() => {
        (async () => {

        })();
    }, []);

    return (
        <>
            {/* -------------> Signup & Login button <---------------- */}

            <button type="button" className="p-1 focus:outline-none btn-sign-in"
                onClick={showSignupModal}>
                ورود و ثبت نام
            </button>

            {/* ------------------> Signup Modal <-------------------- */}

            <Modal
                centered
                open={isSignup}
                onCancel={handleSignupCancel}
                footer={[null]}
            >
                <>
                    <h1 className='Signup-title'>Sign up</h1>



                    <Form
                        onClick={() => register()}
                        className='login-form'
                        form={signupForm}
                    >

                        {/* <Form.Item
                            name="Fullname"
                            // label="Full Name"
                            rules={[
                                {
                                    type: 'string',

                                },
                                {
                                    required: true,
                                    message: ' لطفا نام و نام خانوادگی خود را وارد کنید! ',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder=" نام و نام خانوادگی "
                            />
                        </Form.Item> */}

                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: ' ایمیل وارد شده صحیح نمی باشد! ',
                                },
                                {
                                    required: true,
                                    message: ' لطفا ایمیل خود را وارد کنید!  ',
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <MailOutlined className="site-form-item-icon" />
                                }
                                placeholder=" example@gmail.com"
                            />
                        </Form.Item>
                        {/* <Form.Item
                            name="phone"
                            // label="Phone Number"
                            rules={[
                                {
                                    type: 'number',
                                    message: ' شماره تماس وارد شده صحیح نمی باشد! ',
                                },
                                {
                                    required: true,
                                    message: ' لطفا شماره تماس خود را وارد کنید! ',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder=" شماره تماس "
                            />
                        </Form.Item> */}
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: ' لطفا رمز عبور خود را وارد کنید! ',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                // value={password}
                                // onChange={handlePass}
                                prefix={
                                    <LockOutlined className="site-form-item-icon" />
                                }
                                type="password"
                                placeholder=" رمز عبور "
                            />
                        </Form.Item>

                        {/* <Form.Item
                            name="confirm"
                            // label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: ' لطفا رمز عبور خود را تایید کنید! ',
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
                                placeholder=" تکرار رمز عبور "
                            />
                        </Form.Item> */}



                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error(' قوانین را تایید کنید ')),
                                },
                            ]}
                        >
                            <Checkbox>
                                قوانین را خواندم و قبول دارم.
                            </Checkbox>
                        </Form.Item>

                        <Form.Item >
                            <Button
                                htmlType="submit"
                                className="login-form-button"
                            >
                                ثبت نام
                            </Button>
                        </Form.Item>

                        <button
                            className='login-btn'
                            onClick={showLoginModal}
                        >
                            <LoginOutlined /> وارد شوید!
                        </button>
                    </Form>
                </>
            </Modal>

            {/* ------------------> Login Modal <--------------------- */}

            <Modal
                centered
                open={isLogin}
                onCancel={handleLoginCancel}
                footer={[null]}
            >
                <>
                    <h2 className='Signup-title'> ورود </h2>
                    <Form
                        onClick={() => login()}
                        form={loginForm}
                        name="login"
                        className='login-form'
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: ' ایمیل وارد شده صحیح نمی باشد! ',
                                },
                                {
                                    required: true,
                                    message: ' لطفا ایمیل خود را وارد کنید!  ',
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <MailOutlined className="site-form-item-icon" />
                                }
                                placeholder=" example@gmail.com "
                            />
                        </Form.Item>


                        <Form.Item
                            name="password"

                            rules={[
                                {
                                    required: true,
                                    message: ' لطفا رمز عبور خود را وارد کنید! ',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                prefix={
                                    <LockOutlined className="site-form-item-icon" />
                                }
                                type="password"
                                placeholder=" رمز عبور "
                            />
                        </Form.Item>

                        <button className='login-btn'>
                            رمزعبور را فراموش کرده اید؟
                        </button>
                        <br />
                        <Form.Item >
                            <Button
                                htmlType="submit"
                                className="login-form-button">
                                ورود
                            </Button>
                        </Form.Item>

                        <button
                            className='login-btn'
                            onClick={showSignupModal}
                        >
                            ثبت نام کنید!
                        </button>
                    </Form>
                </>
            </Modal>
        </>
    )
}

export default SignUpModal
