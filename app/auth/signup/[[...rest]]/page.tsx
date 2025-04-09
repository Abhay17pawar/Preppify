'use client';

import React from 'react';
import { SignUp } from '@clerk/nextjs';

const Page = () => {
  return (
    <div className="bg-black flex items-center justify-center h-screen">
    <SignUp
        path="/auth/signup"
        routing="path"
        signInUrl="/auth/signin" 
        />
    </div>
  );
};

export default Page;
