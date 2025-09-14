import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ShoppingBag, LogOut } from 'lucide-react';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-[#1A1A1A] text-white flex flex-col min-h-screen p-6">
            <h2 className="text-2xl font-bold text-[#FF6F00] mb-10">Admin Panel</h2>
            <nav className="flex-1 space-y-4">
                <Link to="/admin/dashboard" className="flex items-center space-x-3 hover:text-[#FF6F00]">
                    <Users className="h-5 w-5" /> <span>Vendors</span>
                </Link>
                <Link to="/admin/dashboard" className="flex items-center space-x-3 hover:text-[#FF6F00]">
                    <ShoppingBag className="h-5 w-5" /> <span>Products</span>
                </Link>
            </nav>
            <Link to="/admin/login" className="flex items-center space-x-3 hover:text-[#FF6F00] mt-auto">
                <LogOut className="h-5 w-5" /> <span>Logout</span>
            </Link>
        </aside>
    );
};

export default Sidebar;
