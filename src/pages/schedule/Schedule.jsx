import { Button, Input } from "antd";
import React from "react";
import { Module, SchedulModal } from "../../components/organism";
import { FormSchedule, TableSchedule } from "./_components";
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
    /*
    () => {
                let tag = []
                for (let j = 0; j < 5; j++) {
                    tag = [...tag, faker.company()]
                }
                return tag;
            }
    const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sydney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ]; */
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
