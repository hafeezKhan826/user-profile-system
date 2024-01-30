import { User } from '@/interfaces/User';
import React from 'react';

interface Props {
    onDelete?: (id: number) => void;
    user?: User;
}

const UserProfileDelete: React.FC<Props> = ({ onDelete, user }) => {
    return (
        <div>
            <h2>Delete Profile</h2>
            <p>Are you sure you want to delete {user?.name}'s profile?</p>
            <button onClick={() => user?.id && onDelete && onDelete(user.id)}>Yes</button>
        </div>
    );
};

export default UserProfileDelete;
