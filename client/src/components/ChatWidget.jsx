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
        <>

            <div className="fixed bottom-24 right-4 z-50">
                {!isOpen && (
                    <button
                        onClick={toggleChat}
                        className="bg-amber-500 hover:bg-amber-600 text-white rounded-full p-3 shadow-lg transition duration-200"
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

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/917034900009"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-200"
            >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </>
    );
}
