import React from 'react';
import './Footer.css';

import {
    FaTwitter,
    FaInstagram,
    FaWhatsapp,
    FaTelegramPlane,
    FaHome
} from "react-icons/fa";

import { Button, Input, Select, Space } from 'antd';

function Footer() {

    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="col-1">
                    <div className="title">
                        <FaHome className='faHome' />
                        سقف پروژه
                    </div>
                    <div className="text">
                        همین امروز به سقف پروژه بپیوندید. پروژه ات رو برای اجرا و سپردن به کارفرما ثبت کن.
                    </div>
                    <div className="text">
                        کارفرما هستی ؟ با ثبت نام و ساختن پروفایل برای اجرای پروژه ها پیشنهاد ثبت کن
                    </div>
                </div>

                <div className="col">
                    <div className="title">
                        مشتریان
                    </div>

                    <span className="text">
                        کاربر
                    </span>
                    <span className="text">
                        کارفرما
                    </span>
                </div>

                <div className="col">
                    <div className="title">
                        منابع
                    </div>

                    <span className="text">
                        مرکز پشتیبانی
                    </span>
                    <span className="text">
                        وبلاگ سقف پروژه
                    </span>
                </div>

                <div className="col">
                    <div className="title">
                        شرکت
                    </div>

                    <span className="text">
                        درباره ما
                    </span>
                    <span className="text">
                        پرسش و پاسخ
                    </span>
                    <span className="text">
                        تماس با ما
                    </span>
                </div>

                <div className="col ">
                    <div className="title">
                        به ما بپیوندید
                    </div>
                    <span className="text-social">
                        ما را دنبال کنید :
                    </span>

                    <div className="c-item">
                        <FaTwitter />
                        < FaInstagram />
                        < FaWhatsapp />
                        <FaTelegramPlane />
                    </div>

                    <div className="c-item">
                        <div className="text ">
                            <Space direction="vertical" size="middle">
                                <Space.Compact className='email-input'>
                                    <Input className='input' type="email" placeholder="ایمیل خود را وارد کنید" />
                                    <Button className='input-button' type="primary">ارسال</Button>
                                </Space.Compact>
                            </Space>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text ">
                        تمامی حقوق مادی و معنوی این وب سایت به سقف پروژه تعلق دارد.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
