import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import { selectUsers } from '@/redux/usersSlice';

const UserList: React.FC = () => {
    const users = useSelector(selectUsers);

    return (
        <div className="flex flex-wrap justify-center mt-10">
            {users.map(user => (
                user && <UserProfile key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
