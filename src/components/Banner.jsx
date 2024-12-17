import { PiLeafFill } from "react-icons/pi";
import { TiLeaf } from "react-icons/ti";
import { CiCircleAlert } from "react-icons/ci";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { dataContact } from "@/app/System";

export const Banner = () => {
    return (
        <>
            <section id="home" className="min-h-screen py-20 px-5">
                <div className="flex md:flex-row flex-col gap-5 h-[85lvh]">
                    {/* Bagian Kiri */}
                    <div className="md:w-[50%] flex flex-col gap-5 justify-between">
                        <div className="md:space-y-5 flex flex-col">
                            <p className="text-sm mb-3 uppercase font-thin border-[0.1px] rounded-full w-fit pr-2 pl-1 py-[2px] border-emerald-700 text-emerald-700 flex items-center gap-1">
                                <PiLeafFill className="bg-secondaryColor text-emerald-700 p-[1px] text-sm rounded-full" />
                                PT Kedaulatan Alam Indonesia
                            </p>
                            <h1 className="pb-2 bg-gradient-to-tl from-mainColor via-emerald-700 to-mainColor bg-clip-text text-transparent font-medium text-2xl md:text-[60px] md:leading-[3.5rem]">
                                Membangun <br />
                                <span className="flex items-center gap-2">
                                    Masa Depan Pertanian
                                    <CiCircleAlert className="z-20 text-emerald-800 rounded-full text-3xl md:text-[47px]" />
                                    <TiLeaf className="z-30 -ml-[25px] md:-ml-[34px] bg-emerald-800 text-white rounded-full text-[26px] p-2 md:text-[40px]" />
                                </span>
                                Dan Peternakan Berkelanjutan
                            </h1>
                            <h2 className="leading-tight text-emerald-700 md:text-left text-justify">
                                Dari budidaya unggas hingga pengelolaan perkebunan, kami menghadirkan produk berkualitas tinggi dan layanan terpercaya untuk mendukung ketahanan pangan Indonesia.
                            </h2>
                        </div>
                        <div className="flex gap-2 items-center">
                            <a href="#about-us">
                                <button className="pl-4 pr-2 py-2 flex text-sm duration-300 ease-in-out hover:scale-90 tracking-wide gap-2 items-center bg-mainColor text-white font-semibold rounded-full">
                                    Jelajahi
                                    <BsArrowRightCircleFill className="text-2xl"/>
                                </button>
                            </a>
                            <a href={dataContact.media[3].link}>
                                <button className="px-4 py-2 flex text-sm duration-300 ease-in-out hover:scale-90 tracking-wide gap-2 items-center border border-mainColor text-mainColor font-semibold rounded-full">
                                    Hubungi Kami
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Bagian Kanan */}
                    <div className="md:w-[50%] h-full">
                        <div className="space-y-5 h-full flex flex-col">
                            {/* Gambar Utama */}
                            <img
                                src="https://images.unsplash.com/photo-1599565097530-8ffc32c541b6?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="h-1/2 w-full rounded-3xl object-cover bg-secondaryColor"
                                alt="Image 1"
                            />

                            {/* Grid untuk 2 Gambar */}
                            <div className="grid grid-cols-2 gap-5 h-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1492737096399-cf0c3eae286f?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="h-full w-full rounded-3xl object-cover bg-secondaryColor"
                                    alt="Image 2"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="h-full w-full rounded-3xl object-cover bg-secondaryColor"
                                    alt="Image 3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}