import StoreMap from "../stores/maps";
import ContactForm from "./contactForm";

export default function ContactUs(){
    return(
        <>
            <div data-aos='zoom-in' className='hidden absolute z-5 top-0 left-0 w-full h-250 lg:flex justify-center items-center'>
                <div className="container overflow-hidden m-auto flex flex-col text-white size-full py-50">
                    <h2 className="text-3xl pe-10">- Contact Us</h2>
                    <div className=" h-full flex bg-red-900/20 backdrop-blur-sm p-15">
                        <div className="w-[50%] h-full flex flex-col justify-between">
                            <div data-aos='fade-right' data-aos-delay='500' className="w-full pe-10 pb-10">
                                <h3 className=" text-7xl">Marion Trading Company</h3>
                                <p className="text-2xl"><span className="font-bold">Number Phone :</span> 0224555266</p>
                                <p className="text-2xl"><span className="font-bold">E - mail :</span> mariontrade@yahoo.com</p>
                            </div>
                            <span className="h-px w-full bg-white"></span>
                            <div data-aos='zoom-in' data-aos-delay='500' className="w-full h-full pe-20 pt-10">
                                <div className="overflow-hidden w-full h-full rounded-3xl border border-white/10 shadow-2xl">
                                    <StoreMap locationTitle='contact' />
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-1/2 ps-10 pb-10 border-s border-px border-white">
                            <h3 data-aos='fade-left' data-aos-delay='500' className=" text-5xl pb-5">Your Massage</h3>
                            <div data-aos='fade-up' data-aos-delay='500'>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tablits */}
            <div data-aos='zoom-in' className='absolute z-5 top-0 left-0 w-full h-300 lg:hidden hidden md:flex justify-center items-center'>
                <div className="container overflow-hidden m-auto flex flex-col text-white size-full py-50">
                    <h2 className="text-3xl pe-10">- Contact Us</h2>
                    <div className=" h-full bg-red-900/20 backdrop-blur-sm p-15">
                        <div className="w-full h-1/3 flex justify-between">
                            <div data-aos='fade-right' data-aos-delay='500' className="w-full pe-10 pb-10">
                                <h3 className=" text-4xl">Marion Trading Company</h3>
                                <p className="text-2xl"><span className="font-bold">Number Phone :</span> 0224555266</p>
                                <p className="text-2xl"><span className="font-bold">E - mail :</span> mariontrade@yahoo.com</p>
                            </div>
                            <div data-aos='zoom-in' data-aos-delay='500' className="w-full h-full">
                                <div className="overflow-hidden w-full h-full rounded-3xl border border-white/10 shadow-2xl">
                                    <StoreMap locationTitle='contact' />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-2/3">
                            <h3 data-aos='fade-left' data-aos-delay='500' className=" text-2xl pb-5">Your Massage</h3>
                            <div data-aos='fade-up' data-aos-delay='500'>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* phones */}
            <div data-aos='zoom-in' className='absolute z-5 top-0 left-0 w-full md:hidden flex justify-center items-center'>
                <div className="container overflow-hidden m-auto flex flex-col text-white w-full px-10 py-30">
                    <h2 className="text-3xl pe-10">- Contact Us</h2>
                    <div className=" min-h-full bg-red-900/20 backdrop-blur-sm p-5">
                        <div className="w-full h-80">
                            <div data-aos='zoom-in' data-aos-delay='500' className="w-full h-1/2">
                                <div className="overflow-hidden w-full h-full rounded-3xl border border-white/10 shadow-2xl">
                                    <StoreMap locationTitle='contact' />
                                </div>
                            </div>
                            <div data-aos='fzoom-in' data-aos-delay='500' className="w-full my-10">
                                <h3 className=" text-2xl font-bold">Marion Trading Company</h3>
                                <p className="text-xl"><span className="font-bold">Number Phone :</span> 0224555266</p>
                                <p className="text-xl"><span className="font-bold">E - mail :</span> mariontrade@yahoo.com</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 data-aos='zoom-in' data-aos-delay='500' className=" text-2xl pb-5">Your Massage</h3>
                            <div data-aos='zoom-in' data-aos-delay='500'>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}