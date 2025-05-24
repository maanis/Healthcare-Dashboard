import { Card } from '@/components/ui/card';

const HealthStatusCards = () => {
    const healthItems = [
        {
            icon: '🫁',
            title: 'Lungs',
            date: 'Dec 19 Oct 2021',
            status: 'warning',
            progress: 60
        },
        {
            icon: '🦷',
            title: 'Teeth',
            date: 'Dec 19 Oct 2021',
            status: 'success',
            progress: 80
        },
        {
            icon: '🦴',
            title: 'Bone',
            date: 'Dec 19 Oct 2021',
            status: 'warning',
            progress: 45
        }
    ];

    return (
        <div className="space-y-4 max-[900px]:w-[50%] max-[670px]:w-[42%] max-[556px]:w-full">
            {healthItems.map((item, i) => (
                <Card key={item.title} className="p-4 bg-blue-50/80">
                    <div className="flex items-center space-x-3 ">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            <span className="text-lg">{item.icon}</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{item.title}</h3>
                            <p className="text-xs text-gray-500">{item.date}</p>
                            <div className="mt-2">
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
