import React from 'react';
import Link from 'next/link';
import UserList from '@/components/UserList';
import UserProfileForm from '@/components/UserForm';
import { UserEditProvider } from '@/context/UserEditContext';

const Home: React.FC = () => {
  return (
    <>
      <UserEditProvider>
        <div className='grid grid-cols-8 gap-2'>
          <div className='col-span-2 border-r-2'>
            <UserProfileForm />
          </div>
          <div className='col-span-6'>
            <UserList />
          </div>
        </div>
      </UserEditProvider>
    </>
  );
};

export default Home;
