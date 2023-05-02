import React, { useEffect, useState } from 'react'
import { Module } from '../../components/organism'
import { HistoryModal, TableHistory } from './_components'
import { HistoryOutlined } from "@ant-design/icons";
import { Button, message } from 'antd';
import { db } from '../../database/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

function Patients() {
  const [visible, setVisible] = useState(false)
  const [historySelected, setHistorySelected] = useState()
  const [histories, setHistories] = useState([])
  const [status, setStatus] = useState([])
  const [messageApi, contextHolder] = message.useMessage();
  const toast = (type, context) => {
    messageApi.open({
      type: type || 'success',
      content: context || 'Se ha creado el historial correctamente',
    });
  };

  const handleCancel = (value) => {
    setHistorySelected('');
    setVisible(!value);
  };

  const handleSelected = (value) => {
    setHistorySelected(value)
    setVisible(true);
  }

  const handleAddOrEdit = async (history, isCreating) => {
    if (isCreating) {
      try {
        setStatus(true);
        await addDoc(collection(db, "medical-history"), { ...history });
        setStatus(false);
        toast();
        setVisible(false);
      } catch (error) {
        toast('error', 'Ocurrio un error');
      }
    } else {
      try {
        setStatus(true);
        const ref = doc(db, "medical-history", historySelected?.key);
        await updateDoc(ref, { ...history });
        setStatus(false);
        toast('', 'Se ha editado el historial correctamente');
        setVisible(false);
      } catch (error) {
        toast('error', 'Ocurrio un error');
      }
    }
  }

  const handleDeleted = async (history) => {
    try {
      setStatus(true);
      await deleteDoc(doc(db, "medical-history", history?.key));
      setStatus(false);
      toast('', 'Se ha eliminado el historial correctamente');
      setVisible(false);
    } catch (error) {
      toast('error', 'Ocurrio un error');
    }
  }


  const getHistories = async () => {
    const dataHistory = []
    const querySnapshot = await getDocs(collection(db, "medical-history"));
    querySnapshot.forEach((doc) => {
      dataHistory.push({ ...doc.data(), key: doc.id })
    });
    setHistories(dataHistory)
  }

  useEffect(() => {
    getHistories()
  }, [visible])

  return (
    <Module title="Historial Medico de Pacientes">
      {contextHolder}
      <div className="flex justify-end p-2">
        <Button
          type="primary"
          className="flex items-center"
          onClick={(e) => setVisible(true)}
          icon={<HistoryOutlined />}
        >
          Agregar Historial
        </Button>
        <HistoryModal visible={visible} cancel={handleCancel} status={status} addOrEdit={handleAddOrEdit} {...{ historySelected }} />
      </div>
      <TableHistory histories={histories} selected={handleSelected} deleted={handleDeleted} status={status}></TableHistory>
    </Module>
  )
}

export default Patients