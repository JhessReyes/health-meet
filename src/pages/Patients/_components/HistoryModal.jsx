import { Modal } from "antd";
import FormHistory from "./FormHistory";

const SchedulModal = (props) => {
  return (
    <>
      <Modal
        open={props?.visible || false}
        closable={false}
        name="Formulario de Horario"
        footer={[]}
      >
        <FormHistory addOrEdit={(history, isCreating) => props?.addOrEdit(history, isCreating)} cancel={(value) => props?.cancel(value)} status={props?.status} historySelected={props?.historySelected} />
      </Modal>
    </>
  );
};

export default SchedulModal;
