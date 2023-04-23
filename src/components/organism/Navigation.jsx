import React from 'react'
import { AppstoreOutlined, HomeOutlined, MailOutlined, ScheduleOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
    {
        label: (
            <a href="/">
                Inicio
            </a>
        ),
        icon: <HomeOutlined />,
    },
    {
        label: (
            <a href="/schedule">
                Horarios
            </a>
        ),
        icon: <ScheduleOutlined />,
    },
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
    },
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