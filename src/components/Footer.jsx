import { dataContact, NavbarLinks } from "@/app/System"
import { PiLeaf } from "react-icons/pi"

export const Footer = () => {
    return (
        <>
            <footer className="md:h-[60lvh] bg-gradient-to-b from-secondaryColor to-transparent rounded-[30px] drop-shadow-[0px_0px_15px_#E6EFE3] p-3">
                <div className="h-full w-full bg-white rounded-3xl p-5 md:p-10">
                    <div className="flex md:flex-row h-full gap-10 flex-col">
                        <div className="md:w-[45%] flex flex-col justify-between">
                            <div className="space-y-5">
                                <div className="flex items-center gap-2">
                                    <PiLeaf className="text-4xl" />
                                    <h1 className="text-2xl font-medium">
                                        PT Kedutaan Alam Indonesia
                                    </h1>
                                </div>
                                <h2>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, esse et minima sequi autem hic cumque porro quasi neque fuga saepe eius! Consectetur cum aliquam expedita quidem tenetur hic quo.
                                </h2>

                            </div>
                            <div className="mt-5 md:mt-0">
                                <h1 className="pb-2 bg-gradient-to-tl from-mainColor via-emerald-700 to-mainColor bg-clip-text text-transparent font-medium text-2xl md:text-[35px] md:leading-[2.4rem]">
                                    Membangun Masa Depan Pertanian Yang Lebih Baik!
                                </h1>
                            </div>
                        </div>
                        <div className="md:w-[50%] space-y-10">
                            <div className="flex flex-col gap-2">
                                <p className="uppercase font-semibold text-sm text-mainColor">
                                    Navigation
                                </p>
                                {NavbarLinks.map((el, idx) => (
                                    <a href="" key={idx} className="link-hover link flex items-center gap-2 pr-2 pl-1 py-1 bg-gradient-to-r from-secondaryColor to-transparent text-mainColor rounded-full">
                                        <span className="p-1 bg-white text-mainColor rounded-full">
                                            {el.icon}
                                        </span>
                                        {el.Name}
                                    </a>
                                ))}
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="uppercase font-semibold text-sm text-mainColor">
                                    Social Media
                                </p>
                                <div className="flex gap-3">
                                    {dataContact.sosmed.map((el, idx) => (
                                        <a href="" key={idx} className="p-3 bg-mainColor text-white rounded-full text-lg">
                                            {el.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="mx-3 py-1 mb-2">
                <div className="flex items-center justify-center p-2 bg-white drop-shadow-[0px_0px_15px_#E6EFE3] rounded-full">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </>
    )
}