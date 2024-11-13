import { Form, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "axios";
import "react-phone-input-2/lib/style.css";

import Toggle from "@/features/checkout/Toggle";
import PhoneInputCheckout from "@/features/checkout/PhoneInputCheckout";
import Loader from "@/components/Loader";

function LeftSide({ user }) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    // Simulate a backend submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/checkout/payment");
    }, 2000);
  };
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

  return (
    <section className="scrollbar-thin col-span-3 h-full overflow-y-auto md:col-span-2 md:overflow-auto">
      <h1 className="text-md pt-4 text-center font-redHatDisplay font-bold uppercase md:text-2xl">
        Checkout for {user.fullName}{" "}
      </h1>
      <Form onSubmit={handleSubmit}>
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
            required
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
            required
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
                required
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
                name="city"
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
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-6 pt-2">
              <p className="font-redHatDisplay">Don&#39;t call me</p>
              <Toggle />
            </div>
          </div>

          <section className="items flex h-full items-center justify-center gap-2 px-4 pb-2 pt-6 md:gap-12">
            <button
              onClick={() => navigate(-1)}
              className="group btn h-12 w-36 text-xl font-bold uppercase"
            >
              <IoArrowBackCircle className="inline transform transition-transform group-hover:-translate-x-1" />
              Return
            </button>
            <button className="btn btn-success h-12 w-36 font-redHatDisplay text-xl font-bold uppercase lg:w-44">
              {isSubmitting ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Next"
              )}
            </button>
          </section>
        </section>
      </Form>
    </section>
  );
}

export default LeftSide;
