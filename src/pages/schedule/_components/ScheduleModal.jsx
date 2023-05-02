import { Button, message, Modal } from "antd";
import { useEffect, useState } from "react";
import FormSchedule from "./FormSchedule";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../database/firebase";

const SchedulModal = (props) => {

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
        {/*         {contextHolder}
 */}        <FormSchedule addOrEdit={(schedule, isCreating) => props?.addOrEdit(schedule, isCreating)} cancel={(value) => props?.cancel(value)} status={props?.status} dataSchedule={props?.dataSchedule} />
      </Modal>
    </>
  );
};

export default SchedulModal;
