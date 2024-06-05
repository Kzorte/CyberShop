'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Gunakan dari next/navigation untuk App Router
import { useAuth } from '@/context/AuthContext';
import Input from '@/shared/Input/Input';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Image from 'next/image';
import Link from 'next/link';

const PageLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      console.log('Logging in with:', email, password); // Debug log
      const response = await login(email, password);
      console.log('Login response:', response); // Log the response
      if (response) {
        router.push('/page');
      } else {
        setError('Login gagal. Silakan periksa kredensial Anda dan coba lagi.');
      }
    } catch (err: unknown) {
      console.error('Login failed:', err);
      if (err instanceof Error) {
        setError(err.message || 'Login gagal. Silakan periksa kredensial Anda dan coba lagi.');
      } else {
        setError('Terjadi kesalahan yang tidak diketahui. Coba lagi nanti.');
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="nc-PageLogin" data-nc-id="PageLogin">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link href="/forgot-pass" className="text-sm text-green-600">
                  Forgot password?
                </Link>
              </span>
              <Input
                type="password"
                className="mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <ButtonPrimary type="submit" disabled={loading}>
              {loading ? 'Loading...' : 'Continue'}
            </ButtonPrimary>
          </form>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user?{' '}
            <Link className="text-green-600" href="/signup">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
