import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Onboarding: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#181113] dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
            {/* Top Navbar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#39282e] px-10 py-4 bg-[#181113]">
                <div className="flex items-center gap-4 text-white">
                    <div className="size-8 text-primary">
                        <span className="material-symbols-outlined text-3xl">favorite</span>
                    </div>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">EcuCitas</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <div className="hidden md:flex items-center gap-9">
                        <a className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Ayuda</a>
                        <Link to="/" className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors">Salir</Link>
                    </div>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#543b43]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAecnBRTsZhpAL8cHAtgCM6Hq1pjE7ib4jOtmO0uNKHGWhSLGWH6z51kmv0oTTkGM1eM6WO-ABLrlSeGxytjByyCTk5yojOnZuSvQWhALckTMYXF0iTtvL83k5BopS9KeGX5N_-8_c60DftYqiGypko7ivT0rV-0IwDLqgWdzXyLPiQ58deWzFAIDmVBbnn1JnP0exO_RvFwrE6wxpYpgYNOK6Ds2fh85AbQk1ugeCfgGk5Z_i_sjUhVByfM-mptHvuvFycoP2Cng4")'}}></div>
                </div>
            </header>
            <div className="flex-1 flex justify-center py-10 px-4 sm:px-10">
                <div className="w-full max-w-[960px] flex flex-col gap-10">
                    {/* Progress Bar */}
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-6 justify-between items-center">
                            <p className="text-white text-lg font-medium leading-normal">Progreso del perfil</p>
                            <span className="text-[#b99da6] text-sm font-normal leading-normal">Paso 2 de 5</span>
                        </div>
                        <div className="rounded-full bg-[#543b43] h-3 w-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{width: "40%"}}></div>
                        </div>
                    </div>
                    {/* Page Heading & Intro */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Raíces & Gustos</h1>
                        <p className="text-[#b99da6] text-lg font-normal leading-relaxed max-w-2xl">
                            Cuéntanos de dónde vienes y qué te mueve. En Ecuador, la comida y la cultura dicen más que mil palabras. Esto nos ayuda a encontrar tu pareja ideal.
                        </p>
                    </div>
                    
                    {/* Main Form Area */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Left Column: Form Inputs */}
                        <div className="lg:col-span-12 flex flex-col gap-8 bg-[#2a171d] p-8 rounded-xl border border-[#543b43]/50 shadow-xl">
                            {/* Province Selection */}
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-base font-medium leading-normal flex items-center gap-2" htmlFor="province">
                                    <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                                    Provincia de Origen *
                                </label>
                                <div className="relative">
                                    <select className="form-select-arrow w-full rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-[#543b43] bg-[#181113] h-14 px-4 text-base font-normal transition-colors hover:border-primary/50" id="province" defaultValue="">
                                        <option disabled value="">Selecciona tu provincia...</option>
                                        <option value="azuay">Azuay</option>
                                        <option value="bolivar">Bolívar</option>
                                        <option value="canar">Cañar</option>
                                        <option value="carchi">Carchi</option>
                                        <option value="chimborazo">Chimborazo</option>
                                        <option value="cotopaxi">Cotopaxi</option>
                                        <option value="el_oro">El Oro</option>
                                        <option value="esmeraldas">Esmeraldas</option>
                                        <option value="galapagos">Galápagos</option>
                                        <option value="guayas">Guayas</option>
                                        <option value="imbabura">Imbabura</option>
                                        <option value="loja">Loja</option>
                                        <option value="los_rios">Los Ríos</option>
                                        <option value="manabi">Manabí</option>
                                        <option value="morona_santiago">Morona Santiago</option>
                                        <option value="napo">Napo</option>
                                        <option value="orellana">Orellana</option>
                                        <option value="pastaza">Pastaza</option>
                                        <option value="pichincha">Pichincha</option>
                                        <option value="santa_elena">Santa Elena</option>
                                        <option value="santo_domingo">Santo Domingo de los Tsáchilas</option>
                                        <option value="sucumbios">Sucumbíos</option>
                                        <option value="tungurahua">Tungurahua</option>
                                        <option value="zamora_chinchipe">Zamora Chinchipe</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="h-px bg-[#543b43] w-full my-4"></div>

                            {/* Gamified Questions Section */}
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
                                    <h2 className="text-white tracking-tight text-2xl md:text-3xl font-bold leading-tight">El Debate Nacional</h2>
                                </div>
                                {/* Question 1 */}
                                <div className="flex flex-col gap-5 p-6 rounded-2xl bg-[#181113] border border-[#39282e]">
                                    <h3 className="text-white text-xl font-bold text-center">Encebollado: ¿Con chifle o con pan?</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Option A */}
                                        <label className="cursor-pointer group relative">
                                            <input className="peer sr-only" name="encebollado_preference" type="radio" value="chifle"/>
                                            <div className="flex flex-col items-center gap-4 p-4 rounded-xl border-2 border-transparent bg-[#2a171d] transition-all hover:bg-[#3d222b] peer-checked:border-primary peer-checked:bg-[#3d222b] peer-checked:shadow-[0_0_20px_rgba(236,19,91,0.3)]">
                                                <div className="w-full h-40 rounded-lg overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                                    <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4AIIn0e9R0YPcWYJI5C_e4YMQCsy8neCj88TZOA9v0KaqOvaQNTQzjX2Jw2WjwMrP6BmIFkhmZT8218EpaevgW5pICDtJrj_1NPfBENY_D5irXznhWFY-PrdOZj8XH63YFosX-4tVEf0t7YJ8wov1RLKrZf-ujxHQFhNAEh59fyuK1S2rllBlp07RitTXL0LO2unI3JjR7g1HkQPkxBDTlKMymDIbXKPVEXQLgUIh7S13cNLkODLAnpSEq2hFQ0clvrhw5HVSIMI" alt="Chifle" />
                                                </div>
                                                <span className="text-white font-bold text-lg group-hover:text-primary transition-colors">Team Chifle</span>
                                            </div>
                                            <div className="absolute top-4 right-4 z-20 opacity-0 peer-checked:opacity-100 transition-opacity bg-primary rounded-full p-1 text-white">
                                                <span className="material-symbols-outlined text-sm">check</span>
                                            </div>
                                        </label>
                                        {/* Option B */}
                                        <label className="cursor-pointer group relative">
                                            <input className="peer sr-only" name="encebollado_preference" type="radio" value="pan"/>
                                            <div className="flex flex-col items-center gap-4 p-4 rounded-xl border-2 border-transparent bg-[#2a171d] transition-all hover:bg-[#3d222b] peer-checked:border-primary peer-checked:bg-[#3d222b] peer-checked:shadow-[0_0_20px_rgba(236,19,91,0.3)]">
                                                <div className="w-full h-40 rounded-lg overflow-hidden relative">
                                                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                                    <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmanJGE-ZlHRSeUXhrNzUDtklkWkIJMZRFY4JDeXi80-HdAk-ZGqur2uXVNmTOlUOmD_pVgdp9V3ZHpoqG0w_fTY1_nqnXL3P_KKw2ro7a1SpnC9cfrDxLs0yuoK0fcBbD8vJ_263gVegetVsEWmNU8WesvfgLHLtESY-Ao5O44vAMgcIP6zNygVy3lxkbKiR1edsNNzmnG-HdODr3Tx6vLDVDYMoXlE0BDERv8HBGHpQIP2NYPsfbtB72nVSoX18lEhSZGQbhG54" alt="Pan" />
                                                </div>
                                                <span className="text-white font-bold text-lg group-hover:text-primary transition-colors">Team Pan</span>
                                            </div>
                                            <div className="absolute top-4 right-4 z-20 opacity-0 peer-checked:opacity-100 transition-opacity bg-primary rounded-full p-1 text-white">
                                                <span className="material-symbols-outlined text-sm">check</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                {/* Question 2 */}
                                <div className="flex flex-col gap-5 p-6 rounded-2xl bg-[#181113] border border-[#39282e]">
                                    <h3 className="text-white text-xl font-bold text-center">¿Tu desayuno ideal?</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Option A */}
                                        <label className="cursor-pointer group relative">
                                            <input className="peer sr-only" name="breakfast_preference" type="radio" value="bolon"/>
                                            <div className="flex flex-col items-center gap-4 p-4 rounded-xl border-2 border-transparent bg-[#2a171d] transition-all hover:bg-[#3d222b] peer-checked:border-primary peer-checked:bg-[#3d222b] peer-checked:shadow-[0_0_20px_rgba(236,19,91,0.3)]">
                                                <div className="w-full h-40 rounded-lg overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                                    <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7TbTL99Ig3uDFtkaR_7saDL1Wb4rfaeJOb6cu76tRh8T1g4rWaFnRKh1wmwiKjp4Ye9cxROHcO04XzlkC-FQfaUWtItyb14VX_OoJtDRYxOLTZXpMA0bYSt1DdJUzKopZV3Y4OEiv4EBQf-HF-_xUq1M4mDCC_aOAFtEUCRR7C0CBrtBS9Ov5M8EaeDU7FJuf5OzKAVtQu5GZ0U9CuwzQAFkAFPUZznOlj-mm3aJpJtI8JtBHyH3nOxXh6p8AxDoJOdLvIcx7Dqg" alt="Bolon" />
                                                </div>
                                                <span className="text-white font-bold text-lg group-hover:text-primary transition-colors">Bolón de Verde</span>
                                            </div>
                                            <div className="absolute top-4 right-4 z-20 opacity-0 peer-checked:opacity-100 transition-opacity bg-primary rounded-full p-1 text-white">
                                                <span className="material-symbols-outlined text-sm">check</span>
                                            </div>
                                        </label>
                                        {/* Option B */}
                                        <label className="cursor-pointer group relative">
                                            <input className="peer sr-only" name="breakfast_preference" type="radio" value="humita"/>
                                            <div className="flex flex-col items-center gap-4 p-4 rounded-xl border-2 border-transparent bg-[#2a171d] transition-all hover:bg-[#3d222b] peer-checked:border-primary peer-checked:bg-[#3d222b] peer-checked:shadow-[0_0_20px_rgba(236,19,91,0.3)]">
                                                <div className="w-full h-40 rounded-lg overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                                    <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeExfFH-fTjqNa23h9qPYnu6UVJfoBJgWJq6VJ9Y4YO6Y_5JZ2jr7lUXDD2Aq_Nihey0C-6f-LADFWTAE2OMjiGILQTGoeQ2fradowI9idYW0gbU_I715dnzQXHQurewNjvjINTaxiqjH_heABMi3ENcOfvS1ColoenRCee1SOu8DIkMrR__IVuu-wC8zevF-4iu6pPOOOpYTDDu8NTIB-k3IlyJ5KEHU3xokjJa6i5V9FSVrk7go5FpWsbDvW7Aj6_bvgpav0gk" alt="Humita" />
                                                </div>
                                                <span className="text-white font-bold text-lg group-hover:text-primary transition-colors">Humita</span>
                                            </div>
                                            <div className="absolute top-4 right-4 z-20 opacity-0 peer-checked:opacity-100 transition-opacity bg-primary rounded-full p-1 text-white">
                                                <span className="material-symbols-outlined text-sm">check</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Action */}
                            <div className="lg:col-span-12 flex justify-end pt-6">
                                <button onClick={() => navigate('/matches')} className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-12 rounded-full shadow-lg shadow-primary/20 transform hover:scale-105 transition-all duration-300">
                                    Siguiente paso
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Footer Decorative */}
                    <div className="flex justify-center mt-10">
                        <div className="flex gap-4 opacity-30">
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse delay-75"></div>
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse delay-150"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;