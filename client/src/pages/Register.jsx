import ReturnBtn from "@/components/ReturnBtn";
import axios from "axios";
import { useRef } from "react";
import { toast } from "react-hot-toast";

import { Form, redirect, useNavigation } from "react-router-dom";

function Register() {
  const navigation = useNavigation();

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleFormSubmit = async (event) => {
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      event.preventDefault(); // Prevent form submission if passwords don't match
      toast.error("Passwords do not match.");
    }
  };

  return (
    <section className="flex h-screen items-center justify-center">
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
            />
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
            />
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

        <div className="mt-14">
          <ReturnBtn to={-1} />
        </div>
      </div>
    </section>
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
      "https://xp3vs2ukp2.execute-api.eu-north-1.amazonaws.com/prod/register",
      registerData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    toast.success("Account created successfully!");
    return redirect("/login");
  } catch (err) {
    toast.error(err.response.data);
    return err;
  }
}

export default Register;
