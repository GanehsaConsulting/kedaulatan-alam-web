import { dataContact } from "@/app/System"
import { Tag } from "./Tag"

export const Contact = () => {
    return (
        <>
            <section id="contact" className="md:mx-24 mx-5 py-10 md:py-24">
                <Tag text={'address & contacts'} />
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="md:w-[35%] w-full space-y-5">
                        <a href="" className="">
                            <h1 className="p-3 bg-secondaryColor text-xl text-mainColor rounded-3xl">
                                {dataContact.address.data}
                            </h1>
                        </a>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                                {dataContact.media.map((el, idx) => (
                                    <a
                                        key={idx}
                                        href=""
                                        className="pr-3 pl-2 py-2 bg-secondaryColor rounded-3xl"
                                    >
                                        <div className="text-lg font-medium text-mainColor flex items-center gap-2">
                                            <span className="p-2 bg-white text-mainColor rounded-full">
                                                {el.icon}
                                            </span>
                                            {el.label}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mapouter rounded-3xl overflow-hidden grow h-[50lvh] md:h-auto md:w-[50%] w-full">
                        <div className="overflow-hidden rounded-box h-full">
                            <iframe
                                className="w-full h-full"
                                src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.586712234682!2d106.82116857499005!3d-6.1860248938015285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f428abe15763%3A0x7c3a05b23a1bfef!2sMenara%20Cakrawala!5e0!3m2!1sid!2sid!4v1723453764481!5m2!1sid!2sid'}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}