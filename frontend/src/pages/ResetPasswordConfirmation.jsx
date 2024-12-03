import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import BASE_URL from './baseUrl';

const ResetPasswordConfirmation = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { uid, token } = useParams();

    const [resetSuccess, setResetSuccess] = useState(false);
    const [resetError, setResetError] = useState(null);

    const newPassword = watch('new_password');
    const reNewPassword = watch('re_new_password');

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/users/reset_password_confirm/

`, {
                uid,
                token,
                new_password: data.new_password,
                re_new_password: data.re_new_password,
            });
            setResetSuccess(true);
            setResetError(null);
        } catch (error) {
            setResetError('Failed to reset password. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Set Your New Password</h1>

                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('new_password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters',
                                },
                            })}
                        />
                        {errors.new_password && <span className="text-red-500 text-sm">{errors.new_password.message}</span>}
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('re_new_password', {
                                required: 'Please confirm your password',
                                validate: (value) =>
                                    value === newPassword || 'Passwords do not match',
                            })}
                        />
                        {errors.re_new_password && <span className="text-red-500 text-sm">{errors.re_new_password.message}</span>}
                    </div>

                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Reset Password
                    </button>

                    {resetSuccess && <p className="mt-4 text-green-500 text-center">Password has been reset successfully!</p>}
                    {resetError && <p className="mt-4 text-red-500 text-center">{resetError}</p>}
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordConfirmation;
