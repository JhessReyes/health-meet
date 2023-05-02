import React from "react";
import { Popconfirm, Table } from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
function TableHistory(props) {
  const columns = [
    {
      title: "Especialidad",
      dataIndex: "speciality",
      key: "speciality"
    },
    {
      title: "Descripcion",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Años de Experiencia",
      dataIndex: "experience",
      key: "experience",
    },
    {
      title: "Acciones",
      dataIndex: "actions",
      key: "actions",
      render: (_, profile) => {
        return (
          <div className="flex gap-4">
            <EditOutlined className="cursor-pointer" onClick={(e) => props?.selected(profile)} />
            <Popconfirm
              title="Eliminar Especialidad"
              description="¿Esta seguro, esta acción no se podrá revertir?"
              onConfirm={(e) => props?.deleted(profile)}
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
  return <Table columns={columns} dataSource={props?.profiles || []} />;
}

export default TableHistory;
