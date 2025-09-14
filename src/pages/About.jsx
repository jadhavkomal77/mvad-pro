
import React from 'react';
import { Target, Users, Globe, Award } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: Target,
            title: 'Our Mission',
            description:
                'To create a seamless marketplace that connects quality vendors with customers, fostering trust and business growth.',
        },
        {
            icon: Users,
            title: 'Community First',
            description:
                'We believe in building strong communities by supporting local vendors and empowering customers with choice.',
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description:
                'While we start local, our vision extends globally to create opportunities for vendors everywhere.',
        },
        {
            icon: Award,
            title: 'Excellence',
            description:
                'We maintain the highest standards in vendor verification, customer service, and platform reliability.',
        },
    ];

    const team = [
        {
            name: 'Rajesh Kumar',
            role: 'Founder & CEO',
            image:
                'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
            description:
                'Passionate about connecting businesses with customers through technology.',
        },
        {
            name: 'Priya Sharma',
            role: 'Head of Vendor Relations',
            image:
                'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
            description:
                'Expert in building relationships and ensuring vendor satisfaction.',
        },
        {
            name: 'Amit Patel',
            role: 'Technology Lead',
            image:
                'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
            description:
                'Leading our technical innovation to create the best platform experience.',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-500 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About VendorHub
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        We're on a mission to revolutionize how customers discover and
                        connect with quality vendors across various industries, creating a
                        trusted marketplace for everyone.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    VendorHub was born from a simple observation: finding reliable
                                    vendors shouldn't be a challenge. In 2024, our founders
                                    noticed that while technology had transformed many industries,
                                    the vendor discovery process remained fragmented and
                                    unreliable.
                                </p>
                                <p>
                                    We started with a vision to create a comprehensive platform
                                    where customers could easily discover, evaluate, and connect
                                    with verified vendors across multiple categories. Today, we're
                                    proud to host over 500 verified vendors serving thousands of
                                    satisfied customers.
                                </p>
                                <p>
                                    Our platform combines modern technology with human touch,
                                    ensuring every vendor on our platform meets our strict quality
                                    standards while providing customers with the tools they need
                                    to make informed decisions.
                                </p>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Our story"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            These core principles guide everything we do and shape the
                            experience we create for vendors and customers alike.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                            >
                                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="h-8 w-8 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-black mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The passionate individuals working behind the scenes to make
                            VendorHub the best marketplace for vendors and customers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-black mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-orange-600 font-medium mb-4">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
                        <p className="text-white/80">
                            Numbers that reflect our commitment to excellence
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">
                                500+
                            </div>
                            <div className="text-white/80">Verified Vendors</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">
                                10,000+
                            </div>
                            <div className="text-white/80">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
                            <div className="text-white/80">Categories</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">99%</div>
                            <div className="text-white/80">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
