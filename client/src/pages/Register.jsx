import { useForm } from "react-hook-form";
import ReturnBtn from "@/components/ReturnBtn";
import axios from "axios";
import { redirect } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://xp3vs2ukp2.execute-api.eu-north-1.amazonaws.com/prod/register",
        data
      ); // or the full URL
      console.log(res.data);
      redirect("/login"); // Redirect after successful registration
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="mt-20 flex flex-col items-center justify-center">
        <h2 className="font-redHatDisplay text-3xl font-bold uppercase">
          Create your account
        </h2>
        <p className="py-2">It&apos;s quick and easy</p>
        <form
          className="flex w-96 flex-col items-center"
          onSubmit={handleSubmit(onSubmit)} // Use handleSubmit from React Hook Form
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
              {...register("full_name", { required: "Full Name is required" })} // Register the input
            />
            {errors.full_name && (
              <span className="text-red-500">{errors.full_name.message}</span>
            )}
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
              {...register("email", { required: "Email is required" })} // Register the input
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
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
              {...register("password", { required: "Password is required" })} // Register the input
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
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
              {...register("confirm_password", {
                required: "Please confirm your password",
              })} // Register the input
            />
            {errors.confirm_password && (
              <span className="text-red-500">
                {errors.confirm_password.message}
              </span>
            )}
            <button
              type="submit"
              className="btn my-2 w-full rounded-lg bg-accent py-2 text-lg text-white"
            >
              Register
            </button>
          </fieldset>
        </form>
        <div className="mt-14">
          <ReturnBtn />
        </div>
      </div>
    </section>
  );
}

export default Register;
