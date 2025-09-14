// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { vendorsData } from '../data/vendors';
// import { MapPin, Phone, Mail, Star, Search, Filter } from 'lucide-react';

// const Vendors = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState('');

//     const categories = [...new Set(vendorsData.map(vendor => vendor.category))];

//     const filteredVendors = vendorsData.filter(vendor => {
//         const matchesSearch =
//             vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             vendor.description.toLowerCase().includes(searchTerm.toLowerCase());
//         const matchesCategory =
//             selectedCategory === '' || vendor.category === selectedCategory;
//         return matchesSearch && matchesCategory;
//     });

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Header Section */}
//             <section className="bg-gradient-to-r from-orange-500 to-orange-500 py-16">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                         Discover Our Vendors
//                     </h1>
//                     <p className="text-xl text-white/90 max-w-2xl mx-auto">
//                         Connect with trusted vendors across various categories and find
//                         exactly what you're looking for.
//                     </p>
//                 </div>
//             </section>

//             {/* Search and Filter */}
//             <section className="py-8 bg-white border-b">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//                         {/* Search Bar */}
//                         <div className="relative flex-1 max-w-md">
//                             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                             <input
//                                 type="text"
//                                 placeholder="Search vendors..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                             />
//                         </div>

//                         {/* Category Filter */}
//                         <div className="relative">
//                             <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                             <select
//                                 value={selectedCategory}
//                                 onChange={(e) => setSelectedCategory(e.target.value)}
//                                 className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
//                             >
//                                 <option value="">All Categories</option>
//                                 {categories.map((category) => (
//                                     <option key={category} value={category}>
//                                         {category}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Vendors Grid */}
//             <section className="py-12">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="mb-8">
//                         <h2 className="text-2xl font-bold text-gray-900">
//                             {filteredVendors.length} Vendors Found
//                         </h2>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {filteredVendors.map((vendor) => (
//                             <div
//                                 key={vendor.id}
//                                 className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
//                             >
//                                 {/* Vendor Image */}
//                                 <div className="relative h-48 overflow-hidden">
//                                     <img
//                                         src={vendor.image}
//                                         alt={vendor.name}
//                                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                                     />
//                                     <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                                         {vendor.category}
//                                     </div>
//                                 </div>

//                                 {/* Vendor Info */}
//                                 <div className="p-6">
//                                     <div className="mb-4">
//                                         <h3 className="text-xl font-bold text-gray-900 mb-2">
//                                             {vendor.name}
//                                         </h3>
//                                         <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
//                                             {vendor.description}
//                                         </p>
//                                     </div>

//                                     {/* Rating */}
//                                     <div className="flex items-center mb-4">
//                                         <div className="flex items-center space-x-1">
//                                             {[...Array(5)].map((_, i) => (
//                                                 <Star
//                                                     key={i}
//                                                     className={`h-4 w-4 ${i < Math.floor(vendor.rating)
//                                                         ? 'text-orange-500 fill-current'
//                                                         : 'text-gray-300'
//                                                         }`}
//                                                 />
//                                             ))}
//                                         </div>
//                                         <span className="ml-2 text-sm text-gray-600">
//                                             ({vendor.rating})
//                                         </span>
//                                     </div>

//                                     {/* Contact Info */}
//                                     <div className="space-y-2 mb-6">
//                                         <div className="flex items-center space-x-3">
//                                             <Phone className="h-4 w-4 text-orange-500" />
//                                             <span className="text-sm text-gray-600">
//                                                 {vendor.contact.mobile}
//                                             </span>
//                                         </div>
//                                         <div className="flex items-center space-x-3">
//                                             <Mail className="h-4 w-4 text-orange-500" />
//                                             <span className="text-sm text-gray-600">
//                                                 {vendor.contact.email}
//                                             </span>
//                                         </div>
//                                         <div className="flex items-start space-x-3">
//                                             <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
//                                             <span className="text-sm text-gray-600 line-clamp-2">
//                                                 {vendor.address}
//                                             </span>
//                                         </div>
//                                     </div>

//                                     {/* View Details Button */}
//                                     <Link
//                                         to={`/vendor/${vendor.id}`}
//                                         className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200 text-center block"
//                                     >
//                                         View Details & Products
//                                     </Link>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {filteredVendors.length === 0 && (
//                         <div className="text-center py-12">
//                             <div className="text-6xl mb-4">🔍</div>
//                             <h3 className="text-xl font-semibold text-gray-600 mb-2">
//                                 No vendors found
//                             </h3>
//                             <p className="text-gray-500">
//                                 Try adjusting your search or filter criteria
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Vendors;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { vendorsData } from '../data/vendors';
import { MapPin, Phone, Mail, Star, Search, Filter } from 'lucide-react';

const Vendors = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [...new Set(vendorsData.map(vendor => vendor.category))];

    const filteredVendors = vendorsData.filter(vendor => {
        const matchesSearch =
            vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vendor.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            selectedCategory === '' || vendor.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-500 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Discover Our Vendors
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Connect with trusted vendors across various categories and find
                        exactly what you're looking for.
                    </p>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search vendors..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                            >
                                <option value="">All Categories</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vendors Grid */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-[#1A1A1A]">
                            {filteredVendors.length} Vendors Found
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredVendors.map((vendor) => (
                            <div
                                key={vendor.id}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                            >
                                {/* Vendor Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={vendor.image}
                                        alt={vendor.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {vendor.category}
                                    </div>
                                </div>

                                {/* Vendor Info */}
                                <div className="p-6">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                                            {vendor.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                            {vendor.description}
                                        </p>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center mb-4">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${i < Math.floor(vendor.rating)
                                                        ? 'text-orange-500 fill-current'
                                                        : 'text-gray-300'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="ml-2 text-sm text-gray-600">
                                            ({vendor.rating})
                                        </span>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center space-x-3">
                                            <Phone className="h-4 w-4 text-orange-500" />
                                            <span className="text-sm text-gray-600">
                                                {vendor.contact.mobile}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Mail className="h-4 w-4 text-orange-500" />
                                            <span className="text-sm text-gray-600">
                                                {vendor.contact.email}
                                            </span>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                                            <span className="text-sm text-gray-600 line-clamp-2">
                                                {vendor.address}
                                            </span>
                                        </div>
                                    </div>

                                    {/* View Details Button */}
                                    <Link
                                        to={`/vendor/${vendor.id}`}
                                        className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200 text-center block"
                                    >
                                        View Details & Products
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredVendors.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                No vendors found
                            </h3>
                            <p className="text-gray-500">
                                Try adjusting your search or filter criteria
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Vendors;



