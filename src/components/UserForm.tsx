import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, editUser } from '../redux/actions/userActions';
import { User } from '@/interfaces/User';
import { useUserEditContext } from '@/context/UserEditContext';

const UserProfileForm = () => {
    const dispatch = useDispatch();
    const { selectedUser, setSelectedUser } = useUserEditContext();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [bio, setBio] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newUser: User = {
            id: selectedUser ? selectedUser.id : Date.now(), // Generate unique id if new user
            name,
            email,
            password,
            profilePicture,
            bio,
        };
        if (selectedUser) {
            console.log(newUser);
            dispatch(editUser(newUser));
        } else {
            dispatch(addUser(newUser));
        }
        // Clear form fields after submission
        setName('');
        setEmail('');
        setPassword('');
        setProfilePicture('');
        setBio('');

        setSelectedUser(null);
    };

    useEffect(() => {
        if (selectedUser) {
            setName(selectedUser.name);
            setEmail(selectedUser.email);
            setPassword(selectedUser.password);
            setProfilePicture(selectedUser.profilePicture);
            setBio(selectedUser.bio);
        }
    }, [selectedUser])

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                {selectedUser ? "Edit" : "Create"} user
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        required
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className='relative'>
                                    <input
                                        autoComplete='true'
                                        placeholder="Password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-sm text-gray-500 hover:text-gray-300"
                                        type='button'
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Profile Picture URL"
                                        value={profilePicture}
                                        onChange={e => setProfilePicture(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                </div>
                                <textarea
                                    placeholder="Biography"
                                    value={bio}
                                    onChange={e => setBio(e.target.value)}
                                    rows={4}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                ></textarea>
                                <button type="submit" className="w-full bg-green-600 text-white-500  w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">{selectedUser ? "Save changes" : "Create User"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserProfileForm;
