'use client'
import { activeTabTypes, masterTapsProps } from "@/app/constens/types";
import { useEffect , useState } from "react";

export default function MasterTabs({setBrandsBackground, tabs , pageTitle} : masterTapsProps){
    const [activeTap , setActiveTap] = useState<activeTabTypes>(tabs[0])

    useEffect(() => {
        setBrandsBackground(activeTap.background)
    },[activeTap])

    return(
        <div className="absolute z-5 top-0 left-0 w-full min-h-screen flex justify-center items-center lg:px-0 md:py-0 py-30">
            {/* py-25 lg:py-30 */}
            <div className="container m-auto flex flex-col gap-10 lg:gap-0 text-white h-full w-full ">
                <ul data-aos='fade-up' data-aos-delay='500' className="ps-5 lg:ps-0 lg:h-[10%] gap-10 lg:gap-0 flex-wrap flex items-center">
                    <h2 className=" pe-5 lg:pe-10 text-3xl w-full lg:w-fit lg:flex">{pageTitle}</h2>
                    {tabs.map((tab) => {
                        return(
                            <li onClick={() => {
                                setActiveTap(tab)
                            }} key={tab.key} className={`${pageTitle === '- Our Products' ? ' flex' : 'hidden lg:flex'} cursor-pointer flex-1 h-full justify-center items-center py-2 lg:backdrop-blur-sm ${activeTap.key === tab.key ? 'lg:bg-red-900/20 border-b border-px border-white lg:border-none' : 'lg:bg-black/20'}`}>
                                {tab.tabTitle}
                            </li>
                        )
                    })}
                </ul>
                <div data-aos='zoom-in' className={` lg:h-[90%] lg:bg-red-900/20 lg:backdrop-blur-sm`}>
                    {activeTap.content}
                </div>
            </div>
        </div>
    )
}

