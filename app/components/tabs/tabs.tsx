'use client'
import { activeTabTypes, masterTapsProps } from "@/app/constens/types";
import { useEffect , useState } from "react";

export default function MasterTabs({setBrandsBackground, tabs , pageTitle} : masterTapsProps){
    const [activeTap , setActiveTap] = useState<activeTabTypes>(tabs[0])

    useEffect(() => {
        setBrandsBackground(activeTap.background)
    },[activeTap])

    return(
        <section className="absolute z-5 top-0 left-0 w-full min-h-screen lg:h-250 px-10 md:px-0">
            <div className="container overflow-hidden m-auto flex flex-col text-white size-full py-25 md:py-30">
                <ul data-aos='fade-up' data-aos-delay='500' className=" h-[10%] flex items-center">
                    <h2 className=" pe-5 md:pe-10 text-sm md:text-3xl flex">{pageTitle}</h2>
                    {tabs.map((tab) => {
                        return(
                            <li onClick={() => {
                                setActiveTap(tab)
                            }} key={tab.key} className={` cursor-pointer flex-1 h-full flex justify-center items-center py-2 backdrop-blur-sm ${activeTap.key === tab.key ? 'bg-red-900/20' : 'bg-black/20'}`}>
                                {tab.tabTitle}
                            </li>
                        )
                    })}
                </ul>
                <div data-aos='zoom-in' className={` h-[80%] bg-red-900/20 backdrop-blur-sm md:overflow-hidden overflow-scroll`}>
                    {activeTap.content}
                </div>
            </div>
        </section>
    )
}

