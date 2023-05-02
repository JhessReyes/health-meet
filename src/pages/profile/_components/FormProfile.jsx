import { Form, Input, Button, Checkbox } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react'

function FormHistory(props) {
    const [values, setValues] = useState();
    const [form] = Form.useForm();
    const [isCreating, setIsCreating] = useState(true);

    useEffect(() => {
        if (props?.profileSelected) {
            setValues({ ...props?.profileSelected })
            form.setFieldsValue(
                {
                    speciality: props?.profileSelected?.speciality,
                    description: props?.profileSelected?.description,
                    experience: props?.profileSelected?.experience,
                }
            )
            setIsCreating(false);
        } else {
            form.resetFields();
            setValues();
            setIsCreating(true);
        }
    }, [props?.profileSelected])

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
                name={"speciality"}
                label={"Especialidad"}
                rules={[{ required: true }]}
                onChange={handleSubmit}
            >
                <Input name={"speciality"} />
            </Form.Item>
            <Form.Item
                name={"description"}
                label={"Descripcion"}
                rules={[{ required: true }]}
                onChange={handleSubmit}
            >
                <TextArea name={"description"} />
            </Form.Item>
            <Form.Item
                name={"experience"}
                label={"Años de Experiencia"}
                rules={[{ required: true }]}
                onChange={handleSubmit}
            >
                <Input name={"experience"} type={'number'} />
            </Form.Item>
            <Form.Item>
                <div className="flex justify-end gap-4">
                    <Button key="back" onClick={() => props?.cancel(true)}>
                        Cancelar
                    </Button>
                    <Button key="submit" type="primary" htmlType="submit" loading={props?.status}>
                        {props?.profileSelected ? 'Editar Especialidad' : 'Crear Especialidad'}
                    </Button>
                </div>
            </Form.Item>
        </Form >
    );
}

export default FormHistory