import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for existing session
        const storedUser = localStorage.getItem('locallens_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        // Simulate login
        const userWithTimestamp = { ...userData, lastLogin: new Date().toISOString() };
        setUser(userWithTimestamp);
        localStorage.setItem('locallens_user', JSON.stringify(userWithTimestamp));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('locallens_user');
    };

    const updateUser = (updates) => {
        const updatedUser = { ...user, ...updates };
        setUser(updatedUser);
        localStorage.setItem('locallens_user', JSON.stringify(updatedUser));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateUser, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
