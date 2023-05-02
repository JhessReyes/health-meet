import { Button, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { Module } from '../../components/organism'
import { ProfileOutlined } from "@ant-design/icons";
import { ProfileModal, TableProfile } from './_components';
import { db } from '../../database/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

function Profile() {
    const [visible, setVisible] = useState(false)
    const [profileSelected, setProfileSelected] = useState()
    const [profiles, setProfiles] = useState([])
    const [status, setStatus] = useState([])
    const [messageApi, contextHolder] = message.useMessage();
    const toast = (type, context) => {
        messageApi.open({
            type: type || 'success',
            content: context || 'Se ha creado la especialidad correctamente',
        });
    };

    const handleCancel = (value) => {
        setProfileSelected('');
        setVisible(!value);
    };

    const handleSelected = (value) => {
        setProfileSelected(value)
        setVisible(true);
    }


    const handleAddOrEdit = async (profile, isCreating) => {
        if (isCreating) {
            try {
                setStatus(true);
                await addDoc(collection(db, "specialties"), { ...profile });
                setStatus(false);
                toast();
                setVisible(false);
            } catch (error) {
                toast('error', 'Ocurrio un error');
            }
        } else {
            try {
                setStatus(true);
                const ref = doc(db, "specialties", profileSelected?.key);
                await updateDoc(ref, { ...profile });
                setStatus(false);
                toast('', 'Se ha editado la especialidad correctamente');
                setVisible(false);
            } catch (error) {
                toast('error', 'Ocurrio un error');
            }
        }
    }

    const handleDeleted = async (profile) => {
        try {
            setStatus(true);
            await deleteDoc(doc(db, "specialties", profile?.key));
            setStatus(false);
            toast('', 'Se ha eliminado la especialidad correctamente');
            setVisible(false);
        } catch (error) {
            toast('error', 'Ocurrio un error');
        }
    }

    const getHistories = async () => {
        const dataProfiles = []
        const querySnapshot = await getDocs(collection(db, "specialties"));
        querySnapshot.forEach((doc) => {
            dataProfiles.push({ ...doc.data(), key: doc.id })
        });
        setProfiles(dataProfiles)
    }

    useEffect(() => {
        getHistories()
    }, [visible])

    return (
        <Module title="Perfil de Especialidades">
            {contextHolder}
            <div className="flex justify-end p-2">
                <Button
                    type="primary"
                    className="flex items-center"
                    onClick={(e) => setVisible(true)}
                    icon={<ProfileOutlined />}
                >
                    Agregar Especialidad
                </Button>
                <ProfileModal visible={visible} cancel={handleCancel} status={status} addOrEdit={handleAddOrEdit} {...{ profileSelected }} />
            </div>
            <TableProfile profiles={profiles} selected={handleSelected} deleted={handleDeleted} status={status} />
        </Module>
    )
}

export default Profile