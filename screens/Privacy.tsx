import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white antialiased">
            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                {/* Top Navigation */}
                <div className="w-full bg-white/5 dark:bg-[#181113] border-b border-gray-200 dark:border-[#39282e]">
                    <div className="layout-container flex w-full justify-center px-4 md:px-10 py-3">
                        <header className="flex w-full max-w-[1200px] items-center justify-between">
                            <Link to="/" className="flex items-center gap-4">
                                <div className="text-primary size-8">
                                    <span className="material-symbols-outlined text-[32px]">favorite</span>
                                </div>
                                <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">AmorLocal</h2>
                            </Link>
                            <div className="hidden md:flex items-center gap-8">
                                <nav className="flex items-center gap-6">
                                    <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Home</Link>
                                    <Link to="/matches" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Matches</Link>
                                    <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Messages</a>
                                    <Link to="/privacy" className="text-primary text-sm font-bold">Privacy Center</Link>
                                </nav>
                                <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary cursor-pointer" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMcwvzRwx6UCIA-GnmXS4uZV8BUc9Qo_FIGrsndT4Or7heb0IwAM9ZfWHdsaWP2c2QLGPbCCEAuW4zmnXwGpMArFaFIpW8y5fKSkgQE-6yvPtELvNv4jf95G81l85uTQiOGQkFMspRTGDJ5GXQIBu6lrADA8IpJqJAvWQYzIxlvpNvhCcvLd_62hpXTj8UVB3AnQhFf7Kl0-P6vkqjM2nI0wkQmaJrFYzZSHdPYLnB_tyWtWGBCXg9iH_BpnNXItKo3jjC9KH-VCw")'}}>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
                {/* Main Content */}
                <div className="flex flex-1 justify-center py-8 px-4 md:px-10">
                    <div className="flex flex-col max-w-[960px] flex-1 w-full gap-8">
                        {/* Page Heading */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">verified_user</span>
                                <span className="text-primary text-sm font-bold uppercase tracking-wider">LOPDP Compliant</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">
                                Privacy Center & Data Rights
                            </h1>
                            <p className="text-gray-600 dark:text-[#b99da6] text-lg font-normal leading-relaxed max-w-3xl">
                                Manage your data, exercise your ARCOAEP rights, and review our security protocols. We are committed to transparency and compliance with Ecuador's Ley Orgánica de Protección de Datos Personales.
                            </p>
                        </div>
                        {/* Security Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#543b43]">
                                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                                    <span className="material-symbols-outlined text-primary">lock</span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Encryption</p>
                                <p className="text-gray-900 dark:text-white text-xl font-bold">AES-256</p>
                            </div>
                            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#543b43]">
                                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                                    <span className="material-symbols-outlined text-primary">security</span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Protocol</p>
                                <p className="text-gray-900 dark:text-white text-xl font-bold">TLS 1.2+</p>
                            </div>
                            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#543b43]">
                                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                                    <span className="material-symbols-outlined text-primary">fingerprint</span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Biometric Data</p>
                                <p className="text-green-500 text-xl font-bold flex items-center gap-1">Secured <span className="material-symbols-outlined text-sm">check_circle</span></p>
                            </div>
                            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#543b43]">
                                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                                    <span className="material-symbols-outlined text-primary">dns</span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Data Center</p>
                                <p className="text-gray-900 dark:text-white text-xl font-bold">Quito, EC</p>
                            </div>
                        </div>
                        {/* ARCOAEP Rights Section */}
                        <div className="flex flex-col gap-6 mt-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-gray-900 dark:text-white text-2xl font-bold">Exercise Your ARCOAEP Rights</h2>
                                <span className="text-gray-500 dark:text-gray-400 text-sm hidden sm:block">Response time: ~15 days</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* Access Card */}
                                <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgB3jXsv5pty-NpAQvd9apmcBNFMcyV5CLs_PktCv1aLw9UvX-OX0WM0ZfCLRPKu28GqXPA29ikCDu6pT4YUqnBlF_b2kVz-LgpfhPKL4FXVvpMh0PL1ERn0abL_XQx_ofNPUQ52THoohNaUldGuZSusHphNnNTHFpbXII3wsUScT03PQyvaFHLrhiTZX72jwgcpegJnmqVSDochy2mMHFNtUYrbbqCxtj8YZPeVjJHXZwK9Y2D9zhYggjSSmr5H7D6M5HQC9vG-4")'}}></div>
                                    <div className="relative z-10 flex h-full flex-col justify-end p-6">
                                        <div className="mb-auto self-end rounded-full bg-white/20 p-2 backdrop-blur-md">
                                            <span className="material-symbols-outlined text-white">visibility</span>
                                        </div>
                                        <h3 className="text-white text-xl font-bold">Right of Access</h3>
                                        <p className="text-gray-200 text-sm mt-1 mb-3">View and download a copy of all personal data we hold about you.</p>
                                        <button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2 px-4 rounded-full w-full transition-colors">Request Access</button>
                                    </div>
                                </div>
                                {/* Rectification Card */}
                                <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqkwTvA20jbFnS8JXhAn2sGmJy1O-AyR0QlEUuy80domTmA_LEz21HjjexRU0w_2XCI1tLXDJcY2NHpqam5cCYqMUELGYAD_1mWdmmUuMh2QjATHv9ZMXeVPU4Otgcrfz0iqvZoGEY3b_rd_3prd-IbP4HvDeW7F6tdm861yq-2QHqf2kjvRBA9Siqv3xGqZ7fKAW9KvfW6KLDjGDiVrEFPx6F5NC-ppaU2IQcxL45YnLHoWGP4_MFIgvatK06ZmYpeXOIE3E_hyU")'}}></div>
                                    <div className="relative z-10 flex h-full flex-col justify-end p-6">
                                        <div className="mb-auto self-end rounded-full bg-white/20 p-2 backdrop-blur-md">
                                            <span className="material-symbols-outlined text-white">edit_document</span>
                                        </div>
                                        <h3 className="text-white text-xl font-bold">Rectification</h3>
                                        <p className="text-gray-200 text-sm mt-1 mb-3">Correct inaccurate or incomplete information in your profile.</p>
                                        <button className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white text-sm font-bold py-2 px-4 rounded-full w-full transition-colors">Update Profile</button>
                                    </div>
                                </div>
                                {/* Elimination Card */}
                                <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDN7O4bsqOKvUJg3hOVdjhI5YlJt8AAFkVW8BIz1-7suZvlBtOBlxKzRZ_rxcUWMEIch1osJzGqP0zs6j6MDMUpRuPQvnkbAupcj8FoClRofHwA-ibF-scZgzZUNBbyY41eXZlyS69QcFsK55WLxBlr9PYHJD83nqPXFzNtYLf9YWasflwYsIhLYKv5A34GyRh4lLaowMvARe_pEMqB-xcve8WNFm7wgPWtZdnjKjQJZX1wv4EEU0bWBMh5NMbXjcp61d5TW5WoGnU")'}}></div>
                                    <div className="relative z-10 flex h-full flex-col justify-end p-6">
                                        <div className="mb-auto self-end rounded-full bg-white/20 p-2 backdrop-blur-md">
                                            <span className="material-symbols-outlined text-white">delete_forever</span>
                                        </div>
                                        <h3 className="text-white text-xl font-bold">Elimination</h3>
                                        <p className="text-gray-200 text-sm mt-1 mb-3">Permanently delete your account and remove your data from our servers.</p>
                                        <button className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white text-sm font-bold py-2 px-4 rounded-full w-full transition-colors">Start Process</button>
                                    </div>
                                </div>
                                {/* Opposition Card */}
                                <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfu2cD481IJaOmiOstNHeaEM7m31-PIcb2YCFtbC1BYCjzrZdKPa67uYsDuLIjJwrCvWXmPGobxztmcpdCCQMuGB2BusqFpCs6GgB-jIupOG6IvAGj73Vlgg0zEPJNEHUNK7BUYuCLmZwcfZJC3Q-9LmMVY1wEJcDHjSqzYmQ_2B4Rky5ffRpFyidzRu59EbYttf1Kzgz12DLaAe-OzSpSGv-Le0nyummxvBJbovJiFMuhLFOME4eeEt6x8jLYQ9uL1RAMMHAw0FE")'}}></div>
                                    <div className="relative z-10 flex h-full flex-col justify-end p-6">
                                        <div className="mb-auto self-end rounded-full bg-white/20 p-2 backdrop-blur-md">
                                            <span className="material-symbols-outlined text-white">gavel</span>
                                        </div>
                                        <h3 className="text-white text-xl font-bold">Opposition</h3>
                                        <p className="text-gray-200 text-sm mt-1 mb-3">Oppose specific uses of your data for reasons related to your situation.</p>
                                        <button className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white text-sm font-bold py-2 px-4 rounded-full w-full transition-colors">Manage Preferences</button>
                                    </div>
                                </div>
                                {/* Portability Card */}
                                <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqNMsMaYUcVlhHr5CoGl0sZIlut-8RwbbJQqqAyeOIkmviTCNn88G94_RxKpw38ZHunQT9sir0dtZzgQAALhM79pJmTxxo4VFuWeyldjiEIaNeKi6cYV4OKve_KajLGAfrYBLf-SoByWPBwgiVZmDRJfVMoFIFsOei7IwKZk67QE3YviBklXpOsRiokn4dlE0lCp6XtwAYo9D8iSoUD_QXajC0ByyKJOi95K2BLrdhaqAoiMlKkE7qoKESP4pT7aRVEQfrBUOI82o")'}}></div>
                                    <div className="relative z-10 flex h-full flex-col justify-end p-6">
                                        <div className="mb-auto self-end rounded-full bg-white/20 p-2 backdrop-blur-md">
                                            <span className="material-symbols-outlined text-white">move_to_inbox</span>
                                        </div>
                                        <h3 className="text-white text-xl font-bold">Portability</h3>
                                        <p className="text-gray-200 text-sm mt-1 mb-3">Receive your personal data in a structured, machine-readable format.</p>
                                        <button className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white text-sm font-bold py-2 px-4 rounded-full w-full transition-colors">Export JSON/CSV</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Consent & Preferences Section */}
                        <div className="flex flex-col gap-4 mt-8 bg-white dark:bg-surface-dark rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-[#543b43]">
                            <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-2">Consent Management</h2>
                            <p className="text-gray-600 dark:text-[#b99da6] text-sm mb-4">Control how we process your data. Changes are applied immediately to our local servers.</p>
                            {/* Toggle Item 1 */}
                            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-white/10">
                                <div className="flex flex-col">
                                    <span className="text-gray-900 dark:text-white font-bold text-base">Biometric Matching</span>
                                    <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Use facial data for verification and similarity matching.</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            {/* Toggle Item 2 */}
                            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-white/10">
                                <div className="flex flex-col">
                                    <span className="text-gray-900 dark:text-white font-bold text-base">Location History</span>
                                    <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Store past locations to improve local match suggestions.</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            {/* Toggle Item 3 */}
                            <div className="flex items-center justify-between py-3">
                                <div className="flex flex-col">
                                    <span className="text-gray-900 dark:text-white font-bold text-base">Marketing Communications</span>
                                    <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Receive emails about events and premium features.</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        </div>
                        {/* Recent Requests Table */}
                        <div className="flex flex-col gap-4 mt-8 mb-12">
                            <h2 className="text-gray-900 dark:text-white text-2xl font-bold">Recent Requests</h2>
                            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-[#543b43]">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-surface-dark dark:text-gray-300">
                                        <tr>
                                            <th className="px-6 py-4" scope="col">Request Type</th>
                                            <th className="px-6 py-4" scope="col">Date Submitted</th>
                                            <th className="px-6 py-4" scope="col">Reference ID</th>
                                            <th className="px-6 py-4" scope="col">Status</th>
                                            <th className="px-6 py-4 text-right" scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white dark:bg-[#1f1518]">
                                        <tr className="border-b dark:border-gray-700">
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                                <span className="material-symbols-outlined text-base">visibility</span> Access
                                            </td>
                                            <td className="px-6 py-4">Oct 12, 2023</td>
                                            <td className="px-6 py-4 font-mono text-xs">REQ-2023-8921</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900/30 dark:text-green-300">Completed</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <a className="font-medium text-primary hover:underline" href="#">Download</a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-[#1f1518]">
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                                <span className="material-symbols-outlined text-base">edit_document</span> Rectification
                                            </td>
                                            <td className="px-6 py-4">Nov 03, 2023</td>
                                            <td className="px-6 py-4 font-mono text-xs">REQ-2023-9104</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900/30 dark:text-yellow-300">Processing</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <span className="text-gray-400 cursor-not-allowed">Details</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Footer Info */}
                        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-[#39282e] gap-4 mb-8">
                            <p className="text-gray-500 dark:text-gray-400 text-sm text-center sm:text-left">
                                © 2023 AmorLocal. All rights reserved. <br className="hidden sm:block"/>
                                Compliance with Ley Orgánica de Protección de Datos Personales (Ecuador).
                            </p>
                            <div className="flex flex-col items-center sm:items-end">
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Data Protection Officer</p>
                                <a className="text-primary text-sm font-bold hover:underline" href="mailto:privacy@amorlocal.ec">privacy@amorlocal.ec</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;