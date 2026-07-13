import { toast } from "sonner";
import { HandleNavTapsOnClickProps, sendDatatypes } from "./types";
import emailjs from "@emailjs/browser";

export const handleNavTapsOnClick = ({
  page,
  setpageEnabled,
  setPage,
}: HandleNavTapsOnClickProps) => {
  if (page === "home") {
    setpageEnabled(page);
    setPage(page);
    return;
  }

  const url = new URL(window.location.href);

  url.searchParams.set("page", page);

  window.history.replaceState({}, "", url);

  setpageEnabled(page);
  setPage(page);
};

export const sendData = async ({formData , setFormData} : sendDatatypes ) => {
    try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            {
                name: formData.name,
                companyName: formData.companyName,
                subject : formData.subject ,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );

        toast.success("Message sent successfully!");
        setFormData({
            name : '' ,
            companyName : '',
            subject : '',
            email : '' ,
            phone : '' , 
            message : ''
        });
    } catch (error) {
        console.error(error);
        toast.error("Failed to send message!");
    }
}
