import React, { useEffect, useState } from "react";
import { Module } from "../../components/organism";
import { ScheduleModal, TableSchedule } from "./_components";
import { Button, message } from "antd";
import { ScheduleOutlined } from "@ant-design/icons";
import { db } from "../../database/firebase";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";

function Schedule() {
    const [visible, setVisible] = useState(false)
    const [dataSchedule, setDataSchedule] = useState()
    const [schedules, setSchedules] = useState([])
    const [status, setStatus] = useState([])
    const [messageApi, contextHolder] = message.useMessage();

    const toast = (type, context) => {
        messageApi.open({
            type: type || 'success',
            content: context || 'Se ha creado el horario correctamente',
        });
    };
    const showModal = () => {
        setVisible(true);
    };
    const handleCancel = (value) => {
        setDataSchedule('');
        setVisible(!value);
    };

    const handleAddOrEdit = async (schedule, isCreating) => {
        if (isCreating) {
            try {
                setStatus(true);
                await addDoc(collection(db, "schedules"), { ...schedule });
                setStatus(false);
                toast();
                setVisible(false);
            } catch (error) {
                console.error(error)
            }
        } else {
            try {
                setStatus(true);
                const ref = doc(db, "schedules", dataSchedule?.key);
                await updateDoc(ref, { ...schedule });
                setStatus(false);
                toast('', 'Se ha editado el horario correctamente');
                setVisible(false);
            } catch (error) {

            }
        }

    }
    const handleSelected = (value, edit) => {
        setDataSchedule(value)
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
    }, [visible])

    return (
        <>
            <Module title="Horarios">
                {contextHolder}
                <div className="flex justify-end p-2">
                    <Button
                        type="primary"
                        className="flex items-center"
                        onClick={showModal}
                        icon={<ScheduleOutlined />}
                    >
                        Agregar Horario
                    </Button>
                    <ScheduleModal visible={visible} cancel={handleCancel} addOrEdit={handleAddOrEdit} {...{ dataSchedule }} status={status} />
                </div>
                <TableSchedule schedule={schedules} selected={handleSelected} />
            </Module>
        </>
    );
}

export default Schedule;
