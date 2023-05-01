import React, { useState } from "react";
import { Button, Table, Tag } from "antd";
import { daysES } from "../../../store/constants";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
function TableSchedule(props) {
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Días",
      key: "days",
      dataIndex: "days",
      render: (days) => {
        return (
          <div>
            {Object.entries(days).map(function ([key, value]) {
              let color = value === true ? 'green' : 'volcano'
              return (<Tag color={color} key={key}>{`${daysES[key]}`}</Tag>);
            })}
          </div>
        );
      },
    },
    {
      title: "Empieza",
      dataIndex: "start",
      key: "start",
    },
    {
      title: "Fin",
      dataIndex: "end",
      key: "end",
    },
    {
      title: "Intervalo",
      dataIndex: "interval",
      key: "interval",
    },
    {
      title: "Acciones",
      dataIndex: "actions",
      key: "actions",
      render: (_, schedule) => {
        return (
          <div className="flex gap-4">
            <EditOutlined className="cursor-pointer" onClick={(e) => props?.selected(schedule, true)} />
            <DeleteOutlined className="cursor-pointer" />
          </div>
        );
      },
    },
  ];
  return <Table columns={columns} dataSource={props?.schedule || []} />;
}

export default TableSchedule;
