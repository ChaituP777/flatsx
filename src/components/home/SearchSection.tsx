'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


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
        <section className="-mt-[40px] sm:-mt-[80px] relative z-[100] pb-[80px]">
            <div className="container mx-auto px-[15px] max-w-[1200px] xl:max-w-[1320px]">
                <div className="bg-white rounded-[8px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-[30px_20px] sm:p-[40px]">
                    <form onSubmit={handleSearch}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-[20px] items-end">
                            <div className="block">
                                <label className="block font-semibold text-heading mb-[10px] text-[14px]">Location</label>
                                <select
                                    name="location"
                                    value={searchData.location}
                                    onChange={handleChange}
                                    className="w-full p-[15px_20px] appearance-none border-2 border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 bg-white focus:outline-none focus:border-secondary"
                                    style={{
                                        backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "right 20px center",
                                        backgroundSize: "16px"
                                    }}
                                >
                                    <option value="">Choose Area</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="delhi">Delhi</option>
                                    <option value="bangalore">Bangalore</option>
                                    <option value="pune">Pune</option>
                                    <option value="hyderabad">Hyderabad</option>
                                </select>
                            </div>

                            <div className="block">
                                <label className="block font-semibold text-heading mb-[10px] text-[14px]">BHK Type</label>
                                <select
                                    name="bhkType"
                                    value={searchData.bhkType}
                                    onChange={handleChange}
                                    className="w-full p-[15px_20px] appearance-none border-2 border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 bg-white focus:outline-none focus:border-secondary"
                                    style={{
                                        backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "right 20px center",
                                        backgroundSize: "16px"
                                    }}
                                >
                                    <option value="">Select BHK</option>
                                    <option value="1bhk">1 BHK</option>
                                    <option value="2bhk">2 BHK</option>
                                    <option value="3bhk">3 BHK</option>
                                    <option value="4bhk">4 BHK</option>
                                    <option value="5bhk">5+ BHK</option>
                                </select>
                            </div>

                            <div className="block">
                                <label className="block font-semibold text-heading mb-[10px] text-[14px]">Property Status</label>
                                <select
                                    name="propertyType"
                                    value={searchData.propertyType}
                                    onChange={handleChange}
                                    className="w-full p-[15px_20px] appearance-none border-2 border-border-1 rounded-[6px] text-[15px] transition-colors duration-300 bg-white focus:outline-none focus:border-secondary"
                                    style={{
                                        backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "right 20px center",
                                        backgroundSize: "16px"
                                    }}
                                >
                                    <option value="">Select Status</option>
                                    <option value="rent">For Rent</option>
                                    <option value="sale">For Sale</option>
                                    <option value="pg">PG/Hostel</option>
                                </select>
                            </div>

                            <div className="sm:col-span-2 lg:col-span-1">
                                <button type="submit" className="btn btn-primary p-[14px_35px] whitespace-nowrap text-[15px] w-full lg:w-auto">
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
