import toast from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "react-phone-input-2/lib/style.css";

// import ApplePayBtn from "@/features/checkout/ApplePayBtn";
// import GooglePayBtn from "@/features/checkout/GooglePayBtn";
// import PayPalBtn from "@/features/checkout/PayPalBtn";

/*
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
        </div> }
        */

import useUserStore from "@/store/user-store";
import useThemeStore from "@/store/theme-store";
import useCartStore from "@/store/cart-store";
import Loader from "@/components/Loader";
import PhoneInputCheckout from "@/features/checkout/PhoneInputCheckout";
import Toggle from "@/features/checkout/Toggle";
import CheckoutNavigation from "@/features/checkout/CheckoutNavigation";

function Checkout() {
  const { theme } = useThemeStore((state) => state);
  const { user } = useUserStore((state) => state);
  const { cart } = useCartStore((state) => state);

  const baseURL = "https://stylz-shop.onrender.com";
  console.log(cart);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      return response.data;
    } catch (err) {
      toast.error("Failed to load countries");
      return err;
    }
  };

  const fetchCities = async (country) => {
    try {
      const response = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          country,
        },
      );
      setCities(response.data.data);
    } catch (err) {
      toast.error("Failed to load cities for selected country");
      return err;
    }
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);
    fetchCities(selectedCountry);
  };

  const {
    data: countries,
    isLoading,
    error,
  } = useQuery({
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

  console.log(user);

  return (
    <main className="grid h-screen grid-cols-4 items-center justify-between">
      <section className="scrollbar-thin col-span-3 h-full overflow-y-auto md:col-span-2 md:overflow-auto">
        {
          <h1 className="text-md pt-4 text-center font-redHatDisplay font-bold uppercase md:text-2xl">
            Checkout for {user.fullName}{" "}
          </h1>
        }
        {/*  */}
        <section className="flex flex-col items-center justify-center px-2 pt-6">
          <h2 className="font-redHatDisplay text-xl font-bold lg:text-2xl">
            Contact information
          </h2>
          <label className="mt-4 font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="mt-2 w-72 rounded-lg border border-stone-950 px-4 py-2 lg:w-64"
            type="email"
            defaultValue={user.email}
            id="email"
            name="email"
            required={true}
          />
          <p className="pt-2 font-redHatDisplay">
            We will send a check and contact you if needed{" "}
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
            onChange={handleCountryChange}
            value={selectedCountry}
            name="country"
            required={true}
          >
            <option disabled={selectedCountry !== ""} value="">
              Select a country
            </option>
            {countries
              ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
              .map((country) => (
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
          </select>
          <label className="mt-6 text-center font-bold">
            Phone
            <PhoneInputCheckout />
          </label>
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
            {/*  */}
            <div className="mb-4 flex flex-col items-center">
              <label htmlFor="city" className="font-bold">
                City
              </label>
              <select
                id="city"
                required
                className="mt-2 w-72 rounded-lg border border-stone-950 px-4 py-2 lg:w-44"
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4 flex flex-col items-center">
              <label htmlFor="zip" className="font-bold">
                ZIP code
              </label>
              <input
                className="mt-2 w-72 rounded-lg border border-stone-950 px-4 py-2 lg:w-44"
                type="text"
                id="zip"
                name="zip"
                required={true}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-6 pt-2">
              <p className="font-redHatDisplay">Don&#39;t call me</p>
              <Toggle />
            </div>
          </div>
          <section className="lg:mt-12">
            <CheckoutNavigation />
          </section>
        </section>

        {/*  */}
      </section>

      {/*  */}
      <section
        className={`${theme === "lemonade" ? "bg-[#d3cfcfbd]" : "bg-base-300"} col-span-1 h-full w-full border-l-2 border-black md:col-span-2`}
      >
        <div className="flex h-full flex-col items-center">
          <h2 className="pt-4 text-center font-bold lg:text-2xl">
            Your order:
          </h2>
          <div
            // Grid based on the number of items in the cart
            className={`mt-4 grid grid-cols-1 gap-2 px-4 ${cart.length === 1 ? "md:grid-cols-1" : cart.length === 2 ? "md:grid-cols-2" : "md:grid-cols-5"}`}
          >
            {cart.map((item) => {
              return (
                <div key={item.id} className="carousel rounded-box">
                  <div className="carousel-item indicator relative w-auto">
                    {/* Item image */}
                    <img
                      src={`${baseURL}/${item.image}`}
                      alt={item.name}
                      className={`${theme === "lemonade" ? "brightness-100 saturate-100" : "brightness-75 saturate-150"} h-12 w-12 object-fill md:h-16 md:w-16 lg:h-24 lg:w-24`}
                    />
                    {/* Quantity badge in the top-right corner */}
                    <span className="badge indicator-item badge-accent badge-sm absolute right-0 top-0 translate-x-1 translate-y-0.5 transform font-bold">
                      {item.quantity}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          aboba
        </div>
      </section>
    </main>
  );
}

export default Checkout;
