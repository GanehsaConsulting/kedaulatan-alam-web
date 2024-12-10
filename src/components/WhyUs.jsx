import { dataWhyUs } from "@/app/System"
import { Tag } from "./Tag"

export const WhyUs = () => {
    return (
        <>
            <section id="why-us" className="md:mx-24 mx-5 md:my-20 my-10 space-y-3">
                <div className="mb-7">
                    <Tag text={'Why us'} />
                    <h1 className="pb-2 bg-gradient-to-tl from-mainColor via-emerald-700 to-mainColor bg-clip-text text-transparent font-medium text-2xl md:text-[30px] md:leading-[1.8rem]">
                        Keunggulan Kami
                    </h1>
                </div>
                <div className="flex md:flex-row flex-col gap-5">
                    {dataWhyUs.map((el, idx) => (
                        <div key={idx} className="border-2 border-mainColor border-opacity-35 duration-300 ease-in-out hover:-translate-y-5 hover:animate-pulse hover:shadow-mainShadow md:w-[25%] h-full md:h-[55lvh] flex flex-col bg-gradient-to-b from-secondaryColor to-transparent p-5 rounded-3xl">
                            <div className="text-4xl text-mainColor mb-24">
                                {el.icon}
                            </div>

                            <div className="space-y-5">
                                <h1 className="text-2xl font-medium bg-gradient-to-tl from-mainColor via-emerald-700 to-mainColor bg-clip-text text-transparent ">
                                    {el.title}
                                </h1>
                                <h2 className="text-emerald-900">
                                    {el.desc}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}