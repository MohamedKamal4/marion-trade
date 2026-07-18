import Image from "next/image";

import { Abril_Fatface } from "next/font/google";

const abrilFatface = Abril_Fatface({
  weight: ["400"],
});


export default function Home() {
  return (
    <section data-aos="fade-right" className="absolute z-5 top-0 left-0 size-full ">
      <div className=" container m-auto z-5 size-full items-start justify-end flex-col pb-20 hidden md:flex">
        <p className={`w-150 text-lg font-bold leading-[1.2] text-white ${abrilFatface.className}`}>
            <span className=" text-red-900 text-3xl font-bold">**Marion Trade**</span> is a company specializing in import, export, and trading across multiple sectors.
            The company focuses on supplying high-quality Sports Equipment and electrical appliances, automotive products and accessories, 
            and e-commerce solutions With a commitment to quality, reliability, and customer satisfaction, 
            <span className=" text-red-900 text-3xl font-bold">**Marion Trade**</span> aims to provide innovative products and efficient services that meet the needs of both local and international markets.
        </p>
      </div>
      <div className=" container m-auto z-5 size-full md:hidden flex items-start justify-end flex-col px-10 pb-20">
        <p className={`w-full text-xs font-bold leading-[1.2] text-white ${abrilFatface.className}`}>
            <span className=" text-red-900 text-sm font-bold">**Marion Trade**</span> is a company specializing in import, export, and trading across multiple sectors.
            The company focuses on supplying high-quality Sports Equipment and electrical appliances, automotive products and accessories, 
            and e-commerce solutions With a commitment to quality, reliability, and customer satisfaction, 
            <span className=" text-red-900 text-sm font-bold">**Marion Trade**</span> aims to provide innovative products and efficient services that meet the needs of both local and international markets.
        </p>
      </div>
    </section>
  )
}
