import React from 'react'

const Sidebar = ({ menuItems, isSidebarOpen }) => {
    return (
        <aside className={`w-60 max-[1100px]:fixed z-[60] bg-blue-50/80 max-[1100px]:bg-white max-[1100px]:w-[34%] max-[768px]:w-[48%] max-[556px]:w-[60%] max-[418px]:w-[74%] max-[900px]:shadow-lg  min-h-screen transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <h1 className="text-2xl font-bold px-9 py-10 max-[556px]:py-6 max-[556px]:px-6">
                <span className="text-cyan-500">Health</span>
                <span className="text-gray-900">care.</span>
            </h1>
            <div className="px-6 max-[556px]:px-4">
                <h3 className="text-gray-500 mb-3 px-3 text-sm">General</h3>

                <nav className="space-y-1">
                    {menuItems.filter(item => !item.section).map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            className={`flex items-center space-x-3 px-3 py-2 rounded-lg max-[556px]:rounded-sm text-sm ${item.active
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
