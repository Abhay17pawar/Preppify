// app/auth/signin/page.tsx
'use client';

import React from 'react';
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="bg-black flex items-center justify-center h-screen">
    <SignIn path="/auth/signin" routing="path" signUpUrl="/auth/signup" 
      />
    </div>
  );
};

export default SignInPage;
