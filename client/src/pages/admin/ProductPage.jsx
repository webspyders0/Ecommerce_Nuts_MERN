'use client'

import React, { useEffect, useState } from 'react'
import { Package, Edit, Trash, Plus, Search, ChevronDown, ChevronUp, Sun, Moon, X } from 'lucide-react'
import AdminSidebar from '../../components/AdminSidebar'

// Simulated product data
const initialProducts = [
    { id: '001', name: 'Premium Cashews', category: 'Nuts', price: 999, stock: 50, imageUrl: ['/placeholder.svg?height=50&width=50'], isAvailable: true },
    { id: '002', name: 'Almond Gift Box', category: 'Gift Sets', price: 1499, stock: 30, imageUrl: ['/placeholder.svg?height=50&width=50'], isAvailable: true },
    { id: '003', name: 'Mixed Nuts Pack', category: 'Assortments', price: 799, stock: 100, imageUrl: ['/placeholder.svg?height=50&width=50'], isAvailable: false },
    { id: '004', name: 'Pistachio Selection', category: 'Nuts', price: 1299, stock: 75, imageUrl: ['/placeholder.svg?height=50&width=50'], isAvailable: true },
    { id: '005', name: 'Dried Fruit Assortment', category: 'Dried Fruits', price: 699, stock: 60, imageUrl: ['/placeholder.svg?height=50&width=50'], isAvailable: true },
]

// Simulated categories
const categories = [
    { id: '1', name: 'Nuts' },
    { id: '2', name: 'Gift Sets' },
    { id: '3', name: 'Assortments' },
    { id: '4', name: 'Dried Fruits' },
]

export default function AdminProductsPage() {
    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage for dark mode preference
        return localStorage.getItem('darkMode') === 'true';
    });
    const [collapsed, setCollapsed] = useState(false)
    const [products, setProducts] = useState(initialProducts)
    const [searchTerm, setSearchTerm] = useState('')
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' })
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        category: '',
        imageUrl: [],
        isAvailable: true
    })

    useEffect(() => {
        // Update localStorage whenever darkMode changes
        localStorage.setItem('darkMode', darkMode);
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const handleEdit = (productId) => {
        console.log(`Edit product with ID: ${productId}`)
    }

    const handleDelete = (productId) => {
        setProducts(products.filter(product => product.id !== productId))
    }

    const handleAddProduct = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setNewProduct({
            name: '',
            description: '',
            price: '',
            stock: '',
            category: '',
            imageUrl: [],
            isAvailable: true
        })
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setNewProduct(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files)
        if (files.length + newProduct.imageUrl.length > 4) {
            alert('You can upload a maximum of 4 images')
            return
        }
        const newImageUrls = files.map(file => URL.createObjectURL(file))
        setNewProduct(prev => ({ ...prev, imageUrl: [...prev.imageUrl, ...newImageUrls] }))
    }

    const handleRemoveImage = (index) => {
        setNewProduct(prev => ({
            ...prev,
            imageUrl: prev.imageUrl.filter((_, i) => i !== index)
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const productToAdd = {
            ...newProduct,
            id: (products.length + 1).toString().padStart(3, '0'),
            price: parseFloat(newProduct.price),
            stock: parseInt(newProduct.stock)
        }
        setProducts([...products, productToAdd])
        handleCloseModal()
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const sortedProducts = React.useMemo(() => {
        let sortableProducts = [...filteredProducts]
        if (sortConfig.key !== null) {
            sortableProducts.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1
                }
                return 0
            })
        }
        return sortableProducts
    }, [filteredProducts, sortConfig])

    const requestSort = (key) => {
        let direction = 'ascending'
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending'
        }
        setSortConfig({ key, direction })
    }

    const getSortIcon = (name) => {
        if (sortConfig.key === name) {
            return sortConfig.direction === 'ascending' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
        }
        return <ChevronDown className="h-4 w-4 opacity-0 group-hover:opacity-100" />
    }

    return (
        <div className={`min-h-screen w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#FDF7F0] text-gray-900'}`}>
            <AdminSidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} collapsed={collapsed} setCollapsed={setCollapsed} />
            <main className={`min-h-screen transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-64'}`}>
                {/* Header */}
                <header className={`flex h-16 items-center justify-between border-b px-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <h1 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Product Management</h1>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleDarkMode}
                            className={`rounded-full p-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {darkMode ? (
                                <Sun className="h-5 w-5 text-yellow-500" />
                            ) : (
                                <Moon className="h-5 w-5 text-gray-600" />
                            )}
                        </button>
                    </div>
                </header>
                {/* Main content */}
                <div className="p-6">
                    <div className="mb-6 flex justify-between items-center">
                        <div className="flex items-center">
                            <Search className={`h-5 w-5 mr-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className={`p-2 border rounded-md ${darkMode
                                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                                    }`}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={handleAddProduct}
                            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        >
                            <Plus className="h-5 w-5 mr-2" />
                            Add Product
                        </button>
                    </div>

                    <div className={`rounded-lg shadow overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                                    <tr>
                                        {['Image', 'Name', 'Category', 'Price', 'Stock', 'Available', 'Actions'].map((header) => (
                                            <th
                                                key={header}
                                                className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer group ${darkMode ? 'text-gray-300' : 'text-gray-500'
                                                    }`}
                                                onClick={() => header !== 'Image' && header !== 'Actions' && requestSort(header.toLowerCase())}
                                            >
                                                <div className="flex items-center">
                                                    {header}
                                                    {header !== 'Image' && header !== 'Actions' && getSortIcon(header.toLowerCase())}
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                                    {sortedProducts.map((product) => (
                                        <tr key={product.id} className={darkMode ? 'bg-gray-800' : 'bg-white'}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <img src={product.imageUrl[0]} alt={product.name} className="h-10 w-10 rounded-full object-cover" />
                                            </td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{product.name}</td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{product.category}</td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>₹{product.price.toFixed(2)}</td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{product.stock}</td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.isAvailable
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                    }`}>
                                                    {product.isAvailable ? 'In Stock' : 'Out of Stock'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button
                                                    onClick={() => handleEdit(product.id)}
                                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                >
                                                    <Edit className="h-5 w-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product.id)}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    <Trash className="h-5 w-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Add Product Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
                        <div className={`relative w-full max-w-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl overflow-y-auto max-h-[90vh]`}>
                            <div className="p-6">
                                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Add New Product</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={newProduct.name}
                                                onChange={handleInputChange}
                                                required
                                                className={`mt-1 block w-full rounded-md ${darkMode
                                                        ? 'bg-gray-700 border-gray-600 text-white'
                                                        : 'bg-white border-gray-300 text-gray-900'
                                                    } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="category" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Category</label>
                                            <select
                                                id="category"
                                                name="category"
                                                value={newProduct.category}
                                                onChange={handleInputChange}
                                                required
                                                className={`mt-1 block w-full rounded-md ${darkMode
                                                        ? 'bg-gray-700 border-gray-600 text-white'
                                                        : 'bg-white border-gray-300 text-gray-900'
                                                    } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                                            >
                                                <option value="">Select a category</option>
                                                {categories.map(cat => (
                                                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="description" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Description</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={3}
                                            value={newProduct.description}
                                            onChange={handleInputChange}
                                            required
                                            className={`mt-1 block w-full rounded-md ${darkMode
                                                    ? 'bg-gray-700 border-gray-600 text-white'
                                                    : 'bg-white border-gray-300 text-gray-900'
                                                } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="price" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Price (₹)</label>
                                            <input
                                                type="number"
                                                id="price"
                                                name="price"
                                                value={newProduct.price}
                                                onChange={handleInputChange}
                                                required
                                                min="0"
                                                step="0.01"
                                                className={`mt-1 block w-full rounded-md ${darkMode
                                                        ? 'bg-gray-700 border-gray-600 text-white'
                                                        : 'bg-white border-gray-300 text-gray-900'
                                                    } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="stock" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Stock</label>
                                            <input
                                                type="number"
                                                id="stock"
                                                name="stock"
                                                value={newProduct.stock}
                                                onChange={handleInputChange}
                                                required
                                                min="0"
                                                className={`mt-1 block w-full rounded-md ${darkMode
                                                        ? 'bg-gray-700 border-gray-600 text-white'
                                                        : 'bg-white border-gray-300 text-gray-900'
                                                    } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="images" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Images (max 4)</label>
                                        <input
                                            type="file"
                                            id="images"
                                            name="images"
                                            accept="image/*"
                                            multiple
                                            onChange={handleImageUpload}
                                            className={`mt-1 block w-full ${darkMode
                                                    ? 'text-gray-300'
                                                    : 'text-gray-900'
                                                } file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold ${darkMode
                                                    ? 'file:bg-gray-700 file:text-gray-300 hover:file:bg-gray-600'
                                                    : 'file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100'
                                                }`}
                                        />
                                        {newProduct.imageUrl.length > 0 && (
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {newProduct.imageUrl.map((url, index) => (
                                                    <div key={index} className="relative">
                                                        <img src={url} alt={`Preview ${index + 1}`} className="w-20 h-20 object-cover rounded" />
                                                        <button
                                                            type="button"
                                                            onClick={() => handleRemoveImage(index)}
                                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                                            aria-label="Remove image"
                                                        >
                                                            <X className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="isAvailable"
                                            name="isAvailable"
                                            checked={newProduct.isAvailable}
                                            onChange={handleInputChange}
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="isAvailable" className={`ml-2 block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                                            Available for Purchase
                                        </label>
                                    </div>
                                    <div className="flex justify-end space-x-3">
                                        <button
                                            type="button"
                                            onClick={handleCloseModal}
                                            className={`px-4 py-2 rounded-md ${darkMode
                                                    ? 'bg-gray-600 text-gray-200 hover:bg-gray-500'
                                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                                }`}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                        >
                                            Add Product
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
                                aria-label="Close modal"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}