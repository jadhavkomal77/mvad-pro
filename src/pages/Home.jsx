// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Store, Users, ShoppingBag, Star, TrendingUp } from 'lucide-react';

// const Home = () => {
//     const features = [
//         {
//             icon: Store,
//             title: 'Diverse Vendors',
//             description: 'Discover a wide range of vendors across multiple categories',
//         },
//         {
//             icon: Users,
//             title: 'Trusted Community',
//             description: 'Connect with verified and trusted vendor partners',
//         },
//         {
//             icon: ShoppingBag,
//             title: 'Quality Products',
//             description: 'Access to premium products from reliable sources',
//         },
//         {
//             icon: Star,
//             title: 'Top Rated',
//             description: 'All vendors are rated and reviewed by customers',
//         },
//     ];

//     const stats = [
//         { number: '500+', label: 'Verified Vendors' },
//         { number: '10k+', label: 'Happy Customers' },
//         { number: '50+', label: 'Categories' },
//         { number: '99%', label: 'Satisfaction Rate' },
//     ];

//     return (
//         <div className="min-h-screen">
//             {/* Hero Section */}
//             <section className="relative bg-gradient-to-br from-[#FF6F00]/10 via-white to-[#FF6F00]/20 py-20">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                         <div className="space-y-8">
//                             <div className="space-y-4">
//                                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
//                                     Discover Amazing
//                                     <span className="text-[#FF6F00] block">Vendors</span>
//                                 </h1>
//                                 <p className="text-lg text-gray-600 leading-relaxed">
//                                     Connect with trusted vendors across various categories. From electronics to fashion,
//                                     home decor to organic food - find everything you need in one place.
//                                 </p>
//                             </div>

//                             <div className="flex flex-col sm:flex-row gap-4">
//                                 <Link
//                                     to="/vendors"
//                                     className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6F00] text-white font-medium rounded-lg hover:bg-[#E65100] transition-all duration-200 group shadow-lg"
//                                 >
//                                     Explore Vendors
//                                     <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                                 </Link>
//                                 <Link
//                                     to="/about"
//                                     className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#FF6F00] text-[#FF6F00] font-medium rounded-lg hover:bg-[#FF6F00] hover:text-white transition-all duration-200"
//                                 >
//                                     Learn More
//                                 </Link>
//                             </div>
//                         </div>

//                         {/* Hero Image */}
//                         <div className="relative">
//                             <div className="relative z-10">
//                                 <img
//                                     src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
//                                     alt="Vendors marketplace"
//                                     className="rounded-2xl shadow-2xl"
//                                 />
//                             </div>
//                             <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-gradient-to-br from-[#FF6F00]/20 to-[#E65100]/20 rounded-2xl"></div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             <section className="py-16 bg-[#1A1A1A] text-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                         {stats.map((stat, index) => (
//                             <div key={index} className="text-center">
//                                 <div className="text-3xl md:text-4xl font-bold text-[#FF6F00] mb-2">
//                                     {stat.number}
//                                 </div>
//                                 <div className="text-gray-300">{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section className="py-20 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
//                             Why Choose VendorHub?
//                         </h2>
//                         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                             We provide a comprehensive platform that connects you with the best vendors
//                             in your area, ensuring quality and reliability.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {features.map((feature, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
//                             >
//                                 <div className="bg-[#FF6F00]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF6F00]/20 transition-colors">
//                                     <feature.icon className="h-8 w-8 text-[#FF6F00]" />
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
//                                     {feature.title}
//                                 </h3>
//                                 <p className="text-gray-600 leading-relaxed">
//                                     {feature.description}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="py-20 bg-gradient-to-r from-[#FF6F00] to-[#E65100]">
//                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <div className="space-y-6">
//                         <TrendingUp className="h-16 w-16 text-white mx-auto" />
//                         <h2 className="text-3xl md:text-4xl font-bold text-white">
//                             Ready to Start Shopping?
//                         </h2>
//                         <p className="text-xl text-white/90 max-w-2xl mx-auto">
//                             Join thousands of satisfied customers who have found their perfect vendors through our platform.
//                         </p>
//                         <Link
//                             to="/vendors"
//                             className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#FF6F00] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
//                         >
//                             Browse All Vendors
//                             <ArrowRight className="ml-2 h-5 w-5" />
//                         </Link>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Home;



import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Store,
    Users,
    ShoppingBag,
    Star,
    TrendingUp,
} from 'lucide-react';

const Home = () => {
    const features = [
        {
            icon: Store,
            title: 'Diverse Vendors',
            description:
                'Discover a wide range of vendors across multiple categories',
        },
        {
            icon: Users,
            title: 'Trusted Community',
            description: 'Connect with verified and trusted vendor partners',
        },
        {
            icon: ShoppingBag,
            title: 'Quality Products',
            description: 'Access to premium products from reliable sources',
        },
        {
            icon: Star,
            title: 'Top Rated',
            description: 'All vendors are rated and reviewed by customers',
        },
    ];

    const stats = [
        { number: '500+', label: 'Verified Vendors' },
        { number: '10k+', label: 'Happy Customers' },
        { number: '50+', label: 'Categories' },
        { number: '99%', label: 'Satisfaction Rate' },
    ];

    return (
        <div className="min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-orange-500/10 via-white to-orange-600/10 py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Text */}
                        <div className="space-y-8">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                                Welcome to{' '}
                                <span className="text-orange-600">MVAD GROUPS</span>
                            </h1>
                            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                                Your one-stop platform to discover trusted vendors, explore
                                diverse categories, and enjoy premium shopping experiences.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/vendors"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-200 shadow-lg group"
                                >
                                    Explore Vendors
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-200"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative z-10">
                                <img
                                    src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Vendors marketplace"
                                    className="rounded-2xl shadow-2xl"
                                />
                            </div>
                            <div className="absolute -top-6 -right-6 -bottom-6 -left-6 bg-gradient-to-br from-orange-500/20 to-orange-700/20 rounded-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center transform hover:scale-105 transition-transform"
                            >
                                <div className="text-4xl font-extrabold text-orange-500 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose <span className="text-orange-600">MVAD GROUPS</span>?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We provide a comprehensive platform that connects you with the
                            best vendors in your area, ensuring quality and reliability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <div className="bg-orange-500/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                                    <feature.icon className="h-8 w-8 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-700">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <TrendingUp className="h-16 w-16 text-white mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Start with MVAD GROUPS?
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                        Join thousands of satisfied customers who trust MVAD GROUPS to
                        connect with verified vendors and enjoy seamless shopping.
                    </p>
                    <Link
                        to="/vendors"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg"
                    >
                        Browse All Vendors
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
