import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-normal leading-tight text-black">
                    THÔNG TIN TÀI KHOẢN
                </h2>
            }
        >
            <Head title="Tài khoản" />

            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">
                <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-4xl space-y-8 md:space-y-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="w-full" 
                        />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <UpdatePasswordForm className="w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <DeleteUserForm className="w-full" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
