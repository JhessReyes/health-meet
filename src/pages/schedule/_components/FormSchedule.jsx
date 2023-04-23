import { Form, Input, Button } from 'antd';
import React, { useState } from 'react'
const layout = {
    labelCol: {
        span: 4,
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
function FormSchedule() {
    const [form] = Form.useForm();

    const initialStatesValues = {
        Link: "",
        Website: "",
        Description: "",
    };

    const [values, setValues] = useState(initialStatesValues);

    const handleSubmit = (e) => {
        /*  e.preventDefault();
            console.log(e.target.value) */
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });

    };

    const onFinish = (values) => {
        /* console.log(values); */
        props.addOrEdit(values);
    };
    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item
                name="Link"
                label="Link"
                rules={[
                    {
                        required: true,
                    },
                ]}
                onChange={handleSubmit}
            >
                <Input name="Link" />
            </Form.Item>

            <Form.Item
                name="Website"
                label="Website Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
                onChange={handleSubmit}
            >
                <Input name="Website" />
            </Form.Item>
            <Form.Item
                name="Description"
                label="Description"
                rules={[
                    {
                        required: true,
                    },
                ]}
                onChange={handleSubmit}
            >
                <Input name="Description" />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default FormSchedule