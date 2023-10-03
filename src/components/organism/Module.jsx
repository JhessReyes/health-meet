import React from 'react'
//test
function Module({ children, title }) {
    return (
        <div className='p-10'>
            <h1 className='m-0'>
                {title}
            </h1>
            <div className='py-2'>
                {children}
            </div>
        </div>
    )
}

export default Module