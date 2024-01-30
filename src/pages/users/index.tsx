import React from 'react';
import Link from 'next/link';
import UserList from '@/components/UserList';

const IndexPage: React.FC = () => {
    return (
        <div>
            <h1>User Profiles</h1>
            <UserList />
            <Link href="/create">Create New Profile</Link>
        </div>
    );
};

export default IndexPage;
