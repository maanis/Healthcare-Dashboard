import React from 'react'
import DashboardOverview from './DashboardOverview'
import DashboardSectionB from './DashboardSectionB'

const DashboardMainContent = () => {
    return (
        <div className='flex w-full max-[900px]:flex-col overflow-y-auto'>
            <DashboardOverview />
            <DashboardSectionB />
        </div>
    )
}

export default DashboardMainContent