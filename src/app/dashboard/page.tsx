'use client';

import { useState } from 'react';
import Link from 'next/link';
import PropertyCard from '../../components/common/PropertyCard';


const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const stats = [
        { icon: 'fas fa-search', label: 'Recent Searches', value: '24', color: '#3498db' },
        { icon: 'fas fa-heart', label: 'Shortlisted', value: '8', color: '#e74c3c' },
        { icon: 'fas fa-eye', label: 'Recently Viewed', value: '15', color: '#f39c12' },
        { icon: 'fas fa-home', label: 'My Properties', value: '3', color: '#27ae60' }
    ];

    const shortlistedProperties = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400',
            title: '3BHK Luxury Apartment',
            price: 3490000,
            location: 'Bangalore',
            status: 'For Rent',
            bedrooms: 3,
            bathrooms: 2,
            area: 3450,
            agent: { name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/1.jpg' }
        }
    ];

    return (
        <div className="min-h-screen bg-section-1 py-[40px]">
            <div className="max-w-[1400px] mx-auto px-[20px] grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-[30px]">
                <aside className="bg-white rounded-[8px] py-[30px] h-fit sticky top-[100px] lg:static">
                    <div className="text-center px-[20px] pb-[25px] border-b border-border-1">
                        <div className="text-[64px] text-secondary mb-[15px]">
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <h3 className="text-[18px] mb-[5px]">Welcome Back!</h3>
                        <p className="text-[13px] text-paragraph">buyer@example.com</p>
                    </div>

                    <nav className="py-[25px] flex flex-col">
                        <button className={`p-[15px_25px] w-full bg-none border-none text-left text-[15px] text-paragraph cursor-pointer transition-all duration-300 border-l-[3px] border-transparent flex items-center gap-[12px] hover:bg-section-1 hover:text-secondary hover:border-secondary ${activeTab === 'overview' ? 'bg-[#ff6b6b1a] text-secondary border-secondary font-semibold' : ''}`} onClick={() => setActiveTab('overview')}>
                            <i className="fas fa-th-large"></i> Overview
                        </button>
                        <button className={`p-[15px_25px] w-full bg-none border-none text-left text-[15px] text-paragraph cursor-pointer transition-all duration-300 border-l-[3px] border-transparent flex items-center gap-[12px] hover:bg-section-1 hover:text-secondary hover:border-secondary ${activeTab === 'searches' ? 'bg-[#ff6b6b1a] text-secondary border-secondary font-semibold' : ''}`} onClick={() => setActiveTab('searches')}>
                            <i className="fas fa-search"></i> My Searches
                        </button>
                        <button className={`p-[15px_25px] w-full bg-none border-none text-left text-[15px] text-paragraph cursor-pointer transition-all duration-300 border-l-[3px] border-transparent flex items-center gap-[12px] hover:bg-section-1 hover:text-secondary hover:border-secondary ${activeTab === 'shortlisted' ? 'bg-[#ff6b6b1a] text-secondary border-secondary font-semibold' : ''}`} onClick={() => setActiveTab('shortlisted')}>
                            <i className="fas fa-heart"></i> Shortlisted
                        </button>
                        <button className={`p-[15px_25px] w-full bg-none border-none text-left text-[15px] text-paragraph cursor-pointer transition-all duration-300 border-l-[3px] border-transparent flex items-center gap-[12px] hover:bg-section-1 hover:text-secondary hover:border-secondary ${activeTab === 'properties' ? 'bg-[#ff6b6b1a] text-secondary border-secondary font-semibold' : ''}`} onClick={() => setActiveTab('properties')}>
                            <i className="fas fa-home"></i> My Properties
                        </button>
                        <Link href="/post-property" className="p-[15px_25px] w-full bg-none border-none text-left text-[15px] text-paragraph cursor-pointer transition-all duration-300 border-l-[3px] border-transparent flex items-center gap-[12px] hover:bg-section-1 hover:text-secondary hover:border-secondary">
                            <i className="fas fa-plus-circle"></i> Post Property
                        </Link>
                        <Link href="/profile" className="p-[15px_25px] w-full bg-none border-none text-left text-[15px] text-paragraph cursor-pointer transition-all duration-300 border-l-[3px] border-transparent flex items-center gap-[12px] hover:bg-section-1 hover:text-secondary hover:border-secondary">
                            <i className="fas fa-user"></i> Profile Settings
                        </Link>
                    </nav>
                </aside>

                <main className="bg-white rounded-[8px] p-[40px] md:p-[25px_20px]">
                    <div className="flex justify-between items-center mb-[40px]">
                        <h1 className="text-[32px] text-heading font-bold">Dashboard</h1>
                        <Link href="/post-property" className="btn btn-primary">
                            <i className="fas fa-plus"></i> Post Property
                        </Link>
                    </div>

                    {activeTab === 'overview' && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px] mb-[40px]">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white border border-border-1 border-l-[4px] rounded-[8px] p-[25px] flex gap-[20px] items-center" style={{ borderLeftColor: stat.color }}>
                                        <div className="w-[60px] h-[60px] rounded-[12px] flex items-center justify-center text-[28px]" style={{ backgroundColor: stat.color + '20', color: stat.color }}>
                                            <i className={stat.icon}></i>
                                        </div>
                                        <div className="stat-content">
                                            <h3 className="text-[32px] mb-[5px] font-bold">{stat.value}</h3>
                                            <p className="text-[14px] text-paragraph">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-[40px]">
                                <h2 className="text-[24px] mb-[25px] font-bold text-heading">Recent Searches</h2>
                                <div className="flex flex-col gap-[15px]">
                                    <div className="bg-section-1 p-[20px] rounded-[8px] flex items-center gap-[15px]">
                                        <i className="fas fa-search text-[24px] text-secondary"></i>
                                        <div className="flex-1">
                                            <h4 className="text-[16px] mb-[5px] font-semibold text-heading">3 BHK in Bangalore</h4>
                                            <p className="text-[13px] text-paragraph">2 days ago</p>
                                        </div>
                                        <Link href="/properties" className="py-[8px] px-[20px] bg-secondary text-white rounded-[4px] text-[14px] transition-all duration-300 hover:bg-primary">View Results</Link>
                                    </div>
                                    <div className="bg-section-1 p-[20px] rounded-[8px] flex items-center gap-[15px]">
                                        <i className="fas fa-search text-[24px] text-secondary"></i>
                                        <div className="flex-1">
                                            <h4 className="text-[16px] mb-[5px] font-semibold text-heading">2 BHK for Rent in Mumbai</h4>
                                            <p className="text-[13px] text-paragraph">5 days ago</p>
                                        </div>
                                        <Link href="/properties" className="py-[8px] px-[20px] bg-secondary text-white rounded-[4px] text-[14px] transition-all duration-300 hover:bg-primary">View Results</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-[40px]">
                                <h2 className="text-[24px] mb-[25px] font-bold text-heading">Quick Actions</h2>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                                    <Link href="/post-property" className="bg-section-1 p-[30px] rounded-[8px] text-center transition-all duration-300 border-2 border-transparent hover:border-secondary hover:-translate-y-[5px] block">
                                        <i className="fas fa-plus-circle text-[48px] text-secondary mb-[15px] inline-block"></i>
                                        <h4 className="text-[18px] mb-[8px] font-semibold text-heading">Post Property</h4>
                                        <p className="text-[14px] text-paragraph">List your property</p>
                                    </Link>
                                    <Link href="/calculator/emi" className="bg-section-1 p-[30px] rounded-[8px] text-center transition-all duration-300 border-2 border-transparent hover:border-secondary hover:-translate-y-[5px] block">
                                        <i className="fas fa-calculator text-[48px] text-secondary mb-[15px] inline-block"></i>
                                        <h4 className="text-[18px] mb-[8px] font-semibold text-heading">EMI Calculator</h4>
                                        <p className="text-[14px] text-paragraph">Calculate your EMI</p>
                                    </Link>
                                    <Link href="/legal-services" className="bg-section-1 p-[30px] rounded-[8px] text-center transition-all duration-300 border-2 border-transparent hover:border-secondary hover:-translate-y-[5px] block">
                                        <i className="fas fa-gavel text-[48px] text-secondary mb-[15px] inline-block"></i>
                                        <h4 className="text-[18px] mb-[8px] font-semibold text-heading">Legal Services</h4>
                                        <p className="text-[14px] text-paragraph">Get legal help</p>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'shortlisted' && (
                        <div className="mb-[40px]">
                            <h2 className="text-[24px] mb-[25px] font-bold text-heading">Shortlisted Properties</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
                                {shortlistedProperties.map(property => (
                                    <PropertyCard key={property.id} property={property} />
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'searches' && (
                        <div className="mb-[40px]">
                            <h2 className="text-[24px] mb-[25px] font-bold text-heading">My Searches</h2>
                            <div className="flex flex-col gap-[15px]">
                                <div className="bg-section-1 p-[20px] rounded-[8px] flex items-center gap-[15px]">
                                    <i className="fas fa-search text-[24px] text-secondary"></i>
                                    <div className="flex-1">
                                        <h4 className="text-[16px] mb-[5px] font-semibold text-heading">3 BHK in Bangalore</h4>
                                        <p className="text-[13px] text-paragraph">Budget: ₹30-50 Lakhs • 2 days ago</p>
                                    </div>
                                    <Link href="/properties" className="py-[8px] px-[20px] bg-secondary text-white rounded-[4px] text-[14px] transition-all duration-300 hover:bg-primary">View Results</Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'properties' && (
                        <div className="mb-[40px]">
                            <h2 className="text-[24px] mb-[25px] font-bold text-heading">My Properties</h2>
                            <p className="text-paragraph mb-[20px]">You haven't posted any properties yet.</p>
                            <Link href="/post-property" className="btn btn-primary">Post Your First Property</Link>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
