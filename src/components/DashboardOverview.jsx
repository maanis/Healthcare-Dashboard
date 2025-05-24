import { Bell, BellIcon, ChevronDown, Menu, MoveDownLeft, Plus, Search } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import ActivityFeed from './ActivityFeed'

const DashboardOverview = () => {
    return (
        <div className='px-12 max-[600px]:px-5 w-[48%] max-[900px]:w-full'>
            <div className="relative  max-[556px]:justify-between flex items-center gap-4 w-full max-md:py-5 py-10">
                <Menu className='max-[900px]:block hidden' />
                <Search className="absolute left-3 max-[900px]:hidden max-[900px]:left-12 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                    placeholder="Search"
                    className="pl-10 w-full max-[900px]:ml-auto max-[556px]:hidden max-[900px]:w-72 bg-gray-50 border border-zinc-300  outline-none"
                />
                <BellIcon className="absolute right-7 max-[900px]:right-26 max-[556px]:hidden text-blue-900 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                <div className="hidden gap-3 max-[900px]:flex justify-end">
                    <img src="https://www.pngarts.com/files/5/Cartoon-Avatar-PNG-Image-Transparent.png" className='w-8 h-8 max-[556px]:w-6 max-[556px]:h-6 object-cover' alt="" />
                    <div className='bg-blue-900 w-8 h-8 max-[556px]:w-6 max-[556px]:h-6 max-[556px]:rounded-sm rounded-lg flex items-center justify-center'>
                        <Plus className='text-white' />
                    </div>
                </div>
            </div>

            <div className="flex w-full -mt-2 items-center justify-between">
                <h2 className='text-xl font-bold text-blue-900'>Dashboard</h2>
                <p className='text-xs flex items-center gap-1 text-zinc-400'>This Week <ChevronDown className='size-4' /></p>
            </div>

            <div className="flex max-[556px]:flex-col mt-4 w-full max-[556px]:py-4">
                <AnatomySection />
                <HealthStatusCards />
            </div>
            <ActivityFeed />
        </div>
    )
}

export default DashboardOverview