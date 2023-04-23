import React from 'react'
import Navigation from '../organism/Navigation'

export default function AppLayout({ children }) {
    return (
        <>
            <div className='w-full h-full'>
                <header className='sticky top-0 z-50'>
                    <Navigation></Navigation>
                </header>
                <main className='overflow-auto'>{children}</main>
            </div>
        </>
    )
}
