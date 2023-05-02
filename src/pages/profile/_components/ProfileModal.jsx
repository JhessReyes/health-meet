import { Modal } from "antd";
import { FormProfile } from ".";

const SchedulModal = (props) => {
  return (
    <>
      <Modal
        open={props?.visible || false}
        closable={false}
        name="Formulario de Horario"
        footer={[]}
      >
        <FormProfile addOrEdit={(profile, isCreating) => props?.addOrEdit(profile, isCreating)} cancel={(value) => props?.cancel(value)} status={props?.status} profileSelected={props?.profileSelected} />
      </Modal>
    </>
  );
};

export default SchedulModal;
