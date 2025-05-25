import React from 'react'
import { Card } from '@/components/ui/card';

const HealthStatusCards = ({ healthData }) => {
    return (
        <div className="space-y-4 max-[900px]:w-[50%] max-[670px]:w-[42%] max-[556px]:w-full">
            {healthData.map((item, i) => (
                <Card key={item.title} className="p-4 w-full bg-blue-50/80">
                    <div className="flex items-start flex-col w-full">
                        <div className="w-full gap-2 rounded-lg mb-2 flex items-center justify-start max-[900px]:justify-between">
                            <span className="text-xl">{item.icon}</span>
                            <h3 className="font-medium text-gray-900">{item.title}</h3>
                        </div>
                        <div className="flex-1 w-full">
                            <p className="text-xs text-gray-500">{item.date}</p>
                            <div className="mt-2 w-full">
                                <div className="w-full bg-gray-200 rounded-full h-1">
                                    <div
                                        className={`h-[6px] rounded-full ${item.status === 'success' ? 'bg-emerald-300' : item.status === 'warning' && i === 0 ? 'bg-red-800' :
                                            'bg-orange-400'}`}
                                        style={{ width: `${item.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default HealthStatusCards;
