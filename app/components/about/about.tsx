import { aboutContent } from "@/app/constens/data"

export default function About() {

    return (
        <section className="absolute z-5 top-0 left-0 size-full">
            <div className="container m-auto hidden items-center justify-center h-screen text-white md:flex">
                <div className="w-full grid grid-cols-2 gap-8 space-x-15">
                    {aboutContent.map((item) => {
                        return (
                            <div data-aos={item.animation} data-aos-delay={item.delay} key={item.title} >
                                <div className="flex items-center gap-4">
                                    <span className="flex-1 h-[1px] bg-white"></span>
                                    <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                                    <span className="flex-7 h-[1px] bg-white"></span>
                                </div>
                                {item.content && <p className="text-lg mb-4">{item.content}</p>}
                                {item.list && (
                                    <ul className="list-disc flex flex-col flex-wrap lg:max-h-40">
                                        {item.list.map((listItem, index) => (
                                            <li key={index} className="text-lg mb-2">{listItem}</li>
                                        ))}
                                    </ul>
                                )}
                                {item.nastedList && (
                                    <ul className="list-disc flex flex-col flex-wrap">
                                        {item.nastedList.map((listItem, index) => (
                                            <li key={index} className="text-lg mb-2">
                                                {listItem.mainList}
                                                <ul className="lg:flex items-center gap-20 ">
                                                    <li>Email : {listItem.lists.email}</li>
                                                    <li>Mobile : {listItem.lists.mobile}</li>
                                                </ul>
                                            </li>
                                        ))} 
                                    </ul>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="container m-auto flex md:hidden items-center overflow-scroll justify-center text-white">
                <div className="w-full grid grid-cols-1 px-10 py-30 ">
                    {aboutContent.map((item , i) => {
                        return (
                            <div data-aos={(i === 5 || i === 4) ? '' : 'fade-right' } data-aos-delay={i * 500} key={item.title} >
                                <div className="flex items-center gap-4">
                                    <span className="flex-1 h-[1px] bg-white"></span>
                                    <h2 className="text-lg font-bold mb-4">{item.title}</h2>
                                    <span className="flex-7 h-[1px] bg-white"></span>
                                </div>
                                {item.content && <p className="text-xs mb-4">{item.content}</p>}
                                {item.list && (
                                    <ul className={` flex flex-col flex-wrap lg:max-h-40 ${i === 2 ? '' : 'list-disc'}`}>
                                        {item.list.map((listItem, index) => (
                                            <li key={index} className="text-xs mb-2 text-wrap">{listItem}</li>
                                        ))}
                                    </ul>
                                )}
                                {item.nastedList && (
                                    <ul className="list-disc flex flex-col flex-wrap">
                                        {item.nastedList.map((listItem, index) => (
                                            <li key={index} className="text-xs mb-2">
                                                {listItem.mainList}
                                                <ul className="lg:flex items-center gap-20 ">
                                                    <li>Email : {listItem.lists.email}</li>
                                                    <li>Mobile : {listItem.lists.mobile}</li>
                                                </ul>
                                            </li>
                                        ))} 
                                    </ul>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}