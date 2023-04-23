import { Button, Input } from 'antd'
import React from 'react'

function index() {
    return (
        <>
            <Button onClick={(e) => test()} >Test</Button>
            <Button href='/schedule' >Test</Button>
            <Input placeholder="Basic usage" />
        </>
    )
}

export default index