import { Button, message, Modal } from "antd";
import { useEffect, useState } from "react";
import FormSchedule from "./FormSchedule";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../database/firebase";

const SchedulModal = (props) => {
  const [dataSchedule, setDataSchedule] = useState();
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: props?.type || 'success',
      content: props?.message || 'Se ha creado el horario correctamente',
    });
  };
  useEffect(() => {
    setDataSchedule(props?.dataSchedule)
  }, [props?.dataSchedule])


  /*   const addOrEdit = async (scheduleObject) => {
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
   */
  return (
    <>
      <Modal
        open={props?.visible || false}
        closable={false}
        name="Formulario de Horario"
        footer={[]}
      >
        {contextHolder}
        <FormSchedule addOrEdit={(schedule) => props?.addOrEdit(schedule)} cancel={(value) => props?.cancel(value)} status={props?.status} {...{ dataSchedule }} />
      </Modal>
    </>
  );
};

export default SchedulModal;
