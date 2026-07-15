import { brandsContent } from "@/app/constens/data";
import { brandsProps} from "@/app/constens/types";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export default function Brands({keyOfContent}: brandsProps){

    return(
        <>
            <div className="hidden lg:flex items-center size-full">
                <div data-aos='fade-right' className="w-1/2">
                    <div className="relative w-35 h-30">
                        <Image
                            src={brandsContent[keyOfContent]?.mainImage}
                            alt=""
                            fill
                        />
                    </div>
                    <h3 className="text-2xl">{brandsContent[keyOfContent]?.mainTitle}</h3>
                </div>
                <div data-aos='fade-left' className="w-1/2 h-100 px-40">
                    <Carousel>
                        <CarouselContent>
                            {brandsContent[keyOfContent]?.slide.map((item, i) => {
                                return(
                                    <CarouselItem key={i}>
                                        <div className="size-full flex flex-col justify-center items-center">
                                            <div className="relative w-80 h-80">
                                                <Image 
                                                    src={item.image}
                                                    alt=""
                                                    fill
                                                />
                                            </div>
                                            <p className="text-center">{item.description}</p>
                                        </div>
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <CarouselPrevious className='cursor-pointer' />
                        <CarouselNext className='cursor-pointer' />
                    </Carousel>
                </div>
            </div>
            {/* tablits */}
            <div className="lg:hidden md:flex items-center hidden size-full py-10 ">
                <div data-aos='zoom-in' className="lg:w-1/2 flex flex-col justify-between gap-10 lg:h-100 size-full">
                    <Carousel>
                        <CarouselContent>
                            {brandsContent[keyOfContent]?.slide.map((item, i) => {
                                return(
                                    <CarouselItem key={i}>
                                        <div className="size-full flex flex-col justify-center items-center">
                                            <div className="relative w-80 h-80">
                                                <Image 
                                                    src={item.image}
                                                    alt=""
                                                    fill
                                                />
                                            </div>
                                            <p className="text-center lg:text-lg text-sm">{item.description}</p>
                                        </div>
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <CarouselPrevious className='cursor-pointer ms-20' />
                        <CarouselNext className='cursor-pointer me-20' />
                    </Carousel>
                    <h3 className=" text-sm w-full text-center">{brandsContent[keyOfContent]?.mainTitle}</h3>
                </div>
            </div>
            {/* phones */}
            <div className="md:hidden w-full h-full">
                <div data-aos='zoom-in' className=" flex flex-col justify-center gap-5 lg:h-100 size-full">
                    <Carousel>
                        <CarouselContent>
                            {brandsContent[keyOfContent]?.slide.map((item, i) => {
                                return(
                                    <CarouselItem key={i}>
                                        <div className="size-full flex flex-col justify-center items-center">
                                            <div className="relative w-40 h-40">
                                                <Image 
                                                    src={item.image}
                                                    alt=""
                                                    fill
                                                />
                                            </div>
                                            <p className="text-center px-10 text-xl">{item.description}</p>
                                        </div>
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <CarouselPrevious className='cursor-pointer ms-20' />
                        <CarouselNext className='cursor-pointer me-20' />
                    </Carousel>
                    <h3 className="text-3xl w-full p-5">{brandsContent[keyOfContent]?.mainTitle}</h3>
                </div>
            </div>
        </>
    )
}