import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";


const AppointmentCalendar = () => {
    return (
        <div className="max-w-4xl mx-auto text-xs rounded-2xl text-gray-800 font-sans">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-blue-900" >October 2021</h2>
                <div className="flex items-center gap-2">
                    <button className="p-1 rounded-full hover:bg-gray-100">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="p-1 rounded-full hover:bg-gray-100">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-4 text-center text-sm font-medium">
                {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day, i) => (
                    <div key={i} className="text-gray-500 max-[494px]:text-xs">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-4 mt-2 text-center text-sm">
                {[
                    { date: "25", times: ["10:00", "11:00", "12:00"] },
                    { date: "26", times: ["08:00", "09:00", "10:00"], active: "09:00" },
                    { date: "27", times: ["12:00", "13:00"] },
                    { date: "28", times: ["10:00", "11:00"], active: "11:00" },
                    { date: "29", times: ["14:00", "16:00"] },
                    { date: "30", times: ["12:00"] },
                    { date: "31", times: ["09:00", "10:00", "11:00"], active: "09:00" },
                ].map((day, i) => (
                    <div
                        key={i}
                        className={`py-2 px-2 max-[494px]:px-1 max-[494px]:rounded-sm rounded-xl ${day.active && day.date === '26' ? "bg-blue-100/75" : ""
                            }`}
                    >
                        <div
                            className={`text-lg max-[494px]:text-xs font-semibold ${day.active ? "text-blue-900" : "text-gray-700"
                                }`}
                        >
                            {day.date}
                        </div>
                        <div className="mt-2 flex flex-col gap-1">
                            {day.times.map((time, j) => (
                                <div
                                    key={j}
                                    className={`rounded-sm max-[494px]:rounded  py-1 max-[494px]:text-[8px] text-xs ${time === day.active && day.date === '26'
                                        ? "bg-blue-900 text-white  font-medium"
                                        : time === day.active ? 'bg-indigo-900/40 text-white' : "text-gray-600"
                                        }`}
                                >
                                    {time}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-3 flex max-[556px]:flex-col items-center gap-4">
                <div className="bg-blue-900 text-white p-3 max-[556px]:w-full rounded-xl max-[494px]:rounded-sm flex items-start gap-3">
                    <div>
                        <div className="text-sm font-semibold">Dentist</div>
                        <div className="text-xs">09:00–11:00</div>
                        <div className="text-xs mt-1">Dr. Cameron Williamson</div>
                    </div>
                    <div className="ml-auto">🦷</div>
                </div>

                <div className="bg-indigo-100 flex-1 text-indigo-900 max-[494px]:rounded-sm p-4 max-[556px]:w-full rounded-xl flex items-start gap-4">
                    <div>
                        <div className="text-sm font-semibold">Physiotherapy Appointment</div>
                        <div className="text-xs">11:00–12:00</div>
                        <div className="text-xs mt-1">Dr. Kevin Djones</div>
                    </div>
                    <div className="ml-auto ">💪🏻</div>
                </div>
            </div>
        </div >
    );
}

export default AppointmentCalendar;
