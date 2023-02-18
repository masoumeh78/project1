import React from 'react';
import { Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';


const Toolbar = () => {
    return (
        <>
            <Menu mode="horizontal">

                {/* <Menu.Item key="Home">
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                </Menu.Item> */}

                <Menu.Item key="Signup">
                    <Link to="/Signup">
                        <span>SIGN UP</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="Login">
                    <Link to="/Login">
                       
                        <span>LOG IN</span>
                    </Link>
                </Menu.Item>

            </Menu>
            <Outlet />
        </>
    );
};
export default Toolbar;