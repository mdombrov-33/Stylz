import toast from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import ApplePayBtn from "@/features/checkout/ApplePayBtn";
import GooglePayBtn from "@/features/checkout/GooglePayBtn";
import PayPalBtn from "@/features/checkout/PayPalBtn";
import useUserStore from "@/store/user-store";
import useThemeStore from "@/store/theme-store";
import Loader from "@/components/Loader";

function Checkout() {
  const { theme } = useThemeStore((state) => state);
  const { user } = useUserStore((state) => state);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      return response.data;
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    cacheTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error)
    return (
      <p className="flex items-center justify-center text-2xl font-bold">
        Something went wrong...
      </p>
    );

  console.log(data);
  console.log(user);

  return (
    <main className="items grid h-screen grid-cols-4 items-center justify-between">
      <section className="col-span-3 h-full md:col-span-2">
        <h1 className="pt-4 text-center font-redHatDisplay text-xl font-bold uppercase md:text-2xl">
          Checkout for {user.fullName}{" "}
        </h1>
        <div className="divider">
          <p className="font-redHatDisplay font-bold">Express Checkout</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 2xl:flex-row">
          <GooglePayBtn />
          <ApplePayBtn />
          <PayPalBtn />
        </div>
        <div className="divider">
          <p className="font-redHatDisplay text-sm font-bold uppercase">
            or pay with a credit card
          </p>
        </div>
        {/*  */}
        <section className="flex flex-col items-center justify-center px-2 pt-6">
          <h2 className="font-redHatDisplay text-xl font-bold lg:text-2xl">
            Contact information
          </h2>
          <label className="mt-4 font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="mt-2 w-72 rounded-lg border border-stone-950 px-4 py-2 lg:w-96"
            type="email"
            defaultValue={user.email}
            id="email"
            name="email"
            required={true}
          />
          <p className="pt-2 font-redHatDisplay">
            We will send you a check and contact if needed{" "}
          </p>
        </section>
        {/*  */}
        <section className="flex flex-col items-center justify-center">
          <h2 className="pt-6 font-redHatDisplay text-xl font-bold lg:text-2xl">
            Shipping address
          </h2>
          <label htmlFor="country" className="mt-4 font-bold">
            Country/Region
          </label>
          <select
            className="mt-2 w-72 rounded-lg border border-stone-950 px-4 py-2 lg:w-96"
            id="country"
            name="country"
            required={true}
          >
            {data
              .sort((a, b) => a.name.common.localeCompare(b.name.common))
              .map((country) => (
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
          </select>
          {/*  */}
          <div className="mt-6 flex flex-wrap justify-evenly lg:gap-8 xl:gap-12">
            <div className="mb-4 flex flex-col items-center">
              <label htmlFor="address" className="font-bold">
                Address
              </label>
              <input
                className="mt-2 w-72 rounded-lg border border-stone-950 px-4 py-2 lg:w-44"
                type="text"
                id="address"
                name="address"
                required={true}
              />
            </div>

            <div className="mb-4 flex flex-col items-center">
              <label htmlFor="address2" className="font-bold">
                Address
              </label>
              <input
                className="mt-2 w-72 rounded-lg border border-stone-950 px-4 py-2 lg:w-44"
                type="text"
                id="address2"
                name="address2"
                required={true}
              />
            </div>
            <div className="mb-4 flex flex-col items-center">
              <label htmlFor="address2" className="font-bold">
                Address
              </label>
              <input
                className="mt-2 w-72 rounded-lg border border-stone-950 px-4 py-2 lg:w-44"
                type="text"
                id="address2"
                name="address2"
                required={true}
              />
            </div>
          </div>
        </section>

        {/*  */}
      </section>

      {/*  */}
      <section className="col-span-1 h-full bg-neutral-content md:col-span-2">
        aboba
      </section>
    </main>
  );
}

export default Checkout;
