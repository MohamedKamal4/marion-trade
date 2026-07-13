import { storesContent } from "@/app/constens/data"
import { storesProps } from "@/app/constens/types"
import Link from "next/link"

export default function Stores({storesData , keyOfContent}: storesProps){
    return(
        <>
            <div className="lg:flex hidden size-full">
                <div data-aos='fade-right' className="w-[70%] border-e border-px border-white flex flex-col gap-10">
                    <h3 data-aos='fade-right' data-aos-delay='500' className="text-xl pe-10">{storesContent[keyOfContent].mainTitle}</h3>
                    <span className=" w-full h-px bg-white"></span>
                    <div className="grid grid-cols-3">
                        {storesData.map((item , i) => {
                            return(
                                <div data-aos='zoom-in' data-aos-delay={(i + 1) * 500} key={i} className="w-full h-40">
                                    <h4 className="mb-2 w-full text-xl">{item.title}</h4>
                                    <ul className=" grid grid-cols-2">
                                        {item.list.map((item , i) => {
                                            return(
                                                <li key={i}>
                                                    - {item}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })

                        }
                    </div>
                </div>
                <div className="w-[30%] h-120 flex flex-col">
                    <div data-aos='zoom-in' data-aos-delay='2000' className="w-full h-[70%] ps-10">
                        <div className="overflow-hidden w-full h-full rounded-3xl border border-white/10 shadow-2xl">
                            {storesContent[keyOfContent].map}
                        </div>
                    </div>
                    <span data-aos='fade-right' className="w-full my-10 h-px bg-white"></span>
                    <div className="ps-10 flex justify-center items-center">
                        <ul data-aos='fade-left' data-aos-delay='500' className="flex justify-center items-center gap-5">
                            {storesContent[keyOfContent].socialMedia.map((link, i) => {
                                return(
                                    <li className="text-2xl" key={i}>
                                        <Link target="_blank" href={link.link}>
                                            {link.icon}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            {/* tablits */}
            <div className="lg:hidden hidden md:flex space-y-5 size-full">
                <div data-aos='fade-right' className="w-full h-[40%] flex gap-10">
                    <div data-aos='zoom-in' data-aos-delay='500' className="w-full h-full flex">
                        <div className="overflow-hidden w-2/3 h-full rounded-3xl border border-white/10 shadow-2xl">
                            {storesContent[keyOfContent].map}
                        </div>
                        <div className=" h-full w-1/3 flex justify-center items-center">
                            <ul data-aos='fade-left' data-aos-delay='500' className="px-10 space-y-2">
                                {storesContent[keyOfContent].socialMedia.map((link, i) => {
                                    return(
                                        <li className="text-2xl flex" key={i}>
                                            <Link className="flex items-center gap-2" target="_blank" href={link.link}>
                                                {link.icon} {link.platformName}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    {/* <span className=" h-full w-px bg-white"></span> */}
                </div>
                <div className="w-full h-[30%] flex flex-col">                    
                    <h3 data-aos='fade-right' data-aos-delay='500' className="text-sm">{storesContent[keyOfContent].mainTitle}</h3>
                </div>
                <div className="w-full h-[20%] flex ">
                    {storesData.map((item , i) => {
                        return(
                            <div data-aos='zoom-in' data-aos-delay={(i + 1) * 500} key={i} className="w-1/3 h-full">
                                <h4 className="my-1 w-full text-sm">{item.title}</h4>
                                <ul className="grid grid-cols-2 ">
                                    {item.list.map((item , i) => {
                                        return(
                                            <li className="text-xs" key={i}>
                                                - {item}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })

                    }
                </div>
                
            </div>
            {/* phones */}
            <div className="md:hidden space-y-5 size-full p-5">
                <div data-aos='fade-right' className="w-full h-50 space-y-5">
                    <div data-aos='zoom-in' data-aos-delay='500' className="w-full h-[90%] flex">
                        <div className="overflow-hidden w-full h-full rounded-3xl border border-white/10 shadow-2xl">
                            {storesContent[keyOfContent].map}
                        </div>
                    </div>
                    <div className=" h-[10%] w-full flex justify-center items-center">
                        <ul data-aos='fade-left ' data-aos-delay='500' className="w-full flex justify-between items-center">
                            {storesContent[keyOfContent].socialMedia.map((link, i) => {
                                return(
                                    <li data-aos='zoom-in' data-aos-delay={i * 500} className="text-xs flex" key={i}>
                                        <Link className="flex items-center gap-1" target="_blank" href={link.link}>
                                            {link.icon} {link.platformName}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    {/* <span className=" h-full w-px bg-white"></span> */}
                </div>
                <div className="w-full h-[30%] py-5 flex flex-col">                    
                    <h3 data-aos='zoom-in' data-aos-delay='500' className="text-xs">{storesContent[keyOfContent].mainTitle}</h3>
                </div>
                <div className="w-full space-y-5">
                    {storesData.map((item , i) => {
                        return(
                            <div data-aos='zoom-in' key={i} className="w-full h-full">
                                <h4 className="my-1 w-full text-sm">{item.title}</h4>
                                <ul className={`${i === 2 ? 'grid grid-cols-2' : 'grid grid-cols-3'} `}>
                                    {item.list.map((item , i) => {
                                        return(
                                            <li className="text-xs" key={i}>
                                                - {item}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })

                    }
                </div>
                
            </div>
        </>
    )
}