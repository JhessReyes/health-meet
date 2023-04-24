import { Button, Form, Modal } from "antd";
import { useState } from "react";
import { ScheduleOutlined } from "@ant-design/icons";
import FormSchedule from "./FormSchedule";

const SchedulModal = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = (value) => {
    setVisible(!value);
  };
  const addOrEdit = (scheduleObject) => {
    console.log(scheduleObject)
  };

  return (
    <>
      <Button
        type="primary"
        className="flex items-center"
        onClick={showModal}
        icon={<ScheduleOutlined />}
      >
        Agregar Horario
      </Button>
      <Modal
        open={visible}
        closable={false}
        name="Crear Horario"
        footer={[]}
      >
        <FormSchedule addOrEdit={addOrEdit} cancel={handleCancel} action='Crear Horario' />
      </Modal>
    </>
  );
};

export default SchedulModal;
