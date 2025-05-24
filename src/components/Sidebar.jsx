import {
    Calendar,
    Activity,
    History,
    Settings,
    MessageCircle,
    Search,
    LifeBuoy
} from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { icon: Activity, label: 'Dashboard', active: true },
        { icon: History, label: 'History' },
        { icon: Calendar, label: 'Calendar' },
        { icon: Calendar, label: 'Appointments' },
        { icon: Activity, label: 'Statistics' },
        { icon: Search, label: 'Tests', section: 'tools' },
        { icon: MessageCircle, label: 'Chat', section: 'tools' },
        { icon: LifeBuoy, label: 'Support', section: 'tools' },
        { icon: Settings, label: 'Setting' },
    ];

    return (
        <aside className="w-60 max-[900px]:hidden bg-blue-50/80  min-h-screen">
            <h1 className="text-2xl font-bold px-9 py-10">
                <span className="text-cyan-500">Health</span>
                <span className="text-gray-900">care.</span>
            </h1>
            <div className="px-6">
                <h3 className="text-gray-500 mb-3 px-3 text-sm">General</h3>

                <nav className="space-y-1">
                    {menuItems.filter(item => !item.section).map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${item.active
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>

                <h3 className="text-gray-500 mt-6 mb-3 px-3 text-sm">Tools</h3>

                <nav className="space-y-1">
                    {menuItems.filter(item => item.section === 'tools').map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
