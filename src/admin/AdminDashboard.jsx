import React from 'react';
import Sidebar from './AdminSidebar';

const AdminDashboard = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1 p-10">
                <h1 className="text-3xl font-bold text-[#1A1A1A] mb-6">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                        <h2 className="text-xl font-semibold text-[#FF6F00]">Vendors</h2>
                        <p className="text-gray-600 mt-2">Manage all vendors here</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                        <h2 className="text-xl font-semibold text-[#FF6F00]">Products</h2>
                        <p className="text-gray-600 mt-2">Add or remove products</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                        <h2 className="text-xl font-semibold text-[#FF6F00]">Customers</h2>
                        <p className="text-gray-600 mt-2">View customer information</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
