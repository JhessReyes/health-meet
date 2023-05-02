import React from 'react'
import { HomeOutlined, ScheduleOutlined, UsergroupAddOutlined, FileProtectOutlined } from '@ant-design/icons';
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
    },
    {
        label: (
            <NavLink to="/patients">
                Historial Medico de Pacientes
            </NavLink>
        ),
        icon: <UsergroupAddOutlined />,
    },
    {
        label: (
            <NavLink to="/profile">
                Perfil
            </NavLink>
        ),
        icon: <FileProtectOutlined />,
    }
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