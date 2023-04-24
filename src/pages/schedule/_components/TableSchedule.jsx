import React from "react";
import { Table, Tag } from "antd";
import { daysES } from "../../../store/constants";
function TableSchedule({ schedule }) {
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
              let color = days.length > 5 ? 'geekblue' : 'green'
              if (value) {
                color = 'volcano';
              }
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
  ];

  return <Table columns={columns} dataSource={schedule || []} />;
}

export default TableSchedule;
