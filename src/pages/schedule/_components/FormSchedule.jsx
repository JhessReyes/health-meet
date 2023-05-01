import { Form, Input, Button, Checkbox } from 'antd';
import React, { useEffect, useState } from 'react'
import { daysES } from '../../../store/constants';
import { Schedule } from "../../../store/schema";

function FormSchedule(props) {
    const [form] = Form.useForm();
    const initialDays = {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: false,
        sunday: false,
    };
    const [values, setValues] = useState();
    const [days, setDays] = useState(initialDays);

    useEffect(() => {
        if (props?.dataSchedule) {
            setValues({ ...props?.dataSchedule })
            form.setFieldsValue(
                {
                    name: props?.dataSchedule?.name,
                    start: props?.dataSchedule?.start,
                    end: props?.dataSchedule?.end,
                    interval: props?.dataSchedule?.interval,
                }
            )
            setDays({ ...props?.dataSchedule?.days })
        }
    }, [props?.dataSchedule])

    useEffect(() => {
        if (props?.status === false)
            form.resetFields();
    }, [props?.status])

    const handleSubmit = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleCancel = () => {
        form.resetFields();
        setValues();
        setDays(initialDays);
        props?.cancel(true);
    };

    const onFinish = (values) => {
        let schedule = new Schedule();
        schedule.days = days;
        schedule.name = values.name;
        schedule.start = values.start;
        schedule.end = values.end;
        schedule.interval = values.interval;
        props?.addOrEdit(schedule);
    };

    const onChangeChecked = (e, day) => {
        days[day] = e?.target?.checked;
    }

    return (
        <Form layout="vertical" form={form} name="control-hooks" onFinish={onFinish}>
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
            <Form.Item
                name={"interval"}
                label={"Intervalo Consulta"}
                rules={[{ required: true }]}
                onChange={handleSubmit}
            >
                <Input name={"end"} type="number" min={15} step='5' />
            </Form.Item>
            <Form.Item
                label={"Dias"}
                rules={[{ required: true }]}
                onChange={handleSubmit}
            >
                <div>
                    {Object.entries(days).map(day => {
                        return (
                            <Checkbox key={day[0]} className="capitalize" checked={day[1]} onChange={(e) => onChangeChecked(e, day[0])}>{daysES[day[0]]}</Checkbox>
                        );
                    })}
                </div>
            </Form.Item>
            <Form.Item>
                <div className="flex justify-end gap-4">
                    <Button key="back" onClick={handleCancel}>
                        Cancelar
                    </Button>
                    <Button key="submit" type="primary" htmlType="submit" loading={props?.status}>
                        {values ? 'Editar Horario' : 'Crear Horario'}
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );
}

export default FormSchedule