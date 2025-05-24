import React from 'react';

const UpcomingSchedule = () => {
    return (
        <div className="max-w-xl mx-auto py-4 rounded-2xl  text-gray-800 font-sans">
            <h2 className="text-lg font-bold text-blue-900 mb-4 ">The Upcoming Schedule</h2>

            <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">On Thursday</p>
                <div className="flex gap-4 flex-wrap">
                    <div className="bg-indigo-100 max-[530px]:w-full max-[494px]:rounded-sm text-indigo-900 p-4 rounded-2xl flex items-center justify-between w-[300px]">
                        <div>
                            <p className="text-sm font-medium">Health checkup complete</p>
                            <p className="text-xs mt-1">11:00 AM</p>
                        </div>
                        <span className="text-xl ml-2">💉</span>
                    </div>

                    <div className="bg-indigo-100 max-[494px]:rounded-sm text-indigo-900 p-4 rounded-xl flex items-center justify-between flex-1">
                        <div>
                            <p className="text-sm font-medium">Ophthalmologist</p>
                            <p className="text-xs mt-1">14:00 PM</p>
                        </div>
                        <span className="text-xl ml-2">👁️</span>
                    </div>
                </div>
            </div>

            <div>
                <p className="text-sm text-gray-500 mb-2">On Saturday</p>
                <div className="flex gap-4 flex-wrap">
                    <div className="bg-indigo-100 max-[600px]:w-full max-[494px]:rounded-sm text-indigo-900 p-4 rounded-xl flex items-center justify-between w-[200px]">
                        <div>
                            <p className="text-sm font-medium">Cardiologist</p>
                            <p className="text-xs mt-1">12:00 AM</p>
                        </div>
                        <span className="text-xl ml-2">❤️</span>
                    </div>

                    <div className="bg-indigo-100 max-[600px]:w-full max-[494px]:rounded-sm text-indigo-900 p-4 rounded-xl flex items-center justify-between w-[200px]">
                        <div>
                            <p className="text-sm font-medium">Neurologist</p>
                            <p className="text-xs mt-1">16:00 PM</p>
                        </div>
                        <span className="text-xl ml-2">🧑‍⚕️</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingSchedule;
