import React from 'react'

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const barSets = [
    [30, 50, 40],
    [60, 40, 35],
    [20, 30, 15],
    [45, 25, 35],
    [50, 60, 40],
    [55, 40, 30],
    [30, 45, 25],
];

const colors = ['bg-cyan-400', 'bg-gray-300', 'bg-indigo-500'];

const ActivityFeed = () => {
    return (
        <div className="bg-[#f9fafe] shadow-sm rounded-xl px-6 max-[556px]:mt-1 py-4 w-full max-w-3xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-semibold text-[#2a2a6a]">Activity</h2>
                <p className="text-sm text-gray-400 max-[494px]:text-xs">3 appointment on this week</p>
            </div>

            <div className="relative flex justify-between items-end h-28">
                {days.map((_, index) => (
                    <div
                        key={`placeholder-${index}`}
                        className="absolute top-0 bottom-4 w-px bg-gray-200"
                        style={{ left: `calc(${(index + 0.5) * (100 / 7)}%)`, transform: 'translateX(-50%)' }}
                    ></div>
                ))}

                {barSets.map((bars, dayIdx) => (
                    <div key={dayIdx} className="flex flex-col items-center gap-1 z-10 w-full">
                        <div className="flex items-end gap-[3px] h-24">
                            {bars.map((height, idx) => (
                                <div
                                    key={idx}
                                    className={`${colors[idx]} w-[4px] rounded-full`}
                                    style={{ height: `${height}px` }}
                                />
                            ))}
                        </div>
                        <span className="text-[12px] text-gray-500 mt-1">{days[dayIdx]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityFeed;
