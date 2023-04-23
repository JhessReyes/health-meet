import { Button, Input } from 'antd'
import React from 'react'
import { Icon } from '../../components/atoms'
import { Module } from '../../components/organism'
import { FormSchedule, TableSchedule } from './_components'

function Schedule() {
    return (
        <>
            <Module title='Horarios'>
                <div className='flex justify-end p-2'>

                    <Button type="primary" className='flex items-center'>
                        <Icon name='more_time'></Icon>
                        Agregar Horario
                    </Button>
                </div>
                <TableSchedule></TableSchedule>
            </Module>
        </>
    )
}

export default Schedule