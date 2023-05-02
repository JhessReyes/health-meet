import React from "react";
import { Popconfirm, Table, Tag } from "antd";
import { daysES } from "../../../store/constants";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
function TableSchedule(props) {
  const confirm = (schedule) => {
    props?.deleted(schedule)
  };

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
            <EditOutlined className="cursor-pointer" onClick={(e) => props?.selected(schedule)} />
            <Popconfirm
              title="Eliminar Horario"
              description="¿Esta seguro, esta acción no se podrá revertir?"
              onConfirm={(e) => confirm(schedule)}
              okButtonProps={{
                loading: props?.status || false,
              }}
              okText="Si"
              cancelText="No"
            >
              <DeleteOutlined className="cursor-pointer" />
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  return <Table columns={columns} dataSource={props?.schedule || []} />;
}

export default TableSchedule;
