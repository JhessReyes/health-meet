import { Button, Input } from "antd";
import React from "react";
import { Module, SchedulModal } from "../../components/organism";
import { FormSchedule, TableSchedule } from "./_components";
import { faker } from '@faker-js/faker';


function Schedule() {

    let data = []
    for (let i = 0; i < 20; i++) {
        data = [...data, {
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
                    <SchedulModal />
                </div>
                <TableSchedule data={data}></TableSchedule>
            </Module>
        </>
    );
}

export default Schedule;
