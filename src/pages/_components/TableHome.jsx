import React from "react";
import { Table, Tag } from "antd";
import { EditOutlined } from '@ant-design/icons';
function TableHome(props) {

  const columns = [
    {
      title: "Paciente",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Telefono",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Mes",
      dataIndex: "month",
      key: "month",
      filters: [
        {
          text: 'Jan',
          value: 'Jan',
        },
        {
          text: 'Feb',
          value: 'Feb',
        },
        {
          text: 'Mar',
          value: 'Mar',
        },
        {
          text: 'Apr',
          value: 'Apr',
        },
        {
          text: 'May',
          value: 'May',
        },
        {
          text: 'Jun',
          value: 'Jun',
        },
        {
          text: 'Jul',
          value: 'Jul',
        },
        {
          text: 'Aug',
          value: 'Aug',
        },
        {
          text: 'Sep',
          value: 'Sep',
        },
        {
          text: 'Oct',
          value: 'Oct',
        },
        {
          text: 'Nov',
          value: 'Nov',
        },
        {
          text: 'Dec',
          value: 'Dec',
        },
      ],
      onFilter: (value, record) => record.month.indexOf(value) === 0,
    },
    {
      title: "Intervalo",
      dataIndex: "interval",
      key: "interval",
      render: (text) => <span>
        {text} minutos
      </span>
    }
  ];
  return <Table columns={columns} dataSource={props?.datings || []} />;
}

export default TableHome;
