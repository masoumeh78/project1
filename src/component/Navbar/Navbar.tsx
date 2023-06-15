import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import './Navbar.css';
import Logo from "./logo.png";

import { ShoppingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SignUpModal from './SignUpModal';



const navigation = [
    { name: 'فهرست', href: 'فهرست' },
    { name: 'پروژه ها', href: 'پروژه-ها' },
    { name: 'ساخت سوله و خرپا', href: 'ساخت-سوله-و-خرپا' },
    { name: ' سقف شیروانی ویلا', href: ' سقف شیروانی ویلا' },
    { name: 'آلاچیق و سایه بان', href: 'آلاچیق و سایه بان' },
    { name: 'سردر و پیشانی', href: 'سردر و پیشانی' },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


export default function Navbar() {

    return (
        <>
            <Disclosure as="nav" className="bg-nav">

                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

                            <div className="relative flex h-16 items-center justify-between padding-l-r-40">

                                {/* top navbar */}

                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">



                                    {/*nav logo */}

                                    <div className="flex flex-shrink-0 items-center">
                                        <Link to="/">
                                            <img
                                                className="block h-8 w-auto lg:hidden"
                                                src={Logo}
                                                alt="Your Company"
                                            />

                                        </Link>
                                        <Link to="/">
                                            <img
                                                className="hidden h-8 w-auto lg:block"
                                                src={Logo}
                                                alt="Your Company"
                                            />
                                        </Link>
                                    </div>

                                    {/*nav menu */}
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (

                                                <Link to={item.href}
                                                key={item.name}
                                                className={classNames(
                                                            'text-white orange-hover px-3 py-2 text-sm font-medium'
                                                        )}
                                                >
                                                    {item.name}
                                                </Link>

                                            ))}
                                        </div>
                                    </div>
                                </div>


                                {/* shopping icon and signup */}

                                <div className=" inset-y-0 right-0 flex items-center pr-2 
                                        sm:static sm:inset-auto sm:pr-0 navbar ">
                                            
                                    <button
                                        type="button"
                                        className="p-1 focus:outline-none btn-sign-in"

                                    >
                                        <SignUpModal />
                                     
                                    </button>

                                    <button
                                        type="button">
                                        <ShoppingOutlined className="h-6 w-6 p-1 orange-hover padding-r-15 shopping-white"
                                        />
                                    </button>

                                </div>


                                <div className="absolute inset-y-0 flex items-center pr-2 sm:static 
                                sm:inset-auto sm:pr-0">

                                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                                        {/* Mobile menu button*/}

                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md padding-r-15
                                                                    p-2 text-gray-400 hover:text-white focus:outline-none ">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6 orange-hover " aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6 orange-hover" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* mobile menu panel */}
                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            ' text-white orange-hover block rounded-md px-3 py-2 text-sm font-medium'
                                        )}

                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>



                    </>
                )}
            </Disclosure>

        </>














    )
}