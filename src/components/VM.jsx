import { Mission } from "@/app/System"
import { Tag } from "./Tag"

export const VM = () => {
    return (
        <>
            <section id="vision-&-mission" className="space-y-32 md:mb-0 mb-[100lvw]">
                <div className="h-screen w-full overflow-hidden relative">
                    <img
                        className="h-full w-full object-cover bg-secondaryColor"
                        src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="absolute md:inset-10 inset-0 w-full h-full">
                        <div className="flex flex-col md:justify-center justify-end h-full mx-5 py-10 md:mx-0">
                            <Tag text={'vision'} className={'bg-white font-bold'} />
                            <p className="md:w-[50%] shadow-mainColor p-5 rounded-3xl border border-secondaryColor border-opacity-20 backdrop-blur-sm text-white text-lg">
                                Menjadi perusahaan agribisnis dan peternakan terdepan yang memberikan kontribusi nyata bagi ketahanan pangan nasional dan pengelolaan sumber daya alam yang berkelanjutan.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop */}
                <div className="h-screen md:block hidden">
                    <div className="flex items-center h-[80lvh] md:mx-24 mx-5 relative">
                        <img
                            src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className=" h-full rounded-3xl w-full object-cover bg-secondaryColor"
                        />
                        <div className="absolute bottom-5 left-5">
                            <div className="bg-mainColor bg-opacity-100 backdrop-blur-sm px-4 py-2 rounded-3xl">
                                <h1 className="text-secondaryColor  font-semibold text-3xl">
                                    Mission
                                </h1>
                            </div>
                        </div>
                        <div className="absolute right-0 top-0 bottom-0 w-[45lvw] h-full bg-secondaryColor bg-opacity-80 backdrop-blur-3xl rounded-r-3xl rounded-l-[40px] shadow-custom p-5">
                            <div className="space-y-3">
                                {Mission.map((el, idx) => (
                                    <div key={idx} className="collapse collapse-arrow bg-white">
                                        <input
                                            type="radio"
                                            name="my-accordion-2"
                                            defaultChecked={idx === 0}
                                        />
                                        <div className="collapse-title text-2xl text-mainColor font-thin">{el.head}</div>
                                        <div className="collapse-content">
                                            <p className="pl-3 border-l-2 border-emerald-700 text-emerald-700">{el.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className="min-h-screen md:hidden block">
                    <div className="flex items-center h-[80lvh] md:mx-24 relative">
                        <img
                            src="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className=" h-full rounded-3xl w-full object-cover bg-secondaryColor"
                        />
                        <div className="absolute top-5 left-5">
                            <div className="bg-mainColor bg-opacity-100 backdrop-blur-sm px-4 py-2 rounded-3xl">
                                <h1 className="text-secondaryColor  font-semibold text-3xl">
                                    Mission
                                </h1>
                            </div>
                        </div>
                        <div className="absolute -bottom-[60%] w-full h-full bg-opacity-80 backdrop-blur-3xl rounded-r-3xl rounded-l-[40px] p-5">
                            <div className="space-y-3">
                                {Mission.map((el, idx) => (
                                    <div key={idx} className="collapse collapse-arrow bg-secondaryColor">
                                        <input
                                            type="radio"
                                            name="my-accordion-2"
                                            defaultChecked={idx === 0}
                                        />
                                        <div className="collapse-title text-xl md:text-2xl text-mainColor font-thin">{el.head}</div>
                                        <div className="collapse-content">
                                            <p className="pl-3 border-l-2 border-emerald-700 text-emerald-700">{el.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}