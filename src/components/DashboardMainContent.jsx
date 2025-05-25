import React from 'react'
import DashboardOverview from './DashboardOverview'
import AppointmentSection from './AppointmentSection'

const DashboardMainContent = ({ upcomingAppointments, healthData, setIsSidebarOpen }) => {
    return (
        <div className='flex w-full max-[900px]:flex-col overflow-y-auto'>
            <DashboardOverview healthData={healthData} setIsSidebarOpen={setIsSidebarOpen} />
            <AppointmentSection upcomingAppointments={upcomingAppointments} />
        </div>
    )
}

export default DashboardMainContent