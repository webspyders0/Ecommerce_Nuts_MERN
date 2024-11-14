import React, { useState } from 'react';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeChat, setActiveChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const toggleChat = () => setIsOpen(!isOpen);

    const startChat = (type) => {
        setActiveChat(type);
        setMessages([{ type: 'bot', content: `How can I help you with ${type}?` }]);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, { type: 'user', content: input }]);
            setInput('');
            setTimeout(() => {
                setMessages(prev => [...prev, { type: 'bot', content: `You said: ${input}` }]);
            }, 1000);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="bg-[#CA965C] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-[#A47E3B] transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </button>
            )}
            {isOpen && (
                <div className="bg-white rounded-lg shadow-xl w-80 max-w-full h-auto max-h-[75vh] overflow-hidden">
                    <div className="bg-[#CA965C] text-white p-4 flex justify-between items-center">
                        <h3 className="font-bold">Chat with us</h3>
                        <button onClick={toggleChat} className="text-2xl">&times;</button>
                    </div>
                    <div className="p-4 flex flex-col h-full">
                        {!activeChat ? (
                            <div className="space-y-2">
                                {['Chat with us', 'Order status and tracking', 'Exchanges and Refund Policies', 'Payments and Billing'].map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => startChat(option)}
                                        className="w-full text-left p-2 rounded hover:bg-gray-100 transition-colors flex items-center space-x-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                        <span>{option}</span>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="flex-grow flex flex-col space-y-4">
                                <div className="h-48 overflow-y-auto space-y-2 border-b border-gray-300 pb-2">
                                    {messages.map((msg, index) => (
                                        <div key={index} className={`p-2 rounded-lg ${msg.type === 'user' ? 'bg-[#FFEBC1] text-gray-700 ml-4' : 'bg-gray-100 mr-4'}`}>
                                            {msg.content}
                                        </div>
                                    ))}
                                </div>
                                <form onSubmit={sendMessage} className="flex gap-2 pt-2">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Type your message..."
                                        className="flex-grow p-2 border rounded"
                                    />
                                    <button type="submit" className="bg-[#CA965C] text-white px-4 py-2 rounded hover:bg-[#A47E3B] transition-colors">
                                        Send
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
