
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vendorsData } from '../data/vendors';
import { ArrowLeft, MapPin, Phone, Mail, Star, Plus, Edit2, Trash2, Save, X } from 'lucide-react';

const VendorDetail = () => {
    const { id } = useParams();
    const vendor = vendorsData.find((v) => v.id === parseInt(id));
    const [products, setProducts] = useState(vendor?.products || []);
    const [isAddingProduct, setIsAddingProduct] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });

    if (!vendor) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-600">Vendor not found</h2>
                    <Link to="/vendors" className="text-[#FF6F00] hover:underline mt-4 block">
                        Back to Vendors
                    </Link>
                </div>
            </div>
        );
    }

    const handleAddProduct = () => {
        if (newProduct.name && newProduct.price && newProduct.category) {
            const product = {
                id: Date.now(),
                name: newProduct.name,
                price: parseFloat(newProduct.price),
                category: newProduct.category,
            };
            setProducts([...products, product]);
            setNewProduct({ name: '', price: '', category: '' });
            setIsAddingProduct(false);
        }
    };

    const handleEditProduct = (product) => {
        setEditingProduct({ ...product });
    };

    const handleSaveEdit = () => {
        setProducts(
            products.map((p) =>
                p.id === editingProduct.id
                    ? { ...editingProduct, price: parseFloat(editingProduct.price) }
                    : p
            )
        );
        setEditingProduct(null);
    };

    const handleDeleteProduct = (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter((p) => p.id !== productId));
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        to="/vendors"
                        className="inline-flex items-center text-[#FF6F00] hover:text-[#E65100] transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Back to Vendors
                    </Link>
                </div>
            </div>

            {/* Vendor Details */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/3">
                                <img
                                    src={vendor.image}
                                    alt={vendor.name}
                                    className="w-full h-64 md:h-full object-cover"
                                />
                            </div>
                            <div className="md:w-2/3 p-8">
                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h1 className="text-3xl font-bold text-[#1A1A1A]">{vendor.name}</h1>
                                        <span className="bg-[#FF6F00]/10 text-[#FF6F00] px-3 py-1 rounded-full text-sm font-medium">
                                            {vendor.category}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-5 w-5 ${i < Math.floor(vendor.rating)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                        <span className="ml-2 text-gray-600">({vendor.rating})</span>
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-6">{vendor.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-[#1A1A1A]">Contact Information</h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-3">
                                                <Phone className="h-5 w-5 text-[#FF6F00]" />
                                                <span className="text-gray-700">{vendor.contact.mobile}</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Mail className="h-5 w-5 text-[#FF6F00]" />
                                                <span className="text-gray-700">{vendor.contact.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Address</h3>
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="h-5 w-5 text-[#FF6F00] mt-1" />
                                            <span className="text-gray-700">{vendor.address}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-[#1A1A1A]">Products & Services</h2>
                            <button
                                onClick={() => setIsAddingProduct(true)}
                                className="bg-[#FF6F00] text-white px-6 py-2 rounded-lg hover:bg-[#E65100] transition-colors flex items-center"
                            >
                                <Plus className="h-5 w-5 mr-2" />
                                Add Product
                            </button>
                        </div>

                        {/* Add Product Form */}
                        {isAddingProduct && (
                            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <input
                                        type="text"
                                        placeholder="Product Name"
                                        value={newProduct.name}
                                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        value={newProduct.price}
                                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Category"
                                        value={newProduct.category}
                                        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleAddProduct}
                                        className="bg-[#FF6F00] text-white px-4 py-2 rounded-lg hover:bg-[#E65100] transition-colors flex items-center"
                                    >
                                        <Save className="h-4 w-4 mr-2" />
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setIsAddingProduct(false)}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center"
                                    >
                                        <X className="h-4 w-4 mr-2" />
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Products Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Product Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products.map((product) => (
                                        <tr key={product.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {editingProduct?.id === product.id ? (
                                                    <input
                                                        type="text"
                                                        value={editingProduct.name}
                                                        onChange={(e) =>
                                                            setEditingProduct({ ...editingProduct, name: e.target.value })
                                                        }
                                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                                    />
                                                ) : (
                                                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {editingProduct?.id === product.id ? (
                                                    <input
                                                        type="text"
                                                        value={editingProduct.category}
                                                        onChange={(e) =>
                                                            setEditingProduct({ ...editingProduct, category: e.target.value })
                                                        }
                                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                                    />
                                                ) : (
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                        {product.category}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {editingProduct?.id === product.id ? (
                                                    <input
                                                        type="number"
                                                        value={editingProduct.price}
                                                        onChange={(e) =>
                                                            setEditingProduct({ ...editingProduct, price: e.target.value })
                                                        }
                                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                                    />
                                                ) : (
                                                    <div className="text-sm text-gray-900 font-semibold">
                                                        ₹{product.price}
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                {editingProduct?.id === product.id ? (
                                                    <div className="flex space-x-2">
                                                        <button
                                                            onClick={handleSaveEdit}
                                                            className="text-green-600 hover:text-green-900"
                                                        >
                                                            <Save className="h-4 w-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => setEditingProduct(null)}
                                                            className="text-gray-600 hover:text-gray-900"
                                                        >
                                                            <X className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="flex space-x-2">
                                                        <button
                                                            onClick={() => handleEditProduct(product)}
                                                            className="text-[#FF6F00] hover:text-[#E65100]"
                                                        >
                                                            <Edit2 className="h-4 w-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteProduct(product.id)}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {products.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">📦</div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products yet</h3>
                                <p className="text-gray-500">Add your first product to get started</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VendorDetail;
