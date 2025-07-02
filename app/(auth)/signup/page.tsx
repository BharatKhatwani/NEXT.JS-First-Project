import React from 'react';
import Link from 'next/link';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-white w-full max-w-sm p-8 rounded-lg shadow-lg">
        <h2 className="text-black text-2xl font-bold mb-8 text-center tracking-tight">
          Create an Account
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-800 mb-1">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black bg-transparent text-black"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-xs font-semibold text-gray-800 mb-1">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black bg-transparent text-black"
              placeholder="Choose a username"
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
              placeholder="Create a password"
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-900 transition cursor-pointer"
          >
            Create Account
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-700">
          Already have an account?{' '}
          <Link href="/signin" className="text-black font-semibold underline hover:text-gray-900 transition">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
