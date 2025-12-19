import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    title?: string;
    showLogin?: boolean;
    profilePic?: string | null;
}

const Header: React.FC<HeaderProps> = ({ title = "MoodLove", showLogin = false, profilePic = null }) => {
    return (
        <header className="w-full border-b border-border-dark bg-[#181113] sticky top-0 z-50 px-4 lg:px-10 py-3">
            <div className="flex items-center justify-between whitespace-nowrap">
                <Link to="/" className="flex items-center gap-3 text-white hover:text-primary transition-colors">
                    <div className="size-8 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined !text-[32px]">favorite</span>
                    </div>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-tight">{title}</h2>
                </Link>
                
                <div className="flex items-center gap-4">
                    {!profilePic && !showLogin && (
                        <div className="flex gap-3">
                            <Link to="/matches" className="text-white text-sm font-medium hover:text-primary">Matches</Link>
                            <Link to="/privacy" className="text-white text-sm font-medium hover:text-primary">Privacy</Link>
                        </div>
                    )}

                    {showLogin && (
                        <div className="flex gap-3">
                            <Link to="/verification">
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-transparent border border-border-dark hover:bg-surface-dark text-white text-sm font-bold transition-colors">
                                    <span className="truncate">Log In</span>
                                </button>
                            </Link>
                            <Link to="/verification">
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all transform hover:scale-105">
                                    <span className="truncate">Join Now</span>
                                </button>
                            </Link>
                        </div>
                    )}

                    {profilePic && (
                        <div className="flex items-center gap-4">
                                <button className="hidden md:flex items-center justify-center rounded-full size-10 bg-[#39282e] hover:bg-[#543b43] text-white transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <Link to="/profile" className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#543b43]" style={{backgroundImage: `url("${profilePic}")`}}></Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;