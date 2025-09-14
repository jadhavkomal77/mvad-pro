
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#FF6F00] to-[#E65100] py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Get in Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#FF6F00]/10 p-3 rounded-lg">
                                        <MapPin className="h-6 w-6 text-[#FF6F00]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#1A1A1A]">Address</h3>
                                        <p className="text-gray-600">
                                            123 Business District,<br />
                                            Mumbai, Maharashtra 400001<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#FF6F00]/10 p-3 rounded-lg">
                                        <Phone className="h-6 w-6 text-[#FF6F00]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#1A1A1A]">Phone</h3>
                                        <p className="text-gray-600">+91 9999999999</p>
                                        <p className="text-gray-600">+91 8888888888</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#FF6F00]/10 p-3 rounded-lg">
                                        <Mail className="h-6 w-6 text-[#FF6F00]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#1A1A1A]">Email</h3>
                                        <p className="text-gray-600">info@vendorhub.com</p>
                                        <p className="text-gray-600">support@vendorhub.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#FF6F00]/10 p-3 rounded-lg">
                                        <Clock className="h-6 w-6 text-[#FF6F00]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#1A1A1A]">Business Hours</h3>
                                        <p className="text-gray-600">
                                            Mon - Fri: 9:00 AM - 6:00 PM<br />
                                            Sat: 10:00 AM - 4:00 PM<br />
                                            Sun: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Support */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Quick Support</h3>
                            <div className="space-y-3 text-gray-600 text-sm">
                                <p><span className="font-medium">Vendor Support:</span> vendors@vendorhub.com</p>
                                <p><span className="font-medium">Customer Support:</span> customers@vendorhub.com</p>
                                <p><span className="font-medium">Technical Issues:</span> tech@vendorhub.com</p>
                                <p><span className="font-medium">Partnership:</span> partners@vendorhub.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Send us a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#FF6F00] text-white py-4 px-6 rounded-lg font-medium hover:bg-[#E65100] flex items-center justify-center transition-colors"
                                >
                                    <Send className="h-5 w-5 mr-2" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* FAQ Section */}
                        <div className="bg-white p-8 rounded-xl shadow-lg mt-8">
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h3>
                            <div className="space-y-4 text-sm text-gray-600">
                                <div>
                                    <h4 className="font-semibold text-[#1A1A1A] mb-2">How do I become a vendor?</h4>
                                    <p>Contact us via the form or email vendors@vendorhub.com with your business details. We’ll guide you through verification.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#1A1A1A] mb-2">How do you verify vendors?</h4>
                                    <p>We check business registration, customer reviews, and quality assessments before approval.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#1A1A1A] mb-2">Is there a fee to list products?</h4>
                                    <p>Basic listing is free for verified vendors. Premium features are available for extra visibility.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#1A1A1A] mb-2">How can I report an issue?</h4>
                                    <p>Use the form above or email support@vendorhub.com with details. We take reports seriously and act quickly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
