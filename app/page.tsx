'use client'
import { useState } from "react";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import MasterTabs from "./components/tabs/tabs";
import { brandsTabs, ProductsTabs, StoresTabs } from "./constens/data";
import ContactUs from "./components/contact/contact";
import Faq from "./components/faq/faq";
import poster from "./assets/image/poster.jpg";


export default function MainHome() {
  const [page, setPage] = useState<string>("home");
  const [brandsBackground , setBrandsBackground] = useState<string>('./geely.mp4')

  const layouts = [
    {tap: "home", component: <Home /> , background: "/hero2.mp4"},
    {tap: "about", component: <About /> , background: "/about.mp4"},
    {tap: "brands", component: <MasterTabs setBrandsBackground={setBrandsBackground} tabs={brandsTabs} pageTitle='- Our Brands And Official Agencies'/> , background: brandsBackground},
    {tap: "stores", component: <MasterTabs setBrandsBackground={setBrandsBackground} tabs={StoresTabs} pageTitle='- Our Stores'/> , background: brandsBackground},
    {tap: "products", component: <MasterTabs setBrandsBackground={setBrandsBackground} tabs={ProductsTabs} pageTitle='- Our Products'/> , background: brandsBackground},
    {tap: "Contact Us", component: <ContactUs /> , background: "/ContactUs.mp4"},
    {tap: "faq", component: <Faq /> , background: "/faq.mp4"},
  ]

  return (
      <>
          <Nav setPage={setPage} />
          <section className="text-primary-foreground relative overflow-hidden">
            <div className="absolute w-full h-1/2 bg-gradient-to-t from-[#0e0f10] to-transparent bottom-0 left-0"></div>
            <div className="absolute h-full w-1/2 bg-gradient-to-r from-[#0e0f10] to-transparent bottom-0 left-0"></div>
            <div className="absolute w-full h-1/2 bg-gradient-to-b from-[#0e0f10] to-transparent top-0 left-0"></div>
            <div className="absolute h-full w-1/2 bg-gradient-to-l from-[#0e0f10] to-transparent top-0 right-0"></div>
            {layouts.map((layout) => {
              if (layout.tap === page) {
                return (
                  <div key={layout.tap} className="min-h-dvh w-full relative">
                    <video src={layout.background} autoPlay
                      poster={poster}
                      muted
                      loop
                      playsInline
                      preload="metadata" 
                      className="absolute inset-0 w-full h-full object-cover -z-10" 
                    />
                    {layout.component}
                  </div>
                )
              }
            })}
          </section>
      </>
  )
}