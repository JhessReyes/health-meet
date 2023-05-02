import { Form, Input, Button, Checkbox } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react'

function FormHistory(props) {
    const [values, setValues] = useState();
    const [form] = Form.useForm();
    const [isCreating, setIsCreating] = useState(true);

    useEffect(() => {
        if (props?.historySelected) {
            setValues({ ...props?.historySelected })
            form.setFieldsValue(
                {
                    date: props?.historySelected?.date,
                    patient: props?.historySelected?.patient,
                    treatment: props?.historySelected?.treatment,
                    medications: props?.historySelected?.medications,
                }
            )
            setIsCreating(false);
        } else {
            form.resetFields();
            setValues();
            setIsCreating(true);
        }
    }, [props?.historySelected])

    useEffect(() => {
        if (props?.status === false)
            form.resetFields();
    }, [props?.status])

    const handleSubmit = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onFinish = (values) => {
        props?.addOrEdit(values, isCreating);
    };

    return (
        <Form layout="vertical" form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item
                name={"date"}
                label={"Id de la Cita"}
                rules={[{ required: true }]}
                onChange={handleSubmit}
            >
                <Input name={"date"} />
            </Form.Item>
            <Form.Item
                name={"patient"}
                label={"Id del Paciente"}
                rules={[{ required: true }]}
                onChange={handleSubmit}
            >
                <Input name={"patient"} />
            </Form.Item>
            <Form.Item
                name={"treatment"}
                label={"Tratamiento"}
                rules={[{ required: true }]}
                onChange={handleSubmit}
            >
                <TextArea name={"treatment"} />
            </Form.Item>
            <Form.Item
                name={"medications"}
                label={"Medicamentos Recetados"}
                rules={[{ required: true }]}
                onChange={handleSubmit}
            >
                <TextArea name={"medications"} />
            </Form.Item>
            <Form.Item>
                <div className="flex justify-end gap-4">
                    <Button key="back" onClick={() => props?.cancel(true)}>
                        Cancelar
                    </Button>
                    <Button key="submit" type="primary" htmlType="submit" loading={props?.status}>
                        {props?.historySelected ? 'Editar Historial' : 'Crear Historial'}
                    </Button>
                </div>
            </Form.Item>
        </Form >
    );
}

export default FormHistory