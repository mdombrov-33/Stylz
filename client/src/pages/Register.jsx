import ReturnBtn from "@/components/ReturnBtn";
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { registerUser } from "@/features/user/userSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const user = {
      full_name: data.full_name,
      email: data.email,
      password: data.password,
    };

    const result = await dispatch(registerUser(user));
    if (registerUser.fulfilled.match(result)) {
      navigate("/login");
    }
  };

  return (
    <section className="flex h-screen items-center justify-center">
      <div className="mt-20 flex flex-col items-center justify-center">
        <h2 className="font-redHatDisplay text-3xl font-bold uppercase">
          Create your account
        </h2>
        <p className="py-2">It's quick and easy</p>
        <Form
          className="flex w-96 flex-col items-center"
          method="post"
          onSubmit={handleSubmit}
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
            />
            <button
              type="submit"
              className="btn my-2 w-full rounded-lg bg-accent py-2 text-lg text-white"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Register"
              )}
            </button>
          </fieldset>
        </Form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="mt-14">
          <ReturnBtn />
        </div>
      </div>
    </section>
  );
}

export default Register;
