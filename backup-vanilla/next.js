import React, { useState } from 'react';
import { 
    Search, 
    PenTool, 
    Share2, 
    TrendingUp, 
    ChevronLeft, 
    ChevronRight, 
    ExternalLink,
    BookOpen,
    User,
    Layout,
    MapPin,
    Mail,
    Phone
} from 'lucide-react';

/**
 * Konfigurasi Palet Warna & Font
 * - Poppins Font Family
 * - #000000 (Black)
 * - #14213d (Navy)
 * - #eb5e28 (Orange/Flame)
 * - #e5e5e5 (Platinum)
 * - #ffffff (White)
 */

const experiences = [
    {
        year: "2026",
        role: "CMO - Job On Tours",
        description: "Memimpin strategi pemasaran digital dan pertumbuhan brand secara keseluruhan.",
        slides: ["Slide 01", "Slide 02", "Slide 03"],
        active: true
    },
    {
        year: "2025",
        role: "ParadicFest",
        description: "Bertanggung jawab dalam pengelolaan konten kreatif dan manajemen kampanye media sosial.",
        slides: ["Slide 01", "Slide 02", "Slide 03"],
        active: false
    },
    {
        year: "2023",
        role: "Buangdisini.id",
        description: "Copywriter dan Content Writer untuk kampanye edukasi lingkungan.",
        slides: ["Slide 01", "Slide 02", "Slide 03"],
        active: false
    }
];

const skills = [
    { name: "SEO", icon: <Search size={24} /> },
    { name: "Copywriting", icon: <PenTool size={24} /> },
    { name: "Content Writing", icon: <BookOpen size={24} /> },
    { name: "Social Media", icon: <Share2 size={24} /> },
    { name: "Digital Marketing", icon: <TrendingUp size={24} /> },
    { name: "Brand Strategy", icon: <Layout size={24} /> },
    { name: "Communication", icon: <User size={24} /> },
    { name: "Analysis", icon: <TrendingUp size={24} /> }
];

export default function App() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-[#14213d] font-['Poppins'] selection:bg-[#eb5e28] selection:text-white">
            {/* Import Font Poppins via Google Fonts */}
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');`}
            </style>
            
            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#e5e5e5]">
                <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                    <div className="text-2xl font-black tracking-tighter text-[#14213d]">OBI.</div>
                    <div className="hidden md:flex space-x-10 font-semibold text-xs uppercase tracking-widest text-[#14213d]">
                        {['home', 'about', 'gallery', 'blog'].map((item) => (
                            <a key={item} href={`#${item}`} className="hover:text-[#eb5e28] transition-colors duration-300">
                                {item}
                            </a>
                        ))}
                    </div>
                    <button className="bg-[#14213d] text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#eb5e28] transition-colors">
                        Hire Me
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header id="home" className="pt-44 pb-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-[#000000]">Hi, I'm Obi</h1>
                    <p className="text-lg md:text-xl text-[#14213d]/70 leading-relaxed max-w-3xl mx-auto mb-12">
                        I am a fresh graduate of the bachelor of library and science information program 
                        from <span className="text-[#eb5e28] font-bold">Maliki Islamic University</span> in Malang 
                        with a <span className="bg-[#e5e5e5] px-2 py-1 rounded text-[#000000]">GPA of 3.83</span>.
                    </p>
                    <button className="bg-[#eb5e28] text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all shadow-[#eb5e28]/30">
                        Contact me
                    </button>
                </div>
            </header>

            {/* Problem & Solution (Background Abu-abu Muda) */}
            <section id="about" className="py-24 px-6 bg-[#e5e5e5]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="bg-[#14213d] aspect-[4/5] rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                        <span className="text-white/20 font-black text-3xl italic tracking-widest uppercase">IMAGES</span>
                    </div>
                    <div>
                        <h2 className="text-4xl font-extrabold mb-4 leading-snug text-[#000000]">Penjualanmu tidak meningkat?</h2>
                        <p className="text-[#eb5e28] font-bold text-xl italic mb-8 uppercase tracking-wide">Bisa jadi itu karena :</p>
                        <ul className="space-y-6 mb-12">
                            {[
                                "Deskripsi product yang bertele-tele",
                                "CTA yang tidak kuat",
                                "Storytelling yang kaku",
                                "Tagline yang kurang deskriptif"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-4">
                                    <div className="w-3 h-3 rounded-full bg-[#eb5e28]"></div>
                                    <span className="text-lg font-medium text-[#14213d]">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xl font-bold text-[#14213d] border-l-8 border-[#eb5e28] pl-6 italic">
                            "Mengenalku lebih jauh mungkin bisa jadi solusi yang tepat untukmu"
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Grid */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-black mb-16 text-[#000000]">Skill Yang Aku Miliki</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {skills.map((skill, i) => (
                            <div key={i} className="p-10 bg-white rounded-3xl border-2 border-[#e5e5e5] hover:border-[#eb5e28] transition-all group">
                                <div className="w-16 h-16 bg-[#e5e5e5] rounded-2xl mx-auto mb-6 flex items-center justify-center text-[#14213d] group-hover:bg-[#eb5e28] group-hover:text-white transition-all">
                                    {skill.icon}
                                </div>
                                <h3 className="font-bold text-lg text-[#14213d]">{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section id="gallery" className="py-24 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:sticky md:top-32 self-start">
                        <h2 className="text-5xl font-black mb-2 text-[#000000]">Work</h2>
                        <p className="text-[#eb5e28] text-xl font-bold italic mb-6">— experience</p>
                        <p className="text-[#14213d]/60 leading-relaxed font-medium">
                            Aku memiliki berbagai pengalaman di berbagai bidang yang sesuai dengan kebutuhanmu.
                        </p>
                    </div>
                    <div className="md:col-span-2 space-y-20 relative">
                        <div className="absolute left-0 md:left-4 top-0 bottom-0 w-1 bg-[#e5e5e5]"></div>
                        {experiences.map((exp, i) => (
                            <div key={i} className="relative pl-10 md:pl-16 group">
                                <div className={`absolute left-[-6px] md:left-[10px] top-2 w-4 h-4 rounded-full border-4 border-white shadow-lg transition-colors duration-300 ${exp.active ? 'bg-[#eb5e28]' : 'bg-[#14213d]'}`}></div>
                                <span className={`text-xl font-black ${exp.active ? 'text-[#eb5e28]' : 'text-[#14213d]/40'}`}>
                                    {exp.year}
                                </span>
                                <h3 className="text-3xl font-black mt-2 mb-4 text-[#000000]">{exp.role}</h3>
                                <p className="text-[#14213d]/70 text-lg mb-6 leading-relaxed font-medium">{exp.description}</p>
                                <div className="flex flex-wrap gap-3">
                                    {exp.slides.map((slide, si) => (
                                        <button key={si} className="px-5 py-2 bg-[#e5e5e5] text-[#14213d] rounded-lg text-sm font-bold hover:bg-[#eb5e28] hover:text-white transition-all flex items-center gap-2">
                                            {slide} <ExternalLink size={14} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials (Navy Dark) */}
            <section className="py-24 bg-[#14213d] text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-4xl font-black">What they Said About me</h2>
                        <div className="flex space-x-4">
                            <button className="p-4 rounded-full border-2 border-white/20 hover:bg-[#eb5e28] hover:border-[#eb5e28] transition-all">
                                <ChevronLeft size={24} />
                            </button>
                            <button className="p-4 rounded-full border-2 border-white/20 hover:bg-[#eb5e28] hover:border-[#eb5e28] transition-all">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                                <User className="text-[#eb5e28] mb-6" size={32} />
                                <p className="text-lg italic leading-relaxed mb-8 font-light">
                                    "Sangat profesional dan hasil pekerjaannya melebihi ekspektasi. Strategi yang diberikan sangat membantu bisnis saya tumbuh."
                                </p>
                                <div className="font-bold text-[#eb5e28]">Nama Klien</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-4xl font-black mb-16 text-[#000000] tracking-tighter uppercase italic">BLOG</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[1, 2, 3].map((post) => (
                            <article key={post} className="group cursor-pointer">
                                <div className="bg-[#e5e5e5] aspect-video rounded-3xl mb-6 overflow-hidden relative border-2 border-transparent group-hover:border-[#eb5e28] transition-all">
                                    <div className="w-full h-full flex items-center justify-center text-[#14213d]/20 font-black uppercase tracking-widest text-2xl">
                                        Thumbnail
                                    </div>
                                </div>
                                <span className="text-[#eb5e28] font-black text-sm tracking-widest uppercase">Category</span>
                                <h3 className="text-2xl font-black mt-2 text-[#000000] group-hover:text-[#eb5e28] transition-colors leading-tight">Headline Blog yang Menarik</h3>
                                <p className="mt-4 text-[#14213d]/60 font-medium">Deskripsi singkat mengenai isi artikel blog yang bisa menarik perhatian pembaca.</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA: Let's Work Together (Flexbox) */}
            <section className="max-w-6xl mx-auto px-6 mb-24">
                <div className="bg-[#eb5e28] rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row justify-between items-center text-white shadow-2xl shadow-[#eb5e28]/40">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-4xl md:text-6xl font-black mb-4">Let's work together</h2>
                        <p className="text-white/80 text-lg font-medium">Siap meningkatkan performa digital marketing bisnismu?</p>
                    </div>
                    <button className="bg-white text-[#eb5e28] px-12 py-5 rounded-full font-black text-xl hover:scale-110 transition-transform shadow-xl">
                        Contact Me
                    </button>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-[#000000] text-white pt-24 pb-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                        {/* Column 1: Navigation & Info */}
                        <div>
                            <div className="text-3xl font-black mb-8 text-[#eb5e28]">OBI.</div>
                            <nav className="flex flex-wrap gap-8 font-bold text-sm uppercase tracking-widest mb-12">
                                <a href="#home" className="hover:text-[#eb5e28]">Home</a>
                                <a href="#about" className="hover:text-[#eb5e28]">About</a>
                                <a href="#gallery" className="hover:text-[#eb5e28]">Gallery</a>
                                <a href="#blog" className="hover:text-[#eb5e28]">Blog</a>
                            </nav>
                            <div className="space-y-4 text-white/60 font-medium">
                                <div className="flex items-center gap-3">
                                    <Mail size={18} className="text-[#eb5e28]" />
                                    <span>hello@obidigital.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-[#eb5e28]" />
                                    <span>+62 812 XXXX XXXX</span>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Address */}
                        <div className="bg-[#14213d] p-10 rounded-3xl border border-white/10">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-[#eb5e28] shrink-0" size={28} />
                                <div>
                                    <h4 className="text-xl font-bold mb-4">Office Address</h4>
                                    <p className="text-white/70 leading-relaxed font-medium">
                                        Jl. Kramat P. Syarief No. 32 RT/RW 001/008 <br />
                                        Kelurahan Lubang Buaya Kecamatan Cipayung <br />
                                        Jakarta Timur, DKI Jakarta <br />
                                        Kota Jakarta Timur, Dki jakarta, 13810 <br />
                                        <span className="text-[#eb5e28] font-black uppercase tracking-widest mt-2 block">Indonesia</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm font-medium">
                        <p>&copy; 2026 OBI. All Rights Reserved.</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}