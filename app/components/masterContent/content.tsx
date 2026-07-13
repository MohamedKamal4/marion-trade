import { storesContent } from "@/app/constens/data";
import { MasterContentProps } from "@/app/constens/types";
import Brands from "../brands/brands";
import Stores from "../stores/stores";
import Products from "../products/products";

export default function MasterContent({keyOfContent} : MasterContentProps) {
    const storesData = [
        {
            title : 'Brands',
            list : storesContent[keyOfContent]?.brands
        },
        {
            title : 'Gategories',
            list : storesContent[keyOfContent]?.gategories
        },
        {
            title : 'Services',
            list : storesContent[keyOfContent]?.services
        },
    ]
    return(
        <div data-aos='zoom-in' key={keyOfContent} className={` md:p-15 size-full flex`}>
            {(keyOfContent === 'motors' || keyOfContent === 'stores') && ( <Stores storesData={storesData} keyOfContent={keyOfContent} />)}
            {(keyOfContent === 'spida' || keyOfContent === 'topFit' || keyOfContent === 'geely') && (<Brands keyOfContent={keyOfContent} />)}
            {(keyOfContent === 'cars' || keyOfContent === 'appliances') && (<Products keyOfContent={keyOfContent} />)}
        </div>
    )
}