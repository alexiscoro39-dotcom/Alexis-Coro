import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
            {/* Top Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#39282e] px-10 py-3 bg-[#181113] sticky top-0 z-50">
                <div className="flex items-center gap-4 text-white">
                    <div className="size-8 text-primary">
                        <span className="material-symbols-outlined text-4xl">favorite</span>
                    </div>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">MoodLove</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8 items-center">
                    <div className="hidden md:flex items-center gap-9">
                        <Link to="/matches" className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors">Descubrir</Link>
                        <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Partidos</a>
                        <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Mensajes</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center justify-center rounded-full size-10 bg-[#39282e] hover:bg-[#543b43] text-white transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-600 transition-colors shadow-lg shadow-primary/20">
                            <span className="truncate">Mi Perfil</span>
                        </button>
                    </div>
                </div>
            </header>
            {/* Main Content Area */}
            <main className="flex-1 layout-container flex justify-center py-8 px-4 md:px-8">
                <div className="layout-content-container flex flex-col md:flex-row gap-8 max-w-[1200px] w-full">
                    {/* Left Sidebar: Sticky Profile Card */}
                    <aside className="w-full md:w-[360px] flex flex-col gap-6 relative">
                        <div className="sticky top-24 flex flex-col gap-6">
                            {/* Profile Basic Card */}
                            <div className="bg-surface-dark rounded-lg p-6 flex flex-col items-center shadow-xl border border-[#39282e]">
                                <div className="relative mb-4 group cursor-pointer">
                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-40 border-4 border-primary shadow-2xl transition-transform transform group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYiNC97l9HeYJgPXYnoWW7bR2wG6550Hn50KNTqtk7w24DbEnb40M6d6Wgnn7_u5BhkzmLQYtxp9U0HIOUeIacB4Jhgt8Tu0xVFvX9G2wXrbTd2SJwf9cqAH5i4vGVb1eeJATW24dtvNICm5mbmP70hm0eGvALofUbVvx2db2UeoEEzY9tCaj-mBmjO4KGHdnvkwUV49R9h-lrWRj9yiS6u_4zJyuaIYbYQtRldlmERroLmVXxCa6PiiEytT8kwGCubaPOHJ2hkDE")'}}>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-green-500 size-4 rounded-full border-2 border-[#2d1b22]" title="Online Now"></div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-1 mb-6">
                                    <h1 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] text-center flex items-center gap-2">
                                        Camila, 26
                                        <span className="material-symbols-outlined text-blue-400 text-xl" title="Verified User">verified</span>
                                    </h1>
                                    <p className="text-[#b99da6] text-base font-normal leading-normal text-center flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                        Cuenca, Azuay
                                    </p>
                                    <p className="text-[#b99da6] text-sm font-normal leading-normal text-center mt-1">Activa hace 2 horas</p>
                                </div>
                                {/* Trust Score */}
                                <div className="w-full bg-[#181113] rounded-2xl p-4 mb-6 border border-[#39282e]">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-white text-sm font-semibold">Índice de Confianza</span>
                                        <span className="text-primary text-lg font-bold">98%</span>
                                    </div>
                                    <div className="rounded-full bg-[#543b43] h-2 w-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full" style={{width: "98%"}}></div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-3 text-xs text-[#b99da6]">
                                        <span className="material-symbols-outlined text-green-400 text-base">fingerprint</span>
                                        <span>Verificado biométricamente</span>
                                    </div>
                                </div>
                                {/* Main Actions */}
                                <div className="flex gap-3 w-full">
                                    <button className="flex-1 cursor-pointer items-center justify-center rounded-full h-12 bg-primary text-white text-base font-bold hover:bg-red-600 transition-all shadow-lg shadow-primary/30 flex gap-2">
                                        <span className="material-symbols-outlined">favorite</span>
                                        Conectar
                                    </button>
                                    <button className="size-12 cursor-pointer items-center justify-center rounded-full bg-[#39282e] text-white hover:bg-[#543b43] transition-all border border-[#543b43]">
                                        <span className="material-symbols-outlined">chat_bubble</span>
                                    </button>
                                </div>
                                <button className="mt-4 text-[#b99da6] text-xs hover:text-white transition-colors flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">flag</span> Reportar perfil
                                </button>
                            </div>
                            {/* Cultural Affinity (Small) */}
                            <div className="bg-surface-dark rounded-lg p-5 border border-[#39282e]">
                                <h3 className="text-white text-sm font-bold mb-3 uppercase tracking-wider text-[#b99da6]">Intereses Culturales</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-[#39282e] text-[#ec135b] rounded-full text-xs font-medium border border-[#ec135b]/30">Encebollado Lover</span>
                                    <span className="px-3 py-1 bg-[#39282e] text-white rounded-full text-xs font-medium border border-[#543b43]">Senderismo Andino</span>
                                    <span className="px-3 py-1 bg-[#39282e] text-white rounded-full text-xs font-medium border border-[#543b43]">Pasillo</span>
                                    <span className="px-3 py-1 bg-[#39282e] text-white rounded-full text-xs font-medium border border-[#543b43]">Cerveza Artesanal</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                    {/* Right Content: Details Scrollable */}
                    <section className="flex-1 flex flex-col gap-6">
                        {/* About Section */}
                        <div className="bg-surface-dark rounded-lg p-6 md:p-8 border border-[#39282e]">
                            <h2 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">person</span>
                                Sobre mí
                            </h2>
                            <p className="text-[#e2d5d8] text-base leading-relaxed font-light">
                                Soy una arquitecta apasionada por restaurar casas coloniales. Me encanta explorar los rincones ocultos de Cuenca los fines de semana y buscar el mejor café de la ciudad. Busco a alguien sincero, que disfrute de una buena conversación y que no tenga miedo de probar cosas nuevas. ¡La honestidad ante todo! 🏔️☕️
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#39282e]">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[#b99da6] text-xs uppercase font-bold tracking-wide">Provincia de Origen</span>
                                    <span className="text-white font-medium flex items-center gap-1">
                                        <span className="material-symbols-outlined text-primary text-sm">map</span> Azuay
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[#b99da6] text-xs uppercase font-bold tracking-wide">Estatura</span>
                                    <span className="text-white font-medium">1.65 m</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[#b99da6] text-xs uppercase font-bold tracking-wide">Intención</span>
                                    <span className="text-white font-medium">Algo serio</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[#b99da6] text-xs uppercase font-bold tracking-wide">Fumador</span>
                                    <span className="text-white font-medium">No</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[#b99da6] text-xs uppercase font-bold tracking-wide">Signo</span>
                                    <span className="text-white font-medium">Virgo</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[#b99da6] text-xs uppercase font-bold tracking-wide">Mascotas</span>
                                    <span className="text-white font-medium">2 Gatos</span>
                                </div>
                            </div>
                        </div>
                        {/* Photo Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-center bg-no-repeat bg-cover h-64 md:h-80 rounded-lg cursor-pointer hover:opacity-90 transition-opacity relative group" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJQ1nomGNIBiHApjbvfpNJJxXka2_vYTupMuzDIQ78HQeyN91-vGGhnp-1Xm7kd3ITOqMqvImPtLVBcmjs_mwTsw5CgYtTs0XMHPcebzmOsour7dAnucLUhJkyWl5I5YJEd-HQ3RU6eQDOQxbiy4wc7TlSLAAFRZxyWR7DLp0xi15Yz-0fT6aiMkCGoXFwUrJH617dt4R2miY10rFx0AlQtzleAt7iYX1ouzfFlmMeiuI2VZRnkoEycvhrWAjgAQRMKvCbZ9VoWnY")'}}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors rounded-lg"></div>
                            </div>
                            <div className="bg-center bg-no-repeat bg-cover h-64 md:h-80 rounded-lg cursor-pointer hover:opacity-90 transition-opacity relative group" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKesWqbm_ZBjMtjbaJS5lo612aIvf5VAqBpMidiDdiZl-4bWNcrdp07O7o29jS2XNH4gAZUdVG56Db7eImCWVY-2fDS2vp-NqQTNlwgmT3zwj4fKQ32Bxdum40CO9EHkVFVgFKKtcDtkh-OhFQRnoiQe6TSg38jnlEr4WqKwE1ZVGc7f1r-9aa_QWlLgMsgLFukvV1Sgvb9p4vNq3Ljw-Azc46Qa0JTNuw-PxxESxl3vHxFAj91Hs6hUYZCx7fo4OG9UlZ9MaSkMo")'}}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors rounded-lg"></div>
                            </div>
                            <div className="bg-center bg-no-repeat bg-cover h-64 md:h-80 rounded-lg cursor-pointer hover:opacity-90 transition-opacity relative group md:col-span-2" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkeWu5FXZEuFooQgKpwwEwGI-VorIVNZv4TQp1nFjTXwb3IPd38Yalw3nzE9GIEbPYCrmDCQDLsu_fnuYRLoUCkg_B1u4z3yVXFYcL2P86V66ES-KnM8mrGFgIjBYsLHLRzTNYK2PV4rdME-zx3xZ_S1VNDRmcATg0TuKU3gw_LsGqR7m4yWGG5B4_zuIzJZ65LHaUIDHeCpIJIotpmZGkiVwUxG9Gp_7kpt2NDB8kd5yRJp8iUPBZWAVSLhEi3hxLH-ctXBC9qT0")'}}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors rounded-lg"></div>
                            </div>
                        </div>
                        {/* Social Media Paywall */}
                        <div className="bg-gradient-to-br from-[#2d1b22] to-[#181113] rounded-lg p-1 border border-[#39282e] relative overflow-hidden group">
                            {/* Glassmorphism Overlay */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] z-0"></div>
                            <div className="relative z-10 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-white text-lg font-bold mb-1 flex items-center justify-center md:justify-start gap-2">
                                        <span className="material-symbols-outlined text-primary">lock</span>
                                        Redes Sociales Privadas
                                    </h3>
                                    <p className="text-[#b99da6] text-sm">
                                        Desbloquea para ver el Instagram y Facebook de Camila y validar su círculo social.
                                    </p>
                                </div>
                                {/* Blurred Preview Icons */}
                                <div className="flex gap-4 opacity-50 blur-[2px] select-none pointer-events-none grayscale">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="size-12 rounded-xl bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 flex items-center justify-center">
                                            <span className="text-white text-2xl font-bold">Ig</span>
                                        </div>
                                        <span className="text-xs text-white">@camil...</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="size-12 rounded-xl bg-blue-600 flex items-center justify-center">
                                            <span className="text-white text-2xl font-bold">Fb</span>
                                        </div>
                                        <span className="text-xs text-white">Camila...</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <button className="bg-primary hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-primary/20 transform hover:-translate-y-0.5 transition-all flex items-center gap-2 w-full md:w-auto justify-center">
                                        <span>Desbloquear</span>
                                        <span className="bg-black/20 px-2 py-0.5 rounded text-xs">50 Coins</span>
                                    </button>
                                    <span className="text-[10px] text-[#b99da6] uppercase tracking-wider">Compra segura In-App</span>
                                </div>
                            </div>
                        </div>
                        {/* Safety Tip */}
                        <div className="bg-[#543b43]/20 rounded-lg p-4 flex items-start gap-3 border border-[#543b43]/30">
                            <span className="material-symbols-outlined text-primary mt-0.5">security</span>
                            <div>
                                <h4 class="text-white text-sm font-bold mb-1">Mantente seguro</h4>
                                <p class="text-[#b99da6] text-xs leading-relaxed">
                                    Nunca envíes dinero a personas que acabas de conocer. Si alguien te pide información financiera, repórtalo inmediatamente usando el botón de reporte en su perfil.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Profile;