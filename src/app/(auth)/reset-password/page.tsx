import React, { Suspense } from 'react';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPasswordPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <ResetPasswordForm />
            </Suspense>
        </div>
    );
}


export default ResetPasswordPage;