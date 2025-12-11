'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './SearchSection.css';

const SearchSection = () => {
    const router = useRouter();
    const [searchData, setSearchData] = useState({
        location: '',
        bhkType: '',
        propertyType: ''
    });

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search Data:', searchData);
        router.push('/properties');
    };

    const handleChange = (e) => {
        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="search-section">
            <div className="container">
                <div className="search-box">
                    <form onSubmit={handleSearch}>
                        <div className="search-grid">
                            <div className="search-field">
                                <label>Location</label>
                                <select
                                    name="location"
                                    value={searchData.location}
                                    onChange={handleChange}
                                    className="form-control"
                                >
                                    <option value="">Choose Area</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="delhi">Delhi</option>
                                    <option value="bangalore">Bangalore</option>
                                    <option value="pune">Pune</option>
                                    <option value="hyderabad">Hyderabad</option>
                                </select>
                            </div>

                            <div className="search-field">
                                <label>BHK Type</label>
                                <select
                                    name="bhkType"
                                    value={searchData.bhkType}
                                    onChange={handleChange}
                                    className="form-control"
                                >
                                    <option value="">Select BHK</option>
                                    <option value="1bhk">1 BHK</option>
                                    <option value="2bhk">2 BHK</option>
                                    <option value="3bhk">3 BHK</option>
                                    <option value="4bhk">4 BHK</option>
                                    <option value="5bhk">5+ BHK</option>
                                </select>
                            </div>

                            <div className="search-field">
                                <label>Property Status</label>
                                <select
                                    name="propertyType"
                                    value={searchData.propertyType}
                                    onChange={handleChange}
                                    className="form-control"
                                >
                                    <option value="">Select Status</option>
                                    <option value="rent">For Rent</option>
                                    <option value="sale">For Sale</option>
                                    <option value="pg">PG/Hostel</option>
                                </select>
                            </div>

                            <div className="search-button">
                                <button type="submit" className="btn btn-primary">
                                    <i className="fas fa-search"></i> Search Now
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SearchSection;
