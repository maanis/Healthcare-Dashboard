import React from 'react';

const UpcomingSchedule = ({ upcomingAppointments }) => {
    return (
        <div className="max-w-xl max-[900px]:max-w-full mx-auto py-4 max-[900px]:pt-4 max-[900px]:pb-0 rounded-2xl text-gray-800 font-sans">
            <h2 className="text-lg font-bold text-blue-900 mb-4">The Upcoming Schedule</h2>

            {upcomingAppointments.map((daySchedule, index) => (
                <div key={index} className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">On {daySchedule.day}</p>
                    <div className="flex gap-4 flex-wrap">
                        {daySchedule.appointments.map((appointment, i) => (
                            <div
                                key={i}
                                className={`bg-indigo-100 text-indigo-900 p-4 rounded-2xl flex items-start justify-between ${appointment.width} max-[530px]:w-full max-[494px]:rounded-sm`}
                            >
                                <div>
                                    <p className="text-sm font-medium">{appointment.title}</p>
                                    <p className="text-xs mt-1">{appointment.time}</p>
                                </div>
                                <span className="text-sm ml-2">{appointment.icon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UpcomingSchedule;