import React from "react";
import { Module } from "../../components/organism";
import { FormSchedule, ScheduleModal, TableSchedule } from "./_components";
import { faker } from '@faker-js/faker';


function Schedule() {
    let schedules = []
    for (let i = 0; i < 20; i++) {
        schedules = [...schedules, {
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

    let data = []

    for (let i = 0; i < 50; i++) {
        data = [...data, {
            key: faker.datatype.uuid(),
            name: faker.name.jobArea(),
            age: faker.random.numeric(),
            address: faker.address.cityName(),
            tags: [faker.address.cityName()]
        }]

    }
    return (
        <>
            <Module title="Horarios">
                <div className="flex justify-end p-2">
                    <ScheduleModal />
                </div>
                <TableSchedule data={data}></TableSchedule>
            </Module>
        </>
    );
}

export default Schedule;
