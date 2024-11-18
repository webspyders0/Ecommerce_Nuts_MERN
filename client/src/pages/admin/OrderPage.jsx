'use client'

import React, { useState, useEffect } from 'react'
import { Package, Truck, CheckCircle, AlertCircle, Search, ChevronDown, ChevronUp, Sun, Moon, Home } from 'lucide-react'
import AdminSidebar from '../../components/AdminSidebar'

// Simulated order data
const initialOrders = [
    { id: '001', customer: 'John Doe', product: 'Premium Cashews', amount: '₹999.00', status: 'Processing', date: '2024-02-20' },
    { id: '002', customer: 'Jane Smith', product: 'Almond Gift Box', amount: '₹1499.00', status: 'Shipped', date: '2024-02-19' },
    { id: '003', customer: 'Bob Johnson', product: 'Mixed Nuts Pack', amount: '₹799.00', status: 'Delivered', date: '2024-02-18' },
    { id: '004', customer: 'Alice Brown', product: 'Pistachio Selection', amount: '₹1299.00', status: 'Processing', date: '2024-02-20' },
    { id: '005', customer: 'Charlie Davis', product: 'Dried Fruit Assortment', amount: '₹699.00', status: 'Cancelled', date: '2024-02-17' },
]

const statusColors = {
    Processing: 'bg-yellow-100 text-yellow-800',
    Shipped: 'bg-blue-100 text-blue-800',
    Delivered: 'bg-green-100 text-green-800',
    Cancelled: 'bg-red-100 text-red-800',
}

export default function OrdersPage() {
    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage for dark mode preference
        return localStorage.getItem('darkMode') === 'true';
    });
    const [collapsed, setCollapsed] = useState(false);
    const [orders, setOrders] = useState(initialOrders);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

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


    const handleStatusChange = (orderId, newStatus) => {
        setOrders(orders.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
        ))
    }

    const filteredOrders = orders.filter(order =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.product.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const sortedOrders = React.useMemo(() => {
        let sortableOrders = [...filteredOrders]
        if (sortConfig.key !== null) {
            sortableOrders.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1
                }
                return 0
            })
        }
        return sortableOrders
    }, [filteredOrders, sortConfig])

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
        <div className="min-h-screen w-full bg-white">
            <AdminSidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} collapsed={collapsed} setCollapsed={setCollapsed} />
            <main className={`min-h-screen transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-64'} ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#FDF7F0] text-gray-900'}`}>
                {/* Header */}
                <header className={`flex h-16 items-center justify-between border-b px-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <h1 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Orders Management</h1>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className={`rounded-lg shadow p-4 flex items-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <div className={`rounded-full p-3 mr-4 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
                                <Package className={`h-6 w-6 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />
                            </div>
                            <div>
                                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Orders</p>
                                <h3 className="text-xl font-semibold">{orders.length}</h3>
                            </div>
                        </div>
                        <div className={`rounded-lg shadow p-4 flex items-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <div className={`rounded-full p-3 mr-4 ${darkMode ? 'bg-yellow-900' : 'bg-yellow-100'}`}>
                                <Truck className={`h-6 w-6 ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`} />
                            </div>
                            <div>
                                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Processing</p>
                                <h3 className="text-xl font-semibold">{orders.filter(o => o.status === 'Processing').length}</h3>
                            </div>
                        </div>
                        <div className={`rounded-lg shadow p-4 flex items-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <div className={`rounded-full p-3 mr-4 ${darkMode ? 'bg-green-900' : 'bg-green-100'}`}>
                                <CheckCircle className={`h-6 w-6 ${darkMode ? 'text-green-300' : 'text-green-600'}`} />
                            </div>
                            <div>
                                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Delivered</p>
                                <h3 className="text-xl font-semibold">{orders.filter(o => o.status === 'Delivered').length}</h3>
                            </div>
                        </div>
                        <div className={`rounded-lg shadow p-4 flex items-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <div className={`rounded-full p-3 mr-4 ${darkMode ? 'bg-red-900' : 'bg-red-100'}`}>
                                <AlertCircle className={`h-6 w-6 ${darkMode ? 'text-red-300' : 'text-red-600'}`} />
                            </div>
                            <div>
                                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Cancelled</p>
                                <h3 className="text-xl font-semibold">{orders.filter(o => o.status === 'Cancelled').length}</h3>
                            </div>
                        </div>
                    </div>

                    <div className={`rounded-lg shadow overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="p-4">
                            <div className="flex items-center mb-4">
                                <Search className={`h-5 w-5 mr-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                                <input
                                    type="text"
                                    placeholder="Search orders..."
                                    className={`flex-1 p-2 border rounded-md ${darkMode
                                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                                        }`}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                                    <tr>
                                        {['Order ID', 'Customer', 'Product', 'Amount', 'Status', 'Date', 'Actions'].map((header) => (
                                            <th
                                                key={header}
                                                className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer group ${darkMode ? 'text-gray-300' : 'text-gray-500'
                                                    }`}
                                                onClick={() => requestSort(header.toLowerCase())}
                                            >
                                                <div className="flex items-center">
                                                    {header}
                                                    {getSortIcon(header.toLowerCase())}
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                                    {sortedOrders.map((order) => (
                                        <tr key={order.id} className={darkMode ? 'bg-gray-800' : 'bg-white'}>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{order.id}</td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{order.customer}</td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{order.product}</td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{order.amount}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status]}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{order.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <select
                                                    value={order.status}
                                                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                                    className={`mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${darkMode
                                                            ? 'bg-gray-700 border-gray-600 text-white'
                                                            : 'bg-white border-gray-300 text-gray-900'
                                                        }`}
                                                >
                                                    <option value="Processing">Processing</option>
                                                    <option value="Shipped">Shipped</option>
                                                    <option value="Delivered">Delivered</option>
                                                    <option value="Cancelled">Cancelled</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}