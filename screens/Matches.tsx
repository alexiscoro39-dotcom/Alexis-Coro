import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Matches: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white overflow-hidden">
            <div className="flex h-screen w-full flex-row overflow-hidden">
                {/* Side Navigation */}
                <aside className="hidden lg:flex flex-col w-72 h-full bg-surface-dark/50 border-r border-white/5 p-6 flex-shrink-0">
                    <div className="mb-10 pl-2">
                        <h1 className="text-white text-2xl font-bold tracking-tight flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl">favorite</span>
                            MoodLove
                        </h1>
                        <p className="text-[#b99da6] text-xs font-medium pl-9 opacity-80">Ecuador</p>
                    </div>
                    <nav className="flex flex-col gap-3 flex-1">
                        {/* Discover (Active State) */}
                        <Link to="/matches" className="flex items-center gap-4 px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 group transition-all">
                            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">explore</span>
                            <p className="text-white text-base font-medium">Descubrir</p>
                        </Link>
                        {/* Matches */}
                        <a className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group" href="#">
                            <span className="material-symbols-outlined text-[#b99da6] group-hover:text-white transition-colors">favorite_border</span>
                            <p className="text-[#b99da6] group-hover:text-white text-base font-medium transition-colors">Mis Matches</p>
                            <span className="ml-auto bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                        </a>
                        {/* Chats */}
                        <a className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group" href="#">
                            <span className="material-symbols-outlined text-[#b99da6] group-hover:text-white transition-colors">chat_bubble_outline</span>
                            <p className="text-[#b99da6] group-hover:text-white text-base font-medium transition-colors">Mensajes</p>
                        </a>
                        {/* Profile */}
                        <Link to="/profile" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group">
                            <span className="material-symbols-outlined text-[#b99da6] group-hover:text-white transition-colors">person_outline</span>
                            <p className="text-[#b99da6] group-hover:text-white text-base font-medium transition-colors">Mi Perfil</p>
                        </Link>
                    </nav>
                    <div className="mt-auto">
                        <div className="flex items-center gap-3 px-4 py-4 rounded-xl bg-gradient-to-r from-primary/20 to-transparent border border-white/5">
                            <div className="relative">
                                {/* User Avatar */}
                                <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChEQfM37Ai2J-hFErj4RPO-POH5MJW2gsqx9wfUm4WmYqGO4nimr9GibhMP04ZxDnkiTJAYlKZS5abdTeQM8s_jCm_UlnNbk_6y2kRRM_z53QtulKJ2ZzQpEkqAolH1xDfSR2DDlaPZVPZxtPZjean5s-rtGckRODjPsI9B-7HIfEfsPKNrlfy7hWh02YxvRvkJfy02luho9BWoacAoGpHcCR6xe7rIqdQ4TIPWP3S1iEHoJZ7UVCDUVEJguUEwh48a-Bv3bn3f0k")'}}></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#221016]"></div>
                            </div>
                            <div>
                                <p className="text-white text-sm font-semibold">David, 28</p>
                                <p className="text-primary text-xs flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[12px]">verified_user</span>
                                    Verificado
                                </p>
                            </div>
                        </div>
                    </div>
                </aside>
                {/* Main Content Area */}
                <main className="flex-1 h-full overflow-y-auto relative flex flex-col">
                    {/* Top Header & Filters */}
                    <header className="sticky top-0 z-20 bg-background-dark/95 backdrop-blur-md border-b border-white/5 px-6 py-6 md:px-10">
                        <div className="max-w-7xl mx-auto w-full">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                <div>
                                    <h2 className="text-white text-3xl font-black tracking-tight mb-1">Descubre tu media naranja</h2>
                                    <p className="text-[#b99da6] text-sm md:text-base">Conexiones seguras y culturalmente afines en Ecuador.</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="h-10 w-10 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors">
                                        <span className="material-symbols-outlined">tune</span>
                                    </button>
                                    <button className="h-10 w-10 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors">
                                        <span className="material-symbols-outlined">notifications</span>
                                    </button>
                                </div>
                            </div>
                            {/* Filter Chips */}
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white pl-4 pr-3 transition-transform active:scale-95">
                                    <p className="text-sm font-bold">Todo Ecuador</p>
                                    <span className="material-symbols-outlined text-lg">expand_more</span>
                                </button>
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-white/10 hover:border-white/30 pl-4 pr-3 transition-all">
                                    <p className="text-white text-sm font-medium">📍 Distancia: &lt; 25km</p>
                                    <span className="material-symbols-outlined text-white text-lg">expand_more</span>
                                </button>
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-white/10 hover:border-white/30 pl-4 pr-3 transition-all">
                                    <p className="text-white text-sm font-medium">🎂 Edad: 22 - 30</p>
                                    <span className="material-symbols-outlined text-white text-lg">expand_more</span>
                                </button>
                                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-white/10 hover:border-white/30 pl-4 pr-3 transition-all">
                                    <p className="text-white text-sm font-medium">🛡️ Biometría Verificada</p>
                                </button>
                            </div>
                        </div>
                    </header>
                    {/* Grid Content */}
                    <div className="flex-1 px-6 md:px-10 py-6">
                        <div className="max-w-7xl mx-auto w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
                                {/* Card 1: Camila */}
                                <div className="group flex flex-col bg-surface-dark rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 relative">
                                    {/* Image Container */}
                                    <div className="relative w-full aspect-[4/5] overflow-hidden">
                                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSbz9WIjnQ6r-NLABeLTyISpLGXlbFvz3-VHmAb4mQw1LQEd2Xu6sGMnptzgzI95viSW4-Jc7dIofaEZDHlgqbLzR2ijIn08pauLTbdj3cZq8VoRc9yyz0Yp4W0qul4dXRnRv7vKL6DCchfbSz6py0MlSOUMLZ4No58XljP6JEoIxijf9YSm1v_b0Aljn9TzVpUHND_55ywPQe8zi12hmDftbCrgmMaOmUDHvvueczG9OvyKK6gZSZgcjmkGhPcouFtUor8ZAdWjo" alt="Camila" />
                                        {/* Distance Badge Overlay */}
                                        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                                            <span className="material-symbols-outlined text-white text-[16px]">location_on</span>
                                            <span className="text-white text-xs font-bold tracking-wide">2 km</span>
                                        </div>
                                    </div>
                                    {/* Card Body */}
                                    <div className="p-5 flex flex-col flex-1 relative bg-gradient-to-b from-surface-dark to-[#1f0f14]">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
                                                    Camila, 26
                                                    <span className="material-symbols-outlined text-primary text-xl" title="Biometric Verified">verified</span>
                                                </h3>
                                                <p className="text-[#b99da6] text-sm mt-0.5 font-medium">📍 Quito, Pichincha</p>
                                            </div>
                                        </div>
                                        {/* Cultural Tags */}
                                        <div className="flex flex-wrap gap-2 mt-3 mb-6">
                                            <span className="px-3 py-1 bg-white/5 border border-white/5 text-[#b99da6] text-xs font-semibold rounded-full hover:bg-white/10 transition-colors">Fan de la Fritada 🌽</span>
                                            <span className="px-3 py-1 bg-white/5 border border-white/5 text-[#b99da6] text-xs font-semibold rounded-full hover:bg-white/10 transition-colors">Cineasta 🎬</span>
                                        </div>
                                        {/* Actions */}
                                        <div className="mt-auto grid grid-cols-2 gap-4">
                                            <button className="h-12 w-full rounded-full bg-[#181113] border border-white/5 text-white hover:border-red-500 hover:text-red-500 transition-all flex items-center justify-center group/btn">
                                                <span className="material-symbols-outlined text-2xl group-hover/btn:scale-110 transition-transform">close</span>
                                            </button>
                                            <button onClick={() => navigate('/profile')} className="h-12 w-full rounded-full bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40 transition-all flex items-center justify-center group/btn">
                                                <span className="material-symbols-outlined text-2xl group-hover/btn:scale-125 transition-transform fill-current">favorite</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 2: Mateo */}
                                <div className="group flex flex-col bg-surface-dark rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 relative">
                                    <div className="relative w-full aspect-[4/5] overflow-hidden">
                                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOuXW-UXzL2eBKtMGsKX7U5eqBX5FQ2cMO4LYQnMLCgJmu8_e-G8q-R0jQroSULb1MYQsN1ziSJSnViL9BEmuCkoqASPUJTPu84xCOXb308dkg4TFRAemQwYTgDR0SEW9Rn4z1W5aawfdb3tLBYroWmdPwMTQzZMvu6iK4pCGJWUQeoHTuvdXg2TMwdMgjeWsLRjQfJRLZU_vlELKMI-bDwTLOQzHutw1P07welNTL8rvXUso2NKllM4P6EuCDDwOSroMMTWJ-Lrg" alt="Mateo" />
                                        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                                            <span className="material-symbols-outlined text-white text-[16px]">location_on</span>
                                            <span className="text-white text-xs font-bold tracking-wide">15 km</span>
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-1 relative bg-gradient-to-b from-surface-dark to-[#1f0f14]">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
                                                    Mateo, 29
                                                    <span className="material-symbols-outlined text-primary text-xl" title="Biometric Verified">verified</span>
                                                </h3>
                                                <p className="text-[#b99da6] text-sm mt-0.5 font-medium">📍 Guayaquil, Guayas</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3 mb-6">
                                            <span className="px-3 py-1 bg-white/5 border border-white/5 text-[#b99da6] text-xs font-semibold rounded-full hover:bg-white/10 transition-colors">Montañista 🏔️</span>
                                            <span className="px-3 py-1 bg-white/5 border border-white/5 text-[#b99da6] text-xs font-semibold rounded-full hover:bg-white/10 transition-colors">Encebollado Lover 🐟</span>
                                        </div>
                                        <div className="mt-auto grid grid-cols-2 gap-4">
                                            <button className="h-12 w-full rounded-full bg-[#181113] border border-white/5 text-white hover:border-red-500 hover:text-red-500 transition-all flex items-center justify-center group/btn">
                                                <span className="material-symbols-outlined text-2xl group-hover/btn:scale-110 transition-transform">close</span>
                                            </button>
                                            <button className="h-12 w-full rounded-full bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40 transition-all flex items-center justify-center group/btn">
                                                <span className="material-symbols-outlined text-2xl group-hover/btn:scale-125 transition-transform fill-current">favorite</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 3: Sofia */}
                                <div className="group flex flex-col bg-surface-dark rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 relative">
                                    <div className="relative w-full aspect-[4/5] overflow-hidden">
                                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxfyAYUihNQ4dCend9OKnQBdtnKeXs18zaz7gzOWnuwm1a5IbdYGN6XYS7zxrBy75lMOg2pvDbGS4aUBtJi2XFGo0Ly0RFEDGkS5Nowmwfr8k0jSRIkIIYMMyBiGZQnEjFFgso6T3keUczuTLGzhtHGcgyvHQAaH59pFCrooxEuMtBIJSs7EpNhYqzhk0yf65ooIxoOULGrR2A1Jd8RYwRJONjyarI_0FDjuxTRHeJ-0ucmpCMpgBpnK8CgL1ho1Wr38OWiCDyfk0" alt="Sofia" />
                                        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                                            <span className="material-symbols-outlined text-white text-[16px]">location_on</span>
                                            <span className="text-white text-xs font-bold tracking-wide">120 km</span>
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-1 relative bg-gradient-to-b from-surface-dark to-[#1f0f14]">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
                                                    Sofia, 24
                                                </h3>
                                                <p className="text-[#b99da6] text-sm mt-0.5 font-medium">📍 Cuenca, Azuay</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3 mb-6">
                                            <span className="px-3 py-1 bg-white/5 border border-white/5 text-[#b99da6] text-xs font-semibold rounded-full hover:bg-white/10 transition-colors">Amante del Bolón 🍌</span>
                                            <span className="px-3 py-1 bg-white/5 border border-white/5 text-[#b99da6] text-xs font-semibold rounded-full hover:bg-white/10 transition-colors">Arte 🎨</span>
                                        </div>
                                        <div className="mt-auto grid grid-cols-2 gap-4">
                                            <button className="h-12 w-full rounded-full bg-[#181113] border border-white/5 text-white hover:border-red-500 hover:text-red-500 transition-all flex items-center justify-center group/btn">
                                                <span className="material-symbols-outlined text-2xl group-hover/btn:scale-110 transition-transform">close</span>
                                            </button>
                                            <button className="h-12 w-full rounded-full bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40 transition-all flex items-center justify-center group/btn">
                                                <span className="material-symbols-outlined text-2xl group-hover/btn:scale-125 transition-transform fill-current">favorite</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 4: Andres */}
                                <div className="group flex flex-col bg-surface-dark rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 relative">
                                    <div className="relative w-full aspect-[4/5] overflow-hidden">
                                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqZXTYp_TabORTqRj-jcIjmOIuNzUA8HnIypLdnYf9rtVCGjaCaZ_HozfPjjvxYJhIFPEr3qyo2BgT2ly5V1NKLpH4vKPqSVrrdoJoKOVxsGMiHK2fq3ylqJDqwkmunJFZa87yIMtHLDd6R2Io76xChZre2QSiji8aPZL8XoAAyUZCgh_1j_j_BItF6EQk_QH3Y4i-3yW_mOoTK9ci11KR3sG_0N9_jVbJjYL-zx83dqvEoeCQbHCKS9F3dM0bTdvwnadLVCJEGII" alt="Andres" />
                                        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                                            <span className="material-symbols-outlined text-white text-[16px]">location_on</span>
                                            <span className="text-white text-xs font-bold tracking-wide">340 km</span>
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-1 relative bg-gradient-to-b from-surface-dark to-[#1f0f14]">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
                                                    Andres, 30
                                                    <span className="material-symbols-outlined text-primary text-xl" title="Biometric Verified">verified</span>
                                                </h3>
                                                <p className="text-[#b99da6] text-sm mt-0.5 font-medium">📍 Loja, Loja</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3 mb-6">
                                            <span className="px-3 py-1 bg-white/5 border border-white/5 text-[#b99da6] text-xs font-semibold rounded-full hover:bg-white/10 transition-colors">Café Lojano ☕</span>
                                            <span className="px-3 py-1 bg-white/5 border border-white/5 text-[#b99da6] text-xs font-semibold rounded-full hover:bg-white/10 transition-colors">Músico 🎸</span>
                                        </div>
                                        <div className="mt-auto grid grid-cols-2 gap-4">
                                            <button className="h-12 w-full rounded-full bg-[#181113] border border-white/5 text-white hover:border-red-500 hover:text-red-500 transition-all flex items-center justify-center group/btn">
                                                <span className="material-symbols-outlined text-2xl group-hover/btn:scale-110 transition-transform">close</span>
                                            </button>
                                            <button className="h-12 w-full rounded-full bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40 transition-all flex items-center justify-center group/btn">
                                                <span className="material-symbols-outlined text-2xl group-hover/btn:scale-125 transition-transform fill-current">favorite</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Matches;