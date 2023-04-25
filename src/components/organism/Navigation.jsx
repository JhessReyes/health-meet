import React from 'react'
import { HomeOutlined, ScheduleOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const items = [
    {
        label: (
            <NavLink to="/">
                Inicio
            </NavLink>
        ),
        icon: <HomeOutlined />,
    },
    {
        label: (
            <NavLink to="/schedule">
                Horarios
            </NavLink>
        ),
        icon: <ScheduleOutlined />,
    }/* ,
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    }, */
];

function Navigation() {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;

}

export default Navigation