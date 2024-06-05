"use client"

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { signup } from "@/utils/api";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";

const PageSignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
    await signup({ username, email, password });
      setMessage("Pendaftaran berhasil! Mengalihkan...");
      // Redirect or further actions here
      router.push('/login');
    } catch (error) {
      setMessage("Gagal mendaftar. Silakan coba lagi.");
    }

    setLoading(false);
  };

  return (
    <div className={`nc-PageSignUp `} data-nc-id="PageSignUp">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Daftar
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Nama Pengguna
              </span>
              <Input
                type="text"
                placeholder="Nama Pengguna"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1"
                required
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Alamat Email
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                required
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Kata Sandi
              </span>
              <Input
                type="password"
                placeholder="Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
                required
              />
            </label>
            <ButtonPrimary type="submit" disabled={loading}>
              {loading ? "Memuat..." : "Lanjutkan"}
            </ButtonPrimary>
          </form>
          {message && <p className="text-center">{message}</p>}
          {/* Sudah punya akun? Masuk */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Sudah punya akun?{" "}
            <Link className="text-green-600" href="/login">
              Masuk
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
