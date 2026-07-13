import * as Yup from "yup";

export const contactSchema = Yup.object({
    name: Yup.string()
        .trim()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must not exceed 50 characters"),

    companyName: Yup.string()
        .trim()
        .required("Company name is required")
        .min(2, "Company name must be at least 2 characters")
        .max(100, "Company name must not exceed 100 characters"),

    email: Yup.string()
        .trim()
        .email("Please enter a valid email address")
        .required("Email is required"),

    phone: Yup.string()
        .trim()
        .matches(
        /^\+?[1-9]\d{7,14}$/,
        "Please enter a valid phone number"
        )
        .required("Phone number is required"),

    message: Yup.string()
        .trim()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must not exceed 1000 characters"),
});