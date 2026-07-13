import { productsContent } from "@/app/constens/data";
import { productsProps } from "@/app/constens/types";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export default function Products({keyOfContent} : productsProps){
    return(
        <>
            <div className=" hidden lg:flex size-full p-10">
                <Carousel className="flex w-full justify-center items-center">
                    <CarouselContent className="w-full">
                        {productsContent[keyOfContent].slide.map((item, i) => {
                            return(
                                <CarouselItem key={i}>
                                    <div className="size-full flex justify-center items-center">
                                        <div className="flex flex-wrap flex-col gap-5 justify-center w-[60%] ps-20">
                                            <h2 className="text-8xl">{item.gategoryName}</h2>
                                            <p className="text-xl">{item.description}</p>
                                            <div>
                                                <h3 className="text-3xl">Features</h3>
                                                <ul className=" flex flex-col flex-wrap w-fit space-x-10 h-15">
                                                    {item.featuresList.map((list , i ) => {
                                                        return(
                                                            <li key={i}>
                                                                {list}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center w-[35%] h-85">
                                            <div className={`relative ${item.class}`}>
                                                <Image 
                                                    src={item.image}
                                                    alt=""
                                                    fill
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious className='cursor-pointer' />
                    <CarouselNext className='cursor-pointer' />
                </Carousel>
            </div>
            {/* tablits */}
            <div className=" lg:hidden hidden md:flex size-full p-10">
                <Carousel>
                    <CarouselContent className="h-120 w-full">
                        {productsContent[keyOfContent].slide.map((item, i) => {
                            return(
                                <CarouselItem className="size-full" key={i}>
                                    <div className="size-full px-10">
                                        <div className="flex w-full h-1/2">
                                            <div className=" w-1/2 h-full">
                                                <div className={`relative w-60 h-60`}>
                                                    <Image 
                                                        src={item.image}
                                                        alt=""
                                                        fill
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-1/2 ps-20 mt-10">
                                                <h3 className="text-5xl">Features</h3>
                                                <ul className=" flex flex-col w-fit text-md space-x-10 h-15">
                                                    {item.featuresList.map((list , i ) => {
                                                        return(
                                                            <li key={i}>
                                                                {list}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col justify-center h-1/2">
                                            <h2 className="text-5xl">{item.gategoryName}</h2>
                                            <p className="text-md">{item.description}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious className='cursor-pointer' />
                    <CarouselNext className='cursor-pointer' />
                </Carousel>
            </div>
            {/* phones */}
            <div className=" md:hidden w-full p-5">
                <Carousel>
                    <CarouselContent className=" h-180 w-full">
                        {productsContent[keyOfContent].slide.map((item, i) => {
                            return(
                                <CarouselItem className="w-full ms-2" key={i}>
                                    <div className="size-full">
                                        <div className="w-full">
                                            <div className=" w-full h-50 flex justify-center items-center">
                                                <div className={`relative ${item.class}`}>
                                                    <Image 
                                                        src={item.image}
                                                        alt=""
                                                        fill
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col justify-center mt-20">
                                            <h2 className="text-5xl">{item.gategoryName}</h2>
                                            <p className="text-md">{item.description}</p>
                                        </div>
                                        <div className="mt-10">
                                            <h3 className="text-5xl">Features</h3>
                                            <ul className=" flex flex-col w-fit text-md space-x-10 h-15">
                                                {item.featuresList.map((list , i ) => {
                                                    return(
                                                        <li key={i}>
                                                            {list}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious className='cursor-pointer ms-20 mt-50' />
                    <CarouselNext className='cursor-pointer me-20 mt-50' />
                </Carousel>
            </div>
        </>
    )
}