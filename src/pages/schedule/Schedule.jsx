import React from "react";
import { Module } from "../../components/organism";
import { ScheduleModal, TableSchedule } from "./_components";
import { faker } from '@faker-js/faker';


function Schedule() {

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
                    <ScheduleModal />
                </div>
                <TableSchedule schedule={schedule} />
            </Module>
        </>
    );
}

export default Schedule;
