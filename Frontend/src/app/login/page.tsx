import React, { FC } from "react";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Link from "next/link";
import RootLayout from "../layout";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";


const LoginForm: FC = ({  }) => {
  return (
    <RootLayout params hideHeader={true} hideFooter={true}>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                required
                type="email"
                placeholder="example@example.com"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input required type="password" className="mt-1" />
            </label>
            <ButtonPrimary type="submit">Continue</ButtonPrimary>
          </form>

          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user?{" "}
            <Link className="text-green-600" href="/signup">
              Create an account
            </Link>
            <br />
            <br />
            <ButtonSecondary><a className="text-blue-600" href="/">
              Back Home
            </a></ButtonSecondary>
          </span>
        </div>
      </div>
    </RootLayout>
  );
};

export default LoginForm;
