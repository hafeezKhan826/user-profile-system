import React from 'react';
import { User } from '@/interfaces/User';
import { useDispatch } from 'react-redux';
import { editUser } from '@/redux/actions/userActions';
import { useParams, Link } from 'react-router-dom';
// import { deleteUser } from '@/redux/usersSlice';
import { deleteUser } from '../redux/actions/userActions';
import { useUserEditContext } from '@/context/UserEditContext';
interface UserProfileProps {
    user: User;
}
const UserProfile: React.FC<UserProfileProps> = ({ user }) => {

    const dispatch = useDispatch();
    const { setSelectedUser } = useUserEditContext();
    const handleDelete = () => {
        console.log(user);
        user.id && dispatch(deleteUser(user?.id));
    };

    const handleEdit = () => {
        console.log(user);
        setSelectedUser(user);
    };

    return (
        <>
            <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-8 mr-4 group">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={user.profilePicture} onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://randomuser.me/api/portraits/lego/7.jpg";
                }} />
                <div className="flex flex-col leading-normal ml-4 pb-4">
                    <p className='flex'>
                        <span className="flex mb-2 mr-2 mt-2 text-l w-full font-bold tracking-tight text-gray-900 dark:text-white max-h-12 text-clip overflow-hidden">{user.name}</span>
                        <span className='flex justify-end'>
                            <span className='flex gap-2 invisible group-hover:visible justify-self mt-2'>
                                <span className='flex' onClick={handleEdit}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4  hover:cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                </span>
                                <span className='flex' onClick={handleDelete}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                            </span>
                        </span>
                    </p>
                    <p className="h-16 text-ellipsis overflow-hidden mb-3 font-normal text-gray-700 dark:text-gray-400">{user.bio}</p>
                    <p className='mt-4 h-8 break-all'>{user.email}</p>
                    <p>Password: {user.password}</p>
                </div>
            </div>

        </>
    );
};

export default UserProfile;