import { faqData } from "@/app/constens/data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export default function Faq(){
    return(
        <>
            <div data-aos='zoom-in' className='hidden absolute z-5 top-0 left-0 w-full h-full lg:flex justify-center items-center'>
                <div className=" container h-2/3 w-full text-white flex-col gap-10">
                    <h2 className="text-3xl pe-10">- FAQ</h2>
                    <div className=" h-full bg-red-900/20 backdrop-blur-sm p-15">
                        <Accordion defaultValue={["shipping"]} className="size-full grid grid-cols-2">
                            <div data-aos='fade-right' className="w-full h-full p-10">
                                    {faqData.slice(0 , 8).map((q , i) => {
                                        return(
                                            <AccordionItem className=' h-[12.5%]' key={i} value={q.value}>
                                                <AccordionTrigger className=' cursor-pointer '>{q.question}</AccordionTrigger>
                                                <AccordionContent className='bg-black relative z-2 p-5 rounded-xl'>
                                                    {q.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        )
                                    })}
                            </div>
                            <div data-aos='fade-left' className="w-full h-full p-10">
                                    {faqData.slice(8 , 16).map((q , i) => {
                                        return(
                                            <AccordionItem className=' h-[12.5%] cursor-pointer' key={i} value={q.value}>
                                                <AccordionTrigger className=' cursor-pointer '>{q.question}</AccordionTrigger>
                                                <AccordionContent className='bg-black relative z-2 p-5 rounded-xl'>
                                                    {q.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        )
                                    })}
                            </div>
                        </Accordion>
                    </div>
                </div>
            </div>
            {/* phones */}
            <div data-aos='zoom-in' className='lg:hidden absolute z-5 top-0 left-0 w-full flex justify-center items-center'>
                <div className=" container w-full text-white flex-col gap-10 pt-40 pb-30 lg:py-30">
                    <h2 className="text-3xl ps-5">- FAQ</h2>
                    <div className=" h-full p-5">
                        <Accordion defaultValue={["shipping"]} className="size-full">
                            <div data-aos='zoom-in' className="">
                                    {faqData.map((q , i) => {
                                        return(
                                            <AccordionItem className=' h-[12.5%]' key={i} value={q.value}>
                                                <AccordionTrigger className=' cursor-pointer '>{q.question}</AccordionTrigger>
                                                <AccordionContent className='bg-red-900 relative z-2 p-5 mb-10 rounded-xl'>
                                                    {q.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        )
                                    })}
                            </div>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

