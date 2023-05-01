import React, { useState } from "react";
import { Module } from "../../components/organism";
import { ScheduleModal, TableSchedule } from "./_components";
import { faker } from '@faker-js/faker';
import { Button } from "antd";
import { ScheduleOutlined } from "@ant-design/icons";

function Schedule() {
    const [visible, setVisible] = useState(false)
    const [dataSchedule, setDataSchedule] = useState()

    const showModal = () => {
        setVisible(true);
    };
    const handleCancel = (value) => {
        setVisible(!value);
    };

    const handleAddOrEdit = (schedule) => {
        /*   console.log(schedule) */
    }
    const handleSelected = (value, edit) => {
        setDataSchedule(value)
        /* console.log(value) */
        setVisible(true);
    }
    let schedule = []
    for (let i = 0; i < 20; i++) {
        schedule = [...schedule, {
            key: faker.datatype.uuid(),
            name: faker.name.jobArea(),
            days: {
                monday: faker.datatype.boolean(),
                tuesday: faker.datatype.boolean(),
                wednesday: faker.datatype.boolean(),
                thursday: faker.datatype.boolean(),
                friday: faker.datatype.boolean(),
                saturday: faker.datatype.boolean(),
                sunday: faker.datatype.boolean(),
            },
            start: faker.phone.number('##:##'),
            end: faker.phone.number('##:##'),
            interval: faker.phone.number('##:##')
        }]
    }
    return (
        <>
            <Module title="Horarios">
                <div className="flex justify-end p-2">
                    <Button
                        type="primary"
                        className="flex items-center"
                        onClick={showModal}
                        icon={<ScheduleOutlined />}
                    >
                        Agregar Horario
                    </Button>
                    <ScheduleModal visible={visible} cancel={handleCancel} addOrEdit={handleAddOrEdit} {...{ dataSchedule }} />
                </div>
                <TableSchedule schedule={schedule} selected={handleSelected} />
            </Module>
        </>
    );
}

export default Schedule;
