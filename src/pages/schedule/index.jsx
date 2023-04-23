import { Button, Input } from 'antd'
import React from 'react'
import { FormSchedule, TableSchedule } from './_components'

function index() {
    return (
        <>
            <Button onClick={(e) => test()} >Test</Button>
            <Button href='/schedule' >Test</Button>
            <Input placeholder="Basic usage" />
            {/* <FormSchedule></FormSchedule> */}
            <TableSchedule></TableSchedule>
        </>
    )
}

export default index