import React from 'react'
import { Plus } from 'lucide-react'
import AppointmentCalendar from './AppointmentCalendar'
import UpcomingSchedule from './UpcomingSchedule'

const AppointmentSection = ({ upcomingAppointments }) => {
    return (
        <div className='w-[52%] max-[1219px]:px-5 max-[900px]:px-10 max-[900px]:w-full px-12 max-[600px]:px-5 max-[900px]:mt-6 max-[900px]:py-3  bg-blue-50/80'>
            <div className="flex gap-3 max-[900px]:hidden justify-end py-10">
                <img src="https://www.pngarts.com/files/5/Cartoon-Avatar-PNG-Image-Transparent.png" className='w-8 h-8 object-cover' alt="" />
                <div className='bg-blue-900 w-8 h-8 rounded-lg flex items-center justify-center'>
                    <Plus className='text-white' />
                </div>
            </div>

            <AppointmentCalendar />
            <UpcomingSchedule upcomingAppointments={upcomingAppointments} />

        </div>
    )
}

export default AppointmentSection