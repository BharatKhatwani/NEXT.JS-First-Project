import React from 'react';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-white w-full max-w-sm p-8 rounded-lg shadow-lg">
        <h2 className="text-black text-3xl font-bold mb-8 text-center tracking-tight">
          Sign In
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-xs font-semibold text-gray-800 mb-1">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black bg-transparent text-black"
              placeholder="Enter your username"
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs font-semibold text-gray-800 mb-1">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black bg-transparent text-black"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-900 transition cursor-pointer"
          >
            LOGIN
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-700">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-black font-semibold underline hover:text-gray-900 transition">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
