import { Modal } from "antd";
import FormSchedule from "./FormSchedule";

const SchedulModal = (props) => {
  return (
    <>
      <Modal
        open={props?.visible || false}
        closable={false}
        name="Formulario de Horario"
        footer={[]}
      >
        <FormSchedule addOrEdit={(schedule, isCreating) => props?.addOrEdit(schedule, isCreating)} cancel={(value) => props?.cancel(value)} status={props?.status} dataSchedule={props?.dataSchedule} />
      </Modal>
    </>
  );
};

export default SchedulModal;
