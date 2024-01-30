import React from 'react';
import UserForm from './UserForm';
import { User } from '@/interfaces/User';

interface Props {
    onSubmit?: (user: User) => void;
    user?: User;
}

const UserProfileEdit: React.FC<Props> = ({ onSubmit, user }) => {
    return (
        <div>
            <h2>Edit Profile</h2>
            {onSubmit && user && <UserForm user={user} />}
        </div>
    );
};

export default UserProfileEdit;
