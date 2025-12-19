import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Verification: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#181113] dark:text-white font-display min-h-screen flex flex-col">
            {/* TopNavBar */}
            <header className="relative flex w-full flex-col overflow-x-hidden border-b border-[#39282e]/20 dark:border-[#39282e]">
                <div className="px-6 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="flex flex-col max-w-[960px] flex-1">
                        <div className="flex items-center justify-between whitespace-nowrap px-4 lg:px-10 py-3">
                            <Link to="/" className="flex items-center gap-4 text-[#181113] dark:text-white">
                                <div className="size-8 text-primary">
                                    <span className="material-symbols-outlined text-4xl">favorite</span>
                                </div>
                                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">EcuCitas</h2>
                            </Link>
                            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#e6e0e2] dark:bg-[#39282e] text-[#181113] dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4">
                                <span className="material-symbols-outlined" style={{fontSize: "20px"}}>lock_open</span>
                                <span>Secure Verification</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-grow flex flex-col items-center justify-start py-8 px-4 lg:px-40">
                <div className="w-full max-w-[960px] flex flex-col gap-8">
                    {/* Progress Bar */}
                    <div className="flex flex-col gap-3 px-4 lg:px-14">
                        <div className="flex gap-6 justify-between items-center">
                            <p className="text-[#181113] dark:text-white text-base font-medium leading-normal">Verification Step 3 of 4</p>
                            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">Passive Liveness</span>
                        </div>
                        <div className="rounded-full bg-[#e6e0e2] dark:bg-[#543b43] h-2 overflow-hidden">
                            <div className="h-full rounded-full bg-primary" style={{width: "75%"}}></div>
                        </div>
                        <p className="text-[#6b585e] dark:text-[#b99da6] text-sm font-normal leading-normal">Almost there! Just one selfie to go.</p>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-10">
                        {/* Left Column: Instructions & Context */}
                        <div className="flex-1 flex flex-col gap-6 justify-center">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-[#181113] dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                                    Let's verify it's really you
                                </h1>
                                <p className="text-[#6b585e] dark:text-[#b99da6] text-lg font-normal leading-relaxed">
                                    Hola! We use passive liveness detection to keep our community safe. No silly gestures required—just look at the camera.
                                </p>
                            </div>
                            {/* Trust Badge */}
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#e6e0e2]/50 dark:bg-[#2e1a20] border border-[#d4c5c9] dark:border-[#543b43]">
                                <div className="text-primary mt-1">
                                    <span className="material-symbols-outlined">shield_lock</span>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-[#181113] dark:text-white">Encrypted & Private</h3>
                                    <p className="text-sm text-[#6b585e] dark:text-[#b99da6]">Your biometric data is encrypted instantly and deleted immediately after verification.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Camera/Selfie Interface */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="@container w-full max-w-[480px]">
                                <div className="flex flex-col gap-6 bg-white dark:bg-[#271c1f] rounded-2xl p-2 shadow-xl border border-[#e6e0e2] dark:border-[#39282e]">
                                    {/* Camera Viewport */}
                                    <div className="relative w-full aspect-[3/4] sm:aspect-square lg:aspect-[3/4] bg-black rounded-xl overflow-hidden group">
                                        {/* Placeholder Image representing Camera Feed */}
                                        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRi1q3doW03qUISgRRIN83CiizuTJZX7puOTLY5xgtz6V2JelZhNAtF55b0T4aJeuAsnEWJs9PXrYZelS8a_xH57Iw6EIJ77Tfcn5EC3h3QBLShKO370PUVSPNfZSGKl98Feq7PWn0e-FTCETw3oz099J6kfLNNqZhTSxBXFTnpW8uvT9aQal4g2QoTwS-8eHlzAqJoiYr-3qYdboGgIIajmCESByTgpTpULORQB_PbxZ7Ch6qJatWHNoMcVWVoFMLIh9-nkdXQIE")'}}></div>
                                        {/* Overlay UI */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-between p-6">
                                            {/* Top indicator */}
                                            <div className="bg-black/40 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold border border-white/10 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                                Live Camera
                                            </div>
                                            {/* Face Guide Frame */}
                                            <div className="w-48 h-64 border-2 border-dashed border-white/50 rounded-[40%] mt-8 opacity-70"></div>
                                            {/* Bottom Action */}
                                            <div className="w-full flex flex-col gap-3 items-center mt-auto pt-6">
                                                <button onClick={() => navigate('/onboarding')} className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-base tracking-wide shadow-lg shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-2">
                                                    <span className="material-symbols-outlined">photo_camera</span>
                                                    Capture Selfie
                                                </button>
                                                <p className="text-white/70 text-xs text-center">Ensure your face is centered and well-lit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Feature/Tips Section */}
                    <div className="px-4 lg:px-10 py-6">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-[#181113] dark:text-white text-xl font-bold">Tips for instant verification</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {/* Tip 1 */}
                                <div className="flex items-center gap-4 rounded-xl border border-[#e6e0e2] dark:border-[#543b43] bg-white dark:bg-[#271c1f] p-4 shadow-sm">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <span className="material-symbols-outlined">light_mode</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[#181113] dark:text-white text-sm font-bold">Good Lighting</h3>
                                        <p className="text-[#6b585e] dark:text-[#b99da6] text-xs">Avoid shadows on your face.</p>
                                    </div>
                                </div>
                                {/* Tip 2 */}
                                <div className="flex items-center gap-4 rounded-xl border border-[#e6e0e2] dark:border-[#543b43] bg-white dark:bg-[#271c1f] p-4 shadow-sm">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <span className="material-symbols-outlined">face_3</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[#181113] dark:text-white text-sm font-bold">No Glasses</h3>
                                        <p className="text-[#6b585e] dark:text-[#b99da6] text-xs">Eyes must be clearly visible.</p>
                                    </div>
                                </div>
                                {/* Tip 3 */}
                                <div className="flex items-center gap-4 rounded-xl border border-[#e6e0e2] dark:border-[#543b43] bg-white dark:bg-[#271c1f] p-4 shadow-sm">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                        <span className="material-symbols-outlined">sentiment_neutral</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[#181113] dark:text-white text-sm font-bold">Neutral Face</h3>
                                        <p className="text-[#6b585e] dark:text-[#b99da6] text-xs">Look directly at the camera.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Verification;