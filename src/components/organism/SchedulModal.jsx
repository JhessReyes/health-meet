import { Button, Modal } from "antd";
import { useState } from "react";
import { Input } from "antd";
import { Icon } from "../../components/atoms";
import { ScheduleOutlined } from "@ant-design/icons";

const SchedulModal = () => {
  const [visible, setVisible] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    remindAt: "",
  });
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handlChange = (name, value) => {
    setTask({
      ...task,
      [name]: value,
    });
  };
  return (
    <>
      <Button type="primary" className="flex items-center" onClick={showModal} icon={<ScheduleOutlined />}>
        Agregar Horario
      </Button>
      <Modal
        open={visible}
        closable={false}
        title="Crear Horario"
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary">
            Editar
          </Button>,
        ]}
      >
        <Input
          id={"title"}
          onChange={(e) => handlChange(e.target.id, e.target.value)}
          className="!rounded-lg !m-1"
        />
        <Input
          placeholder={task.description}
          id={"description"}
          onChange={(e) => handlChange(e.target.id, e.target.value)}
          className="!rounded-lg !m-1"
        />
        <Input
          type="date"
          id={"remindAt"}
          value={task.remindAt ? task.remindAt.split("T")[0] : ""}
          onChange={(e) =>
            handlChange(e.target.id, e.target.value.split("T")[0])
          }
          className="!rounded-lg !m-1 !flex"
        />
      </Modal>
    </>
  );
};

export default SchedulModal;
