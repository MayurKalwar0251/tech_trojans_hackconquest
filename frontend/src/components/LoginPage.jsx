import React, { useState } from "react";
import { Button } from "./ui/Button"; // Ensure this path is correct for your project
import { Input } from "./ui/Input"; // Ensure this path is correct for your project
import { EyeIcon, EyeOffIcon } from "lucide-react";
import axios from "axios";
import { server } from "../utils/server";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Client-side validations
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${server}/user/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      toast.success("Login Successfull");
      console.log(response.data);
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      toast.error("Login failed. Please check your credentials.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="flex-1 relative">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/doctor-vKsbavKEjUwRSpytorhCPVrqoApRX9.jpg"
          alt="Friendly doctor with charts"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-50 bg-opacity-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">HELLO!</h1>
            <p className="text-xl text-gray-600">
              Please enter your details to continue
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-white p-10">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              <span className="text-emerald-500">LOGO</span> Hospital
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  E-mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Log In
            </Button>
          </form>
          <div className="text-center">
            <a
              href="/forgot-password"
              className="text-sm text-emerald-500 hover:text-emerald-600"
            >
              Forget Password?
            </a>
            <p className="mt-2 text-sm text-gray-600">
              Do Not Have Account?{" "}
              <a
                href="/signup"
                className="text-emerald-500 hover:text-emerald-600"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
