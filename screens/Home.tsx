import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
            {/* Top Navigation */}
            <div className="w-full border-b border-border-dark bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-[1200px] mx-auto px-4 lg:px-10 py-3">
                    <header className="flex items-center justify-between whitespace-nowrap">
                        <div className="flex items-center gap-3 text-white">
                            <div className="size-8 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined !text-[32px]">favorite</span>
                            </div>
                            <h2 className="text-white text-xl font-bold leading-tight tracking-tight">MoodLove</h2>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => navigate('/verification')} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-transparent border border-border-dark hover:bg-surface-dark text-white text-sm font-bold transition-colors">
                                <span className="truncate">Log In</span>
                            </button>
                            <button onClick={() => navigate('/verification')} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all transform hover:scale-105">
                                <span className="truncate">Join Now</span>
                            </button>
                        </div>
                    </header>
                </div>
            </div>

            {/* Hero Section */}
            <div className="w-full flex justify-center py-10 lg:py-16">
                <div className="max-w-[1200px] w-full px-4 lg:px-10 flex flex-col">
                    <div className="@container">
                        <div className="flex flex-col gap-6 lg:gap-10">
                            <div className="relative flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl lg:rounded-[2.5rem] items-start justify-end px-6 pb-12 lg:px-16 lg:pb-16 overflow-hidden shadow-2xl" 
                                 style={{backgroundImage: 'linear-gradient(to top, rgba(34, 16, 22, 0.9) 0%, rgba(34, 16, 22, 0.4) 50%, rgba(34, 16, 22, 0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvGMk4YKnsS6eBDdY5w5SgdJ-3XGk5siBR8GqkybXBKEtpZvLKBDOA7q2wZSIq-DHK9KUcuGBKNk2Bv3oR-ZMvR0I_Ee5cQNTAW-wXl1QAHcBUHbxwXEoXIDR1qWEAYBAu0PxjlrUD1wgOkYdKTZt7bKBIEqmBUxUKmfiX2SGfC6ZDJPa015eQvapaZukwxHol-TC5CsfhyM766AcNRANgY96URXnj-MMR5b6yjjBxwShI9g7H_bCVYEivl4DUOc_7BM0N1wofrEs")'}}>
                                <div className="absolute top-6 right-6 lg:top-10 lg:right-10">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-background-dark/80 backdrop-blur px-4 py-2 border border-border-dark text-xs font-bold text-white uppercase tracking-wider">
                                        <span className="material-symbols-outlined text-primary !text-base">verified_user</span>
                                        Official Partner
                                    </span>
                                </div>
                                <div className="flex flex-col gap-4 text-left max-w-[720px] z-10">
                                    <h1 className="text-white text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight drop-shadow-lg">
                                        Amor Real,<br/>Right Here in <span className="text-primary">Ecuador</span>.
                                    </h1>
                                    <h2 className="text-gray-100 text-lg lg:text-xl font-medium leading-relaxed max-w-[600px] drop-shadow-md">
                                        Experience the safest way to date. Verified profiles, biometric security, and matches who truly understand your culture.
                                    </h2>
                                </div>
                                <div className="flex flex-col w-full max-w-[520px] z-10 pt-4">
                                    <label className="flex flex-col w-full h-14 lg:h-16 relative group">
                                        <div className="flex w-full flex-1 items-stretch rounded-full h-full shadow-xl bg-surface-dark border border-border-dark focus-within:border-primary transition-colors overflow-hidden">
                                            <div className="text-text-muted flex items-center justify-center pl-6 bg-surface-dark">
                                                <span className="material-symbols-outlined">mail</span>
                                            </div>
                                            <input className="flex w-full min-w-0 flex-1 bg-transparent text-white focus:outline-0 focus:ring-0 border-none h-full placeholder:text-text-muted px-4 text-base font-medium" placeholder="Enter your email to start" />
                                            <div className="flex items-center justify-center pr-2">
                                                <button onClick={() => navigate('/verification')} className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 lg:h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-transform hover:scale-105">
                                                    <span className="truncate">Find Your Match</span>
                                                </button>
                                            </div>
                                        </div>
                                    </label>
                                    <p className="text-text-muted text-xs mt-3 ml-4 flex items-center gap-1">
                                        <span className="material-symbols-outlined !text-sm text-green-500">check_circle</span> 
                                        Free to join • No credit card required
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="w-full flex justify-center py-12 bg-background-dark">
                <div className="max-w-[1200px] w-full px-4 lg:px-10 flex flex-col">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-4 text-center items-center">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Why MoodLove?</span>
                            <h2 className="text-white text-3xl lg:text-5xl font-bold leading-tight max-w-[720px]">
                                We prioritize safety & cultural connection.
                            </h2>
                            <p className="text-text-muted text-lg font-normal leading-normal max-w-[600px] text-center">
                                Dating shouldn't be a guessing game. We've built features specifically for the modern Ecuadorian dating scene.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Feature 1 */}
                            <div className="flex flex-col gap-6 rounded-2xl border border-border-dark bg-surface-dark p-8 hover:border-primary/50 transition-colors group">
                                <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined !text-[32px]">fingerprint</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-white text-xl font-bold leading-tight">Verified Humans Only</h3>
                                    <p className="text-text-muted text-base leading-relaxed">Strict biometric security ensures every profile is real. Say goodbye to bots and hello to real people.</p>
                                </div>
                            </div>
                            {/* Feature 2 */}
                            <div className="flex flex-col gap-6 rounded-2xl border border-border-dark bg-surface-dark p-8 hover:border-primary/50 transition-colors group">
                                <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined !text-[32px]">location_on</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-white text-xl font-bold leading-tight">Love in Your Barrio</h3>
                                    <p className="text-text-muted text-base leading-relaxed">Find connections in your specific neighborhood or city. Whether you're in Cuenca or Guayaquil, love is local.</p>
                                </div>
                            </div>
                            {/* Feature 3 */}
                            <div className="flex flex-col gap-6 rounded-2xl border border-border-dark bg-surface-dark p-8 hover:border-primary/50 transition-colors group">
                                <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined !text-[32px]">favorite</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-white text-xl font-bold leading-tight">Matches Your Vibe</h3>
                                    <p className="text-text-muted text-base leading-relaxed">Algorithms tuned to Ecuadorian cultural nuances. We understand what matters to you and your family.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Carousel */}
            <div className="w-full flex justify-center py-16 border-y border-border-dark bg-surface-dark/30">
                <div className="max-w-[1200px] w-full px-4 lg:px-10 flex flex-col gap-10">
                    <div className="flex items-center justify-between">
                        <h2 className="text-white text-2xl lg:text-3xl font-bold">Success Stories</h2>
                        <div className="flex gap-2">
                            <button className="size-10 rounded-full border border-border-dark flex items-center justify-center text-white hover:bg-surface-dark transition-colors">
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <button className="size-10 rounded-full border border-border-dark flex items-center justify-center text-white hover:bg-surface-dark transition-colors">
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex overflow-x-auto pb-4 gap-6 snap-x [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {/* Story 1 */}
                        <div className="snap-start shrink-0 w-[280px] flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-[4/5] rounded-2xl bg-cover bg-center bg-no-repeat overflow-hidden relative shadow-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDU8UqxmVDhHhiHDB8Ll5GmU1JyfDCIWwNIjse_6h1LefhPYN5HDocHBLvGD7Qp0IUiiFskEs85sHgDEds03YR81YGQWjfdmjv02Y-PKgcTmq7jED29qZcr99IlMblssrl80QQ72l8dtxDq02plus5ZKbdZ_WOJWx-iQ1hGmeHaluqtvzQn0sH2wJVakvaZa1oMhpbrpviIjn-v6s1Rk5yYvh8UBIPu3vfrVqTz2r3o-wIe_Fr3es3FGRTFeO-lCPE9zzWtFw00gPA")'}}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="font-bold text-lg">Maria & Jose</p>
                                    <p className="text-sm text-gray-300 flex items-center gap-1"><span className="material-symbols-outlined !text-sm">location_on</span> Guayaquil</p>
                                </div>
                            </div>
                        </div>
                         {/* Story 2 */}
                         <div className="snap-start shrink-0 w-[280px] flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-[4/5] rounded-2xl bg-cover bg-center bg-no-repeat overflow-hidden relative shadow-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqUMk8aLVrc1GAZE4GNDrYvMY_dg1qegt7_Nt9rVHuwGmirTW1Tb2uOGof7LtIxe6zju3Bvf2Gr_aHZSnpD6sbWS8qGoOHieLe94zPvM2YcL45eRTmc8PXvr5vPQYFqxqH1BQU_x9Ks3CT58ae8pPEjauE85nQL4_BcgVpgaujhd1ib1fGXR-IK1bek_xB2R48mtinh_GImdPAgrYfW6uwBImK6dc2__WWvtXI98HB6RC8Zk9AR29MPz4cN3fWppMVBOj5j3q2Zwg")'}}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="font-bold text-lg">Fernanda & Luis</p>
                                    <p className="text-sm text-gray-300 flex items-center gap-1"><span className="material-symbols-outlined !text-sm">location_on</span> Cuenca</p>
                                </div>
                            </div>
                        </div>
                        {/* Story 3 */}
                        <div className="snap-start shrink-0 w-[280px] flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-[4/5] rounded-2xl bg-cover bg-center bg-no-repeat overflow-hidden relative shadow-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoFWiqOgkXqdbgNtP04MVFPwVchfC8ogrc051Ml5ZBxFZtvkMz4k1Dbf5LO_OH_wWRmIPMBtxXstK8JlbZs9qp5XGjWwKH-Izv0dZ4IgiHkXD1_qIXpmFapg-BqlTI4VQdu1iNzImZlQ_vqLHVRbrGv024N2yGTx8hT2Zh6Pr_g_nU5z2NxicqfJuqi0bosIrLLfEDnpntaBWtfwIUHPei3XGHP1nA88lcaCPLZntL4S9NAUCqUmi5PXbiWjiGTn0F4HjWzZuGqoM")'}}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="font-bold text-lg">Carla & Andres</p>
                                    <p className="text-sm text-gray-300 flex items-center gap-1"><span className="material-symbols-outlined !text-sm">location_on</span> Quito</p>
                                </div>
                            </div>
                        </div>
                         {/* Story 4 */}
                         <div className="snap-start shrink-0 w-[280px] flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-[4/5] rounded-2xl bg-cover bg-center bg-no-repeat overflow-hidden relative shadow-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALRjhZtraReNCrloHHnV6ysltSbSg2fdZY-m9r1GSK3_5X-po3cST-2KLS7rZ8js03XuuJkiGoBwa6AqpVf_5pBCqgY_FKxe710_MZQRhUjwBbHWr9U_5fPxk9O8iefm3IXwoAAGTfiPC-9lAYgE-O9W9T9GfYGCdDPygv8bM1STro6KDye-psyg0EJInHLTr1ldl_hRbfTjA0qj6JuLhlYFpe67CZiSCrQ9Vp9RIAHEfPiURnhARHmU-NJ8oTafefGRyGzJYTJ_k")'}}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="font-bold text-lg">Sofia & Mateo</p>
                                    <p className="text-sm text-gray-300 flex items-center gap-1"><span className="material-symbols-outlined !text-sm">location_on</span> Ambato</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="w-full flex justify-center py-20 lg:py-32 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" style={{background: 'radial-gradient(circle at 50% 50%, #ec135b 0%, transparent 50%)'}}></div>
                <div className="max-w-[800px] w-full px-4 flex flex-col items-center text-center relative z-10 gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                            Ready to find love?
                        </h2>
                        <p className="text-text-muted text-lg lg:text-xl font-normal leading-relaxed max-w-[600px] mx-auto">
                            Join thousands of singles in Ecuador finding authentic connections today. Secure, local, and culturally tuned.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <button onClick={() => navigate('/verification')} className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary hover:bg-primary/90 text-white text-lg font-bold shadow-xl shadow-primary/30 transition-transform hover:scale-105">
                            <span className="truncate">Join MoodLove Free</span>
                        </button>
                        <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-surface-dark border border-border-dark hover:bg-surface-dark/80 text-white text-lg font-bold transition-colors">
                            <span className="truncate flex items-center gap-2">
                                <span className="material-symbols-outlined">download</span> Download App
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full border-t border-border-dark bg-background-dark py-12">
                <div className="max-w-[1200px] mx-auto px-4 lg:px-10 flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2 text-white">
                            <div className="size-6 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">favorite</span>
                            </div>
                            <span className="font-bold text-lg">MoodLove</span>
                        </div>
                        <div className="flex gap-6 text-text-muted text-sm font-medium">
                            <Link to="/privacy" className="hover:text-primary transition-colors">Safety Tips</Link>
                            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            <Link to="/privacy" className="hover:text-primary transition-colors">Terms of Service</Link>
                            <a className="hover:text-primary transition-colors" href="#">Support</a>
                        </div>
                        <div className="flex gap-4 text-text-muted">
                            <a className="hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                            <a className="hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                        </div>
                    </div>
                    <div className="text-center md:text-left text-text-muted text-xs border-t border-border-dark pt-8">
                        © 2024 MoodLove Ecuador. All rights reserved. Amor Real.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;