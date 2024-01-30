// UserEditContext.tsx
import { User } from '@/interfaces/User';
import React, { createContext, useContext, useState } from 'react';

interface UserEditContextType {
    selectedUser: User | null;
    setSelectedUser: (user: User | null) => void;
}

const UserEditContext = createContext<UserEditContextType | undefined>(undefined);

export const useUserEditContext = () => {
    const context = useContext(UserEditContext);
    if (!context) {
        throw new Error('useUserEditContext must be used within a UserEditProvider');
    }
    return context;
};

interface UserEditProviderProps {
    children: React.ReactNode;
}

export const UserEditProvider: React.FC<UserEditProviderProps> = ({ children }) => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    return (
        <UserEditContext.Provider value={{ selectedUser, setSelectedUser }}>
            {children}
        </UserEditContext.Provider>
    );
};
