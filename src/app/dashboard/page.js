'use client';

import { useState } from 'react';
import Link from 'next/link';
import PropertyCard from '../../components/common/PropertyCard';
import './Dashboard.css';

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
        <div className="dashboard-page">
            <div className="dashboard-container">
                <aside className="dashboard-sidebar">
                    <div className="sidebar-header">
                        <div className="user-avatar">
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <h3>Welcome Back!</h3>
                        <p>buyer@example.com</p>
                    </div>

                    <nav className="sidebar-nav">
                        <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
                            <i className="fas fa-th-large"></i> Overview
                        </button>
                        <button className={activeTab === 'searches' ? 'active' : ''} onClick={() => setActiveTab('searches')}>
                            <i className="fas fa-search"></i> My Searches
                        </button>
                        <button className={activeTab === 'shortlisted' ? 'active' : ''} onClick={() => setActiveTab('shortlisted')}>
                            <i className="fas fa-heart"></i> Shortlisted
                        </button>
                        <button className={activeTab === 'properties' ? 'active' : ''} onClick={() => setActiveTab('properties')}>
                            <i className="fas fa-home"></i> My Properties
                        </button>
                        <Link href="/post-property">
                            <i className="fas fa-plus-circle"></i> Post Property
                        </Link>
                        <Link href="/profile">
                            <i className="fas fa-user"></i> Profile Settings
                        </Link>
                    </nav>
                </aside>

                <main className="dashboard-content">
                    <div className="dashboard-header">
                        <h1>Dashboard</h1>
                        <Link href="/post-property" className="btn btn-primary">
                            <i className="fas fa-plus"></i> Post Property
                        </Link>
                    </div>

                    {activeTab === 'overview' && (
                        <>
                            <div className="stats-grid">
                                {stats.map((stat, index) => (
                                    <div key={index} className="stat-card" style={{ borderLeftColor: stat.color }}>
                                        <div className="stat-icon" style={{ backgroundColor: stat.color + '20', color: stat.color }}>
                                            <i className={stat.icon}></i>
                                        </div>
                                        <div className="stat-content">
                                            <h3>{stat.value}</h3>
                                            <p>{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="dashboard-section">
                                <h2>Recent Searches</h2>
                                <div className="search-list">
                                    <div className="search-item">
                                        <i className="fas fa-search"></i>
                                        <div>
                                            <h4>3 BHK in Bangalore</h4>
                                            <p>2 days ago</p>
                                        </div>
                                        <Link href="/properties" className="btn-sm">View Results</Link>
                                    </div>
                                    <div className="search-item">
                                        <i className="fas fa-search"></i>
                                        <div>
                                            <h4>2 BHK for Rent in Mumbai</h4>
                                            <p>5 days ago</p>
                                        </div>
                                        <Link href="/properties" className="btn-sm">View Results</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="dashboard-section">
                                <h2>Quick Actions</h2>
                                <div className="quick-actions">
                                    <Link href="/post-property" className="action-card">
                                        <i className="fas fa-plus-circle"></i>
                                        <h4>Post Property</h4>
                                        <p>List your property</p>
                                    </Link>
                                    <Link href="/calculator/emi" className="action-card">
                                        <i className="fas fa-calculator"></i>
                                        <h4>EMI Calculator</h4>
                                        <p>Calculate your EMI</p>
                                    </Link>
                                    <Link href="/legal-services" className="action-card">
                                        <i className="fas fa-gavel"></i>
                                        <h4>Legal Services</h4>
                                        <p>Get legal help</p>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'shortlisted' && (
                        <div className="dashboard-section">
                            <h2>Shortlisted Properties</h2>
                            <div className="properties-grid">
                                {shortlistedProperties.map(property => (
                                    <PropertyCard key={property.id} property={property} />
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'searches' && (
                        <div className="dashboard-section">
                            <h2>My Searches</h2>
                            <div className="search-list">
                                <div className="search-item">
                                    <i className="fas fa-search"></i>
                                    <div>
                                        <h4>3 BHK in Bangalore</h4>
                                        <p>Budget: ₹30-50 Lakhs • 2 days ago</p>
                                    </div>
                                    <Link href="/properties" className="btn-sm">View Results</Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'properties' && (
                        <div className="dashboard-section">
                            <h2>My Properties</h2>
                            <p>You haven't posted any properties yet.</p>
                            <Link href="/post-property" className="btn btn-primary">Post Your First Property</Link>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
