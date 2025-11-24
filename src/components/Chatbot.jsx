import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm LocalLens AI. Ask me anything about property locations, safety scores, or investment potential.", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Mock AI response
        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                text: generateResponse(input),
                sender: 'bot'
            };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    const generateResponse = (query) => {
        const q = query.toLowerCase();
        if (q.includes('safety') || q.includes('safe')) return "Based on our data, Bandra Kurla Complex has the highest safety rating (95/100) with 24/7 surveillance and rapid emergency response.";
        if (q.includes('school') || q.includes('education')) return "Koramangala is excellent for education (92/100) with 15+ top-rated schools within a 3km radius.";
        if (q.includes('invest') || q.includes('roi')) return "For investment, Cyber Hub shows the highest projected appreciation (12% YoY) due to upcoming metro expansion.";
        return "I can help you analyze locations based on safety, schools, and investment potential. Try asking about specific areas!";
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 p-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 ${isOpen ? 'hidden' : 'flex'}`}
            >
                <MessageSquare className="w-6 h-6 text-white" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] bg-dark-card border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-primary-900/50 to-secondary-900/50 border-b border-white/10 flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <div className="p-2 bg-primary-500/20 rounded-lg">
                                    <Bot className="w-5 h-5 text-primary-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">LocalLens AI</h3>
                                    <span className="text-xs text-green-400 flex items-center">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></span>
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-dark-bg/50">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                                ? 'bg-primary-600 text-white rounded-br-none'
                                                : 'bg-white/10 text-gray-200 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-dark-card">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about a location..."
                                    className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary-500 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="p-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
