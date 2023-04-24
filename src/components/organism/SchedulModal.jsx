import { Button, Form, Modal } from "antd";
import { useState } from "react";
import { Input } from "antd";
import { ScheduleOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SchedulModal = () => {
  const [visible, setVisible] = useState(false);
  const [schedule, setSchedule] = useState({
    name: "",
    start: "",
    end: "",
  });
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const [form] = Form.useForm();

  const initialStatesValues = {
    Link: "",
    Website: "",
    Description: "",
  };

  const [values, setValues] = useState(initialStatesValues);

  const handleSubmit = (e) => {
    /* e.preventDefault(); */
    console.log(e.target.value);
    /* const { name, value } = e.target;
    setValues({ ...values, [name]: value }); */
  };

  const onFinish = (values) => {
    console.log(values);
    /* props.addOrEdit(values); */
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
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary">
            Editar
          </Button>,
        ]}
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name={"name"}
            label={"Nombre del Horario"}
            rules={[{ required: true }]}
            onChange={handleSubmit}
          >
            <Input name={"name"} />
          </Form.Item>
          <Form.Item
            name={"start"}
            label={"Hora de Inicio"}
            rules={[{ required: true }]}
            onChange={handleSubmit}
          >
            <Input name={"start"} type="time" />
          </Form.Item>
          <Form.Item
            name={"end"}
            label={"Hora Fin"}
            rules={[{ required: true }]}
            onChange={handleSubmit}
          >
            <Input name={"end"} type="time" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SchedulModal;
