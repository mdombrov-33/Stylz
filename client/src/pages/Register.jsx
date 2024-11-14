import ReturnBtn from "@/components/ReturnBtn";
import axios from "axios";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import useThemeStore from "@/store/theme-store";

import { Form, redirect, useNavigation } from "react-router-dom";

function Register() {
  const { theme } = useThemeStore((state) => state);
  const navigation = useNavigation();
  const [passwordErr, setPasswordErr] = useState(null);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(null);

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleFormSubmit = async (event) => {
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      event.preventDefault();
      toast.error("Passwords do not match");
    }
  };

  const handlePasswordBlur = () => {
    if (passwordRef.current.value.length < 8) {
      setPasswordErr("Password must be at least 8 characters long");
    } else if (passwordRef.current.value.length > 64) {
      setPasswordErr("Password must be at most 64 characters long");
    } else {
      setPasswordErr("");
    }
  };

  const handleConfirmPasswordBlur = () => {
    if (confirmPasswordRef.current.value !== passwordRef.current.value) {
      setConfirmPasswordErr("Passwords do not match");
    } else {
      setConfirmPasswordErr("");
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="mt-20 flex flex-col items-center justify-center">
        <h2 className="font-redHatDisplay text-3xl font-bold uppercase">
          Create your account
        </h2>
        <p className="py-2">It&apos;s quick and easy</p>
        <Form
          className="flex w-96 flex-col items-center"
          method="post"
          onSubmit={handleFormSubmit}
        >
          <fieldset className="w-full">
            <legend className="sr-only">Registration Form</legend>
            <label
              className="w-96 justify-start font-redHatDisplay font-bold"
              htmlFor="full_name"
            >
              Full Name
            </label>
            <input
              className="my-2 w-full rounded-lg border border-stone-950 px-4 py-2 placeholder-gray-500"
              type="text"
              placeholder="John Doe"
              id="full_name"
              name="full_name"
              autoComplete="name"
              required
            />
            <label
              className="w-96 justify-start font-redHatDisplay font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="my-2 w-full rounded-lg border border-stone-950 px-4 py-2 placeholder-gray-500"
              type="email"
              placeholder="stylzmc@gmail.com"
              id="email"
              name="email"
              autoComplete="username"
              required
            />
            <label
              className="w-96 justify-start font-redHatDisplay font-bold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="my-2 w-full rounded-lg border border-stone-950 px-4 py-2 placeholder-gray-500"
              type="password"
              placeholder="********"
              id="password"
              name="password"
              autoComplete="new-password"
              required
              ref={passwordRef}
              onBlur={handlePasswordBlur}
            />
            {passwordErr && (
              <p className="text-sm text-red-500">{passwordErr}</p>
            )}
            <label
              className="w-96 justify-start font-redHatDisplay font-bold"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <input
              className="my-2 w-full rounded-lg border border-stone-950 px-4 py-2 placeholder-gray-500"
              type="password"
              placeholder="********"
              id="confirm_password"
              name="confirm_password"
              autoComplete="new-password"
              required
              ref={confirmPasswordRef}
              onBlur={handleConfirmPasswordBlur}
            />
            {confirmPasswordErr && (
              <p className="text-sm text-red-500">{confirmPasswordErr}</p>
            )}

            <button
              type="submit"
              className="btn my-2 w-full rounded-lg bg-accent py-2 text-lg text-white"
              disabled={navigation.state === "submitting"}
            >
              {navigation.state === "submitting" ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Register"
              )}
            </button>
          </fieldset>
        </Form>

        <section className="mt-14">
          <ReturnBtn to={-1} />
        </section>
      </div>
    </main>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const registerData = {
    full_name: data.get("full_name"),
    email: data.get("email"),
    password: data.get("password"),
  };

  try {
    await axios.post(
      "https://hyb4du33cc.execute-api.eu-north-1.amazonaws.com/prod/register",
      registerData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    toast.success("Account created successfully!");
    return redirect("/login");
  } catch (err) {
    toast.error(err.response.data);
    return err;
  }
}

export default Register;
