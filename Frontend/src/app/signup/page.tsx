import React, { FC } from "react";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import RootLayout from "../layout";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";


const PageSignUp = () => {
  const params = {};
  return (
    <RootLayout params={params} hideHeader={true} hideFooter={true}>
      <div className={`nc-PageSignUp `} data-nc-id="PageSignUp">
        <div className="container mb-24 lg:mb-32">
          <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
            Signup
          </h2>
          <div className="max-w-md mx-auto space-y-6 ">
            {/* FORM */}
            <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  First name
                </span>
                <Input required
                  type="text"
                  placeholder="Enter Your First Name*"
                  className="mt-1"
                />
              </label>
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Last name
                </span>
                <Input required
                  type="text"
                  placeholder="Enter Your Last Name*"
                  className="mt-1"
                />
              </label>
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Email address
                </span>
                <Input required
                  type="email"
                  placeholder="example@example.com"
                  className="mt-1"
                />
              </label>
              <label className="block">
                <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                  Password
                </span>
                <Input required type="password" placeholder="Enter Your Password*" className="mt-1" />
              </label>
              <label className="block">
                <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                  Re-enter password
                </span>
                <Input required type="password" placeholder="Enter Your Password*" className="mt-1" />
              </label>
              <ButtonPrimary type="submit">Continue</ButtonPrimary>
            </form>

            {/* ==== */}
            <span className="block text-center text-neutral-700 dark:text-neutral-300">
              Already have an account? {` `}
              <Link className="text-green-600" href="/login">
                Sign in
              </Link>
              <br /><br />
              <ButtonSecondary><a className="text-blue-600" href="/">
                Back Home
              </a></ButtonSecondary>
            </span>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default PageSignUp;
