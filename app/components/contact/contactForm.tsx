'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { formDataTypes } from "@/app/constens/types";
import { sendData } from "@/app/constens/functions";

export default function ContactForm() {
    const [formData , setFormData] = useState<formDataTypes>({
        name : '' ,
        companyName : '',
        subject : '',
        email : '' ,
        phone : '' , 
        message : ''
    })
    
    return (
        <div className="size-full">
            <form className="size-full flex flex-col justify-center gap-5 text-black">
                <div className="grid grid-cols-1">
                    <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                            setFormData({...formData , name : e.target.value})
                        }}
                        placeholder={`${formData.name === '' ? "*" : ""} Name ..`}
                        className={`border border-white bg-white/90 backdrop-blur-sm rounded-xl px-10 py-5 w-full ${ formData.name === '' ? "text-red-700 font-bold" : "" }`}
                    />
                </div>
                <div className="grid md:grid-cols-2 md:grid-rows-none grid-rows-2 gap-5">
                    <Input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => {
                            setFormData({...formData , companyName : e.target.value})
                        }}                        
                        placeholder={`${formData.companyName === ''? "*": "" } Company Name ..`}
                        className={`border border-white bg-white/90 backdrop-blur-sm rounded-xl px-10 py-5 w-full ${ formData.companyName === '' ? "text-red-700 font-bold" : ""}`}
                    />
                    <Input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => {
                            setFormData({...formData , subject : e.target.value})
                        }}
                        placeholder={`${formData.name === '' ? "*" : ""} subject ..`}
                        className={`border border-white bg-white/90 backdrop-blur-sm rounded-xl px-10 py-5 w-full ${ formData.subject === '' ? "text-red-700 font-bold" : "" }`}
                    />
                </div>

                <div className="grid md:grid-cols-2 md:grid-rows-none grid-rows-2 gap-5">
                    <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                            setFormData({...formData , email : e.target.value})
                        }}
                        placeholder={`${formData.email === ''? "*": ""} Email ..`}
                        className={`border border-white bg-white/90 backdrop-blur-sm rounded-xl px-10 py-5 w-full ${formData.email === ''? "text-red-700 font-bold": ""}`}
                    />

                    <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                            setFormData({...formData , phone : e.target.value})
                        }}
                        placeholder={`${formData.phone === ''? "*": ""} Phone ..`}
                        className={`border border-white bg-white/90 backdrop-blur-sm rounded-xl px-10 py-5 w-full ${formData.phone === ''? "text-red-700 font-bold": ""}`}
                    />
                </div>

                <textarea
                    value={formData.message}
                    onChange={(e) => {
                        setFormData({...formData , message : e.target.value})
                    }}
                    placeholder={`${formData.message === ''? "*": ""} Message ..`}
                    className={`border border-white bg-white/90 backdrop-blur-sm rounded-xl px-10 py-3 h-25 w-full resize-none ${formData.message === ''? "text-red-700 font-bold": ""}`}
                />

                <Button
                    type="button"
                    onClick={() => {
                        sendData({formData , setFormData})
                    }}
                    disabled={ !formData.name || !formData.companyName || !formData.email || !formData.phone || !formData.message }
                    className="h-14 w-full rounded-xl bg-red-900 lg:bg-black text-white cursor-pointer hover:bg-gray-900 transition"
                >
                    Send
                </Button>
            </form>
        </div>
    );
}