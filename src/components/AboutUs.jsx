import { Tag } from "./Tag"

export const AboutUs = () => {
    return (
        <>
            <section id="about-us" className="min-h-screen mt-32 md:mt-0">
                <div className="flex items-center justify-center md:mx-24 md:py-24 mx-5 py-10 h-full">
                    <div className="flex md:flex-row flex-col gap-5">
                        <div className="md:w-[50%] space-y-5 md:space-y-10">
                            <Tag text={'About us'} />
                            <h1 className="pb-2 bg-gradient-to-tl from-mainColor via-emerald-700 to-mainColor bg-clip-text text-transparent font-medium text-2xl md:text-[30px] md:leading-[1.8rem]">
                                Dari Alam,<br /> Untuk Kehidupan
                            </h1>

                            <div className="space-y-2 text-justify md:text-left">
                                <p>
                                    PT. Kedaulatan Alam Indonesia adalah perusahaan yang bergerak di bidang agribisnis dan peternakan terintegrasi. Dengan fokus pada produksi unggas, pengelolaan perkebunan, serta layanan konsultasi manajemen, kami berkomitmen untuk mendukung pertumbuhan ekonomi dan ketahanan pangan nasional.
                                </p>
                                <p>
                                    Didukung oleh tenaga ahli berpengalaman dan teknologi modern, kami memastikan kualitas produk serta layanan terbaik bagi mitra usaha dan pelanggan kami. PT. Kedaulatan Alam Indonesia hadir sebagai solusi terpadu untuk kebutuhan agribisnis dari hulu hingga hilir.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-[50%]">
                            <img className="rounded-3xl bg-secondaryColor" src="https://images.unsplash.com/photo-1607554338726-f8881a9a7f9e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}