"use client";
import React, { useState } from "react";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Link from "next/link";
import RootLayout from "../layout";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
// import { useRouter } from "next/router";

const PageSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  // const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Basic validation for password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/cybershop/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Signup successful', data);
        router.push("/login");

        // Redirect to login or further user pages
      } else {
        throw new Error(data.message || 'Failed to sign up');
      }
    } catch (error) {
      console.error('Signup error:', (error as Error).message);
      alert((error as Error).message || 'An error occurred, please try again.');
    }
  };

  return (
    <RootLayout params={{}} hideHeader={true} hideFooter={true}>
      <div className={`nc-PageSignUp`} data-nc-id="PageSignUp">
        <div className="container mb-24 lg:mb-32">
          <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
            Signup
          </h2>
          <div className="max-w-md mx-auto space-y-6">
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  User name
                </span>
                <Input
                  required
                  type="text"
                  name="username"
                  placeholder="Enter Your Name*"
                  className="mt-1"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Email address
                </span>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                  className="mt-1"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Password
                </span>
                <Input
                  required
                  type="password"
                  name="password"
                  placeholder="Enter Your Password*"
                  className="mt-1"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Re-enter password
                </span>
                <Input
                  required
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter Your Password Again*"
                  className="mt-1"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </label>
              <ButtonPrimary type="submit">Continue</ButtonPrimary>
            </form>

            <span className="block text-center text-neutral-700 dark:text-neutral-300">
               Already have an account? {` `}
              <Link href="/login" legacyBehavior>
                <a className="text-green-600">Sign in</a>
              </Link>
                <br /><br />
              <ButtonSecondary>
              <Link href="/" legacyBehavior>
                <a className="text-blue-600">Back Home</a>
              </Link>
              </ButtonSecondary>
            </span>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default PageSignUp;
