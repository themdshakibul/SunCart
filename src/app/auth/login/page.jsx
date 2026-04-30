"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign In Successfull");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className=" flex items-center justify-center px-4 bg-gray-50 py-10">
      <div
        className="card w-full max-w-md bg-white shadow-xl border border-gray-200 rounded-2xl
       overflow-hidden"
      >
        <div className="card-body p-10 lg:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-[0.2em] text-black uppercase">
              SunCart
            </h2>
            <p className="text-gray-800 tracking-[0.3em] uppercase mt-2">
              Loging Account
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="form-control w-full">
              <label className="label ml-2">
                <span className="label-text font-bold text-black uppercase text-[10px] tracking-widest">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your Email"
                className="input input-bordered rounded-full border-gray-200 focus:border-black focus:outline-none bg-gray-50 text-black px-6 transition-all"
              />
            </div>

            <div className="form-control w-full">
              <label className="label ml-2">
                <span className="label-text font-bold text-black uppercase text-[10px] tracking-widest">
                  Password
                </span>
              </label>

              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  minLength={8}
                  placeholder="Enter your Password"
                  className="input input-bordered w-full rounded-full border-gray-200 focus:border-black focus:outline-none bg-gray-50 text-black px-6 pr-12 transition-all duration-300 hover:border-gray-400 group-focus-within:shadow-md"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors p-1"
                >
                  {showPassword ? (
                    <EyeOff size={18} strokeWidth={2.5} />
                  ) : (
                    <Eye size={18} strokeWidth={2.5} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-active w-full bg-black hover:bg-gray-800 text-white rounded-full border-none text-xs uppercase tracking-[0.2em] font-bold h-12 mt-4 shadow-lg shadow-gray-200"
            >
              Sign In
            </button>
          </form>

          <div className="divider text-gray-300 text-[9px] font-bold tracking-[0.3em] uppercase">
            OR
          </div>

          <button
            type="button"
            className="btn btn-outline w-full border-gray-200 hover:border-black hover:bg-black hover:text-white rounded-full gap-3 font-bold text-[10px] uppercase tracking-widest h-12 transition-all duration-300"
          >
            <Image
              src="https://i.ibb.co.com/qYvsR999/pngegg.png"
              alt="Google"
              width={22}
              height={22}
            />
            Google
          </button>

          <div className="mt-10 text-center">
            <p className="text-gray-400 text-[10px] uppercase tracking-widest">
              Dont have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-black font-black border-b-2 border-black pb-0.5 ml-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                Sign Up Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
