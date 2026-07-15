import { StaticImageData } from "next/image";
import { Dispatch, ReactNode } from "react";

export interface HandleNavTapsOnClickProps {
    page: string;
    setpageEnabled: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<string>>;
}

export interface NavProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export interface activeTabTypes {
    key : string ,
    tabTitle: string , 
    content: ReactNode ,
    background: string
}

export interface masterTapsProps {
   setBrandsBackground: React.Dispatch<React.SetStateAction<string>>,
   tabs: activeTabTypes[]
   pageTitle : string
}

export interface MasterContentProps {
    keyOfContent : 'spida' |'topFit' |'geely' |'motors' |'stores' |'appliances' |'cars' |'homemix' |'kayan' }

export interface BrandSlide {
  image: StaticImageData;
  description: string;
}

export interface BrandContent {
  mainImage: StaticImageData;
  mainTitle: string;
  slide: BrandSlide[];
}

export interface ProductsContentSlide {
  image : StaticImageData
  class : string
  gategoryName : string
  featuresList : string[]
  description : string
}

export interface ProductsContent {
  slide : ProductsContentSlide[]
}

export interface BrandContent {
  mainImage: StaticImageData;
  mainTitle: string;
  slide: BrandSlide[];
}

export interface StoresContent {
  mainTitle : string
  brands : string[]
  gategories : string[]
  services : string[]
  map: ReactNode
  socialMedia : {
    icon : ReactNode
    platformName: string
    link : string
  }[]
}

export interface storesProps {
    storesData: {
        title: string;
        list: string[];
    }[]
    keyOfContent : string
}

export interface brandsProps {
    keyOfContent : string
}

export interface productsProps {
    keyOfContent : string
}

export interface formDataTypes {
    name : string 
    companyName : string
    subject : string
    email : string
    phone : string
    message : string
}
export interface sendDatatypes {
    formData: formDataTypes;
    setFormData: React.Dispatch<React.SetStateAction<formDataTypes>>;
}
