import React from "react";
import { Popconfirm, Table } from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
function TableHistory(props) {
  const columns = [
    {
      title: "Id Cita",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "Id Paciente",
      dataIndex: "patient",
      key: "patient",
    },
    {
      title: "Tratamientos",
      dataIndex: "treatment",
      key: "treatment",
    },
    {
      title: "Medicamentos",
      dataIndex: "medications",
      key: "medications",
    },
    {
      title: "Acciones",
      dataIndex: "actions",
      key: "actions",
      render: (_, history) => {
        return (
          <div className="flex gap-4">
            <EditOutlined className="cursor-pointer" onClick={(e) => props?.selected(history)} />
            <Popconfirm
              title="Eliminar Historial"
              description="¿Esta seguro, esta acción no se podrá revertir?"
              onConfirm={(e) => props?.deleted(history)}
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
  return <Table columns={columns} dataSource={props?.histories || []} />;
}

export default TableHistory;
