import { Activity, History, Calendar, Search, MessageCircle, LifeBuoy, Settings } from 'lucide-react';

export const menuItems = [
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
