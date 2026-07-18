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
                            sizes="140px"
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
                                                    sizes="320px"
                                                    priority
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
            {/* phones */}
            <div className="lg:hidden w-full h-full space-y-10 p-5">
                <div className=" space-y-5 flex flex-col justify-center lg:h-100 size-full">
                    <div className="flex items-center">
                        <div className="flex-1 w-full h-px bg-white"></div>
                        <h2 className="px-2">Spida</h2>
                        <div className="flex-5 w-full h-px bg-white"></div>
                    </div>
                    <div data-aos='fade-right' className="w-full flex gap-2">
                        {brandsContent.spida.slide.map((item, i) => {
                            return(
                                <div key={i} className="w-30 h-30 flex flex-col justify-start items-center">
                                    <div className="relative w-20 h-20">
                                        <Image 
                                            src={item.image}
                                            alt=""
                                            fill
                                            sizes="80px"
                                            priority
                                        />
                                    </div>
                                    <p className="text-xs w-full text-center">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <h3 data-aos='fade-right' className="text-xl w-full">{brandsContent.spida.mainTitle}</h3>
                </div>
                <div className=" space-y-5 flex flex-col justify-center lg:h-100 size-full">
                    <div className="flex items-center">
                        <div className="flex-1 w-full h-px bg-white"></div>
                        <h2 className="px-2">Top- Fit</h2>
                        <div className="flex-5 w-full h-px bg-white"></div>
                    </div>                    
                    <div data-aos='fade-right' className="w-full flex gap-2">
                        {brandsContent.topFit.slide.map((item, i) => {
                            return(
                                <div key={i} className="w-30 h-30 flex flex-col justify-start items-center">
                                    <div className="relative w-20 h-20">
                                        <Image 
                                            src={item.image}
                                            alt=""
                                            fill
                                            sizes="80px"
                                            priority
                                        />
                                    </div>
                                    <p className=" text-xs w-full text-center">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <h3 data-aos='fade-right' className="text-xl w-full">{brandsContent.topFit.mainTitle}</h3>
                </div>
            </div>
        </>
    )
}