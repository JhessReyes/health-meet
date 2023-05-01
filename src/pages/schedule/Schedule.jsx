import React, { useEffect, useState } from "react";
import { Module } from "../../components/organism";
import { ScheduleModal, TableSchedule } from "./_components";
import { faker } from '@faker-js/faker';
import { Button } from "antd";
import { ScheduleOutlined } from "@ant-design/icons";
import { db } from "../../database/firebase";
import { collection, getDocs } from "firebase/firestore";

function Schedule() {
    const [visible, setVisible] = useState(false)
    const [dataSchedule, setDataSchedule] = useState()
    const [schedules, setSchedules] = useState([])
    const showModal = () => {
        setVisible(true);
    };
    const handleCancel = (value) => {
        setDataSchedule('');
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

    const getSchedules = async () => {
        const dataSchedules = []
        const querySnapshot = await getDocs(collection(db, "schedules"));
        querySnapshot.forEach((doc) => {
            dataSchedules.push({ ...doc.data(), key: doc.id })
        });
        setSchedules(dataSchedules)
    }

    useEffect(() => {
        getSchedules()
    }, [])

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
                <TableSchedule schedule={schedules} selected={handleSelected} />
            </Module>
        </>
    );
}

export default Schedule;
