"use client"
import { ProductsService } from "@/app/System"
import { Tag } from "./Tag"
import { BsFillExclamationCircleFill } from "react-icons/bs"
import { useEffect, useRef, useState } from "react"

export const Products = () => {
    const [activeDot, setActiveDot] = useState(0);
    const carouselRef = useRef(null);
    const totalDots = ProductsService.length;

    useEffect(() => {
        const handleScroll = () => {
            const element = carouselRef.current;
            if (element) {
                const scrollLeft = element.scrollLeft;
                const maxScrollLeft = element.scrollWidth - element.clientWidth;
                const progress = (scrollLeft / maxScrollLeft) * (totalDots - 1);
                setActiveDot(Math.round(progress));
            }
        };

        const element = carouselRef.current;
        if (element) {
            element.addEventListener('scroll', handleScroll);
            return () => element.removeEventListener('scroll', handleScroll);
        }
    }, [totalDots]);

    // Function to scroll to the specific item based on the dot clicked
    const handleDotClick = (index) => {
        const element = carouselRef.current;
        if (element) {
            const scrollToPosition = (element.scrollWidth / totalDots) * index;
            element.scrollTo({
                left: scrollToPosition,
                behavior: "smooth",
            });
            setActiveDot(index);
        }
    };
    return (
        <>
            <section id="products-&-service" className="min-h-screen">
                <div className="md:mx-24 space-y-5">
                    <div className="md:mx-0 mx-5">
                        <Tag text={'Products & Services'} />
                        <h1 className="pb-2 bg-gradient-to-tl from-mainColor via-emerald-700 to-mainColor bg-clip-text text-transparent font-medium text-2xl md:text-[30px] md:leading-[1.8rem]">
                            Inovasi untuk hasil maksimal di sektor agribisnis dan peternakan
                        </h1>
                    </div>
                    <div ref={carouselRef} className="md:grid carousel2 w-full h-full md:grid-cols-3 gap-5">
                        {ProductsService.map((el, idx) => (
                            <div key={idx} className={`${idx === 0 && "md:ml-0 ml-5"} ${idx === ProductsService.length - 1 && "md:mr-0 mr-5"} carousel-item w-[90lvw] duration-300 ease-in-out md:w-full min-h-[80lvh] md:min-h-0 md:h-[70lvh] rounded-3xl relative group overflow-hidden`}>
                                <img
                                    className="w-full h-full object-cover bg-secondaryColor rounded-3xl"
                                    src={el.img}
                                    alt={el.name}
                                />
                                <div className="group-hover:opacity-0 gradient-blur2 h-[45%] md:h-[30%] duration-300 ease-in-out bg-gradient-to-t from-[#1e44248f] to-transparent"></div>
                                <div className="absolute bottom-5 left-5 right-5 z-20 group-hover:translate-y-[150%] duration-300">
                                    <h1 className="font-semibold text-2xl text-secondaryColor drop-shadow">
                                        {el.name}
                                    </h1>
                                    <h2 className="text-sm text-gray-100">
                                        {el.desc}
                                    </h2>
                                </div>
                                {/* HOVER DETAILS */}
                                <div className="space-y-3 group-hover:-translate-y-[0%] -translate-y-[150%] absolute top-5 left-5 right-5 z-20 duration-300">
                                    <h1 className="font-semibold text-xl md:text-2xl text-secondaryColor drop-shadow">
                                        {el.name}
                                    </h1>
                                    <div className="space-y-2 overflow-y-scroll">
                                        {el.items.map((el, id) => (
                                            <div key={id} className="bg-darkColor bg-opacity-40 rounded-2xl p-3 backdrop-blur-md">
                                                <h1 className="font-bold uppercase text-secondaryColor">
                                                    {el.product}
                                                </h1>
                                                <h2 className="text-gray-100">
                                                    {el.desc}
                                                </h2>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* HOVER DETAILS */}

                                <div className="absolute inset-0 backdrop-blur-sm rounded-3xl bg-darkColor bg-opacity-25 h-full group-hover:opacity-100 opacity-0 duration-300 ease-in-out"> </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center mt-2 md:hidden">
                    <div className="flex justify-center items-center bg-white  px-2 py-2 rounded-full space-x-2">
                        {Array.from({ length: totalDots }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-2 h-2 rounded-full ${index === activeDot ? 'bg-mainColor' : 'bg-stone-300 '}`}
                            ></button>
                        ))}
                    </div>
                </div>
                <div className="w-full flex items-center justify-center py-5">
                    <p className="flex items-center gap-2 bg-secondaryColor rounded-full px-4 py-2 font-medium animate-pulse uppercase text-xs">
                        <BsFillExclamationCircleFill /> Klik Untuk Detail
                    </p>
                </div>
            </section>
        </>
    )
}