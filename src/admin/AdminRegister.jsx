import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminRegister = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Demo: navigate to login
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-[#1A1A1A] mb-6 text-center">Admin Register</h1>
                <form className="space-y-4" onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#FF6F00]"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#FF6F00]"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#FF6F00]"
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#FF6F00] text-white py-3 rounded-lg font-semibold hover:bg-[#e65f00] transition"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-gray-500 mt-4 text-center">
                    Already have an account? <Link to="/admin/login" className="text-[#FF6F00] hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default AdminRegister;
