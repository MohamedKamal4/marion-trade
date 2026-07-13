import { activeTabTypes, BrandContent, ProductsContent, StoresContent } from "./types";
import spida from '../assets/image/newSpida.png'
import geely from '../assets/image/geely.png'
import spida1 from '../assets/image/spida1.png'
import spida2 from '../assets/image/spida2.png'
import spida3 from '../assets/image/spida3.png'
import topFit from '../assets/image/topfit.png'
import topFit1 from '../assets/image/topfit1.png'
import topFit2 from '../assets/image/topfit2.png'
import topFit3 from '../assets/image/topfit3.png'
import geely1 from '../assets/image/geely1.png'
import geely2 from '../assets/image/geely2.png'
import geely3 from '../assets/image/geely3.png'
import Sedans from '../assets/image/Sedans.png'
import Refrigerators from '../assets/image/Refrigerators.png'
import LuxuryVehicles from '../assets/image/LuxuryVehicles.png'
import PickupTrucks from '../assets/image/PickupTrucks.png'
import ElectricVehicles from '../assets/image/ElectricVehicles.png'
import WashingMachines from '../assets/image/WashingMachines.png'
import AirConditioners from '../assets/image/AirConditioners.png'
import SmallKitchenAppliances from '../assets/image/SmallKitchenAppliances.png'
import KitchenAppliances from '../assets/image/KitchenAppliances.png'
import Televisions from '../assets/image/Televisions.png'
import Crossovers from '../assets/image/Crossovers.png'
import SUVs from '../assets/image/SUVs.png'
import MasterContent from "../components/masterContent/content";
import StoreMap from "../components/stores/maps";
import { FaInstagram } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import { RiFacebookLine } from "react-icons/ri";



export const navLinks = [
  { name: "Home", page: "home" },
  { name: "About", page: "about" },
  { name: "Brands", page: "brands" },
  { name: "Stores", page: "stores" },
  { name: "Products", page: "products" },
  { name: "Contact Us", page: "Contact Us" },
  { name: "FAQ", page: "faq" },
];


export const aboutContent = [
    {animation: 'fade-right' , delay: '' , title  : 'About Us' , content: 'Established in 1986, MARION TRADE has become one of the leading companies in the field of fitness equipment and electrical appliances, providing high-quality products and professional services that meet customer needs.'},
    {animation: 'fade-left' , delay: '1500' , title  : 'Our Commitment' , content: 'Our success is built on the trust and continuous support of our customers. Therefore, we constantly work on improving our products and services to provide the best possible experience.'},
    {animation: 'fade-right' , delay: '500' , title  : 'Our Mission' , list: ['✔ Offer competitive prices', '✔ Provide premium quality products', ' ✔ Deliver solutions tailored to customer needs', '✔ Provide excellent customer & after-sales service', '✔ Build long-term relationships with our clients']},
    {animation: 'fade-left' , delay: '2000' , title  : 'Why Choose Us?' , list: ['Over 40 years of market experience.', 'Wide product variety.', 'Competitive pricing.', 'Excellent after-sales support.', 'High-quality and reliable products.', 'Professional customer service.', 'Fast supply and delivery.', 'Access to the latest products & technologies.']},
    {animation: 'fade-right' , delay: '1000' , title  : 'Our Vision' , content: 'To become one of the leading companies in providing electrical appliances and fitness solutions by delivering innovative, high-quality products that meet modern market demands'},
    {animation: 'fade-left' , delay: '2500' , title  : 'Our Branches' , nastedList: [
      {mainList: 'EGY : Gesr El-Suez Street, Zeitoun District, Cairo Governorate 4520165' , lists: {email : 'mariontrade@yahoo.com' , mobile : '0224555266'}},
    ]},
]


export const brandsContent: Record<string, BrandContent> = {
    geely: {
        mainImage: geely,
        mainTitle: 'Welcome to Marion Trade, the Official Authorized Distributor of Geely, where innovation meets trust and excellence. Through our commitment to delivering world-class automotive solutions, we proudly provide genuine Geely vehicles, original spare parts, and comprehensive after-sales services that meet the highest international standards. At Refela Motors, our dedicated automotive showrooms offer a premium selection of Geely models alongside a diverse range of vehicles from leading global brands across different categories.',
        slide: [
            {
                image: geely1,
                description: 'Geely Coolray – Dynamic Performance, Intelligent Technology & Modern SUV Design',
            },
            {
                image: geely2,
                description: 'Geely Starray – Premium Comfort, Advanced Innovation & Powerful Driving Experience',
            },
            {
                image: geely3,
                description: 'Geely Emgrand – Elegant Design, Exceptional Comfort & Reliable Everyday Performance',
            },
        ],
    },
    spida: {
        mainImage: spida,
        mainTitle: 'SPIDA is a trusted home appliance brand dedicated to providing reliable, innovative, and stylish kitchen solutions for modern households. Designed with a focus on performance, durability, and ease of use, SPIDA products help make everyday cooking and food preparation faster, easier, and more enjoyable. From small kitchen appliances to practical home essentials, SPIDA combines quality craftsmanship with contemporary design to meet the needs of every home.',
        slide: [
            {
                image: spida1,
                description: 'Spida Air Fryer',
            },
            {
                image: spida2,
                description: 'Spida Electric Steam Iron',
            },
            {
                image: spida3,
                description: 'Spida Chopper',
            }
        ],
    },
    topFit: {
        mainImage: topFit,
        mainTitle: 'Top Fit is a fitness equipment brand committed to helping people achieve healthier and more active lifestyles. Offering a wide range of high-quality fitness machines and workout solutions, Top Fit combines durability, performance, and modern design to meet the needs of both home users and commercial gyms. Whether for cardio, strength training, or overall fitness, Top Fit delivers reliable equipment that supports every fitness journey.',
        slide: [
            {
                image: topFit1,
                description: 'TopFit MT-X-Power Electric Walker',
            },
            {
                image: topFit2,
                description: 'TOPFIT MT-7001 Multi-Gym Home Exercise Machine',
            },
            {
                image: topFit3,
                description: 'Weight set with bar from Top Fit,17 pieces – Silver and Black',
            },
        ],
    },
};

export const storesContent: Record<string, StoresContent> = {
    motors: {
        mainTitle: `**Refela Motors**, a proud member of **Marion Trade**, is your trusted destination for premium automotive solutions. As the official dealer of **Geely**, we offer the latest Geely models alongside a wide selection of vehicles to meet the diverse needs of our customers. Whether you're looking to purchase your next vehicle with **cash** or through **flexible financing plans**, our experienced team is committed to delivering a seamless and personalized buying experience. From expert consultation and vehicle selection to after-sales support, we ensure every step is handled with professionalism and care. At **Refela Motors**, we believe that buying a car is more than just a transaction—it's the beginning of a long-term relationship built on trust, quality, and customer satisfaction. With competitive offers, exceptional service, and a commitment to excellence, we help you drive forward with confidence. `,
        brands: [
            'Geely',
            'Toyota',
            'Mercedes-Benz',
            'BMW',
            'Audi',
            'Lexus',
            'Porsche',
            'Honda',
            'Hyundai',
            'Kia',
        ],
        gategories: [
            'Sedan',
            'SUV',
            'Crossover',
            'Hatchback',
            'Coupe',
            'Convertible',
            'Pickup Truck',
            'Minivan',
            'Luxury Cars',
            'Electric Vehicles',
        ],
        services: [
            'New Car Sales',
            'Cash Purchase',
            'Flexible Financing',
            'Trade-In',
            'Test Drive',
            'Vehicle Reservation',
            'Insurance Services',
            'Registration Assistance',
            'Genuine Spare Parts',
            'After-Sales Support',
        ],
        map: <StoreMap locationTitle='motors' />,
        socialMedia : [
            {
                icon: <RiFacebookLine /> ,
                platformName: 'Facebook',
                link: 'https://www.facebook.com/RefelaMotors/'
            },
            {
                icon: <FaInstagram /> ,
                platformName: 'Instagram',
                link: 'https://www.instagram.com/refelamotors/'
            },
            {
                icon: <FaWhatsapp /> ,
                platformName: 'Whatsapp',
                link: 'tel:+201020014333'
            },
            {
                icon: <BiWorld /> ,
                platformName: 'Our Website',
                link: ''
            },
        ]
    },
    stores: {
        mainTitle: `**Refela Stores**, a proud member of **Marion Trade**, is your trusted destination for premium home appliances, kitchen appliances, and air conditioning solutions. We offer an extensive selection of products from the world's leading brands, providing innovative technology, outstanding performance, and exceptional value to meet every lifestyle and household need. Whether you're furnishing a new home or upgrading your appliances, our retail showrooms provide a complete shopping experience with a wide range of products across all categories and price segments. From refrigerators, washing machines, and televisions to kitchen appliances, air conditioners, and small home appliances, we make it easy to find the perfect solution for your home. At **Refela Stores**, we are committed to delivering quality, reliability, and customer satisfaction through competitive prices, expert assistance, and outstanding after-sales support. With a carefully selected portfolio of trusted international and local brands, we ensure every customer enjoys a seamless shopping experience and products they can rely on for years to come. `,
        brands: [
            'Samsung',
            'LG',
            'Bosch',
            'Whirlpool',
            'Haier',
            'Toshiba',
            'Sharp',
            'Beko',
            'Midea',
            'Hisense',
        ],
        gategories: [
            'Refrigerators',
            'Washing Machines',
            'Air Conditioners',
            'Televisions',
            'Cookers',
            'Built-in Appliances',
            'Microwaves',
            'Dishwashers',
            'Water Heaters',
            'Kitchen Hoods',
        ],
        services: [
            'Retail Showrooms',
            'Home Appliances Sales',
            'Kitchen Appliances',
            'Air Conditioner Solutions',
            'Authorized Brand Products',
            'Flexible Payment Options',
            'Home Delivery',
            'Professional Installation',
            'Maintenance Services',
            'Genuine Spare Parts',
        ],
        map: <StoreMap locationTitle='stores' />,
        socialMedia : [
            {
                icon: <RiFacebookLine /> ,
                platformName: 'Facebook',
                link: 'https://www.facebook.com/p/Refela-stores-61576105542362/'
            },
            {
                icon: <FaInstagram /> ,
                platformName: 'Instagram',
                link: 'https://www.instagram.com/refela_stores/?hl=ar'
            },
            {
                icon: <FaWhatsapp /> ,
                platformName: 'Whatsapp',
                link: 'tel:+201202634777'
            },
            {
                icon: <BiWorld /> ,
                platformName: 'Our Website',
                link: 'https://refelastores.com/ar/'
            },
        ]
    },
};

export const productsContent: Record<string, ProductsContent> = {
    cars: {
        slide: [
            {
                image: LuxuryVehicles,
                class: 'md:w-80 md:h-80 w-40 h-40',
                gategoryName: "Luxury Vehicles",
                featuresList: [
                    "Premium Interior",
                    "Luxury Features",
                    "Advanced Driver Assistance",
                    "Exceptional Comfort",
                ],
                description:"Indulge in the finest automotive craftsmanship with our luxury vehicle selection. Every model is engineered to deliver remarkable performance, premium materials, state-of-the-art technology, sophisticated design, and unparalleled comfort, creating an exclusive driving experience that exceeds expectations.",
            },
            {
                image: Sedans,
                class: 'md:w-full md:h-70 w-60 h-40',
                gategoryName: "Sedans",
                featuresList: [
                    "Comfortable Daily Driving",
                    "Fuel Efficient",
                    "Advanced Safety Systems",
                    "Smart Connectivity",
                ],
                description: "Discover our premium collection of sedans that combine elegant styling, exceptional fuel efficiency, advanced driver assistance technologies, and outstanding comfort. Perfect for everyday commuting or long-distance travel, these vehicles deliver a refined driving experience with modern features, reliable performance, and impressive value for drivers seeking practicality without compromising sophistication.",
            },
            {
                image: SUVs,
                class: 'md:w-80 md:h-80 w-50 h-50',
                gategoryName: "SUVs",
                featuresList: [
                    "Spacious Interior",
                    "Powerful Performance",
                    "Advanced Safety",
                    "Premium Comfort",
                ],
                description: "Explore our versatile SUV lineup designed to provide maximum comfort, generous passenger space, and confident performance on every journey. Featuring innovative technology, intelligent safety systems, premium interiors, and bold exterior styling, our SUVs are ideal for families, adventure seekers, and anyone looking for capability with everyday practicality.",
            },
            {
                image: Crossovers,
                class: 'md:w-80 md:h-80 w-50 h-50',
                gategoryName: "Crossovers",
                featuresList: [
                    "Modern Design",
                    "Fuel Efficient",
                    "Smart Features",
                    "Comfortable Cabin",
                ],
                description:"Our crossover vehicles deliver the perfect combination of sedan efficiency and SUV versatility. Built with advanced technology, spacious interiors, and dynamic handling, they offer a smooth and enjoyable driving experience for city streets, highways, and weekend escapes while maintaining outstanding fuel economy.",
            },
            {
                image: PickupTrucks,
                class: 'md:w-80 md:h-80 w-50 h-50',
                gategoryName: "Pickup Trucks",
                featuresList: [
                    "Heavy Duty",
                    "High Payload",
                    "Strong Towing Capacity",
                    "Reliable Performance",
                ],
                description:"Built to handle demanding workloads and challenging environments, our pickup trucks combine rugged durability with modern comfort and technology. Whether for commercial applications or outdoor adventures, they provide exceptional towing power, cargo capacity, dependable engineering, and long-lasting reliability.",
            },
            {
                image: ElectricVehicles,
                class: 'md:w-80 md:h-80 w-50 h-50',
                gategoryName: "Electric Vehicles",
                featuresList: [
                    "Zero Emissions",
                    "Fast Charging",
                    "Advanced Technology",
                    "Quiet Driving",
                ],
                description:"Experience the future of mobility with our electric vehicle collection. Designed with cutting-edge battery technology, intelligent connectivity, and eco-friendly performance, these vehicles provide smooth acceleration, reduced operating costs, and an environmentally responsible driving experience without sacrificing comfort or innovation.",
            },
        ],
    },
    appliances: {
        slide: [
            {
                image: Refrigerators,
                class: 'md:w-80 md:h-80 w-50 h-50',
                gategoryName: "Refrigerators",
                featuresList: [
                    "No Frost Technology",
                    "Large Capacity",
                    "Energy Efficient",
                    "Modern Design",
                ],
                description:"Our premium refrigerators are designed to keep food fresher for longer while reducing energy consumption. Featuring spacious storage solutions, innovative cooling systems, elegant finishes, and reliable performance, they provide the perfect combination of convenience, efficiency, and modern style for every kitchen.",
            },
            {
                image: WashingMachines,
                class: 'md:w-70 md:h-70 w-40 h-40',
                gategoryName: "Washing Machines",
                featuresList: [
                    "Multiple Wash Programs",
                    "Energy Saving",
                    "Quiet Operation",
                    "High Performance",
                ],
                description:"Discover advanced washing machines engineered to deliver powerful cleaning performance while protecting your fabrics. Equipped with intelligent wash programs, efficient water management, energy-saving technology, and user-friendly controls, they simplify laundry care with outstanding reliability and convenience.",
            },
            {
                image: AirConditioners,
                class: 'md:w-80 md:h-80 w-50 h-50',
                gategoryName: "Air Conditioners",
                featuresList: [
                    "Fast Cooling",
                    "Inverter Technology",
                    "Energy Efficient",
                    "Silent Performance",
                ],
                description:"Stay comfortable throughout every season with our high-performance air conditioners. Designed with advanced inverter technology, rapid cooling capabilities, quiet operation, and energy-efficient performance, they provide a consistently refreshing indoor environment while helping reduce electricity consumption.",
            },
            {
                image: Televisions,
                class: 'md:w-70 md:h-70 w-40 h-40',
                gategoryName: "Televisions",
                featuresList: [
                    "4K Ultra HD",
                    "Smart TV",
                    "HDR Display",
                    "Immersive Audio",
                ],
                description:"Enjoy a premium entertainment experience with our range of smart televisions featuring ultra-high-definition displays, vivid colors, immersive sound technology, and seamless access to your favorite streaming platforms. Designed for exceptional picture quality, modern aesthetics, and effortless connectivity.",
            },
            {
                image: KitchenAppliances,
                class: 'md:w-80 md:h-90 w-55 h-60',
                gategoryName: "Kitchen Appliances",
                featuresList: [
                    "Premium Quality",
                    "Easy to Use",
                    "Modern Design",
                    "Reliable Performance",
                ],
                description:"Upgrade your cooking experience with our complete selection of kitchen appliances. Combining innovative technology, elegant designs, dependable performance, and user-friendly functionality, these appliances help you prepare meals faster, easier, and more efficiently while enhancing the beauty of your kitchen.",
            },
            {
                image: SmallKitchenAppliances,
                class: 'md:w-60 md:h-60 w-35 h-35',
                gategoryName: "Small Home Appliances",
                featuresList: [
                    "Compact Design",
                    "Powerful Performance",
                    "Easy Maintenance",
                    "Daily Convenience",
                ],
                description:"From blenders and kettles to vacuum cleaners and personal care devices, our small home appliances are designed to simplify everyday living. Built with quality materials, efficient performance, and modern styling, they deliver reliable functionality and convenience for every household.",
            },
        ],
    },
};


export const brandsTabs:activeTabTypes[]= [
    {
        key : 'geely' ,
        tabTitle: 'Geely' , 
        content: <MasterContent keyOfContent={'geely'} /> ,
        background: './geely.mp4'
    },
    {
        key : 'spida' ,
        tabTitle: 'Spida' , 
        content: <MasterContent keyOfContent={'spida'} /> ,
        background: './spida.mp4'
    },
    {
        key : 'topFit' ,
        tabTitle: 'Top Fit' , 
        content: <MasterContent keyOfContent={'topFit'} />,
        background: './topfit.mp4'

    },
]

export const StoresTabs:activeTabTypes[]= [
    {
        key : 'motors' ,
        tabTitle: 'Refela Motors' , 
        content: <MasterContent keyOfContent={'motors'} /> ,
        background: './motors.mp4'
    },
    {
        key : 'stores' ,
        tabTitle: 'Refela Stores' , 
        content: <MasterContent keyOfContent={'stores'} />,
        background: './stores.mp4'
    }
]

export const ProductsTabs:activeTabTypes[]= [
    {
        key : 'cars' ,
        tabTitle: 'Cars' , 
        content: <MasterContent keyOfContent={'cars'} /> ,
        background: './car.mp4'
    },
    {
        key : 'appliances' ,
        tabTitle: 'Appliances' , 
        content: <MasterContent keyOfContent={'appliances'} />,
        background: './homeAppliances.mp4'
    }
]

export const faqData = [
    {
        value: "marion-trade",
        question: "What is Marion Trade?",
        answer:
        "Marion Trade is a leading import, export, and distribution company operating across multiple sectors, including home appliances, consumer electronics, fitness equipment, and automotive solutions. The company owns Refela Stores, Refela Motors, and the SPIDA and TOPFIT brands. Marion Trade also operates through major e-commerce platforms, including Amazon and Noon, as well as its official online store, Refela Stores.",
    },
    {
        value: "products",
        question: "What products does Marion Trade offer?",
        answer:
        "Marion Trade offers a diverse portfolio of products, including small home appliances, kitchen appliances, fitness equipment, treadmills, exercise bikes, home electronics, personal care products, automotive solutions, including Geely vehicles, and a wide range of consumer goods for both retail and wholesale markets.",
    },
    {
        value: "refela-stores",
        question: "What is Refela Stores?",
        answer:
        "Refela Stores is Marion Trade's retail and e-commerce division, offering home appliances, kitchen appliances, electronics, personal care products, fitness equipment, and consumer goods. Customers can shop through our official online store as well as major e-commerce platforms such as Amazon and Noon.",
    },
    {
        value: "refela-motors",
        question: "What is Refela Motors?",
        answer:
        "Refela Motors is the automotive division of Marion Trade and an authorized Geely dealer, providing genuine Geely vehicles, automotive solutions, expert consultation, financing assistance, and professional after-sales services.",
    },
    {
        value: "spida-brand",
        question: "What is SPIDA?",
        answer:
        "SPIDA is Marion Trade's private brand specializing in innovative, reliable, and energy-efficient small home appliances designed to meet the needs of modern households.",
    },
    {
        value: "topfit-brand",
        question: "What is TOPFIT?",
        answer:
        "TOPFIT is Marion Trade's fitness equipment brand, offering treadmills, exercise bikes, strength equipment, and professional fitness solutions for both home and commercial use.",
    },
    {
        value: "geely-dealer",
        question: "Is Refela Motors an authorized Geely dealer?",
        answer:
        "Yes. Refela Motors is an authorized Geely dealer, offering genuine Geely vehicles, expert consultation, financing options, genuine spare parts, and trusted after-sales support.",
    },
    {
        value: "wholesale-b2b",
        question: "Do you offer wholesale and B2B services?",
        answer:
        "Yes. Marion Trade supplies wholesalers, retailers, distributors, corporate clients, and commercial projects with competitive pricing, reliable logistics, and long-term business partnerships.",
    },
    {
        value: "business-partnership",
        question: "Can I become a distributor or business partner?",
        answer:
        "Absolutely. We welcome distributors, retailers, wholesalers, and strategic business partners interested in representing our brands or expanding their product portfolio through Marion Trade.",
    },
    {
        value: "import-export",
        question: "Do you provide import and export services?",
        answer:
        "Yes. Marion Trade manages international import and export operations while maintaining high standards of quality, compliance, and efficient global logistics.",
    },
    {
        value: "product-warranty",
        question: "Do your products come with a warranty?",
        answer:
        "Yes. Most of our products are covered by manufacturer warranties. Warranty terms and conditions vary depending on the product category and brand.",
    },
    {
        value: "bulk-orders",
        question: "Can I request a quotation for bulk orders?",
        answer:
        "Yes. Our sales team can provide customized quotations for wholesale purchases, corporate projects, commercial tenders, and large-volume orders.",
    },
    {
        value: "after-sales",
        question: "Do you provide after-sales support?",
        answer:
        "Yes. We offer technical assistance, warranty services, maintenance support, and professional after-sales service across our brands and authorized products.",
    },
    {
        value: "online-shopping",
        question: "Do you sell your products online?",
        answer:
        "Yes. Our products are available through major e-commerce platforms, including Amazon and Noon, as well as the official Refela Stores online shop, providing secure online shopping, nationwide delivery, and access to our complete range of products.",
    },
    {
        value: "countries",
        question: "Which countries does Marion Trade serve?",
        answer:
        "Marion Trade serves customers across Egypt and international markets through its import, export, wholesale, retail, distribution, and e-commerce operations.",
    },
    {
        value: "contact",
        question: "How can I contact Marion Trade?",
        answer:
        "You can contact Marion Trade through our contact form, email, or customer service team for product inquiries, wholesale requests, partnerships, dealership opportunities, or general support.",
    },
];