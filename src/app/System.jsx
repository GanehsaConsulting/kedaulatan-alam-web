import { TbHeartSpark, TbWorld } from "react-icons/tb";
import { BsFacebook, BsGear, BsInstagram, BsMailbox, BsWhatsapp } from "react-icons/bs";
import { RiFacebookBoxLine, RiFacebookCircleFill, RiFacebookCircleLine, RiHandHeartLine, RiInstagramLine, RiLinkedinBoxLine, RiMailLine, RiWhatsappLine } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";
import { CiFacebook, CiInstagram, CiMail } from "react-icons/ci";
import { TiHome, TiLeaf, TiArrowMinimise, TiClipboard, TiAnchor } from "react-icons/ti";

export const NavbarLinks = [
    {
        icon: <TiHome />,
        Name: "Home"
    },
    {
        icon: <TiLeaf />,
        Name: "About Us"
    },
    {
        icon: <TiArrowMinimise />,
        Name: "Vision & Mission"
    },
    {
        icon: <TiClipboard />,
        Name: "Products & Service"
    },
    {
        icon: <TiAnchor />,
        Name: "Why Us"
    },
]

export const Mission = [
    {
        head: "Komitmen pada Kualitas Terbaik",
        desc: "Menjamin kualitas produk peternakan, perkebunan, dan pupuk melalui proses standar tinggi."
    },
    {
        head: "Teknologi Cerdas untuk Proses Lebih Efisien",
        desc: "Pemanfaatan teknologi modern dan inovasi untuk efisiensi proses produksi dan pengelolaan."
    },
    {
        head: "Kemitraan untuk Pertumbuhan Bersama",
        desc: "Kolaborasi dengan petani, mitra bisnis, dan pemerintah untuk memperkuat rantai pasok."
    },
    {
        head: "Pemberdayaan Lokal, Kesejahteraan Nasional",
        desc: "Memberdayakan tenaga kerja lokal dan petani melalui lapangan kerja, pelatihan, dan dukungan pasar."
    },
    {
        head: "Pengelolaan Ramah Lingkungan",
        desc: "Fokus pada pengelolaan ramah lingkungan melalui pengurangan limbah dan efisiensi energi."
    }
]

export const ProductsService = [
    {
        name: "Produk Peternakan",
        img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2877&auto=format&fit=crop",
        desc: "Produk peternakan berkualitas tinggi siap memenuhi kebutuhan pasar nasional.",
        items: [
            {
                product: "Telur Ayam Ras",
                imgProduct: "",
                desc: "Telur ayam segar berkualitas tinggi siap distribusi nasional."
            },
            {
                product: "Pembibitan dan Budidaya Unggas",
                imgProduct: "",
                desc: "Bibit unggas bebek, itik, dan puyuh berkualitas tinggi."
            },
            {
                product: "Hasil Peternakan Segar",
                imgProduct: "",
                desc: "Daging unggas dan hasil ternak segar untuk ritel dan industri."
            }
        ]
    },
    {
        name: "Produk Perkebunan",
        img: "https://plus.unsplash.com/premium_photo-1697729435258-b7d20023c843?q=80&w=3087&auto=format&fit=crop",
        desc: "Hasil perkebunan segar dari kelapa sawit hingga buah berkualitas.",
        items: [
            {
                product: "Kelapa Sawit",
                imgProduct: "",
                desc: "Kelapa sawit berkualitas untuk minyak sawit mentah (CPO) dan turunannya."
            },
            {
                product: "Buah-buahan Segar",
                imgProduct: "",
                desc: "Buah-buahan segar dari hasil panen terbaik untuk ritel dan industri."
            }
        ]
    },
    {
        name: "Produk Industri dan Pengolahan",
        img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2940&auto=format&fit=crop",
        desc: "Produk pupuk dan pestisida ramah lingkungan untuk pengelolaan pertanian.",
        items: [
            {
                product: "Industri Pupuk Lainnya",
                imgProduct: "",
                desc: "Produksi pupuk anorganik dan organik berkualitas tinggi."
            },
            {
                product: "Industri Pupuk Pelengkap",
                imgProduct: "",
                desc: "Pupuk pelengkap meningkatkan produktivitas tanaman."
            },
            {
                product: "Pestisida dan Pemberantas Hama",
                imgProduct: "",
                desc: "Pestisida efektif dan ramah lingkungan untuk pertanian dan perkebunan."
            }
        ]
    },
    {
        name: "Jasa Layanan Pertanian",
        img: "https://images.unsplash.com/photo-1475332831881-e80974377cb7?q=80&w=3079&auto=format&fit=crop",
        desc: "Layanan panen dan pemeliharaan pertanian secara profesional.",
        items: [
            {
                product: "Jasa Pemeliharaan dan Panen",
                imgProduct: "",
                desc: "Layanan pemeliharaan panen hasil pertanian profesional."
            },
            {
                product: "Jasa Pendukung Pertanian",
                imgProduct: "",
                desc: "Pengelolaan lahan, bibit unggul, dan pengendalian hama."
            }
        ]
    },
    {
        name: "Layanan Konsultasi dan Manajemen",
        img: "https://images.unsplash.com/photo-1668415762833-e0607ffae375?q=80&w=2940&auto=format&fit=crop",
        desc: "Layanan konsultasi bisnis untuk agribisnis, peternakan, dan perkebunan.",
        items: [
            {
                product: "Konsultasi Manajemen Bisnis",
                imgProduct: "",
                desc: "Dukung pengelolaan bisnis agribisnis, perkebunan, dan peternakan."
            }
        ]
    },
    {
        name: "Perdagangan Ritel Produk",
        img: "https://images.unsplash.com/photo-1534723570441-4c448d1010e5?q=80&w=2940&auto=format&fit=crop",
        desc: "Perdagangan ritel produk pertanian dan peternakan berkualitas tinggi.",
        items: [
            {
                product: "Perdagangan Hasil Peternakan",
                imgProduct: "",
                desc: "Daging, susu, dan telur segar untuk ritel dan industri."
            },
            {
                product: "Perdagangan Buah-buahan",
                imgProduct: "",
                desc: "Buah segar siap distribusi ke pasar ritel dan grosir."
            },
            {
                product: "Perdagangan Pupuk & Pestisida",
                imgProduct: "",
                desc: "Pupuk dan pestisida berkualitas untuk kebutuhan pertanian."
            },
            {
                product: "Perdagangan Hasil Pertanian",
                imgProduct: "",
                desc: "Sayur, biji-bijian, dan komoditas pertanian siap konsumsi."
            }
        ]
    }
]

export const dataWhyUs = [
    {
        title: "Produk Berkualitas Tinggi",
        icon: <TbHeartSpark />,
        desc: "Kami mengutamakan mutu dari setiap produk unggas, hasil perkebunan, hingga layanan konsultasi bisnis."
    },
    {
        title: "Pengelolaan Profesional dan Modern",
        icon: <BsGear />,
        desc: "Proses produksi kami mengadopsi teknologi canggih dan metode pengelolaan terkini."
    },
    {
        title: "Jaringan Distribusi Luas",
        icon: <TbWorld />,
        desc: "Dengan distribusi yang mencakup seluruh Indonesia, produk kami mudah dijangkau oleh mitra dan pelanggan."
    },
    {
        title: "Komitmen terhadap Keberlanjutan",
        icon: <RiHandHeartLine />,
        desc: "Mengedepankan prinsip ramah lingkungan dan mendukung keberlanjutan ekosistem alam."
    },
    {
        title: "Dukungan Konsultasi Bisnis",
        icon: <SlPeople />,
        desc: "Layanan konsultasi manajemen kami membantu mitra dalam mengoptimalkan produktivitas dan efisiensi usaha."
    }
]

export const dataContact = {
    address: {
        label: "Operational Office",
        data: "Jl. Raya Masjid Al Hidayah No.5, RT.6/RW.7, Pejaten Barat, Pasar Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12510",
        embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126905.92489499568!2d106.7575353514891!3d-6.288666897638287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3007a6e8e39%3A0xf83b477d03a6931f!2sGANESHA%20CONSULTING%20-%20OPERATIONAL!5e0!3m2!1sid!2sid!4v1723453298072!5m2!1sid!2sid",
        link: "https://maps.app.goo.gl/jvz8ScJZtUmAnT7SA"
    },
    media: [
        {
            label: "Instagram",
            icon: <RiInstagramLine />,
            data: "@ganeshamultikreatif",
            link: "https://www.instagram.com/ganeshamultikreatif?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        },
        {
            label: "Facebook",
            icon: <RiFacebookBoxLine />,
            class: "bg-gradient-to-b to-transparent from-[#EA5554] !text-white",
            data: "Ganesha Consulting",
            link: "https://www.facebook.com/profile.php?id=61555739807086"
        },
        {
            label: "LinkedIn",
            icon: <RiLinkedinBoxLine />,
            data: "Ganesha Multi Kreatif",
            link: "https://www.linkedin.com/company/ganesha-multi-kreatif/"
        },
        {
            label: "WhatsApp",
            icon: <RiWhatsappLine />,
            data: "+62 888 712 7000",
            link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting"
        }
    ],
    sosmed: [
        {
            icon: <RiInstagramLine />,
            link: ""
        },
        {
            icon: <RiFacebookCircleLine />,
            link: ""
        },
        {
            icon: <RiMailLine />,
            link: ""
        },
        {
            icon: <RiWhatsappLine />,
            link: ""
        },
    ]
}

export function urlFriendly(text) {
    return `${text.toLowerCase().replace(/\s+/g, '-')}`;
}