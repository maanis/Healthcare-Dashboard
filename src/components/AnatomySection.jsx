import { ZoomIn } from 'lucide-react'
import React from 'react'
// import { anatomy } from '/anatomy.png'

const AnatomySection = () => {
    return (
        <div className="flex flex-1 justify-center max-[670px]:justify-start max-[556px]:justify-center mb-4">
            <div className="relative bg-blue-50/80 rounded-xl px-16">
                <ZoomIn className="absolute top-4 right-4 size-2 text-blue-900 w-4 h-4" />
                {/* Human body illustration placeholder */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-pink-200 to-red-300 rounded-full"></div> */}
                <img src='/anatomy.png' alt="" className=' h-80 object-cover' />

                {/* Health indicators */}
                <div className="absolute top-16 right-3">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-[9px] font-medium">
                        ❤️ Healthy Heart
                    </div>
                </div>

                <div className="absolute bottom-24 left-10">
                    <button className="bg-cyan-400 text-white px-3 py-1 rounded-lg text-[10px] font-medium">
                        Healthy Log
                    </button>
                </div>
            </div>
        </div >
    )
}

export default AnatomySection