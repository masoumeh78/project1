import React from 'react';
import "./HeroSection.css";

import { BankOutlined, CrownOutlined, HomeOutlined, RadarChartOutlined } from '@ant-design/icons';
import heroImage from "./HeroSection.jpg";
import Logo from "../Navbar/logo.png";
import SearchBar from './SearchBar';

const favCategories = [
    { name: 'ساخت سوله و خرپا', href: 'ساخت سوله و خرپا', icon: <BankOutlined /> },
    { name: ' سقف شیروانی ویلا', href: ' سقف شیروانی ویلا', icon: < CrownOutlined /> },
    { name: 'آلاچیق و سایه بان', href: 'آلاچیق و سایه بان', icon: < RadarChartOutlined /> },
    { name: 'سردر و پیشانی', href: 'سردر و پیشانی', icon: < HomeOutlined /> },
]

function HeroSection() {

    return (
        <>
            
            
            <img src={heroImage} alt="hero-section-image" className="hero-image" />

            <div className="mx-auto max-w-2xl text-white ">

                {/* top logo */}

                

                <div className='top-logo padding-top-0'>
                    <img

                        src={Logo}
                        alt="Your Company"
                    />
                </div>



                <div className="text-center">
                    <h1 className="text-2xl font-bold tracking-tight white sm:text-3xl ">
                        اجرای پروژه با تیم فوق حرفه ای
                    </h1>
                    <p className="mt-6 text-lg leading-8 white brightness padding-top-0 ">
                        اینجا هر پروژه ای میتونی پیدا کنی
                    </p>
                </div>
                {/* search btn */}
                <SearchBar />



                {/*favorite jobs */}

                <div className="text-center">

                    <p className="mt-9 text-lg leading-8 white padding-top-30 font-size-20 ">
                        <span>دسته بندی پروژه های محبوب</span>
                    </p>


                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 padding-bottom-30">

                        {favCategories.map((item) => (

                            <div key={item.name} className="flex flex-col-reverse padding-botton-25">
                                <dt className="text-base leading-7  hover:text-white ">
                                    <a
                                        key={item.name}
                                        href={item.href}
                                    >
                                        {item.name}
                                    </a>
                                </dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                                    <div className='circle-job '>
                                        <div className='fav-icons'>
                                            {item.icon}
                                        </div>

                                    </div>
                                </dd>
                            </div>
                        ))}
                    </dl>

                </div>
            </div>
            
        </>
    )
}

export default HeroSection;
