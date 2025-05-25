import React from 'react'
import { ZoomIn } from 'lucide-react'

const AnatomySection = () => {
    return (
        <div className="flex flex-1 justify-center max-[670px]:justify-start max-[556px]:justify-center mb-4">
            <div className="relative bg-blue-50/80 rounded-xl px-16">
                <ZoomIn className="absolute top-4 right-4 size-2 text-blue-900 w-4 h-4" />
                <img src={`${import.meta.env.BASE_URL}anatomy.png`} alt="" className="h-80 object-cover" />


                <div className="absolute top-16 right-3">
                    <div className="bg-blue-900 text-white px-3 py-1 rounded-sm text-[9px] font-medium">
                        ❤️ Healthy Heart
                    </div>
                </div>

                <div className="absolute bottom-24 left-10">
                    <button className="bg-cyan-400 text-blue-950 px-3 py-1 rounded-sm text-[10px] font-medium">
                        🦵🏻Healthy Log
                    </button>
                </div>
            </div>
        </div >
    )
}

export default AnatomySection