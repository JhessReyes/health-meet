import { Button, message, Modal } from "antd";
import { useState } from "react";
import { ScheduleOutlined } from "@ant-design/icons";
import FormSchedule from "./FormSchedule";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../database/firebase";

const SchedulModal = () => {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Se ha creado el horario correctamente',
    });
  };

  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = (value) => {
    setVisible(!value);
  };
  const addOrEdit = async (scheduleObject) => {
    try {
      setStatus(true);
      const docRef = await addDoc(collection(db, "schedules"), { ...scheduleObject });
      setStatus(false);
      success();
      setVisible(false);
      console.log(docRef);
      console.log('Successful')
    } catch (error) {
      console.error(error)
    }
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
        {contextHolder}
        <FormSchedule addOrEdit={addOrEdit} cancel={handleCancel} action='Crear Horario' status={status} />
      </Modal>
    </>
  );
};

export default SchedulModal;
